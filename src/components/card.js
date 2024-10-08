import React from 'react';
import YoutubeIcon from './youtube_icon'
import './card.css'



const Card = (props) => {

    const openPdf = () => {
        window.open(process.env.PUBLIC_URL + (props.pdfAddress));
    }
    return (
        <div className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5' onClick = {openPdf}>
            <h1>{props.id}</h1>
            <img alt = "musicsheet" src = {process.env.PUBLIC_URL + (props.imageAddress)} width = '200' height = '300' /> 
            <p>
                {props.musicName}
            </p>
            <YoutubeIcon youtubeAddress = {(props.youtubeAddress)}/>
        </div>
    );
}

export default Card;