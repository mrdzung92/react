
/*============Lý thuyết=============
useState là một hook trong React được sử dụng để lưu trữ và quản lý state của một component. State là các giá trị dùng để xác định trạng thái hiện tại của component và có thể thay đổi trong quá trình thực thi của ứng dụng.

Để sử dụng useState, bạn cần import nó từ React: import React, { useState } from 'react'.

Sau đó, bạn có thể sử dụng useState trong component của mình bằng cách gọi nó và truyền vào giá trị ban đầu của state. Khi useState được gọi, nó sẽ trả về một mảng gồm hai phần tử: giá trị của state và một hàm để cập nhật giá trị của state đó.



*/

 const useState = React.useState

const  App = ()=> {
    let initCounter = 0;
    const [counter, setCounter] = useState(initCounter)

    console.log(useState)
   const  handleIncrease = ()=>{
        setCounter(counter+1)
   }
   return (
    <div className="app">
        <h1>{counter}</h1>
         <button onClick ={handleIncrease}>tang</button>
         <button >giam</button>
   </div>)
}     
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)