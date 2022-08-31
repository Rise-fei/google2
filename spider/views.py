import json
import random
from datetime import datetime
from threading import Thread, enumerate as threading_enumerate

from django.conf import settings
from django.core.paginator import Paginator
from django.db import connections
from django.http import JsonResponse
from django.shortcuts import render, redirect, HttpResponse

from spider.models import CustLoginRecord, SearchResult, RequestCount, RequestDetailCount, Country
from tools.query_email import *


def save_db(count1=0, count2=0):
    return
    try:
        conn = connections['beijingdb']
        print(conn)
        cursor = conn.cursor()
        print(cursor)

        time_str = time.strftime("%Y-%m-%d")
        print(time_str)
        sql = "select * from gms_record WHERE DATE_FORMAT(date, '%%Y-%%m-%%d')=%s;"
        cursor.execute(sql, [time_str])
        result = cursor.fetchall()
        if not result:
            sql = "insert into gms_record values(0,%s,0,0)"
            cursor.execute(sql, [time_str])
        print(result)

        add_sql = "UPDATE gms_record set count1=count1+%s , count2=count2+%s where DATE_FORMAT(date, '%%Y-%%m-%%d')=%s;"
        cursor.execute(add_sql, [count1, count2, time_str])
        cursor.close()
        conn.close()
    except Exception as e:
        print('保存至gms_record数据库出现异常')
        print(e)


# Create your views here.
def google(request):
    if request.session.get('is_login'):
        return render(request, 'google.html')
    else:
        return redirect('/login/')


def save(i):
    s = SearchResult.objects.filter(id__gt=i, id__lt=(i + 1001))
    for i in s:
        a = i.td_html
        if "详情查询" in a:
            a = a.replace("详情查询", 'Query')
            a = a.replace("删除", 'Delete')
            i.td_html = a
            i.save()


def test2(request):
    save_db(1, 1)

    return HttpResponse(1)


def test(request):
    li = list(range(48980, 67003, 1000))
    for i in li:
        t = Thread(target=save, args=(i,))
        t.start()

    return HttpResponse(1)


def save_country():
    country_list = SearchResult.objects.all().values('country').distinct()
    print(country_list)
    li = [Country(index + 1, country["country"]).save() for index, country in enumerate(country_list) if
          country["country"] is not None]

    # Country.objects.bulk_create(li)


def query_db_data(request):
    word = request.GET.get('word')
    country = request.GET.get('country', 'all')
    pagenum = request.GET.get('pagenum', 1)
    if country == 'all':
        # 查询全部数据
        res = SearchResult.objects.all().filter(search_word=word).order_by('status').order_by('country')
        # res = SearchResult.objects.all().filter(search_word=word)
    elif country == 'all_detail':
        # 查询全部已经搜索的数据
        res = SearchResult.objects.all().filter(search_word=word, status=1).order_by('country')
    elif country == 'not_detail':
        # 查询全部未搜索的数据
        res = SearchResult.objects.all().filter(search_word=word, status=0).order_by('country')
    else:
        # 查询某个国家的搜索数据！！！
        res = SearchResult.objects.all().filter(search_word=word, country=country)

    paginator = Paginator(res, 100)
    print(paginator.num_pages)
    total_nums = paginator.num_pages
    if int(pagenum) < 1:
        pagenum = 1
    if int(pagenum) > paginator.num_pages:
        pagenum = paginator.num_pages
    print('----------------------------')
    res = paginator.page(pagenum)
    country_list = Country.objects.all()
    return render(request, 'query_db_data.html', locals())


def query_from_db_backup(request):
    if request.method == 'GET':

        country_list = Country.objects.all()

        # Thread(target=save_country,args=())

        return render(request, 'query_db.html', locals())
    else:
        word = request.POST.get('word')
        country = request.POST.get('country')

        print(word, country)
        if country == 'all':
            # 查询全部数据
            res = SearchResult.objects.all().filter(search_word=word).order_by('status').order_by('country')
        elif country == 'all_detail':
            # 查询全部已经搜索的数据
            res = SearchResult.objects.all().filter(search_word=word, status=1).order_by('country')
        elif country == 'not_detail':
            # 查询全部未搜索的数据
            res = SearchResult.objects.all().filter(search_word=word, status=0).order_by('country')
        else:
            # 查询某个国家的搜索数据！！！
            res = SearchResult.objects.all().filter(search_word=word, country=country)

        if res:
            final_html = ''
            for data in res:
                final_html += data.td_html
            ret = {
                'code': 1,
                'msg': 'Find out the result',
                'data': final_html
            }
        else:
            ret = {
                'code': 0,
                'msg': 'No results were found',
            }
        return JsonResponse(ret)


def query_from_db(request):
    if request.method == 'GET':
        country_list = Country.objects.all()
        # Thread(target=save_country,args=())
        return render(request, 'query_db.html', locals())


def bigemap(request):
    return render(request, 'bigemap.html')


