import './index.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

// main app
function App() {
    const [renderDialog, setRender] = useState(false)
    const [photoContent, setContent] = useState({})
    const [imageList, setList] = useState([])
    const [keyNumber, setNumber] = useState(1)
    const clickButton = () => {
        setRender(true)
    }
    const closeDialog = () => {
        setRender(false)
    }
    const submit = (photo, description) => {
       const newImage = {photo, description, number: keyNumber}
        setContent( { newImage })
        setList((previous) => [...previous, newImage])
        setNumber((prevNumber) => prevNumber + 1)
    }
    const appButton = <button onClick={clickButton}>Open photo entry dialog</button>
    return (
        <div className="app">
            <div className="column">
            {appButton}
            {renderDialog && <Dialog onClose={closeDialog}onSubmit={submit}></Dialog>}
            </div>
            <div className="column">
                {imageList.map((image) => (
                <Card key={image.number} photoContent={image}>
                    <img src={image.photo}></img>
                    <p>{image.description}</p>
                </Card>))}
            </div>
        </div>
    )
}

// dialog box
function Dialog(props) {
    const [photo, setPhoto] = useState('')
    const [description, setDescribe] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(photo, description)
    }
    function savePhoto(event) {
        setPhoto(event.target.value)
    }
    function saveDescription(event) {
        setDescribe(event.target.value)
    }
    return <form className="dialog" onSubmit={handleSubmit}>
        <label>
            Photo: 
            <input type="text" placeholder="Photo URL" value={photo} onChange={savePhoto} required/>
        </label>
        <br></br>
        <label>
            Description: 
            <input type="text" placeholder="Enter description" value={description} onChange={saveDescription} required/>
        </label>
        <br></br>
        <button onClick={props.onClose}>Cancel</button>
        <button type="submit">Submit</button>
    </form>
}

// card
function Card(props) {
    return <div className="card">
        {props.children}
        <button>X</button>
    </div>
}

const imageList = []

// root stuff
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

