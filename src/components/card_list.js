import React from 'react';
import Card from './card.js';


const CardList = (props) => {
    const cardList = props.songs.map((song, index) => {return <Card
        key = {song.id}
        imageAddress = {song.imageAddress}
        pdfAddress = {song.pdfAddress}
        musicName = {song.name}
        youtubeAddress= {song.youtubeAddress}
        />})
    return (
        <div>
            {cardList}
        </div>
    
    );
}

export default CardList;