def offline(request):
    product = settings.PRODUCT  # 后续改进
    version = settings.VERSION  # 后续改进
    username = request.POST.get('username')
    password = request.POST.get('password')
    try:
        # 向oa系统发送请求，查询当前username对应的product授权数,然后将授权数-1个账号信息保留，其他删除
        url = 'http://www.sstrade.net:8888/ssapi/query_cust_auth_num?username=%s&product=%s' % (username, product)
        res = requests.get(url).content.decode()
        authorization_num = int(res)
        cust_records = CustLoginRecord.objects.filter(username=username).order_by('-login_time')
        print(len(cust_records))
        if cust_records[authorization_num - 1]:
            for cust in cust_records[authorization_num - 1:]:
                # 超出授权数，向oa系统发送请求清除当前sessionkey对应的session信息。
                oa_session_key = cust.oa_session_key
                url = 'http://www.sstrade.net:8888/ssapi/logoutaccount2?session_key=%s' % oa_session_key
                res = requests.get(url)
                response_content = res.content.decode()
                print(response_content)
                cust.delete()

            # # 将之前的最早登录的终端下线
            # cust = CustLoginRecord.objects.filter(username=username).order_by('login_time').first()
            # oa_session_key = cust.oa_session_key
            # url = 'http://www.sstrade.net:8080/ssapi/logoutaccount2?session_key=%s' % oa_session_key
            # res = requests.get(url)
            # response_content = res.content.decode()
            # print(response_content)
            # cust.delete()

            ret = {
                'code': 1
            }

            # 然后再登录当前账号
            url2 = 'http://www.sstrade.net:8888/ssapi/customerlogin/?username=%s&password=%s&product=%s&version=%s' % (
                username, password, product, version)
            res2 = requests.get(url2)
            response_content2 = res2.content.decode()
            print('*******************')
            print(response_content2)
            print('*******************')

            request.session['username'] = username
            print(res2.cookies)
            request.session['is_login'] = True
            response = JsonResponse(ret)
            response.set_cookie('session_key', res2.cookies.get('sessionid'))
            CustLoginRecord.objects.create(username=username, oa_session_key=res2.cookies.get('sessionid'))
        else:
            ret = {
                'code': 0,
                'username': username,
            }
            response = JsonResponse(ret)
    except:
        print('9876543125')
        ret = {
            'code': 0,
            'username': username,
        }
        response = JsonResponse(ret)
    return response


# 待完善，注销当前用户的所有终端！！！慎用！！
def logout_all_cuser(request):
    cname = request.GET.get('username')
    productid = settings.PRODUCT
    url = 'http://www.sstrade.net:8888/ssapi/logout_cuser_all?productid=' + str(productid) + '&cusername=' + cname
    print(url)
    res = requests.get(url)
    print(res)
    return JsonResponse({})


def login(request):
    if request.session.get('is_login'):
        session_key = request.COOKIES.get('session_key')
        if session_key:
            print('当前浏览器中存储的用户cookie：session_key在服务器端有对应的记录，即该用户是登录状态！')
            record = CustLoginRecord.objects.filter(oa_session_key=session_key)
            if record:
                print(record[0].oa_session_key)
                record[0].login_time = datetime.fromtimestamp(time.time())
                record[0].save()
            return redirect('/bigemap/')
    return render(request, 'login_log.html')


def tttt(request):
    return render(request, 'index.html')


def login_check(request):
    '''
    登录校验：前端发送ajax，接收账号密码，然后向oa服务器发送登录请求
    如果登录成功：
        那么将username,is_login（True）存入当前session中。并且将oa登录成功保存的sessionkey拿过来保存在当前cookie中。
        添加登录信息至custloginrecord表中。
        返回 ret 1
    如果login full，即登录终端到达授权数：
        返回 ret 0
    如果超出产品服务时间；
        返回 ret -1
    '''
    username = request.POST.get('username')
    password = request.POST.get('password')
    product = settings.PRODUCT  # 后续改进
    version = settings.VERSION  # 后续改进
    print(username)
    print(password)
    if username == "admin" and password == "admin":
        ret = {
            'status': 1,
            'msg': '登录成功',
        }
        request.session['username'] = username
        session_id = "idfjkfkksafkl2342l43k4lk32lk4"
        request.session['is_login'] = True
        response = JsonResponse(ret)
        response.set_cookie('session_key', session_id)
        CustLoginRecord.objects.create(username=username, oa_session_key=session_id)

    else:
        # if response_content == 'login is full':
        #     ret = {
        #         'status': 0,
        #         'msg': '登录账号已到达最大授权数',
        #     }
        # elif response_content == 'fail':
        #     ret = {
        #         'status': -1,
        #         'msg': '用户名或密码错误',
        #     }
        # elif response_content == 'out of service time':
        #     ret = {
        #         'status': -1,
        #         'msg': '超出产品服务时间',
        #     }
        # else:
        #     ret = {
        #         'status': -1,
        #         'msg': '请使用新版本！！！',
        #     }
        ret = {
            'status': -1,
            'msg': '用户名或密码错误',
        }
        request.session['is_login'] = False
        request.COOKIES['session_key'] = ""
        response = JsonResponse(ret)
    return response


