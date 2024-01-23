import './index.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

// main app
function App() {
    const [renderDialog, setRender] = useState(false)
    const clickButton = () => {
        setRender(true)
    }
    const closeDialog = () => {
        setRender(false)
    }
    return (
        <div className="app">
            <div className="column">
            const appButton = <button onClick={clickButton}>Open photo entry dialog</button>
            {renderDialog && <Dialog onClose={closeDialog}></Dialog>}
            </div>
            <div className="column">
                <Card>
                    <Image></Image>
                </Card>
            </div>
        </div>
    )
}
// dialog box
function Dialog(props) {
    return <form>
        <label>
            Photo:
            <input type="text" placeholder="Photo URL"/>
        </label>
        <label>
            Description:
            <input type="text" placeholder="Enter description"/>
        </label>
        <button onClick={props.onClose}>Cancel</button>
        <button>Submit</button>
    </form>
}

// card
function Card(props) {
    return <div className="card">
        {props.children}
        <button>X</button>
    </div>
}

// image 
function Image(props) {
    return <div className="image">{props.children}</div>
}
const imageList = []

// root stuff 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(App)