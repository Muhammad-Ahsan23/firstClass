import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hello from './Hello'
import Hello2 from './Hello2'
import SimpleForm from './SimpleForm'

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

  // const title = "outside the react";

  // const obj = {
  //   title: "phadda",
  //   value: "1500",
  //   name: "ibad and arman",
  //   reason: "maa chudi guitar ki",
  //   solution: "arman ki lenay kay baad"
  // }

  // const handleClick = () =>{
  //   alert('closed');
  // }

  // two syntax of function normal function and arrow function

  // function hello(name){
  //   return name;
  // }


  // const hello = (name) =>{
  //     return name;
  // }

  // Events Class

  // const handleClick = () =>{
  //   alert("Ahsan")
  // }

  // const[val,setVal]=useState() 

  // function handleChange(e){
  //   setVal(e.target.value)
  //   console.log(e.target.value);
  // }


  // --------------------- Third Class --------------------

  //  -------- Array & Object ------------
  // How to store Array & object data in state; 

  // let arr = ['mango','banana','oranage','peach'];


  // Object

  // let obj = {
  //   firstName: "Muhammad",
  //   middeName: "Ahsan",
  //   lastName: "shaikh",
  //   age: "22",
  //   priceRemaining: ['1500','200','300'],
  // }

  // Array Of Object

  let job = [

    { jobTitle: "Junior Developers", type: "part time", img: "https://fastly.picsum.photos/id/66/200/300.jpg?hmac=zvcP8mVCNIMoM5f8iC-xSgDhR1VklmBY2SON28P4TOo", country: 'columnbia', salary: 2000, url: 'https://google.com' },

    { jobTitle: "Senior Developers", type: "full time", img: "https://fastly.picsum.photos/id/66/200/300.jpg?hmac=zvcP8mVCNIMoM5f8iC-xSgDhR1VklmBY2SON28P4TOo", country: 'pakistan', salary: 2000, url: 'https://facebook.com' },

    { jobTitle: "nulla Developers", type: "full time", img: "https://fastly.picsum.photos/id/66/200/300.jpg?hmac=zvcP8mVCNIMoM5f8iC-xSgDhR1VklmBY2SON28P4TOo", country: 'pakistan', salary: 2000, url: 'https://youtube.com' },


    { jobTitle: "Normal Developers", type: "contract", img: "https://fastly.picsum.photos/id/66/200/300.jpg?hmac=zvcP8mVCNIMoM5f8iC-xSgDhR1VklmBY2SON28P4TOo", country: 'India', salary: 2000, url: 'https://whatsapp.com' },


    { jobTitle: "senior designer", type: "contract", img: "https://fastly.picsum.photos/id/66/200/300.jpg?hmac=zvcP8mVCNIMoM5f8iC-xSgDhR1VklmBY2SON28P4TOo", country: 'Ukraine', salary: 2000, url: 'https://remote.com' },


    { jobTitle: "Ibad senior", type: "part time", img: "https://fastly.picsum.photos/id/66/200/300.jpg?hmac=zvcP8mVCNIMoM5f8iC-xSgDhR1VklmBY2SON28P4TOo", country: 'America', salary: 1600, url: 'https://google.com' },

  ]

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
      {/* <Hello items={obj} /> */}

      {/* Pass function */}

      {/* <Hello2 func={handleClick}/> */}

      {/* How to write function */}

      {/* <h2>{hello("ahsan")}</h2> */}

      {/* Events class */}

      {/* <button onClick={handleClick}>Click Me </button> */}

      {/* <h1>{val}</h1> */}
      {/* <input type="text" onChange={handleChange} /> */}


      {/*============================ Third Class ========================= */}


      {/* <ul>
            {
                arr.map((items,index)=>(
                  <li key={index}>{items}</li>                  
                ))
            }
        </ul> */}

      {/* Object */}

      {/* <ul> */}
      {/* <li>{obj.firstName}</li> */}
      {/* <li>{obj.lastName}</li> */}
      {/* <li>{obj.age}</li> */}
      {/* <li>Price Remaining: <ul>{obj.priceRemaining.map((items,index)=>(<li key={items}>{items}</li>))}</ul></li> */}
      {/* </ul> */}


      {/* Arrray of object */}


      {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          job.map((jobList, index) => (
            <div>
              <div
                style={{
                  width: "260px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  fontFamily: "Arial",
                }}
              >
                <img
                  src={jobList.img}
                  alt="job"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <h3 style={{ margin: "10px 0 5px", fontSize: "18px" }}>
                  {jobList.jobTitle}
                </h3>

                <p style={{ margin: "5px 0", color: "gray" }}>
                  Type: {jobList.type}
                </p>

                <p style={{ margin: "5px 0", color: "gray" }}>
                  Country: {jobList.country}
                </p>

                <p style={{ margin: "10px 0", fontWeight: "bold", color: "#333" }}>
                  {jobList.salary}
                </p>

                <a
                  href={jobList.url}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Apply Now
                </a>

              </div>
            </div>
          ))
        }

      </div> */}

      {/* Fourth Class Form Handling */}

      <SimpleForm />

    </>

  )


}

export default App;

