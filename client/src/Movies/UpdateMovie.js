import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function UpdateMovie(props){
    const [movie, setMovie]= useState({
        title: '',
        director: '',
        metaScore: 0,
        actor: '',
        stars: []
    })

    const {id} = 

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            console.log(res)
            setMovie(res.data)
        })
    }, [])

    const handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
        return(
            <div>
                <input type="text" name="title"  value={movie.title}/>
                <input type="text" name="director" value={movie.director} />
                <input type="number" name="metascore" value={movie.metaScore} />
                <input type="text" name="actor" value={movie.actor} />
                <input type="text" name="stars" value={movie.stars}/>
                <button>Update Movie</button>
            </div>
        )
}

export default UpdateMovie