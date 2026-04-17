// import './assets/hello.css'

// Props way 1

// function Hello({props}){

//     console.log(props.title);
//     console.log(props.name);
//     console.log(props.id);

//     const name = "Ahsan";

//     return (
//         <h1>Hello bro {name}</h1>
//     )
// }
// export default Hello;


// Props 2 way

// function Hello({title,name,id}){ // Destructuring (Modern Style)

//     console.log("title: " + title,"name: " + name, "id " + id);


//     return (
//         <h1>Hello bro {title + "/" + name + "/" + id}</h1>
//     )
// }
// export default Hello;

// Props 3 way default props

// function Hello({title="default title",name="default name" ,id="default id"}){

//     console.log("title: " + title,"name: " + name, "id " + id);


//     return (
//         <h1>Hello bro {title + "/" + name + "/" + id}</h1>
//     )
// }
// export default Hello;

// Props 3

// import React from 'react'

export default function Hello({ items }) {
    // console.log(items.value);
    return (
        <div>Hello</div>
    )
}
