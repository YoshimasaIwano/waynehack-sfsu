import React from "react";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
        <div className="d-flex justify-content-start mb-4">
            <div className="p-2 bg-black-20 rounded">
                <p className="text-left mb-0">{response}</p>
            </div>
        </div>
    )
}

function Customer({ response }: { response: string }): JSX.Element {
    return (
        <div className="d-flex justify-content-end mb-4">
            <div className="p-2 bg-black-10 rounded">
                <p className="text-right mb-0">{response}</p>
            </div>
        </div>
    )
}

function Conversations({ responses }: ConversationProps): JSX.Element {
    return (
        <div className="mt-2 rounded-lg ">
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

const allResponses: Array<ResponseProps> = []

export function Chat() {
    const [waitress, setWaitress] = useState<string>("");
    const [customer, setCustomer] = useState<string>("");
    const [text, setText] = useState('');

    const navigate = useNavigate();
    if (waitress.includes("Thank you")) {
        navigate('/chat')
    }

    useEffect(()=> {
        setWaitress("Hello, how can I help you?");
        return ()=> {

        }
    },[])

    useEffect(()=> {
        if (customer) {
            fetchConversation();
        }
    },[customer])

    useEffect(()=> {
        if (waitress){
            const newResponse: ResponseProps = {
                who: "waitress",
                text: waitress
            }
            allResponses.push(newResponse);
            PARAMS.messages.push(
                {
                    role: "assistant",
                    content: waitress,
                }
            )
        } 
        setText("");
    }, [waitress])

    async function fetchConversation () {
        const response = await ChatGPT();
        setWaitress(response);
    };

    const handleClick = () => {
        const newResponse: ResponseProps = {
            who: "customer",
            text: text
        }
        allResponses.push(newResponse);
        PARAMS.messages.push(
            {
                role: "user",
                content: text,
            }
        );
        setCustomer(text);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    
    return (
        <Container>
            <Conversations responses={allResponses}/>
            <div className="row">
                <div className="col-9">
                    <TextInput
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Type here..."
                    />
                </div>
                <div className="col-3 ">
                    <Button variant="primary" type="submit" onClick={handleClick} className="w-100 rounded">
                        Send
                    </Button>
                </div>
            </div>
        </Container>
    );
}
