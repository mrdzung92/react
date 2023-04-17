
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


// ========= useEffect()  chỉ có callback=======

//  --callback luôn được gọi mỗi khi component mounted
// ---luôn gọi callback mỗi khi re-render component 
const Content = () => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (title !== '') document.title = title

    })


    return (
        <div>
            <input value={title}
                onChange={e => setTitle(e.target.value)}
            />
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