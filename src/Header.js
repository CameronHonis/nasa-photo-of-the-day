import React,{useState} from 'react'
function Header(props){
    return(
        <div className='header'>
            <img src='#' alt='logo'></img>
            <div className={props.type || ''}>
                <p>Home</p>
                <p>About</p>
                <p>Three</p>
                <p>FAQ</p>
            </div>
        </div>
    )
}

export default Header