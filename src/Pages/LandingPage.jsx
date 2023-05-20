import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import './Page.css';

export default function LandingPage() {
    let navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const boardCode = "BOARD1234";

    const checkInput = () => {
        if (inputValue === boardCode) {
            navigate('/join-a-board/home');
        } else {
            alert("Board doesn't exist!");
        }
    }

    return (
        <div className="body">
            <img id="logo" src={logo} />
            <input id="input-landpage" placeholder="ENTER BOARD CODE" value={inputValue} onChange={(e) => setInputValue(e.target.value) }/>
            <button id="button-landpage" onClick={() => checkInput()}>SUBMIT</button>
        </div>
    );
}