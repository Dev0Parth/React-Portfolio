import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import LogoComponent from "../subComponents/LogoComponent";
// import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
// import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import MainBg from "../assets/images/main-bg.png";
import SecondBg from "../assets/images/second-bg.png";
import ThirdBg from "../assets/images/third-bg.png";


const MainContainer = styled.div`

    
    position: relative;
    background: url(${MainBg}) no-repeat center fixed;
    background-color: #000000;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    

    h2,h3,h4,h5,h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`

const Container = styled.div`
    padding: 2rem;
`

const Contact = styled(NavLink)`

    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;

    & > *:hover {
        transform: translateY(0px) scale(1.1) translateZ(0px);
    }
    
`

const Blog = styled(NavLink)`

    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;

    & > *:hover {
        transform: translateY(0px) scale(1.1) translateZ(0px);
    }

    @media (max-width: 425px) {
        display: none;
    }
`

const Work = styled(NavLink)`

    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    left: calc(1rem + 2vw);
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;
    
    & > *:hover {
        transform: translateY(0px) scale(1.1) translateZ(0px);
    }

    @media (max-width: 425px) {
        display: none;
    }
`

const BottomBar = styled.div`

    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;

    @media (max-width: 425px) {
        display: none;
    }
`

const About = styled(NavLink)`

    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
    
    & > *:hover {
        transform: translateY(0px) scale(1.1) translateZ(0px);
    }
`

const Skills = styled(NavLink)`

    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
    
    & > *:hover {
        transform: translateY(0px) scale(1.1) translateZ(0px);
    }
`

const rotate = keyframes`

    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`

// const Center = styled.button`

//     position: absolute;
//     top: ${props => props.click ? '-85%' : '50%'};
//     left: ${props => props.click ? '-92%' : '50%'};
//     transform: translate(-50%, -50%);
//     border: none;
//     outline: none;
//     background-color: transparent;
//     cursor: pointer;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     transition: all 1s ease;
//     z-index: 40;

//     & > :first-child{
//         position: relative;
//         top:1rem;
//         left: 0;
//         font-size: ${props => props.click ? '2.5rem' : '5rem'};
//         animation: ${rotate} infinite 1.5s linear;
//     }

//     & > :last-child{
//     display: ${props => props.click ? 'none' : 'inline-block'};
//     padding-top: 3rem;
//     color: ${props => props.theme.text};
// }
// `

// const DarkDiv = styled.div`

//     position: absolute;
//     background-color: #000000;
//     top: 0;
//     bottom: 0;
//     right: 50%;
//     width: ${props => props.click ? '50%' : '0%'};
//     height: ${props => props.click ? '100%' : '0%'};
//     z-index: 1;
//     transition: height 0.5s ease, width 1s ease 0.5s;
// `
const BgRotateRight = styled.div`

    position: relative;
    background: url(${SecondBg}) no-repeat center fixed;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 1;

    animation: ${rotate} 30s infinite linear;
`

const leftRotate = keyframes`

    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(-360deg);
    }
`

const BgRotateLeft = styled.div`

    position: relative;
    background: url(${ThirdBg}) no-repeat center fixed;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 1;

    animation: ${leftRotate} 15s infinite linear;
`


function Main() {

    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <BgRotateRight>
                <BgRotateLeft />
            </BgRotateRight>

            <Container>
                {/* <PowerButton /> */}
                <LogoComponent theme={"dark"} />
                <SocialIcons theme={"dark"} />

                {/* <Center click={click}>
                    <LogoComponent theme={"dark"} onClick={() => handleClick()} />
                    <span>click here</span>
                </Center> */}

                <Contact target="_blank" to={{ pathname: "mailto:patelparth2282001@gmail.com" }}>
                    <h2>
                        Say hi..
                    </h2>
                </Contact>

                <Blog to="/blog">
                    <h2>
                        Blog
                    </h2>
                </Blog>
                <Work to="/work">
                    <h2>
                        Work
                    </h2>
                </Work>

                <BottomBar>
                    <About to="/about">
                        <h2>
                            About.
                        </h2>
                    </About>
                    <Skills to="/skills">
                        <h2>
                            My Skills.
                        </h2>
                    </Skills>
                </BottomBar>

            </Container>

            <Intro />
        </MainContainer>
    );
}

export default Main;