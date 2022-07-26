import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import Me from "../assets/images/profile-img.png";


const Box = styled(motion.div)`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 55vw;
    height: 55vh;
    display: flex;
    background: linear-gradient(
        to right,
        ${props => props.theme.text} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
            to right,
            ${props => props.theme.text} 50%,
            ${props => props.theme.text} 50%) top;
    
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.text};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;

    @media (max-width: 425px) {
        width: 80vw;
        height: 20vh;
    }
`

const SubBox = styled.div`

    width: 100%;
    position: relative;
    display: flex;
    background-color: ${props => props.theme.body};

    ${'' /* .pic {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        height: auto;
    } */}

    @media (max-width: 425px) {
        background: transparent;
    }
`

const Text = styled.div`

    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.text};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & > *:first-child {
        margin-bottom: 2rem;
    }

    & > *:last-child {
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
        margin-top: 2rem;
    }
`


function Intro() {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Parth Patel.</h3>
                    <h6>I design and code simple yet beautiful websites.</h6>
                </Text>
            </SubBox>
            {/* <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox> */}
        </Box>
    );
}

export default Intro;