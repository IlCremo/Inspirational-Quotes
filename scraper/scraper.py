from bs4 import BeautifulSoup
import requests
import json
import os

BASE_PATH = os.path.dirname(__file__)

with open(os.path.join(BASE_PATH, "link.txt")) as f:
    response = requests.get(f.readline())

soup = BeautifulSoup(response.content, 'html.parser')

div = soup.find_all("div", {"id": "mvp-content-wrap"})[0]

ps = div.find_all('p')

l = []
for p in ps:
    text = p.get_text()
    if '“' in text or '”' in text:
        l.append(p)
l = l[1:]

quotes = []
for quote in l:
    author = quote.find_all('strong')[-1].get_text() \
        .replace('\u2013', '') \
        .replace('\u2014', '') \
        .replace('\u2015', '') \
        .strip()
    
    q = quote.get_text().replace(author, '')
    start = q.index('.') + 1
    q = q[start:] \
        .replace('\u201c', '') \
        .replace('\u201d', '') \
        .replace('\u2013', '') \
        .replace('\u2014', '') \
        .replace('\u2015', '') \
        .replace('(see more)', '') \
        .replace('If you’re enjoying these quotes, make sure to read our collection of quotes on living a great life.', '') \
        .strip()

    quotes.append({
        'quote': q,
        'author': author
    })

with open('API/data/data.json', 'w', encoding='utf-8') as f:
    json.dump(quotes, f, indent=4)