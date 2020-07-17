import React,{useState} from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2% 5%;

`
const LinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;

`
const LinksP = styled.p`
    color: white;
    font-size: 2rem;
    font-family: Arial;
    background: rgba(255,255,255,.2);
    padding: 5px 10px;
    border-radius: 15px;
    &:hover{
        background: rgba(255,255,255,.5);
        cursor: pointer;
    }
`
function Header(props){
    return(
        <HeaderDiv className='header'>
            <img src='#' alt='logo'></img>
            <LinksDiv className={props.type || ''}>
                <LinksP>Home</LinksP>
                <LinksP>About</LinksP>
                <LinksP>Three</LinksP>
                <LinksP>FAQ</LinksP>
            </LinksDiv>
        </HeaderDiv>
    )
}

export default Header