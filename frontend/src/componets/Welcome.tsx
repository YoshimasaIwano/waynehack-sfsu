import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { Conversation } from "./ChatGPT";

export function Welcome() {
    const navigate = useNavigate();
    return (
        <Button variant="primary" type="submit" onClick={() => navigate('/chat')}>
            Start
        </Button>
        // <Button variant="primary" type="submit" onClick={() => Conversation()}>
        //     Start
        // </Button>
    )
}