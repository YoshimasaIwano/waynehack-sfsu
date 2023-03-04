
from flask import Flask
from waitress import serve
import os

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.debug = False
    PORT = os.environ.get('PORT','5000')
    print("runing on: ", PORT)
    # app.run()
    serve(app, port=PORT)