def check():
    while True:
        time.sleep(10)
        login_records = CustLoginRecord.objects.all()
        if login_records:
            for record in login_records:
                last_active_time = record.login_time.timestamp()
                current_time = time.time()
                # 如果用户1个小时内没有活跃，那么将其t下线！
                if current_time - last_active_time > 3600:
                    print(record.username)
                    # 下线该用户
                    session_key = record.oa_session_key
                    url = 'http://www.sstrade.net:8080/ssapi/logoutaccount2?session_key=%s' % session_key
                    res = requests.get(url)
                    response_content = res.content.decode()
                    try:
                        record.delete()
                    except:
                        pass


def check_status(request):
    thread_list = threading_enumerate()
    t_name_list = [t.name for t in thread_list]
    # print("***********")
    # print(t_name_list)
    # print("***********")
    if "check" not in t_name_list:
        t = Thread(target=check)
        t.setName('check')
        t.start()
        return HttpResponse('开启检测线程')
    else:
        return HttpResponse("检测线程已开启")


# {"username":"ceshi","is_login":true,"session_key":"rdaa69o8r9u7umoke23yjrwx1crr9p2o","_session_expiry":0}
# {"username":"ceshi","is_login":true,"session_key":"rdaa69o8r9u7umoke23yjrwx1crr9p2o","_session_expiry":0}
def logout(request):
    session_key = request.COOKIES.get('session_key')
    print(session_key)
    request.COOKIES['session_key'] = ""
    request.session['is_login'] = False

    # 还需要向trade项目发送注销请求，将服务器中存储该客户的session信息清除(将session_key 以参数的形式放入请求中去)！！！
    url = 'http://www.sstrade.net:8080/ssapi/logoutaccount2?session_key=%s' % session_key
    res = requests.get(url)
    response_content = res.content.decode()
    try:
        CustLoginRecord.objects.get(oa_session_key=session_key).delete()
    except:
        pass

    if response_content == 'delete ok':
        print('注销成功')

    else:
        print('向服务器发送清楚session请求出错')
    return redirect('/login/')


def close_page(request):
    # 页面刷新或跳转新url或者关闭页面、或者关闭浏览器
    # 如果是关闭浏览器，那么要清除cookie信息中sessionkey对应的oa系统的sesson，即下线用户。
    print(request.COOKIES.get('session_key'))
    return JsonResponse({})

    # 否则，无需做其他事情！


# 暂时不用
def search_word(request):
    # 获取地图中心的经纬度坐标
    lat = request.POST.get('lat')
    lng = request.POST.get('lng')
    word = request.POST.get('word')
    key = '&key=' + 'AIzaSyC2VUsehdGp0LS7uZgETWd_OoBA7DpHIYU'
    fields = '&fields=place_id,formatted_address,name,types,geometry'
    language = '&language=en'
    url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?' \
          'input=%s&inputtype=textquery&%s%s%s' % (word, key, fields, language)
    res = requests.get(url)
    json_str = res.content.decode()
    # print(json_str)
    data = json.loads(json_str)

    if len(data['candidates']) == 0:
        print('没有搜索到具体位置')

    else:
        # path = settings.BASE_DIR + '\\json_data\\search_place\\' + word + '_place.json'
        # with open(path, 'w', encoding='utf-8') as f:
        #     json.dump(data, f, ensure_ascii=False, indent=4)
        # 获取第一次请求对应的响应中的地点id,然后发送 地点详情 请求。
        pass

    try:
        place_id = data['candidates'][0]['place_id']
        url2 = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=%s%s%s%s' % (
            place_id, key, language, key)
        res2 = requests.get(url2)
        json_str2 = res2.content.decode()
        data2 = json.loads(json_str2)
        # path = settings.BASE_DIR + '\json_data\\search_place_detail\\' + word + '_detail.json'
        # with open(path, 'w', encoding='utf-8') as f:
        #     json.dump(data2, f, ensure_ascii=False, indent=4)
        data_result = data2['result']
        data_html = "<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>"
        d_name = data_result.get('name', "")
        d_email = data_result.get('email', "")
        d_type = data_result.get('type', "")
        d_website = data_result.get('url', "")
        d_addr = data_result.get('formatted_address', "")
        d_phone = data_result.get('formatted_phone_number', "")
        d_facebook = data_result.get('facebook', "")
        d_youtube = data_result.get('youtube', "")
        d_twitter = data_result.get('twitter', "")
        d_search_word = word
        data_html = data_html % (
            d_name, d_website, d_email, d_type, d_addr, d_phone, d_facebook, d_youtube, d_twitter, d_search_word)

        ret = {
            'status': 1,
            'place_id': place_id,
            'msg': '成功搜索到%s对应的具体位置' % word,
            'data': data2,
            'data_html': data_html,
        }
    except:
        print('当前搜索地点关键字无具体结果,即将搜索附近结果！')
        location = '&location=%s,%s' % (lat, lng)
        radius = '&radius=50000'
        query = word
        # 第一次发送请求搜寻地点获取 地点id,方便后续地点详情使用。
        url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' \
              'query=%s%s%s%s%s' % (query, key, language, location, radius)
        print(url)
        # https://maps.googleapis.com/maps/api/place/textsearch/json?
        # query=空气压缩机&key=AIzaSyC2VUsehdGp0LS7uZgETWd_OoBA7DpHIYU&language=zh-CN
        # &location=40.0509597,116.3007982&radius=50000

        # https://maps.googleapis.com/maps/api/place/textsearch/json?
        # query=空气压缩机&key=AIzaSyC2VUsehdGp0LS7uZgETWd_OoBA7DpHIYU&language=zh-CN
        # &location=37.09024,-95.712891&radius=50000
        res = requests.get(url)
        json_str = res.content.decode()
        # print(json_str)
        data = json.loads(json_str)
        # path = settings.BASE_DIR + '\\json_data\\search_place_nearby_list\\' + query + '_near_by_list.json'
        # with open(path, 'w', encoding='utf-8') as f:
        #     json.dump(data, f, ensure_ascii=False, indent=4)

        if len(data['results']) == 0:
            ret = {
                'status': -1,
                'msg': 'no data'
            }
        else:
            data_final_html = ""
            data_results_list = data.get('results')  # 获取列表
            for data_result in data_results_list:
                data_html = "<tr><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>"
                d_name = data_result.get('name', "")
                d_email = data_result.get('email', "")
                d_type = data_result.get('type', "")
                d_website = data_result.get('url', "")
                d_addr = data_result.get('formatted_address', "")
                d_phone = data_result.get('formatted_phone_number', "")
                d_facebook = data_result.get('facebook', "")
                d_youtube = data_result.get('youtube', "")
                d_twitter = data_result.get('twitter', "")
                d_search_word = word
                data_html = data_html % (
                    d_name, d_website, d_email, d_type, d_addr, d_phone, d_facebook, d_youtube, d_twitter,
                    d_search_word)
                data_final_html += data_html
            ret = {
                'status': 0,
                'place_id': None,
                'msg': '未成功搜索到%s对应的具体位置,查询到关键字附近的搜索结果' % word,
                'data': data,
                'data_final_html': data_final_html,
            }

    return JsonResponse(ret)


