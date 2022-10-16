// var template = <h1>Hi, Here we write actual code, that get's translated by Babel 
//     and keeps the translated html in app_translated.js</h1>

// var approot = document.getElementById("root")
// ReactDOM.render(template,approot)

// var template = 
//     <div>
//     <h1>Hi, Here we write actual code, that get's translated by Babel 
//     and keeps the translated html in app_translated.js</h1>
//     <p>Trying multiple parent tags with div</p>
//     </div>
// var approot = document.getElementById("root")
// ReactDOM.render(template,approot)

//Day2

// var app = {
//     title : "MyBookApp",
//     subtitle : "Help me to decide Book!",
//     //options : ["Book1","Book2","Book3","Book4"]
//     options : []
// }
// var count = 0
// //Event handlers (event-onclick)
// const AddOne=()=>{
//     count = count+1
//     renderApp()
// }
// const SubOne=()=>{
//     //console.log("Sub one called")
//     count = count-1
//     renderApp()
// }
// const reset=()=>{
//     //console.log("reset one called")
//     count = 0
//     renderApp()
// }
// const removeAll=()=>{
//     app.options=[]
//     renderApp()
// }
// const form_submission=(e)=>{
//     e.preventDefault() //to prevent default behaviour, which is, display log for a second and vanish.
//     const book = e.target.elements.option.value
//     app.options.push(book) //appending filled book names in form into an array
//     e.target.elements.option.value=""
//     console.log(app.options)
//     renderApp()
//     //console.log("Your form is submitted")
// }
// //placing template inside an arrow fn so we can use it to rerender when counter is called.
// const renderApp=()=>{
//     var template = 
//     <div>
//     <h1>{app.title}</h1>
//     <h2>{app.subtitle}</h2>
//     <h2>{app.options.length>0?"Here are your options!" : "No Options"}</h2>
//     <h1>count:{count}</h1>
//     <button onClick={AddOne}>+1</button>
//     <button onClick={SubOne}>-1</button>
//     <button onClick={reset}>reset</button>
//     <form onSubmit={form_submission}>
//         <input type="text" name="option"></input>
//         <button>Add option</button>        
//     </form>
//     <button onClick={removeAll}>removeAll</button>
//     </div>
//     var approot = document.getElementById("root")
//     ReactDOM.render(template,approot)
// }

// renderApp()


//Day 3

var app = {
    title : "MyBookApp",
    subtitle : "Help me to decide Book!",
    //options : ["Book1","Book2","Book3","Book4"]
    options : []
}
var count = 0
//Event handlers (event-onclick)
const AddOne=()=>{
    count = count+1
    renderApp()
}
const SubOne=()=>{
    //console.log("Sub one called")
    count = count-1
    renderApp()
}
const reset=()=>{
    //console.log("reset one called")
    count = 0
    renderApp()
}
const removeAll=()=>{
    app.options=[]
    renderApp()
}
const form_submission=(e)=>{
    e.preventDefault() //to prevent default behaviour, which is, display log for a second and vanish.
    const book = e.target.elements.option.value
    app.options.push(book) //appending filled book names in form into an array
    e.target.elements.option.value=""
    console.log(app.options)
    renderApp()
    //console.log("Your form is submitted")
}
const decideBook=()=>{          //to suggest a random book based on input
    const random_number = Math.floor(Math.random() * app.options.length)
    console.log(random_number)
    const book = [app.options[random_number]]
    alert(book)
}
//placing template inside an arrow fn so we can use it to rerender when counter is called.
const renderApp=()=>{
    var template = 
    <div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle}</h2>
    <h2>{app.options.length>0?"Here are your options!" : "No Options"}</h2>
    <ol>                            
        {app.options.map((book)=>{  //applying map function in app.options array .
            return <li>{book}</li>  //return the book names as list on web page
        })}
    </ol>
    <h1>count:{count}</h1>
    <button onClick={AddOne}>+1</button>
    <button onClick={SubOne}>-1</button>
    <button onClick={reset}>reset</button>
    <button onClick={decideBook}>Book Suggestion</button>
    <form onSubmit={form_submission}>
        <input type="text" name="option"></input>
        <button>Add option</button>        
    </form>
    <button onClick={removeAll}>removeAll</button>
    </div>
    var approot = document.getElementById("root")
    ReactDOM.render(template,approot)
}

renderApp()











