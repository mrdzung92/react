
// import {useReducer,useState} from 'react'
// const useState = React.useState
// const useEffect = React.useEffect
// const useRef = React.useRef

const useReducer = React.useReducer




//init state
const initState = 0

// Actions
const UP_ACTITION = 'up';
const DOWN_ACTITION = 'down';

// reducer
const reducer = (state, action) => {
    console.log('reducer-running')
    switch (action) {
        case UP_ACTITION:
          return state +1
           
        case DOWN_ACTITION:
            return state -1

           

        default:
            throw new Error ('invalid action')
          
    }
}
const App = () => {
    const [count, dispacth] = useReducer(reducer,initState)
    return (
        <div className="app">
            <h1>{count}</h1>
            <button
                onClick={() => {
                    dispacth(DOWN_ACTITION)
                }}
            >Down</button>

            <button
                onClick={() => {
                    dispacth(DOWN_ACTITION)
                }}
            >Up</button>

        </div>)
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)