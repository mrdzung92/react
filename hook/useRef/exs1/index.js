
const useState = React.useState
const useEffect = React.useEffect
const useRef = React.useRef


// lưu giá trị tham chiếu bên ngoài function component

const App = () => {
    const [count, setCount] = useState(60)
    const timeId = useRef()
    
    const handleStart = () => {
        timeId.current =    setInterval( ()=>{
            setCount(prev=>prev-1 )    
            console.log(count)
        },1000)
       
    }
    const handleStop = () => {
        clearInterval(timeId.current)
    }
    return (
        <div className="app">
            <h1>{count}</h1>
            <button
                onClick={handleStart}
            >Start</button>

            <button
                onClick={handleStop}
            >Stop</button>

        </div>)
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)