import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { Conversation } from "./ChatGPT";

export function Chat() {
    const [response, setResponse] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const fetchConversation = async () => {
            const conversation = await Conversation();
            setResponse(conversation);
        };
        fetchConversation();
    }, []);
    return (
        <Container>
            <div>
                {response}
            </div>
        </Container>
    )
}