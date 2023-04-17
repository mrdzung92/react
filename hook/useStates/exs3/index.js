
    const useState = React.useState
    const courses = [
        { id: 1, name: 'HTML CSS' },
        { id: 2, name: 'JavaScript' },
        { id: 3, name: 'React JS' }
    ]
    const App = () => {
        const [checked, setChecked] = useState([])
        const handlerCheck = (id) => {
            let isChecked = checked.includes(id);
            if (isChecked) {
                setChecked(checked.filter(item => item !== id))
            } else {
                setChecked([...checked, id])
            }
        }
        return (
            <div className="app">
                {courses.map((course) =>
                    <div key={course.id}>
                        <input
                            checked={checked.includes(course.id)}
                            onChange={() => { handlerCheck(course.id) }}
                            type="checkbox" />
                        {course.name}
                    </div>)}
                <button >submit</button>

            </div>)
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)