"""
def search_detail(place_id,word):
    key = "AIzaSyAp8xSTcyE0L4eYUi_EPKCFlIW2KhLp3JA"
    language = 'zh-CN'
    fields = 'address_component,adr_address,business_status,formatted_address,geometry,icon,name,permanently_closed,photo,place_id,plus_code,type,url,utc_offset,vicinity,' \
             'price_level,rating,review,user_ratings_total,' \
             'formatted_phone_number,international_phone_number,opening_hours,website'
    url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=%s&key=%s&language=%s&fields=%s' % (place_id, key, language, fields)
    res = requests.get(url)
    json_str = res.content.decode()
    data = json.loads(json_str)
    # print(data)
    path = settings.BASE_DIR + '\json_data\\search_place_detail\\' + word + '_detail.json'
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    data_result = data['result']
    data_html = '''
    <tr>
        <td place_id='%s'>
            <input type='checkbox'>
        </td>
        <td><a lat='%s' lng='%s' class='search_result_name'>%s</a></td>
        <td><p>%s</p></td>
        <td><p>%s</p></td>
        <td><p>%s</p></td>
        <td><p>%s</p></td>
        <td><p>%s</p></td>
        <td><p>%s</p></td>
        <td><p>%s</p></td>
        <td><p>%s</p></td>
        <td><p>%s</p></td>
    </tr>
    '''
    d_position = data_result['geometry']['location']
    lat = d_position['lat']
    lng = d_position['lng']
    d_place_id = data_result.get('place_id')
    d_name = data_result.get('name', "")
    d_type = data_result.get('type', "")
    d_website = data_result.get('website', "")
    d_email = get_email(d_website) if d_website else ""
    d_addr = data_result.get('formatted_address', "")
    d_phone = data_result.get('formatted_phone_number', "")
    d_facebook = data_result.get('facebook', "")
    d_youtube = data_result.get('youtube', "")
    d_twitter = data_result.get('twitter', "")
    d_search_word = word
    d_address_components = data_result.get('address_components')
    d_country = ""
    for i in d_address_components:
        if "country" in i['types']:
            d_country = i['long_name']

    data_html = data_html % (d_place_id , lat, lng,
                             d_name, d_website, d_email, d_country, d_addr, d_phone, d_facebook, d_youtube, d_twitter,
                             d_search_word)

    SearchResult.objects.update_or_create(name=d_name,website=d_website,email=d_email,
                              address=d_addr,phone=d_phone,
                                facebook=d_facebook,youtube=d_youtube,twitter=d_twitter,
                                search_word=d_search_word,country=d_country,place_id=d_place_id)
    # print(data_html)
    ret = {
        'status': 1,
        'place_id': place_id,
        'msg': '成功搜索到%s对应的具体位置' % word,
        'data': data,
        'data_html': data_html,
    }
    return ret
"""


# 精准搜索 暂时不用！！

