// 2. React Core Concepts 2

import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() 
{

  function handleClick() {
    alert('Button Clicked');
  }
  const handleClick2 = () => {
    alert('Button 2 Clicked');
  }
  const addToFive = (num) => {
    alert(num+5);
  }

   {/* in js we used to write like
      <button onclick="handleClick()">Click</button>
       */}
       {/* but in react it is written as
        <button onClick={handleClick}>Click</button>
        */}  
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Counter></Counter>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      
     
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>alert('Button 3 clicked')}>Click3</button>
      <button onClick={()=>addToFive(3)}>Click4</button>
      {/* <button onClick={function handle()
      {
        alert(5+5);
      }
      }>Click4</button> */}


    </>
  )
}

export default App
