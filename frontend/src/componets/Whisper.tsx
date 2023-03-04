  
export async function Dictating({params = {}, url}: any) {
    const DEFAULT_PARAMS = {
        "file": url,
        "model": "whisper-1",
    }
    const params_ = { ...DEFAULT_PARAMS, ...params };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(process.env.REACT_APP_API_KEY)
        },
        body: JSON.stringify(params_)
    };
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', requestOptions);
    const data = await response.json();
    console.log(data);
    return data.text;
}


