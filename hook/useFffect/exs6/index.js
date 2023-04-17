
const useState = React.useState
const useEffect = React.useEffect

// LISTEN DOM EVENT


const Content = () => {

    const [avatar,setAvatar] = useState()
    const handlePreviewAvatar =(e)=>{
            const file = e.target.files[0]

            file.preview = URL.createObjectURL(file)
            setAvatar(file)
    }

    useEffect(()=>{

        return ()=>{
            avatar &&  URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    return (
        <div>
            <h1>Avartar</h1>
            <input
            onChange={handlePreviewAvatar}
            
            type="file" />
           {avatar && <img src={avatar.preview} alt=""/>}
        </div>
    )
   
}










const App = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="app">
            <button
                onClick={() => { setShow(!show) }}
            >toogle</button>
            {show && <Content />}
        </div>)
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)