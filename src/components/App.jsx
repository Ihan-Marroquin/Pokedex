import React, { useEffect } from 'react'
import axios from 'axios';
import '../App.css';

export function App(){
    
    function getRandomNumber (min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const [pokemon, setPokemon] = React.useState([])
    const [pokemon2, setPokemon2] = React.useState([])
    const [pokemon3, setPokemon3] = React.useState([])
    const [pokemon4, setPokemon4] = React.useState([])
    const [pokemon5, setPokemon5] = React.useState([])
    const [pokemon6, setPokemon6] = React.useState([])

    function logData (){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')
        .then(resp => {
            let random = getRandomNumber(0, resp.data.results.length)
            console.log(resp.data.results[random])
            axios.get(resp.data.results[random].url)
            .then(result =>{
                console.log(result.data);
                setPokemon([result.data])
            })  
        })
    }
    function logData2 (){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')
        .then(resp => {
            let random = getRandomNumber(0, resp.data.results.length)
            console.log(resp.data.results[random])
            axios.get(resp.data.results[random].url)
            .then(result =>{
                console.log(result.data);
                setPokemon2([result.data])
            })  
        })
    }
    function logData3 (){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')
        .then(resp => {
            let random = getRandomNumber(0, resp.data.results.length)
            console.log(resp.data.results[random])
            axios.get(resp.data.results[random].url)
            .then(result =>{
                console.log(result.data);
                setPokemon3([result.data])
            })  
        })
    }
    function logData4 (){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')
        .then(resp => {
            let random = getRandomNumber(0, resp.data.results.length)
            console.log(resp.data.results[random])
            axios.get(resp.data.results[random].url)
            .then(result =>{
                console.log(result.data);
                setPokemon4([result.data])
            })  
        })
    }
    function logData5 (){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')
        .then(resp => {
            let random = getRandomNumber(0, resp.data.results.length)
            console.log(resp.data.results[random])
            axios.get(resp.data.results[random].url)
            .then(result =>{
                console.log(result.data);
                setPokemon5([result.data])
            })  
        })
    }
    function logData6 (){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126')
        .then(resp => {
            let random = getRandomNumber(0, resp.data.results.length)
            console.log(resp.data.results[random])
            axios.get(resp.data.results[random].url)
            .then(result =>{
                console.log(result.data);
                setPokemon6([result.data])
            })  
        })
    }


    React.useEffect(() =>{
        logData()
        logData2()
        logData3()
        logData4()
        logData5()
        logData6()
    }, [])

    return (
        <div>
            <div>
                <h1 className='H1'>Ihan Gilberto Alexander Marroquin Sequen</h1>
            </div>
            <div className='Contenido'>
                <div className='Caja'>
                    {
                        pokemon.map((poke, index) => {
                            return (
                                <>
                                    <img src={poke.sprites.front_default} alt={pokemon}></img>
                                    <h1 key={index}>{poke.name}</h1>
                                </>
                            )
                        })
                    }
                    {
                        pokemon2.map((poke, index) => {
                            return (
                                <>
                                    <img src={poke.sprites.front_default} alt={pokemon}></img>
                                    <h1 key={index}>{poke.name}</h1>
                                </>
                            )
                        })
                    }
                </div>
                <div className='Caja'>
                    {
                        pokemon3.map((poke, index) => {
                            return (
                                <>
                                    <img src={poke.sprites.front_default} alt={pokemon}></img>
                                    <h1 key={index}>{poke.name}</h1>
                                </>
                            )
                        })
                    }
                    {
                        pokemon4.map((poke, index) => {
                            return (
                                <>
                                    <img src={poke.sprites.front_default} alt={pokemon}></img>
                                    <h1 key={index}>{poke.name}</h1>
                                </>
                            )
                        })
                    }
                </div>
                <div className='Caja'>
                    {
                        pokemon5.map((poke, index) => {
                            return (
                                <>
                                    <img src={poke.sprites.front_default} alt={pokemon}></img>
                                    <h1 key={index}>{poke.name}</h1>
                                </>
                            )
                        })
                    }
                    {
                        pokemon6.map((poke, index) => {
                            return (
                                <>
                                    <img src={poke.sprites.front_default} alt={pokemon}></img>
                                    <h1 key={index}>{poke.name}</h1>
                                </>
                            )
                        })
                    }
                </div>  
            </div>
        </div>
    )
}