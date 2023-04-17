
 const useState = React.useState
const gifs =[
    'CPU I9',
    'RAM 32G RGB',
    'RGB key broard'
]
const  App = ()=> {
    const [gift,setGift] = useState()
   const randomGift =()=>{
    let  index = Math.floor(Math.random()*gifs.length)
    setGift(gifs[index])
   }
 
   return (
    <div className="app">
        <h1>{gift||'chua co phan thuong'}</h1>
         <button onClick ={randomGift}>lay phan thuong</button>
       
   </div>)
}     
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)