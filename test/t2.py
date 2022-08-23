import re
from collections import Counter

import requests

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
}
# proxies = {'http': 'http://lum-customer-sstrade-zone-residential-country-us:4xcrhdlj831p@zproxy.lum-superproxy.io:22225',
#             'https': 'https://lum-customer-sstrade-zone-residential-country-us:4xcrhdlj831p@zproxy.lum-superproxy.io:22225'}


proxies = {
    'http': 'http://lum-customer-sstrade-zone-residential-country-us:Shengshikeji666@zproxy.lum-superproxy.io:22225',
    'https': 'http://lum-customer-sstrade-zone-residential-country-us:Shengshikeji666@zproxy.lum-superproxy.io:22225'
}

website = "http://www.houseofvalues.com/"
website = "https://www.google.com/"


def getPaMFromHtml(resp):
    pat = re.compile('>(.*?)<')
    s = ' '.join(pat.findall(resp))

    mails = re.findall(r'([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+)', s)

    mls = Counter(mails)
    print('mailAll:', [mk for mk, mv in mls.items() if len(
        mls.items()) > 5 and mv > 2 and '.jpg' not in mk and '.io' not in mk or mv and '.jpg' not in mk and '.io' not in mk])
    mailAll = ';'.join([mk for mk, mv in mls.items() if len(
        mls.items()) > 5 and mv > 2 and '.jpg' not in mk and '.io' not in mk or mv and '.jpg' not in mk and '.io' not in mk])
    if len(mailAll) != 0:
        return {'mails': mailAll}
    else:
        return None


# resp = requests.get(website, headers=headers, proxies={})  # 首页的响应信息
# print('网站获取成功')
# res = resp.text
# with open('tttt.html','w',encoding='utf-8') as f:
#     f.write(res)
# # res = resp.content.decode()
#
# # e = etree.HTML(res)
# pam = getPaMFromHtml(res)
# print(pam)
res = requests.get(website, headers=headers, proxies=proxies)
print(res.content)
