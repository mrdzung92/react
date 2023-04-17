
const useState = React.useState
const useEffect = React.useEffect

// LISTEN DOM EVENT


const Content = () => {
    const [countDown, setcountDown] = useState(180)

    useEffect(()=>{
      const timerId =  setInterval(()=>{
            setcountDown((prev)=>{
               console.log('prev:',prev)
              return prev -1
            })
           console.log(countDown)
        },1000)
       return ()=>{
       clearInterval(timerId) 
       }
    },[])
    return (
        <div>           
          <h1>{countDown}</h1>
        </div>
    )
}










const App = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="app">
            <button
                onClick={() => { setShow(!show) }}
            >submit</button>
            {show && <Content />}
        </div>)
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)