import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { redirect, useNavigate } from 'react-router-dom';
import './PagAudio.css';
import { IconName } from "react-icons/fi";
import ReactAudioPlayer from 'react-audio-player';

export default function PagAudio(props) {

    const [DateConfi, setDateConfi] = useState(undefined);
    const navigate = useNavigate();
    const [date, setData] = useState(undefined);


    return (
        <section id='PagAudio'>
            <div>
                <ReactAudioPlayer id='player'
                    src="https://carolaudio.s3.amazonaws.com/WhatsApp+Ptt+2022-10-19+at+13.27.57.mp3"
                    controls
                />
            </div>
        </section>

    )
}