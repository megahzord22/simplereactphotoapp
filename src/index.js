import './index.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

// main app
function App() {
    const [renderDialog, setRender] = useState(false)
    const [imageList, setList] = useState([])
    const [keyNumber, setNumber] = useState(1)
    const deleteImage = (number) => {
        setList((prevList) => prevList.filter((image) => image.number !== number))
    }
    const clickButton = () => {
        setRender(true)
    }
    const closeDialog = () => {
        setRender(false)
    }
    const submit = (photo, description) => {
       const newImage = {photo, description, number: keyNumber}
        setList((previous) => [...previous, newImage])
        setNumber((prevNumber) => prevNumber + 1)
        setRender(false)
    }
    const appButton = <button onClick={clickButton}>Open photo entry dialog</button>
    return (
        <div className="app">
            <div className="column">
            {appButton}
            {renderDialog && <Dialog onClose={closeDialog}onSubmit={submit}></Dialog>}
            </div>
            <div className="column">
                {imageList.slice().reverse().map((image) => (
                <Card key={image.number} photoContent={image} onDelete={deleteImage}>
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
    const [warning, setWarning] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (photo !== '' && description !== '') {
            props.onSubmit(photo, description)
            setWarning(false) }
        else { 
            setWarning(true)
        }
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
            <input type="text" placeholder="Photo URL" value={photo} onChange={savePhoto}/>
        </label>
        <br></br>
        <br></br>
        <label>
            Description: 
            <input type="text" placeholder="Enter description" value={description} onChange={saveDescription}/>
        </label>
        <br></br>
        <br></br>
        {warning && <p className="newWarning">You need to include a URL and description.</p>}
        <button onClick={props.onClose}>Cancel</button>
        <button type="submit">Submit</button>
    </form>
}

// card
function Card(props) {
    const handleX = () => {
        props.onDelete(props.photoContent.number)
    }
    return <div className="card">
        {props.children}
        <button onClick={handleX}>X</button>
    </div>
}

const imageList = []

// root stuff
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

