import speech_recognition as sr


if __name__ == "__main__":
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