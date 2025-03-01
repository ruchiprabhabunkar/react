import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
const ReactElement = {
  type: 'a',
  props: {
      href: 'htttps://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement = (
  <a href='htttps://google.com' target='_blank'>
    Visit Google
  </a>
)

const anotherUser = "chai or react"

const reactElement = React.createElement(
  'a',
  { href:'htttps://google.com',target: '_blank'},
  'click me to visit google',
  anotherElement
)


createRoot(document.getElementById('root')).render(
reactElement
)

