import { React } from "react";
import { useNavigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { IconButton } from "@mui/material";
import './Page.css';

export default function AnnouncementPage() {
    let navigate = useNavigate();

    const back = () => {
        navigate("/join-a-board/home");
    }

    const clickBtn = () => {
        console.log("button clicked");
    }

    return (
        <div className="body">
            <div id="banner">
                <IconButton onClick={back}><ArrowBackOutlinedIcon /></IconButton>
                <div id="board-1234"><h3>BOARD 1234</h3></div>
                <IconButton><AccountCircleOutlinedIcon/></IconButton>
            </div>
            <div id="announcement-body">
                <div id="announcement-1234">
                    <p>
                        WELCOME! :D
                        <br />
                        <br/>
                        This is a sample announcement! I don't really have anything to announce...
                        So! I'll just ask you. How are you today? :{">"}
                        <br /><br/>
                        I hope you're taking breaks! Take a second to just, take everything in, observe trees, breathe in and out.
                        <br /><br/>
                        You got this! Whatever you're going through right now, you will slay it!! I'm cheering for you!! ^o^
                        <br /><br/>
                        These are just colorful buttons. Pick a color and click to be able to respond to this announcement or mark it as read!!
                        It is very important that you do this ok! Click click click!! 
                        <br /><br />
                        Thank you so much for participating in this prototype test :{">"}
                        <br /><br/>
                    </p>
                    <button id="green" onClick={clickBtn}></button>
                    <button id="red" onClick={clickBtn}></button>
                    <button id="blue" onClick={clickBtn}></button>
                </div>
            </div>
        </div>
    )
}