def search_place_text(request):
    # 获取地图中心的经纬度坐标
    # lat = request.POST.get('lat')
    # lng = request.POST.get('lng')
    word = request.POST.get('word')
    # radius = request.POST.get('radius')
    key = "AIzaSyAp8xSTcyE0L4eYUi_EPKCFlIW2KhLp3JA"
    fields = 'place_id,formatted_address,name,types,geometry'
    language = 'en'
    url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?' \
          'input=%s&inputtype=textquery&key=%s&fields=%s&language=%s' % (word, key, fields, language)
    res = requests.get(url)
    json_str = res.content.decode()
    data = json.loads(json_str)
    if len(data['candidates']) == 0:
        print('没有搜索到具体位置')
        # ret = search_near_by(lat,lng,word,radius)
        ret = {
            'status': 0,
            'msg': '未查询该关键字对应的精准位置',
        }
    else:
        # 搜索到具体位置了。
        # path = settings.BASE_DIR + '\\json_data\\search_place\\' + word + '_place.json'
        # with open(path, 'w', encoding='utf-8') as f:
        #     json.dump(data, f, ensure_ascii=False, indent=4)
        # 获取第一次请求对应的响应中的地点id,然后发送 地点详情 请求。
        try:
            # 获取第一次请求对应的响应中的地点id,然后发送 地点详情 请求,获取相应数据。
            place_id = data['candidates'][0]['place_id']
            ret = search_detail(place_id, word)
        except:
            ret = {
                'status': 0,
                'msg': '未查询该关键字对应的精准位置',
            }

    return JsonResponse(ret)


def search_detail_by_ids(request):
    try:
        ids = request.GET.get('place_ids')
        id_list = json.loads(ids)
        data_list = []
        for id in id_list:
            p_obj = SearchResult.objects.get(place_id=id)
            if p_obj.status == 0:
                # 说明只进行了第一层搜索，即将进行详情搜索！！！
                # 搜索完详情，将详情信息更新到数据库中，并设置status = 1
                word = p_obj.search_word
                cname = request.session["username"]
                data_html = search_detail(id, word, p_obj, cname)
                if data_html == -1:
                    ret = {
                        'code': -1,
                        'msg': "当月搜索量已达限制！"
                    }
                    return JsonResponse(ret)
                if data_html is None:
                    # 说明详情搜索结果中包含中文
                    data_html = ''
            else:
                data_html = p_obj.td_html
            data_list.append({'td_html': data_html, 'pid': id})

        ret = {
            'data': data_list,  # [{},{},{},{}]
            'code': 1,
        }
    except Exception as e:
        print('eeeeeeerror')
        print(e)
        ret = {
            'code': 0,
        }
    return JsonResponse(ret)


def search_near_by_latlng(lat, lng, word, radius):
    print(settings.PRODUCT)
    # print(settings.google_map_key)
    location = '%s,%s' % (lat, lng)
    radius = radius
    query = word
    # key = "AIzaSyAp8xSTcyE0L4eYUi_EPKCFlIW2KhLp3JA"
    key = "AIzaSyAp8xSTcyE0L4eYUi_EPKCFlIW2KhLp3JA"
    language = 'en'
    # 第一次发送请求搜寻地点获取 地点id,方便后续地点详情使用。
    url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=%s&radius=%s&language=%s&keyword=%s&key=%s' \
          % (location, radius, language, query, key)
    res = requests.get(url)
    print(url)
    json_str = res.content.decode()
    data = json.loads(json_str)
    print(data)
    return data


