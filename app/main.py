from flask import (Flask, render_template, redirect, url_for)
app=Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/tlgrm')
def telegram():
    return redirect('https://t.me/Alanlatte/')

@app.route('/GitHub')
def GitHub():
    return redirect('https://github.com/AlanLatte')
if __name__ == '__main__':
    app.run()
