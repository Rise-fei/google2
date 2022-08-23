import requests
import json
from django.conf import settings

# ret = requests.get("http://www.google.com")
# print(ret.content)


key = settings.google_map_key
language = 'en'
fields = 'address_component,adr_address,business_status,formatted_address,geometry,icon,name,permanently_closed,photo,place_id,plus_code,type,url,utc_offset,vicinity,' \
         'price_level,rating,review,user_ratings_total,' \
         'formatted_phone_number,international_phone_number,opening_hours,website'
url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=%s&key=%s&language=%s&fields=%s' % (
    'ChIJ-8jfksNQGmARwnIRRia0VTk', key, language, fields)
res = requests.get(url)
json_str = res.content.decode()
data = json.loads(json_str)
print(data)


# from datetime import datetime
# print(datetime.year)
# print(datetime.now().month)
# print(datetime.now().year)