import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Chai from './chai.jsx'


function MyApp(){
  const username="oneza"
  return(
    <div style={{backgroundColor: 'pink'}}>
      <h1>This is the MyApp function i made inside the main.jsx</h1>
      <p>i didnt import it from the component</p>
      <p>developer: {username}</p>
    </div>
  )
}

// {reactElement1} & {reactElement2} → JavaScript variables containing React elements.

const site="browsing site"
const reactElement1=(
  <a href='http://google.com' target='_blank'>GOOGLE</a>
)

const reactElement2=React.createElement(
  "a",
  {href:'http://google.com', target:'_blank'},
  "GOOGLE ONCE AGAIN ",
  site
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Chai />
    <MyApp />
    {reactElement1}
    <br/>
    {reactElement2}
  </StrictMode>,
)
