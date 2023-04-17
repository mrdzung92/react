
const useState = React.useState
const useEffect = React.useEffect
// LY THUYET CHUNG
/*
được sử dụng để xử lý các side-effect trong component. Các side-effect có thể là các hoạt động như fetch data từ server, ghi hoặc đọc localStorage, thực hiện các thao tác DOM manipulation, v.v.

Các trường hợp thường gặp khi nên sử dụng useEffect trong React bao gồm:
1 .Fetch data từ server và cập nhật state của component
2. Đăng ký các event listener để xử lý các sự kiện của DOM
3.Thay đổi title của trang web
*/


// ========= useEffect(callback,[desp]) có callback và mảng không rỗng =======

// callback được gọi lại mỗi khi giá trị trong mảng thay đổi


const tab = ['posts', 'comments', 'albums']
const Content = () => {

    const [title, setTitle] = useState('')
    const [data, setData] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
                setData(post)
            })

    }, [type])



    return (
        <div>
            <input value={title}
                onChange={e => setTitle(e.target.value)}
            />
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