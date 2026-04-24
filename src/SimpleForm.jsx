import React, { useRef, useState } from 'react'

export default function SimpleForm() {

    // Controlled Component 

    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");

    // const handleSubmit = (e) =>{
    //     e.preventDefault();

    //     console.log("Name ",name)
    //     console.log("Email ",email)
    // }


    {/* UseRef unControlled Component  */ }

    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name ",nameRef.current.value);
        console.log("Email ",emailRef.current.value);
    }

    return (


        <>

            {/* <form onSubmit={handleSubmit}>

                <label htmlFor="">Name</label>
                <input type="text" 
                onChange={(e)=>setName(e.target.value)}
                />

                <br />
                <br />

                <label htmlFor="">email</label>
                <input type="email" 
                onChange={(e)=>setEmail(e.target.value)}
                />

                <br />
                <br />

                <button type='submit'>Submit</button>

            </form> */}

            {/* UseRef */}

            <form onSubmit={handleSubmit}>

                <label htmlFor="">Name</label>
                <input type="text"
                    ref={nameRef}
                />

                <br />
                <br />

                <label htmlFor="">email</label>
                <input type="email"
                    ref={emailRef}
                />

                <br />
                <br />

                <button type='submit'>Submit</button>

            </form>



        </>
    )

}