# 第一层：搜索附近的相关信息（粗略搜索，只有名字等信息。）
def search_near_by(lat, lng, word, radius, cname):
    # 执行附近搜索,只是优先显示附近的结果
    '''
     # print('当前搜索地点关键字无具体结果,即将搜索附近结果！')
    # location = '%s,%s' % (lat, lng)
    # radius = radius
    # query = word
    # key = "AIzaSyAp8xSTcyE0L4eYUi_EPKCFlIW2KhLp3JA"
    # language = 'zh-CN'
    # # 第一次发送请求搜寻地点获取 地点id,方便后续地点详情使用。
    # url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=%s&radius=%s&language=%s&keyword=%s&key=%s' \
    #       %(location,radius,language,query,key)

    # url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' \
    #       'query=%s&key=%s&language=%s&location=%s&radius=%s' % (query, key, language, location, radius)
    # res = requests.get(url)
    # print(url)
    # json_str = res.content.decode()
    # data = json.loads(json_str)
    # print(data)
    # data['test'] = [1,2,3]
    # print(len(data['results']))
    '''

    cust_name = cname
    month = datetime.now().month
    year = datetime.now().year
    day = datetime.now().day
    rc = RequestCount.objects.filter(month=month, year=year, customer=cust_name)
    if rc:
        rc = rc[0]
        current_count = rc.count
        if current_count > settings.MAX_REQUEST_NEARBY:
            ret = {
                'status': -2,
                'msg': '本月搜索量已达上限'
            }
            return ret
    else:
        rc = RequestCount.objects.create(count=0, month=month, year=year, customer=cust_name)

    data = search_near_by_latlng(lat, lng, word, radius)
    count = 1
    if len(data['results']) == 0:
        print('nonono data')
        ret = {
            'status': -1,
            'msg': '附近搜索没有结果'
        }
    else:
        next_page_token = data.get('next_page_token')
        print(next_page_token)
        while next_page_token:
            time.sleep(2)
            print(len(data['results']))
            print('下一页的token：%s' % next_page_token)
            # data['test'].extend([1,2])
            print('还有数据，接着请求！')
            key = "AIzaSyAp8xSTcyE0L4eYUi_EPKCFlIW2KhLp3JA"
            next_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=%s&pagetoken=%s" % (
                key, next_page_token)
            next_res = requests.get(next_url)
            print(next_url)
            count += 1
            next_json_str = next_res.content.decode()
            next_data = json.loads(next_json_str)
            print(data)
            print(next_data)
            data['results'].extend(next_data['results'])

            next_page_token = next_data.get('next_page_token')
            print(next_page_token)
        print('*************************')

        # path = settings.BASE_DIR + '\\json_data\\search_place_nearby_list\\' + word + '_near_by_list.json'
        # with open(path, 'w', encoding='utf-8') as f:
        #     json.dump(data, f, ensure_ascii=False, indent=4)
        print(len(data['results']))

        # ******************

        data_final_html = ''
        for index, data_result in enumerate(data['results']):
            # 去除所有包含中文的数据！！！
            reg = re.compile(u'[\u4e00-\u9fa5]')  # 检查中文
            contents = data_result
            json_data = json.dumps(contents, ensure_ascii=False)
            match = reg.search(json_data)
            if match:
                print('包含中文***************************')
                print(json_data)
                print('包含中文***************************')
                data['results'].pop(index)
                continue
            else:
                place_id = data_result['place_id']
                # type_str = ""
                # for s in data_result['types']:
                #     type_str += s + ','

                data_html = '''
                <tr id='%s'>
                    <td>
                         <input class='data_td' type='checkbox'>
                    </td>
                    <td><a lat='%s' lng='%s' onclick="click_aa(this)" class='search_result_name'>%s</a></td>
                    <td><a></a></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span></span></td>
                    <td><span>%s</span></td>
                   <td> <button class="btn btn-default search_detail_child" type="button" onclick="click_search_detail_pro(this)">Query</button>
                 <button class="btn btn-default delete_data_child" type="button" onclick="click_delete_pro(this)">Delete</button>
</td>
                </tr>
                
                '''

                lat = data_result['geometry']['location']['lat']
                lng = data_result['geometry']['location']['lng']
                name = data_result['name']
                data_html = data_html % (place_id, lat, lng, name, word)
                data_final_html += data_html

        print(len(data['results']))
        # 开启子线程，执行数据库添加操作！！！
        t = Thread(target=add_data, args=(data['results'], SearchResult, word))
        t.start()

        ret = {
            'status': 0,
            'msg': '查询到%s附近的搜索结果' % word,
            'data': data,
            "data_final_html": data_final_html,
        }

        '''
        data_final_html = ""

        data_results_list = data.get('results')  # 获取列表
        for data_result in data_results_list:
            place_id = data_result.get('place_id', '')
            ret = search_detail(place_id, word)
            data_final_html += ret.get('data_html', '')


        ret = {
            'status': 0,
            'msg': '查询到%s附近的搜索结果' % word,
            'data': data,
            'data_final_html': data_final_html,
        }
        
        '''

    rc.count = rc.count + count
    rc.save()

    save_db(count, 0)

    # time_str = time.strftime("%Y-%m-%d")
    # sql = "select * from gms_record WHERE DATE_FORMAT(date, '%Y-%m-%d')='%s';"
    #

    return ret


# ********************************************

