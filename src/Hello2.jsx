// import React from 'react'
// import Hello from './Hello'

// export default function Hello2() {
//     return (
//         <>
//             <h1>Hello 2 Component</h1>
            
//             <Hello />
//         </>

//     )
// }


import React from 'react'
import Hello from './Hello'

export default function Hello2({func}) {

    console.log(func);
    
    return (
        <>
        <br />

            <button onClick={func}>Close</button>

            <h1>Hello 2 Component</h1>
            
            <Hello />
        </>

    )
}
