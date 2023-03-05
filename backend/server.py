
from flask import Flask, abort, request
from waitress import serve
import os
# import whisper
# from tempfile import NamedTemporaryFile
# import speech_recognition as sr


app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')


# @app.route('/', methods=['POST'])
# def handler():
#     if not request.files:
#         # If the user didn't submit any files, return a 400 (Bad Request) error.
#         abort(400)

#     # For each file, let's store the results in a list of dictionaries.
#     results = []

#     # Loop over every file that the user submitted.
#     for filename, handle in request.files.items():
#         # Create a temporary file.
#         # The location of the temporary file is available in `temp.name`.
#         temp = NamedTemporaryFile()
#         # Write the user's uploaded file to the temporary file.
#         # The file will get deleted when it drops out of scope.
#         handle.save(temp)
#         # Let's get the transcript of the temporary file.
#         result = model.transcribe(temp.name)
#         # Now we can store the result object for this file.
#         results.append({
#             'filename': filename,
#             'transcript': result['text'],
#         })

#     # This will be automatically converted to JSON.
#     return {'results': results}
"""
def dectation():
    model = whisper.load_model("base")

    # load audio and pad/trim it to fit 30 seconds
    audio = whisper.load_audio("audio.wav")
    audio = whisper.pad_or_trim(audio)

    # make log-Mel spectrogram and move to the same device as the model
    mel = whisper.log_mel_spectrogram(audio).to(model.device)

    # detect the spoken language
    _, probs = model.detect_language(mel)
    print(f"Detected language: {max(probs, key=probs.get)}")

    # decode the audio
    options = whisper.DecodingOptions()
    result = whisper.decode(model, mel, options)

    # print the recognized text
    print(result.text)
    return result.text
"""
@app.route('/dictate', methods=['POST'])
def dectation():
    r = sr.Recognizer()

    with sr.Microphone(device_index=0) as source:
        print('Recording:')
        audio = r.listen(source)

    try:
        text = r.recognize_google(audio, language='en-in')
        print(text)
        with open("record.wav", "wb") as f:
            f.write(audio.get_raw_data())
    except:
        print("Not being recorded")
    return text.text


if __name__ == "__main__":
    app.debug = False
    PORT = os.environ.get('PORT','5000')
    print("runing on: ", PORT)
    # app.run()
    serve(app, port=PORT)