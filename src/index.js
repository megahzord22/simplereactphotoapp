import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

// main app
function App() {
    return (
        <div className="app">
            <div className="column"></div>
            <div className="column"></div>
        </div>
    )
}
// button
const AppButton = <button>Generate Images</button>
// dialogue box
const Dialogue = <form>
    <input></input>
    <input></input>
    </form>
function showDialogue(Dialogue) {
    if (Dialogue) {
        return Dialogue
    } else {
        return null
    }
}
// card
function Card(props) {
    return <div className="card">
        {props.children}
       // <img></img>
       // <p></p>
       // <button>X</button>
    </div>
}
const imageList = []

// root stuff 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(AppButton)