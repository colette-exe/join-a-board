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

    // reference: https://spin.atomicobject.com/2022/03/09/create-export-react-frontend/
    const generateTextFile = () => {
        const info = { name: localStorage.getItem("name"), time: localStorage.getItem("response-date") };
        const fileData = JSON.stringify(info);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "join-a-board-info.md";
        link.href = url;
        link.click();
    }

    const clickBtn = () => {
        console.log("button clicked");
        // stop timer
        clearTimeout(localStorage.getItem("timer"));
        localStorage.removeItem("timer");

        // store date
        localStorage.setItem("response-date", new Date());

        // download text file
        generateTextFile();

        // remove local storage items
        localStorage.removeItem("response-date");
        localStorage.removeItem("name");

        localStorage.setItem("responded", true);
        navigate("/join-a-board/home");
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
                        After clicking a button, a file will be downloaded. This just contains the time you clicked the button and the name you entered. Send the file downloaded to me!
                        <br /><br />
                        Thank you so much for participating in this prototype test :{">"}
                        <br /><br/>
                    </p>
                    <button id="green" onClick={clickBtn}>CLICK ME</button>
                    <button id="red" onClick={clickBtn}>CLICK ME</button>
                    <button id="blue" onClick={clickBtn}>CLICK ME</button>
                </div>
            </div>
        </div>
    )
}