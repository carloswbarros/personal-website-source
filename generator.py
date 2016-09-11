import sys
import yaml

from flask import Flask, render_template
from flask_flatpages import FlatPages
from flask_frozen import Freezer

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'

app = Flask(__name__)
app.config.from_object(__name__)
pages = FlatPages(app)
freezer = Freezer(app)

app.config['FREEZER_DESTINATION'] = '../carloswbarros.github.io/'
app.config['FREEZER_DESTINATION_IGNORE'] = ['.git*', 'CNAME', '.gitignore', 'README.md']
app.config['FREEZER_RELATIVE_URLS'] = True

config = yaml.safe_load(open("data/config.yaml", encoding='utf8'))

en_works = yaml.safe_load(open("data/works/en.yaml", encoding='utf8'))
pt_works = yaml.safe_load(open("data/works/pt.yaml", encoding='utf8'))

en_lang = yaml.safe_load(open("data/locales/en.yaml", encoding='utf8'))
pt_lang = yaml.safe_load(open("data/locales/pt.yaml", encoding='utf8'))

@app.route('/')
def index():
    return render_template('index.jinja2', lang=pt_lang, config=config, works=pt_works)

@app.route('/blog/')
def blog():
    return render_template('blog.jinja2', lang=pt_lang, config=config)

@app.route('/en/')
def index_en():
	return render_template('index.jinja2', lang=en_lang, config=config, works=en_works)

@app.route('/pt/')
def index_pt():
	return render_template('index.jinja2', lang=pt_lang, config=config, works=pt_works)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.jinja2'), 404

@app.route('/404.html')
def static_404():
    return render_template('404.jinja2')

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(port=8000)