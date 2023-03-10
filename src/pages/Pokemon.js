import React from 'react'
import { useState, useEffect } from "react"
import Dropdown from "../components/Dropdown";
import PokeCard from '../components/PokeCard';
import { getPokemonList, getPokemonDescription, getPokemonDescriptionUrl } from "../api/utils"


const style = {
    div: {
        display: "flex",
        backgroundColor: '#BBE6E4',
        width: "25rem",
        height: "45rem",
        justifyContent: "center",
        flexDirection: "column",
        // backgroundColor: 'blue',
        alignItems: "center",

    },
    centerDiv: {
        display: "flex",
        width: "20rem",
        height: "20rem",
        backgroundColor: 'white',
        paddingLeft: '15px',
        marginTop: "20px",
        justifyContent: "center",
        alignItems: "center",


    },
    drop: {
        display: "flex",
        // backgroundColor: 'blue',
        // paddingTop: '30px'
    },
    pokecards: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",


    },
    btn: {
        display: "flex",
        borderRadius: "10px",
        backgroundColor: 'white',
        marginTop: "10px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center"

    }
}

function Pokemon() {
    const [allPokemons, setAllPokemons] = useState([]);
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('');
    const [getWeight, setGetWeight] = useState('');
    const [getHeight, setGetHeight] = useState('');
    const [numberOfPokemons, setNumberOfPokemons] = useState('')
    const [currentPokemon, setCurrentPokemon] = useState(0)
    const [getAbilities, setGetAbilities] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemonList();
            const parsedData = data.map((pokemon) => ({ label: pokemon.name, value: pokemon.name, url: pokemon.url }))
            setAllPokemons(parsedData)


        }
        fetchData();
    }, [])

    useEffect(() => {
        const selectedPokemon = allPokemons[currentPokemon]
        handleChange(selectedPokemon)
        // console.log("se apeleaza", selectedPokemon)
        // console.log("se apeleaza allpok", allPokemons)
    }, [currentPokemon])

    const prevPage = () => {
        setCurrentPokemon(currentPokemon - 1)
        // console.log("it works")
    }

    const nextPage = () => {
        setCurrentPokemon(currentPokemon + 1)

    }

    const allPokemonsNum = () => {
        setNumberOfPokemons(allPokemons.length)
        // console.log("merge fmm", allPokemons.length)
    }



    const handleChange = async selectedOption => {

        const pokemonUrlInfo = await getPokemonDescriptionUrl(selectedOption?.url)

        const {
            species: { url: descripionUrl },
            sprites: { back_default },
            weight,
            height,
            abilities: { ability: name }
        }
            = pokemonUrlInfo

        const pokemonDescription = await getPokemonDescription(descripionUrl);
        // const pokemonWeight = await
        // console.log(abilities)
        // const pokemonNumber = await getPokemonList(name)
        setDescription(pokemonDescription)
        setImgUrl(back_default)
        setGetWeight(weight)
        setGetAbilities(name)
        setGetHeight(height)
        // setNumberOfPokemons(pokemonNumber)
        // console.log(weight)
    }

    return (
        <div className="POKEMON">
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <div style={style.div}>
                    <Dropdown
                        handleChange={handleChange}
                        setDescription={setDescription}
                        setImgUrl={setImgUrl}
                        allPokemons={allPokemons}
                        style={style.drop}

                    />
                    <div style={style.centerDiv} data-test="propurile">
                        <PokeCard
                            description={description}
                            imgUrl={imgUrl}
                            style={style.pokecards}
                        />
                    </div>
                    <div className="btn-logic" style={{ width: "160px", display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <button style={style.btn} onClick={prevPage} >Previous</button>
                            <button style={style.btn} onClick={nextPage}>Next</button>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <button style={style.btn} onClick={allPokemonsNum}>Show pokemon number</button>
                            <span>{numberOfPokemons}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <button style={{ height: "40px", marginTop: "10px", backgroundColor: "white", width: "200px" }} >Weight: {getWeight} and height: {getHeight}</button>
                        </div>
                        <span>show ability : {getAbilities}</span>
                        {/* <span>show height : {getHeight}</span> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
