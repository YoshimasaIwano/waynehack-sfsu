import { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";

import { Conversation } from "./ChatGPT";
// import SpeechRecorder from "./Whisper";
import { Dictating } from "./Whisper";
// import { SpeechRecognition } from 'webkit';



// type WaitressProps = {
//     state: React.ReactNode;
//     dispatch: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
// };

// type CustomerProps = {
//     state: string;
//     dispatch: React.Dispatch<React.SetStateAction<string | null>>;
// }

// function Waitress({state, dispatch}: WaitressProps ) {
//     useEffect(() => {
//         const fetchConversation = async () => {
//             const conversation = await Conversation();
//             dispatch(conversation);
//         };
//         fetchConversation();
//     }, [dispatch]);
//     return <>{state}</>
// }

export function Chat() {
    const [response, setResponse] = useState<JSX.Element | null>(null);
    const [responses, setResponses] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const fetchConversation = async () => {
            const conversation = await Conversation();
            setResponse(conversation);
            setResponses(responses => [...responses, conversation]);
        };
        if (!response) {
            fetchConversation();
        }
    }, [response]);


    const handleClick = () => {
        setResponse(response);
    };


    // const RespondAction = () => {
    //     console.log(url);
    //     // Using useEffect for single rendering
    //     useEffect(() => {
    //         // Using fetch to fetch the api from 
    //         // flask server it will be redirected to proxy
    //         fetch("/distate").then((res) =>
    //             res.json().then((data) => {
    //                 // Setting a data from api
    //                 setTranscription(data);
    //                 console.log(data);
    //                 console.log(transcription);
    //             })
    //         );
    //     }, []);
    // }

    // Dictating part
    // const [isRecording, setIsRecording] = useState(false);
    // const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    // const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    // const chunks: Blob[] = [];
  
    // const handleRecord = () => {
    //     if (!isRecording) {
    //         navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    //             const mediaRecorder = new MediaRecorder(stream);
    //             mediaRecorderRef.current = mediaRecorder;
    //             mediaRecorder.start();
    //             setIsRecording(true);
    //         });
    //     } else {
    //         mediaRecorderRef.current?.stop();
    //         setIsRecording(false);
    //         handleSave();
    //     }
    // };
  
    // const handleSave = () => {
    //     if (audioBlob) {
    //         const url = URL.createObjectURL(audioBlob);
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.download = 'audio.wav';
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //         URL.revokeObjectURL(url);
    //     }
    // };
  
    // const handleDataAvailable = (event: BlobEvent) => {
    //     chunks.push(event.data);
    // };
  
    // if (mediaRecorderRef.current) {
    //     mediaRecorderRef.current.ondataavailable = handleDataAvailable;
    //     mediaRecorderRef.current.onstop = () => {
    //         const blob = new Blob(chunks, { type: 'audio/wav' });
    //         setAudioBlob(blob);
    //     };
    // }

    // const [transcription, setTranscription] = useState<string>('');
    // const handleSpeechRecognition = () => {
    //     const recognition = new SpeechRecognition();
    //     recognition.interimResults = true;
      
    //     recognition.onresult = (event) => {
    //         let interimTranscript = '';
    //         for (let i = event.resultIndex; i < event.results.length; i++) {
    //             const transcript = event.results[i][0].transcript;
    //             if (event.results[i].isFinal) {
    //                 setTranscription(transcript);
    //             } else {
    //                 interimTranscript += transcript;
    //             }
    //         }
    //     };
      
    //     recognition.start();
    // };



    // const [ url, setURL ] = useState("");
    // const [ transcription, setTranscription ] = useState<string>('');
    // const [ isRecording, setIsRecording ] = useState(false);
    // const [ audioBlob, setAudioBlob ] = useState<Blob | null>(null);
    // const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    // const chunks: Blob[] = [];

    // const handleRecord = () => {
    //     if (!isRecording) {
    //         navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    //             const mediaRecorder = new MediaRecorder(stream);
    //             mediaRecorderRef.current = mediaRecorder;
    //             mediaRecorder.start();
    //             setIsRecording(true);
    //         });
    //     } else {
    //         mediaRecorderRef.current?.stop();
    //         setIsRecording(false);
    //     }
    // };

    // const handleSave = () => {
    //     if (audioBlob) {
    //         setURL(URL.createObjectURL(audioBlob));
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.download = 'audio.wav';
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //         URL.revokeObjectURL(url);
    //     }
    // };

    // const handleDataAvailable = (event: BlobEvent) => {
    //     chunks.push(event.data);
    // };
    // if (mediaRecorderRef.current) {
    //     mediaRecorderRef.current.ondataavailable = handleDataAvailable;
    //     mediaRecorderRef.current.onstop = () => {
    //         const blob = new Blob(chunks, { type: 'audio/wav' });
    //         setAudioBlob(blob);
    //     };
    // }

    // const dictating = async (event:any) => {
    //     // const file = event.target.files[0];
    //     // const data = new FormData();
    //     // data.append('file', file);
    //     const DEFAULT_PARAMS = {
    //         "file": url,
    //         "model": "whisper-1",
    //     }

    //     const params_ = { ...DEFAULT_PARAMS};
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + String(process.env.REACT_APP_API_KEY)
    //         },
    //         body: JSON.stringify(DEFAULT_PARAMS)
    //     };
    //     console.log(JSON.stringify(DEFAULT_PARAMS));
    //     const response = await fetch('https://api.openai.com/v1/audio/transcriptions', requestOptions);
    //     const responseText = await response.json();
    //     console.log(responseText);
    // }

    // const { Configuration, OpenAIApi } = require("openai");

    // const dictating = async (event:any) => {
    //     const file = event.target.files[0];
    //     const configuration = new Configuration({
    //         // apiKey: process.env.REACT_APP_API_KEY,
    //         Authorization: 'Bearer ' + String(process.env.REACT_APP_API_KEY)
    //     });
    //     const openai = new OpenAIApi(configuration);

    //     const completion = await openai.createCompletion({
    //         model: "whisper-1",
    //         file: file,
    //     });
    //     console.log(completion.data.choices[0].text);
    // }


    // const dictating = async () => {
    //     const formData = new FormData();
    //     formData.append("file", url);
    //     formData.append("model", "whisper-1");

    //     const data = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    //         headers:{
    //             "Authorization": 'Bearer ' + String(process.env.REACT_APP_API_KEY),
    //             "Content-Type": "multipart/form-data",
    //         },
    //         method: "POST",
    //         body: formData,
    //     })
    //     .then((response) => response.json())
    //     .then((result) => {
    //         console.log(result);
    //         setTranscription(result)
    //         return result;
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error);
    //     });
    // }
    

    // const [recording, setRecording] = useState(false);
    // const [transcription, setTranscription] = useState('');

    // let mediaRecorder: any;
    // const chunks: any[] = [];

    // const handleStartRecording = () => {
    //     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    //         mediaRecorder = new MediaRecorder(stream);
    //         mediaRecorder.start();

    //         mediaRecorder.addEventListener('dataavailable', (event: any) => {
    //             chunks.push(event.data);
    //         });
    //     });

    //     setRecording(true);
    // };

    // const handleStopRecording = async () => {
    //     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    //         stream.getTracks().forEach( track => track.stop() ); // stop each of them
    //     });

    //     // mediaRecorder.stop();

    //     const blob = new Blob(chunks, { type: 'audio/webm' });

    //     const data = new FormData();
    //     data.append('file', blob);

        // const DEFAULT_PARAMS = {

        //     "model": "whisper-1",
        // }

        // const params_ = { ...DEFAULT_PARAMS};
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + String(process.env.REACT_APP_API_KEY)
        //     },
        //     body: JSON.stringify(params_)
        // };
        // const response = await fetch('https://api.openai.com/v1/audio/transcriptions', requestOptions);
        // const responseText = await response.json();

    //     // const response = await whisper.files.transcribe({
    //     // data,
    //     // model: 'whisper-2022.02.24',
    //     // format: 'webm',
    //     // });

    //     setTranscription(responseText.text);
    //     setRecording(false);
    // };

    // const OPENAI_API_KEY = process.env.REACT_APP_API_KEY;
    // const openaiClient = new openai.default(OPENAI_API_KEY);

    // async function speechToText(audio: Blob): Promise<string> {
    //     const response = await openaiClient.transcribe({
    //       audio: audio,
    //       model: 'whisper-2022.01.26',
    //     });
    //     return response.text;
    //   }
      
    // const [text, setText] = useState<string>('');

    // function onSpeechRecognition() {
    //     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    //       const mediaRecorder = new MediaRecorder(stream);
      
    //       mediaRecorder.start();
      
    //       mediaRecorder.addEventListener('dataavailable', async (event) => {
    //         const audio = new Blob([event.data], { type: 'audio/wav' });
    //         const text = await speechToText(audio);
    //         setText(text);
    //       });
    //     });
    //   }
      
      

    return (
        <Container>
            <Button variant="primary" type="submit" onClick={handleClick}>
                Start
            </Button>
            {/* <Waitress state={null} dispatch={() => {}} {...{ response, setResponse }} /> */}
            <div>
                {responses.map((response, index) => (
                    <div key={index}>
                        {response}
                    </div>
                ))}
            </div>
            {/* <button onClick={handleRecord}>{isRecording ? 'Stop' : 'Record'}</button> */}
            {/* <button onClick={onSpeechRecognition}>Start Speech Recognition</button> */}

            {/* <div>
                <input type="file" accept="audio/*" onChange={dictating} />
                <p>{transcription}</p>
            </div> */}
            {/* {recording ? (
                <button onClick={handleStopRecording}>Stop recording</button>
            ) : (
                <button onClick={handleStartRecording}>Start recording</button>
            )}
            {transcription && <p>{transcription}</p>} */}
            {/* <button onClick={handleSpeechRecognition}>Record Voice</button>
            <p>{transcription}</p> */}

            {/* <p>{speechInput}</p> */}
            {/* <ReactMic
                record={true}
                onStop={handleRecordStop}
                mimeType="audio/wav"
            />
            <button onClick={handleTranscription}>Transcribe audio</button>
            {audioBlob && (
                <audio controls src={URL.createObjectURL(audioBlob)} />
            )}*/}
            {/* <div>  */}
            {/* {isRecording ? (
                <button onClick={handleRecord}>Stop recording</button>
            ) : (
                <button onClick={handleRecord}>Start recording</button>
            )} */}
            {/* <button onClick={handleRecord}>{isRecording ? 'Stop' : 'Record'}</button>
            <button onClick={handleSave} disabled={!audioBlob}>
                Save Audio
            </button>
            </div>
            <Button variant="primary" type="submit" onClick={respondAction}>
                Respond
            </Button>
            <div>
                {transcription && <p>{transcription}</p>}
            </div>
             */}
        </Container>
    );
}



// export function Chat() {
//     const [response, setResponse] = useState<JSX.Element | null>(null);
//     return (
//         <Container>
//             <Waitress state={null} dispatch={() => {}} {...{ response, setResponse }} />
//             <div>
//                 {response}
//             </div>
//             <Button variant="primary" type="submit" onClick={() => Waitress()}>
//                 Start
//             </Button>
//         </Container>
//     )
// }