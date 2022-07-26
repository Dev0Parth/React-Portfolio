import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";


const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    & > *:not(:last-child) {
        margin: 0.5rem 0;
    }

    @media (max-width: 655px) {
        display: none;
    }
`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`

function SocialIcons(props) {
    return (
        <Icons>
            <div>
                <NavLink style={{ color: 'inherit' }} to={{ pathname: "https://github.com/dev0parth" }} target="_blank" >
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} to={{ pathname: "https://github.com/dev0parth" }} target="_blank" >
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} to={{ pathname: "https://github.com/dev0parth" }} target="_blank" >
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} to={{ pathname: "https://github.com/dev0parth" }} target="_blank" >
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </div>

            <Line color={props.theme} />
        </Icons>
    );
}

export default SocialIcons;