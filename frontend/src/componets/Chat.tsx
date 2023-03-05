import React from "react";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import { ChatGPT, PARAMS } from "./ChatGPT";
import TextInput from "./TextInput";

type ResponseProps = {
    who: string,
    text: string,
}

type ConversationProps = {
    responses: Array<ResponseProps>;
}

function Waitress({ response }: { response: string }): JSX.Element {
    return (
        <p className="text-left rounded-lg bg-black-20">
            {response}
        </p>
    )
}

function Customer({ response }: { response: string }): JSX.Element {
    return (
        <p className="text-right rounded-lg bg-black-40">
            {response}
        </p>
    )
}

function Conversations({ responses }: ConversationProps): JSX.Element {
    return (
        <div className="mt-2">
            {responses.map((response)=> {
                if (response.who == "waitress") {
                    return <Waitress response={response.text}/>
                } else if (response.who == "customer") {
                    return <Customer response={response.text}/>
                }
            })
            }
        </div>
    )
}

let allResponses: Array<ResponseProps> = []


const waitress: string = "";
const customer: string = "";

export function Chat() {
    const [waitress, setWaitress] = useState<string>("");
    const [customer, setCustomer] = useState<string>("");
    const [text, setText] = useState('');

    useEffect(()=> {
        const newCResponse: ResponseProps = {
            who: "customer",
            text: customer
        }
        allResponses.push(newCResponse);
        PARAMS.messages.push(
            {
                role: "user",
                content: customer,
            }
        );
        setCustomer(() => "");
    },[customer])

    useEffect(() => {
        const newWResponse: ResponseProps = {
            who: "waitress",
            text: waitress
        }
        allResponses.push(newWResponse);
        PARAMS.messages.push(
            {
                role: "assistant",
                content: waitress,
            }
        )
    },[waitress])

    async function fetchConversation () {
        const response = await ChatGPT();
        setWaitress(() => response);
    };

    const handleClick = () => {
        setCustomer(() => text);  
        fetchConversation();
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    
    
    return (
        <Container>
            <Button variant="primary" type="submit" onClick={handleClick}>
                Start Order
            </Button>
            <Conversations responses={allResponses}/>
            <TextInput
                label="Enter Text"
                value={text}
                onChange={handleTextChange}
                placeholder="Type here..."
            />
        </Container>
    );
}
