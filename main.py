from flask import Flask,request, url_for, render_template
import operations
import json

app = Flask(__name__)
#@app.route('/login', methods=['GET', 'POST'])
#def login():
   # if request.method == 'POST':
   #     do_the_login()
   # else:
   #     show_the_login_form()

@app.route('/')
def index():
    return render_template('home.html') 

@app.route('/title', methods=['POST', 'GET'] )
def title():
    result =''
    if request.method == 'POST':
        post_id = operations.insert(request.form) 
        print 'Successfully inserted ' + str (post_id)
    return render_template('titles.html',data = operations.get_titles()) 

@app.route('/instructions', methods=['POST', 'GET'] )
def instructions():
    if request.method == 'POST':
        selected_title =  request.form
        data = operations.get_instructions( selected_title.keys()[0] ) 
        print data['title']
        for each in data['instructions']:
            print each
        return "success"

#with app.app_context():
#    print url_for('static', filename='style.css')

if __name__ == '__main__':
    app.debug = True
    app.run()
