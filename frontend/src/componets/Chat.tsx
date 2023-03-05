import React from "react";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import { ChatGPT, ParamProps } from "./ChatGPT";
import TextInput from "./TextInput";

export type MessageProps = {
    role: string;
    content: string;
}

const PARAMS = {
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
    }]
}

function Waitress({ response }: { response: string }): JSX.Element {
    return (
        <p className="text-left bg-black-20 ml-0">
            {response}
        </p>
    )
}

function Customer({ response }: { response: string }): JSX.Element {
    return (
        <p className="text-right bg-black-10 mr-0">
            {response}
        </p>
    )
}

function Conversations( { responses } : { responses: MessageProps[] }): JSX.Element {
    return (
        <div className="mt-3 rounded-lg ">
            {responses.map((response)=> {
                if (response.role == "waitress") {
                    return <Waitress response={response.content}/>
                } else if (response.role == "customer") {
                    return <Customer response={response.content}/>
                }
            })
            }
        </div>
    )
}

export function Chat() {
    const [waitress, setWaitress] = useState<string>("");
    // const [customer, setCustomer] = useState<string>("");
    const [conversation, setConversation] = useState(PARAMS);
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    // if (!waitress) {
    //     fetchConversation();
    // }

    // useEffect(()=> {
    //     fetchConversation();
    // },[])

    // useEffect(() => {
    // },[conversation])

    useEffect(()=> {
        // setConversation(conversation);
        return () => {
            fetchConversation();
            setText("");
        }
    }, [conversation])

    async function fetchConversation() {
        const newCoversation: ParamProps = await ChatGPT(conversation);
        setConversation(newCoversation);
        console.log(newCoversation);
    };

    const handleClick = () => {
        conversation.messages.push({role: "user",content: text});
        // setText("");
        // setCount(count+1);
        console.log(count);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    
    
    return (
        <Container>
            <Button variant="primary" type="submit" onClick={handleClick}>
                Start Order
            </Button>
            <Conversations responses={conversation.messages}/>
            <TextInput
                label="Enter Text"
                value={text}
                onChange={handleTextChange}
                placeholder="Type here..."
            />
        </Container>
    );
}
