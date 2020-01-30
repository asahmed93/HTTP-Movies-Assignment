import React from 'react';
import axios from 'axios';

class UpdateMovie extends React.Component{
    state = {
        title: '',
        director: '',
        metaScore: 0,
        actor: '',
        stars: []
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return(
            <div>
                <input type="text" name="title"  value={this.state.title}/>
                <input type="text" name="director" value={this.state.director} />
                <input type="number" name="metascore" value={this.state.metaScore} />
                <input type="text" name="actor" value={this.state.actor} />
                <input type="text" name="stars" value={this.state.stars}/>
                <button>Update Movie</button>
            </div>
        )
    }

}

export default UpdateMovie