def search_detail(place_id, word, p_obj, cname):
    cust_name = cname
    month = datetime.now().month
    year = datetime.now().year

    rc = RequestDetailCount.objects.filter(month=month, year=year, customer=cust_name)
    print(rc)
    if rc:
        rc = rc[0]
        current_count = rc.count
        if current_count > settings.MAX_REQUEST_DETAIL:
            print(current_count)
            return -1

    else:
        rc = RequestDetailCount.objects.create(count=0, month=month, year=year, customer=cust_name)

    key = "AIzaSyAp8xSTcyE0L4eYUi_EPKCFlIW2KhLp3JA"
    language = 'en'
    fields = 'address_component,adr_address,business_status,formatted_address,geometry,icon,name,permanently_closed,photo,place_id,plus_code,type,url,utc_offset,vicinity,' \
             'price_level,rating,review,user_ratings_total,' \
             'formatted_phone_number,international_phone_number,opening_hours,website'
    url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=%s&key=%s&language=%s&fields=%s' % (
        place_id, key, language, fields)
    res = requests.get(url)
    json_str = res.content.decode()
    data = json.loads(json_str)

    count = 1
    rc.count = rc.count + count
    rc.save()
    save_db(0, 1)

    # print(data)
    # path = settings.BASE_DIR + '\json_data\\search_place_detail\\' + word + '_detail.json'
    # with open(path, 'w', encoding='utf-8') as f:
    #     json.dump(data, f, ensure_ascii=False, indent=4)
    data_result = data['result']
    print(data_result)

    # 去除所有包含中文的数据！！！
    reg = re.compile(u'[\u4e00-\u9fa5]')  # 检查中文
    contents = data_result
    json_data = json.dumps(contents, ensure_ascii=False)
    match = reg.search(json_data)
    if match:
        print('包含中文***************************')
        print(json_data)
        print('包含中文***************************')
        return None
    else:
        data_html = '''
        <tr id='%s'>
            <td>
                <input class='data_td' type='checkbox'>
            </td>
             <td><a lat='%s' lng='%s' onclick="click_aa(this)" class='search_result_name'>%s</a></td>
            <td><a href='%s' target="_blank">%s</a></td>
            <td><span>%s</span></td>
            <td><span>%s</span></td>
            <td><span>%s</span></td>
            <td><span>%s</span></td>
            <td><a href='%s' target="_blank">%s</a></td>
            <td><a href='%s' target="_blank">%s</a></td>
            <td><a href='%s' target="_blank">%s</a></td>
            <td><span>%s</span></td>
            <td> <button class="btn btn-default search_detail_child" type="button" onclick="click_search_detail_pro(this)">Query</button>
             <button class="btn btn-default delete_data_child" type="button" onclick="click_delete_pro(this)">Delete</button>
</td>
        </tr>
        '''
        d_position = data_result['geometry']['location']
        lat = d_position['lat']
        lng = d_position['lng']
        d_place_id = data_result.get('place_id')
        d_name = data_result.get('name', "")
        d_type = data_result.get('type', "")
        d_website = data_result.get('website', "")

        d_addr = data_result.get('formatted_address', "")
        d_phone = data_result.get('formatted_phone_number', "")

        d_facebook = ""
        d_youtube = ""
        d_twitter = ""
        d_email = ''

        if d_website:
            try:
                SERVER_LIST = [
                      "8.219.43.39:80",
                         "47.88.79.176:80",
                         "47.90.252.192:80",
                ]
                server = random.choice(SERVER_LIST)
                url = 'http://{}/get_socials/?website={}'.format(server, d_website)
                ret = requests.get(url=url)
                print(ret.content)
                ret = json.loads(ret.content)
                print(ret)

                d_email = ret.get("email", "")
                # d_phone += ret.get("phone","")
                d_facebook = ret.get("facebook", "")
                d_twitter = ret.get("twitter", "")

                if not d_email:
                    url = 'http://{}/get_mail/?website={}'.format(server, d_website)
                    ret = requests.get(url=url)
                    ret = json.loads(ret.content)
                    d_email = ret.get("mail", "")

                # result = getWebSource(d_website)
                # d_facebook = result['result']['facebook']
                # d_youtube = result['result']['youtube']
                # d_twitter = result['result']['twitter']
                # d_email = ';'.join(result['result']['mails'])
                # if not result['result']['mails']:
                #     d_email = get_email(d_website)
            except Exception as e:
                print(e)

        d_search_word = word
        d_address_components = data_result.get('address_components')
        d_country = ""
        for i in d_address_components:
            if "country" in i['types']:
                d_country = i['long_name']

        data_html = data_html % (d_place_id, lat, lng,
                                 d_name, d_website, d_website, d_email, d_country, d_addr, d_phone,
                                 d_facebook, d_facebook,
                                 d_youtube, d_youtube,
                                 d_twitter, d_twitter,
                                 d_search_word)

        try:
            p_obj.website = d_website
            p_obj.email = d_email
            p_obj.address = d_addr
            p_obj.phone = d_phone
            p_obj.facebook = d_facebook
            p_obj.youtube = d_youtube
            p_obj.twitter = d_twitter
            p_obj.country = d_country
            p_obj.td_html = data_html
            p_obj.status = 1
            p_obj.save()
        except:
            print('数据库保存出错！')

        # SearchResult.objects.update_or_create(name=d_name,website=d_website,email=d_email,
        #                           address=d_addr,phone=d_phone,
        #                             facebook=d_facebook,youtube=d_youtube,twitter=d_twitter,
        #                             search_word=d_search_word,country=d_country,place_id=d_place_id,td_html=data_html)
        # print(data_html)
        # ret = {
        #     'status': 1,
        #     'place_id': place_id,
        #     'msg': '成功搜索到%s对应的具体位置' % word,
        #     'data': data,
        #     'data_html': data_html,
        # }
        return data_html


def search_place_text2(request):
    # 获取地图中心的经纬度坐标
    lat = request.POST.get('lat')
    lng = request.POST.get('lng')
    lng_float = float(lng)

    if lng_float < 0:
        lng_float = lng_float % -360
        if lng_float < -180:
            lng_float = lng_float + 360
    else:
        lng_float = lng_float % 360
        if lng_float > 180:
            lng_float = lng_float - 360
    lng = lng_float
    word = request.POST.get('word')
    radius = request.POST.get('radius')
    print(lat, lng, word, radius)

    cname = request.session["username"]
    print(cname)
    ret = search_near_by(lat, lng, word, radius, cname)
    return JsonResponse(ret)


