
const useState = React.useState
const useEffect = React.useEffect

// LISTEN DOM EVENT
const lessons =[
    {
        id:1,
        name:'Test 1'
    },
    {
        id:2,
        name:'Test 2'
    },
    {
        id:3,
        name:'Test 3'
    }
]


const Content = () => {
    const [lessonId,setLessonId] = useState(1)
    useEffect(()=>{
        const handleComment =({detail})=>{
            console.log(detail)
        }
        window.addEventListener(`test-chanel-${lessonId}`,handleComment)
        return ()=>{
            window.removeEventListener(`test-chanel-${lessonId}`,handleComment)
        }
    },[lessonId])
    return (
        <div>
          <ul>
            {lessons.map(lesson=>
                <li key={lesson.id}
                style ={{
                    cursor:'pointer',
                    color: lessonId ===lesson.id ?'red':'#000'
                }}
                onClick ={()=>{
                    setLessonId(lesson.id)
                }}
                >
                    {lesson.name}
                </li>
                )}
          </ul>
        
        </div>
    )
   
}



function emmitComment(id){
    setInterval(()=>{
        window.dispatchEvent(
            new CustomEvent(`test-chanel-${id}`,{
                detail:`coment content of lesson ${id}`
            })
        )
    },2000)
}

emmitComment(1)
emmitComment(2)
emmitComment(3)




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