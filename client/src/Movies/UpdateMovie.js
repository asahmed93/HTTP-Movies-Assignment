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

    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            console.log(res)
            setMovie(res.data)
        })
    }, [movie, id])

    const handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios.put(`http://localhost:5000/api/movies/${id}`, movie)
        .then( res => {
            props.history.push(`http://localhost:5000/api/movies/${id}`)
        })
    }
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" name="title"  value={movie.title} onChange={handleChange}/>
                <input type="text" placeholder="director" name="director" value={movie.director} onChange={handleChange}/>
                <input type="number" placeholder="metascore" name="metascore" value={movie.metaScore} onChange={handleChange} />
                <input type="text" placeholder="actor" name="actor" value={movie.actor} onChange={handleChange}/>
                <button>Update Movie</button>
            </form>
        </div>
    )
}

export default UpdateMovie