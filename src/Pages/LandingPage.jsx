import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import './Page.css';

export default function LandingPage() {
    let navigate = useNavigate();

    // for board code inputs
    const [inputValue, setInputValue] = useState("");
    const [name, setName] = useState("");
    const boardCode = "BOARD1234";

    // for the reminder
    const date = new Date();
    const [today, setToday] = useState(new Date().getTime()); // time today in milliseconds
    const deadline = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59).getTime(); // deadline in milliseconds

    const convertToMs = (hour) => {
        return hour * 60 * 60 * 1000;
    }

    const updateInterval = () => {
        setToday(new Date().getTime());
        const timeLeft = deadline - today;
        
        // check for time remaining
        if (timeLeft >= convertToMs(15)) { // greater than 15 hrs remaining
            return convertToMs(5);
        } else if (timeLeft < convertToMs(15) && timeLeft >= convertToMs(10)) {  // greater than 10 hrs remaining
            return convertToMs(3);
        } else if (timeLeft < convertToMs(10) && timeLeft >= convertToMs(5)) {  // greater than 5 hrs remaining
            return convertToMs(1);
        } else if (timeLeft < convertToMs(5) && timeLeft >= convertToMs(1)) { // less than 5 hrs remaining
            return convertToMs(0.5);
        } else {
            return convertToMs(0.20);
        }
    };

    const checkInput = () => {
        if (inputValue === boardCode && name !== "") {
            // interval
            var int = updateInterval();
            var timer;

            // post notification
            Notification.requestPermission().then(perm => {
                if (perm === "granted") {
                    // notify again after some time
                    function postNotif() {
                        new Notification("Don't forget to respond!", {
                            body: "You have an unread announcement!\n\nOn the announcments section, click on the announcement and press 'VIEW'.\nRespond to the announcement by clicking any button!!\n\nThis is very important so don't forget!\n", // more info
                            icon: "logo-nameless.png",
                            silent: false,
                            vibrate: true,
                            tag: "Respond",
                        })
                        console.log(int);
                        // change interval
                        // updateInt(20000);
                        int = int-2000;
                        timer = setTimeout(postNotif, int);
                        localStorage.setItem("timer", timer);
                    }
                    postNotif();
                }
            })
            // store name to localstorage
            localStorage.setItem("name", name);

            // and navigate to next page
            navigate('/join-a-board/home');
        } else if (inputValue!==boardCode) {
            alert("Board doesn't exist!");
        } else if (name!=="") {
            alert("Enter name!");
        } else {
            alert("Enter values!");
        }
    }

    return (
        <div className="body">
            <img id="logo" src={logo} />
            <input id="name-landpage" placeholder="ENTER NAME" value={name} onChange={(e) => setName(e.target.value) }/>
            <input id="input-landpage" placeholder="ENTER BOARD CODE" value={inputValue} onChange={(e) => setInputValue(e.target.value) }/>
            <button id="button-landpage" onClick={checkInput}>SUBMIT</button>
        </div>
    );
}