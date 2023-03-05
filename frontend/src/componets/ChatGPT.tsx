

export const PARAMS = {
    "model": "gpt-3.5-turbo",
    "temperature": 0.9,
    "max_tokens": 1024,
    "messages": [{
        role: "assistant", 
        content: `
        Could you act as if you were a cashier at the restaurant? 
        Note that I'll be a customer.
        This is the menu.
        1. hamburger $7
        2. cheese hamburger $8
        3. vegan burger $9
        4. french fries $4
        4. drink $2
        the set of any hamburger + french fries + drink is $11
        Just say "Hello, how can I help you today?

        When an order is done, please confirm the order.
        Finally, you should say Thank you.
        
        `
    }],
}
  
export async function ChatGPT() {
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
