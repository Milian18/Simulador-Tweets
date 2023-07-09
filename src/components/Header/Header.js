import React from "react";
import TwitterLogo from  '../../assets/img/twitter-logo.png'

import './Header.scss';

export default function Header(){
    return (
        <div className="header">
            <img src={TwitterLogo} alt="Tweet simulator"/>
            <h1>Tweets simulator</h1>
        </div>
    )
}