def extra_search(request):
    lat = request.POST.get('lat')
    lng = request.POST.get('lng')
    lng_float = float(lng)
    if lng_float < 0:
        lng_float = lng_float % -360
        if lng_float < -180:
            lng_float = lng_float + 360
    else:
        lng_float = lng_float % 360
        if lng_float > 180:
            lng_float = lng_float - 360
    lng = lng_float
    word = request.POST.get('word')
    radius = request.POST.get('radius')
    cname = request.session["username"]
    ret = extra_search_near_by(lat, lng, word, radius, cname)
    return JsonResponse(ret)


def extra_search_near_by(lat, lng, word, radius, cname):
    cust_name = cname
    month = datetime.now().month
    year = datetime.now().year
    rc = RequestCount.objects.filter(month=month, year=year, customer=cust_name)
    if rc:
        rc = rc[0]
        current_count = rc.count
        if current_count > settings.MAX_REQUEST_NEARBY:
            ret = {
                'status': -1,
                'msg': '本月搜索量已达上限'
            }
            return ret
    else:
        rc = RequestCount.objects.create(count=0, month=month, year=year, customer=cust_name)

    final_data_result = []

    d1 = search_near_by_latlng(float(lat) - 2, lng, word, radius)
    d2 = search_near_by_latlng(float(lat) + 2, lng, word, radius)
    d3 = search_near_by_latlng(float(lat), lng - 2, word, radius)
    d4 = search_near_by_latlng(float(lat), lng + 2, word, radius)
    count = 4
    # with open('d1.json', 'w', encoding='utf-8') as f:
    #     json.dump(d1, f, ensure_ascii=False, indent=4)
    # with open('d2.json', 'w', encoding='utf-8') as f:
    #     json.dump(d1, f, ensure_ascii=False, indent=4)
    # with open('d3.json', 'w', encoding='utf-8') as f:
    #     json.dump(d1, f, ensure_ascii=False, indent=4)
    # with open('d4.json', 'w', encoding='utf-8') as f:
    #     json.dump(d1, f, ensure_ascii=False, indent=4)

    data_list = [d1, d2, d3, d4]
    for data in data_list:
        if len(data['results']) == 0:
            continue
        else:
            next_page_token = data.get('next_page_token')
            print(next_page_token)
            while next_page_token:
                time.sleep(2)
                print(len(data['results']))
                print('下一页的token：%s' % next_page_token)
                # data['test'].extend([1,2])
                print('还有数据，接着请求！')
                key = "AIzaSyAp8xSTcyE0L4eYUi_EPKCFlIW2KhLp3JA"
                next_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=%s&pagetoken=%s" % (
                    key, next_page_token)
                next_res = requests.get(next_url)
                count += 1
                print(next_url)
                next_json_str = next_res.content.decode()
                next_data = json.loads(next_json_str)
                print(data)
                print(next_data)
                data['results'].extend(next_data['results'])

                next_page_token = next_data.get('next_page_token')
                print(next_page_token)
            final_data_result.extend(data['results'])

    if len(final_data_result) > 0:
        data_final_html = ''

        for index, data_result in enumerate(final_data_result):
            # 去除所有包含中文的数据！！！
            reg = re.compile(u'[\u4e00-\u9fa5]')  # 检查中文
            contents = data_result
            json_data = json.dumps(contents, ensure_ascii=False)
            match = reg.search(json_data)
            if match:
                print('包含中文***************************')
                print(json_data)
                print('包含中文***************************')
                final_data_result.pop(index)
                continue
            else:
                place_id = data_result['place_id']
                data_html = '''
                                  <tr id='%s'>
                                      <td>
                                           <input class='data_td' type='checkbox'>
                                      </td>
                                       <td><a lat='%s' lng='%s' onclick="click_aa(this)" class='search_result_name'>%s</a></td>
                                      <td><p></p></td>
                                      <td><p></p></td>
                                      <td><p></p></td>
                                      <td><p></p></td>
                                      <td><p></p></td>
                                      <td><p></p></td>
                                      <td><p></p></td>
                                      <td><p></p></td>
                                      <td><p>%s</p></td>
                                     <td><button class="btn btn-default search_detail_child" type="button" onclick="click_search_detail_pro(this)">Query</button>
             <button class="btn btn-default delete_data_child" type="button" onclick="click_delete_pro(this)">Delete</button></td>
                                  </tr>
                                  '''

                lat = data_result['geometry']['location']['lat']
                lng = data_result['geometry']['location']['lng']
                name = data_result['name']
                data_html = data_html % (place_id, lat, lng, name, word)
                data_final_html += data_html

        t = Thread(target=add_data, args=(final_data_result, SearchResult, word))
        t.start()
        ret = {
            'status': 1,
            'msg': '查询到%s附近的搜索结果' % word,
            "data_final_html": data_final_html,
        }
    else:
        ret = {
            'status': 0,
            'msg': '未查询到结果，请更换位置进行搜索!!!'
        }

    rc.count = rc.count + count
    rc.save()

    save_db(count, 0)

    return ret
