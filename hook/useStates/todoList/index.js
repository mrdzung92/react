
const useState = React.useState

const App = () => {
    const [input, setInput] = useState('')
    const [jobs, setJobs] = useState(() => {
        const initJobs = JSON.parse(localStorage.getItem('jobs')) 
        return initJobs ? initJobs : []
    })

    const handlerSubmit = () => {
        setJobs(() => {
            const newJobs = [...jobs, input];
            localStorage.setItem('jobs', JSON.stringify(newJobs))
            return newJobs
        })
        setInput('')
    }
    return (
        <div className="app">
            <input
                value={input}
                onInput={e => setInput(e.target.value)} />
            <button onClick={handlerSubmit} >submit</button>
            <ul>
                {jobs.map((job, index) =>
                    <li key={index}>{job}</li>
                )}
            </ul>
        </div>)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)