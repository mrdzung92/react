
// LY THUYET CHUNG
/*useContext là một hook trong React được sử dụng để truy cập vào context của một component cha từ một component con.

Context là một cách để truyền dữ liệu giữa các component mà không cần thông qua các props. Context cho phép truyền dữ liệu từ một component cha xuống các component con bất kể độ sâu của cây component.

Các trường hợp thường gặp khi nên sử dụng useContext trong React bao gồm:

1 Truyền dữ liệu giữa các component 
con

2 Truyền hàm xử lý sự kiện giữa các component

3Truy cập vào theme của ứng dụng
*/
const useState = React.useState
const createContext = React.createContext
const useContext = React.useContext

const ParentComponent = () => {
   
    return (
        <div>
         <ChildComponent/>
        </div>
    )
}

const ChildComponent =()=> {
   
    const theme = useContext(themeContext);

    
   
    return <p className ={theme}>sdlfjsdlfjsldjfsd </p>;
}

const themeContext = createContext();

const App = () => {
    
    const [theme, setTheme] = useState('dark')
    const toogleTheme = ()=>{
        setTheme(theme==='dark'?'light':'dark')
    }
  
   
    return (
       < themeContext.Provider value={theme}>
            <div className="app">          
                <button
                    onClick={toogleTheme}
                >toggle them</button>
                <ParentComponent />
            </div>
        </themeContext.Provider>
        )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)