import './index.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

// main app
function App() {
    const [renderDialog, setRender] = useState(false)
    const [photoContent, setContent] = useState({ photo: '', description: '' })
    const clickButton = () => {
        setRender(true)
    }
    const closeDialog = () => {
        setRender(false)
    }
    const submit = (photo, description) => {
        setContent( { photo, description })
    }
    const appButton = <button onClick={clickButton}>Open photo entry dialog</button>
    return (
        <div className="app">
            <div className="column">
            {appButton}
            {renderDialog && <Dialog onClose={closeDialog}onSubmit={submit}></Dialog>}
            </div>
            <div className="column">
                <Card>
                    photoContent={photoContent}
                </Card>
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
    return <form className="dialog" onSubmit={handleSubmit}>
        <label>
            Photo:
            <input type="text" placeholder="Photo URL" value={photo} required/>
        </label>
        <label>
            Description:
            <input type="text" placeholder="Enter description" value={description} required/>
        </label>
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

