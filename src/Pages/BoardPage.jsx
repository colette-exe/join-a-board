import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from "@mui/material";
import './Page.css';

export default function BoardPage() {
    let navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const viewAnnouncement = () => {
        navigate('/join-a-board/announcements');
    }

    const back = () => {
        navigate("/join-a-board/home");
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
                <IconButton onClick={back}><ArrowBackOutlinedIcon /></IconButton>
                <div id="board-1234"><h3>BOARD 1234</h3></div>
                <IconButton><AccountCircleOutlinedIcon/></IconButton>
            </div>
            <div id="board-body">
            <h3>ANNOUNCEMENTS</h3>
                <hr/>
                <div id='announcements'>
                <div id='announcement-1234' onClick={clickAnnouncement}>WELCOME! ^o^ CLICK ME!</div>
                </div>
            </div>
        </div>
    );
}