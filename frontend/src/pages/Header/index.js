import React from 'react';
import './style.css';

export default function Header(props){ //Propridade dinâmica de acordo com a que o Header passar
    return (
        <header id="main-header">
            <h1>{props.title}</h1>
        </header>
    );
}