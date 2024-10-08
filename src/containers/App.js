import React, {Component} from 'react';
import {songs} from '../songsinfo.js';
import CardList from '../components/card_list.js';
import SearchBox from '../components/search_box.js';
import ScrollList from '../components/scroll_list.js';
import './App.css';




class App extends Component {
    constructor () {
        super();
        this.state = {
            songs : songs,
            searchField : ''
        }
    }

    onSearchChange =  (event) => {
        this.setState ({
            searchField : event.target.value,
        });

    }
    render () {
    const filteredSongs = this.state.songs.filter((song)=>song.name.toLowerCase().includes(this.state.searchField.toLowerCase()) )
    return (
        <div className = 'tc'>
            <h1> 🎸Welcome to guitarists' world 🎸</h1>
            <h2> Enthusiasm is everything. It must be taut and vibrating like a guitar string.</h2>
            <SearchBox onSearch = {this.onSearchChange}/>
            <ScrollList>
                <CardList songs = {filteredSongs}/>
            </ScrollList>
            
        </div>
    
    );
    }


}


export default App;