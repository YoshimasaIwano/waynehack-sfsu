import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react";

import menuImage from '../..//src/images/DALL·E 2023-03-05 09.38.50 - a image that includes hamburger, fries, and drinks.png';

const menu: string = menuImage;


export function Welcome() {
    function setBodyClassName( className: string ) {
        // Add a unique class name to the body element
        document.body.className = className;
    }
    setBodyClassName("body-welcome");
    const navigate = useNavigate();

    const FullScreenContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 105vh;
        width: 125vh;
        `;

    const StyledButton = styled(Button)`
        font-size: 18px;
        padding: 12px 24px;
        border-radius: 12px;
        `;

        const [show, setShow] = useState(false);
        
        function handleClose() {
            setShow(false);
        }
        function handleShow() {
            setShow(true);
        }
         
        
    
    return (
        <motion.div 
            initial={{
                opacity: 0,
                y: -100,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <FullScreenContainer>
                <StyledButton variant="primary" type="submit" onClick={() => navigate('/chat')}>
                    Start to Order
                </StyledButton>
            </FullScreenContainer>
        </motion.div>
    )
}