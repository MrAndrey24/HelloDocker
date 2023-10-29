import { useState, useEffect } from "react";

function Form(){

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
    
        fetch(`${import.meta.env.VITE_API_URL}/api/v1/games`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name })
        })
            .then(response => response.json())
            .then(_id => setGames(x => [...x, { _id, name }]))
            .then(() => e.target.name.value = "")
        }
        const [games, setGames] = useState([])
        useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/v1/games`)
            .then((response) => response.json())
            .then((data) => setGames(data))
        }, [])

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" />
        </form>
        <ul className="game-list">
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
        </>
    )
}

export default Form