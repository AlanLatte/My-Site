from flask import (Flask, render_template, redirect, url_for)
import os

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/tlgrm')
def telegram():
    return redirect('https://t.me/Alanlatte/')

@app.route('/GitHub')
def GitHub():
    return redirect('https://github.com/AlanLatte')

@app.route('/vk')
def vk():
    return redirect('https://vk.com/alan.latte')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(os.getenv('PORT', 5000)))
