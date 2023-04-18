
const useRef = React.useRef;
const useReducer = React.useReducer;

const initState = [];
const ADD_JOB = 'ADD_JOB';
const DELETE_JOB = 'DELETE_JOB';
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_JOB:
            state = [
                ...state,
                action.payload
            ]

            break;
        case DELETE_JOB:
            state.splice(action.payload,1)
         state =[...state]
            break;

        default:
            throw new Error();
    }
console.log(state)
    return state;

}
const makeAction = (type, payload) => {
    return {
        type,
        payload
    }
}

const App = () => {
    const inputRef = useRef()
    const [state, dispatch] = useReducer(reducer, initState)

    const handleSubmit = () => {
        if (inputRef.current.value !== '') {
            dispatch(makeAction(ADD_JOB, inputRef.current.value))
            inputRef.current.value = "";
            inputRef.current.focus();
        } else {
            alert('phai nhap cong viec')
        }
    }

    return (
        <div className="app">
            <h1>Todo</h1>
            <input
                ref={inputRef}
            />
            <button
                onClick={handleSubmit}
            > Add</button>
            <ul>
                {state.map((job, i) => <li key={i}>{job}<span
                    onClick={() => {
                        dispatch(makeAction(DELETE_JOB, i))
                    }}
                > x</span></li>)}

            </ul>
        </div>)
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)