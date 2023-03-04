  
export async function Dictating({params = {}, url}: any) {
    // const DEFAULT_PARAMS = {
    //     "file": url,
    //     "model": "whisper-1",
    // }
    const formData = new FormData();
    formData.append("file", url);
    formData.append("model", "whisper-1");
    // console.log(url);
    console.log(formData);
    // const params_ = { ...DEFAULT_PARAMS, ...params };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + String(process.env.REACT_APP_API_KEY)
        },
        body: JSON.stringify(formData)
    };
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', requestOptions);
    const data = await response.json();
    console.log(data);
    return data.text;
}


