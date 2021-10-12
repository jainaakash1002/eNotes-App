import React from 'react'
import enotes from "../assests/enotes.png";
import { AiFillGithub, AiFillHeart } from 'react-icons/ai';

const About = () => {

    return (
        <>
            <div className="d-flex flex-Direction about">
                <div className="container aboutus width">
                    <h1 style={{ "font-family": "-webkit-body" }} className="mt-3">Welcome to the eNotes App ;)</h1>
                    <h4 style={{ "font-family": "cursive" }} className="mt-3">You can save you notes here and can access from anywhere, anytime from any device.</h4>
                    <h6 className="footer">Made with&nbsp;<AiFillHeart size={25} color="red" title="MERN" />&nbsp;by&nbsp;<a href="https://jainaakash.netlify.app/" rel="noreferrer" target="_blank"><u>AAKASH JAIN</u></a><br />
                        If you want to share any idea regarding any improvement, you can contribte here<a href="https://github.com/jainaakash1002/eNotes-MERN-App" rel="noreferrer" target="_blank"><AiFillGithub size={30} color="black" /></a>
                    </h6>
                </div>
                <div className="width">
                    <img src={enotes} />
                </div>
            </div>
        </ >
    )
}

export default About
