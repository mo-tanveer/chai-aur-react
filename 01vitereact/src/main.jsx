import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App || </h1>
        </div>
    )
}

//doesnt work 
// const ReactElement = {
//     type : 'a',
//     props : {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = " chai aur react"
const reactElement = React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    "click me to visit google",
    anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // MyApp() // its legal but dont write in this way
  
     reactElement
    // <App/>
)
