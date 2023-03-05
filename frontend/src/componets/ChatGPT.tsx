
// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.REACT_APP_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export async function Conversation() {
//     const completion = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [{
//             role: "user", 
//             content: "Could you act as if you were a waitress at the restaurant? "
//         }],
//     });
//     console.log(completion.data.choices[0].message);
// } 
export let PARAMS = {
    "model": "gpt-3.5-turbo",
    "temperature": 0.9,
    "max_tokens": 516,
    "messages": [{
        role: "assistant", 
        content: `
        Could you act as if you were a cashier at the restaurant? 
        Note that I'll be a customer.
        This is the menu.
        1. hamburger $5
        2. cheese hamburger $6
        3. french fries $3
        4. drink $1
        the set of hamburger + french fries + drink is $8
        Just say "Hello, how can I help you today?
        
        `
    }],
}
  
export async function ChatGPT() {
    // const params_ = { ...DEFAULT_PARAMS, ...params };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(process.env.REACT_APP_API_KEY)
        },
        body: JSON.stringify(PARAMS)
    };
    const response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions);
    const data = await response.json();
    return data.choices[0].message.content;
}

// `
//                 Could you act as if you were a waitress at the restaurant? This is the menu.
//                 1. hamburger $5
//                 2. cheese hamburger $6
//                 3. french fries $3
//                 4. drink $1
//                 the set of hamburger + french fries + drink is $8
//                 In the end, you should confirm the order.
//                 I'll be a customer and will order a menu
//             `