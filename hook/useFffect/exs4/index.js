
const useState = React.useState
const useEffect = React.useEffect

// LISTEN DOM EVENT

const tab = ['posts', 'comments', 'albums']
const Content = () => {

  
    const [data, setData] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setshowGoToTop] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
                setData(post)
            })

    }, [type])

    useEffect(() => {
        const handleScroll = ()=>{
          setshowGoToTop(window.scrollY>=200)
        }
        window.addEventListener('scroll',handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
           console.log('removeEventListener') 
        }
    },[])



    return (
        <div>
            
            <div>
                {tab.map(tab =>
                    <button
                        style={type === tab ?
                            {
                                color: '#fff',
                                backgroundColor: '#000'
                            }
                            : {}}
                        key={tab}
                        onClick={() => { setType(tab) }}
                    >{tab}</button>
                )}
            </div>
            <ul>
                {data.map(item =>
                    <li key={item.id}>{item.title || item.name}</li>)}
            </ul>
            {showGoToTop && <button style={
                {
                    position :'fixed',
                    right:20,
                    bottom:20

                }
            } >Goto Top</button>}
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