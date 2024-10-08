import React from 'react';
import './youtube_icon.css'


const YoutubeIcon = (props) => {
    const openYoutube = () => {
        window.open(props.youtubeAddress);
    }
    return (
    <div onClick = {openYoutube} className = "youtubeIconContainer">
        <img alt = "youtubeicon" src = {process.env.PUBLIC_URL + '/assets/icons/youtubeIcon.png'} width = '40' height = '40' /> 
    </div>
    )
}

export default YoutubeIcon