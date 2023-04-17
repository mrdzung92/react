
const useState = React.useState
const courses = [
    { id: 1, name: 'HTML CSS' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'React JS' }
]
const App = () => {
    const [checked, setChecked] = useState(1)
    console.log(checked)

    return (
        <div className="app">
            {courses.map((course) =>
                <div key={course.id}>
                    <input
                    checked ={checked ===course.id}
                    onChange={()=>setChecked(course.id)}
                     type="radio" /> 
                     {course.name}
                </div>)}
            <button >submit</button>

        </div>)
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)