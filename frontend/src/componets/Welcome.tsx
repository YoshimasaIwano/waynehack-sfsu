import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { Conversation } from "./ChatGPT";

export function Welcome() {
    function setBodyClassName( className: string ) {
        // Add a unique class name to the body element
        document.body.className = className;
    }
    setBodyClassName("body-welcome");
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