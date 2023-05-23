import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from "@mui/material";
import './Page.css';

export default function Mainpage() {
    let navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [clicked, setClicked] = useState(false);
    const boardCode = "BOARD1234";

    const checkInput = () => {
        if (inputValue === "") setSearchResult(null);
        else if (inputValue !== boardCode) setSearchResult(false);
        else setSearchResult(true);
    }

    const clickBoard = () => {
        navigate('/join-a-board/boards');
    }

    const viewAnnouncement = () => {
        navigate('/join-a-board/announcements');
    }

    const clickAnnouncement = () => {
        if (clicked === false) {
            setClicked(true);
            let view = document.createElement("button");
            view.innerHTML = "VIEW";
            view.onclick = viewAnnouncement;
            view.style.position = "relative";
            view.style.top = "20px";

            let div = document.getElementById('announcement-1234');
            div.style.height = '100px';
            div.style.transitionDuration = '200ms';
            div.appendChild(view);
            setTimeout(() => {
                div.style.height = '60px';
                div.removeChild(div.lastChild);
                setClicked(false);
            }, 5000); // 5 seconds
        }
    }
    return (
    <div className="body">
        <div id="banner">
            <IconButton><MenuIcon /></IconButton>
            <input id="input-mainpage" placeholder="ENTER BOARD CODE" value={inputValue} onChange={(e) => setInputValue(e.target.value) }/>
            <IconButton id="button-mainpage" onClick={() => checkInput()}><SearchIcon /></IconButton>
            <IconButton><AccountCircleOutlinedIcon/></IconButton>
        </div>
        <div id="home-body">
        {(searchResult === false) ?
            <h2>BOARD NOT FOUND!</h2> :
                <>
                    <h3>YOUR BOARDS</h3>
                    <hr/>
                <div id='boards'>
                    <div id='board-1234' onClick={clickBoard}>BOARD 1234</div>
                </div>
                    <h3>ANNOUNCEMENTS</h3>
                    <hr/>
                <div id='announcements'>
                    {(localStorage.getItem("responded")==="true")?<p></p>:<div id='announcement-1234' onClick={clickAnnouncement}>WELCOME! ^o^ CLICK ME!</div>}
                </div>
                </>
            }
        </div>
    </div>
    );
}