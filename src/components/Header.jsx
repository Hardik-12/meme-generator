// eslint-disable-next-line no-unused-vars
import React from "react";
import IMAGES from "../assets/images";





export default function Header(){
    return (
        <nav className="navbar">
            <img src={IMAGES.image1} alt="Troll-Face" className="nav-img" />
            <h1 className="nav-title">Meme Generator</h1>
            <p className="nav-project">React Course - Project 3</p>
        </nav>
    )
}