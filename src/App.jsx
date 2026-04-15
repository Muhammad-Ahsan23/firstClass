import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hello from './Hello'
import Hello2 from './Hello2'

function App() {

  // --------- First Class --------
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  // count = state
  // setCount = function (update)
  // 0 // intial value
  console.log("count value", count)


  // --------------------------

  // useEffect Concept
  // useEffect(()=>{
  //   hello();  //One time rendring
  // },[]);

  // function hello(){
  //   console.log("Hey arman");
  // }

  //  ------- Basic use of useEffect

  //  useEffect(() => {
  //     console.log("Har render pe run hoga"); // call everytime 	Run on every render
  //   });

  // useEffect(() => {
  //   console.log("Sirf 1 baar"); //Call only once
  // }, []);


  // useEffect(() => {
  //   console.log("Count change hua"); // call on single state
  // }, [count]);

  //  useEffect(() => {
  //   console.log("states change huin"); // call on changeing both state
  // }, [count, num]);

  // useEffect(() => {
  //   console.log("states change huin"); // call on changeing props
  // }, [prop1, prop2]);


  // Can we use multiple useState in components?
  // Answer : YES

  // --------- Second Class Props --------

  const title = "outside the react";

  const obj = {
    title: "phadda",
    value: "1500",
    name: "ibad and arman",
    reason: "maa chudi guitar ki",
    solution: "arman ki lenay kay baad"
  }

  return (

    <>


      {/* First Class */}

      {/*       
      <h1>Count {count}</h1>

      <h1>Num {num}</h1>

      <button onClick={() => setCount(count + 1)}>ADD Count</button>
      <button onClick={() => setNum(num + 1)}>ADD Num</button> */}

      {/* Second Class */}

      {/*  --------- Props ------------ */}

      {/*    <Hello title={title} name="Arman / Ibad" id="1" /> */}
      <Hello items={obj} />
      
      {/* <Hello2/> */}

    </>

  )


}

export default App;

