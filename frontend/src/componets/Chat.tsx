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
        <p className="text-left bg-black-20">
            {response}
        </p>
    )
}

function Customer({ response }: { response: string }): JSX.Element {
    return (
        <p className="text-right bg-black-10">
            {response}
        </p>
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


const waitress: string = "";
const customer: string = "";

export function Chat() {
    const [waitress, setWaitress] = useState<string>("");
    const [customer, setCustomer] = useState<string>("");
    const [text, setText] = useState('');

    useEffect(()=> {
        fetchConversation();
        console.log(PARAMS)
        return ()=> {
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
            setText("");
        }
    },[customer])

    async function fetchConversation () {
        const waitress = await ChatGPT();
        setWaitress(waitress);
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

    

    // const [input, setInput] = useState('');
    // const [response, setResponse] = useState('');


    // const generateResponse = async (customer: string) => {
    //     const newCResponse: ResponseProps = {
    //         who: "customer",
    //         text: customer
    //     }
    //     allResponses.push(newCResponse);
    //     PARAMS.messages.push(
    //         {
    //             role: "user",
    //             content: customer,
    //         }
    //     );
    //     const waitress = await ChatGPT();
    //     setResponse(waitress);
    //     return () => {
    //         const newWResponse: ResponseProps = {
    //             who: "waitress",
    //             text: waitress
    //         }
    //         allResponses.push(newWResponse);
    //         PARAMS.messages.push(
    //             {
    //                 role: "assistant",
    //                 content: waitress,
    //             }
    //         )
    //         console.log(PARAMS.messages)
    //     }
        
    // };
    
    // const handleChange = ((event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value));
    
    // useEffect(() => {
    //     handleSubmit
    // },[])

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     await generateResponse(input);
    //     setInput('');
    // };
    
    return (
        <Container>
            {/* <Button variant="primary" type="submit" onClick={handleClick}>
                Start Order
            </Button> */}
            <Conversations responses={allResponses}/>
            <TextInput
                value={text}
                onChange={handleTextChange}
                placeholder="Type here..."
                onSubmit={handleClick}
            />
            <p>
                {customer}
                {waitress}
            </p>
        </Container>
    );
}
