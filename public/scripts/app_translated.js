// Day3 - React components (components are like lego blocks)
// Structure of React component.
// class Header extends React.Component{
//     render(){
//        return(

//        )
//     }
// }

// class BookApp extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Header />
//                 <Action />
//                 <Options />
//                 <Option />
//                 <AddOption />
//             </div>
//         )
//     }
// }

// class Header extends React.Component{
//     render(){
//         return(
//         <div>
//             <h1>Book App</h1>
//             <h2>Help me decide a book!</h2>
//         </div>
//     )}
// }
// // class Action extends React.Component{
// //     render(){
// //         return(
// //         <div>
// //             <button>Choose a book</button>            
// //         </div>
// //     )}
// // }
// //another way of creating, as a function component instead of class component
// function Action() {
//         return(
//         <div>
//             <button>Choose a book</button>            
//         </div>
//     )
// }
// class Options extends React.Component{
//     render(){
//         return(
//         <div>
//               Options Component         
//         </div>
//     )}
// }
// class Option extends React.Component{
//     render(){
//         return(
//         <div>
//               Option Component         
//         </div>
//     )}
// }
// class AddOption extends React.Component{
//     render(){
//         return(
//         <div>
//               Add Option Component         
//         </div>
//     )}
// }

// var approot = document.getElementById("root")
// //ReactDOM.render(<Action></Action>,approot)
// ReactDOM.render(<BookApp />,approot) //when you nothing in tags, we can just close within one tag.

////////////////////////////////Day4///////////////////////////////////////////////////
//props:arguments passed into components. key value pairs.

// class BookApp extends React.Component{
//     render(){
//         const title = "MyBookApp"
//         const subtitle = "Help me choose a book!"
//         const options = ["Book1","Book2","Book3"]
//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle}/>
//                 <Options options={options} />
//                 <Action />
//                 <AddOption />
//             </div>
//         )
//     }
// }

// class Header extends React.Component{
//     render(){
//         return(
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>
//     )}
// }
// class Action extends React.Component{
//     handlepick(){ //method to handle the below button

//     }
//     render(){
//         return(
//         <div>
//             <button onClick={this.handlepick}>Choose a book!</button>            
//         </div>
//     )}
// }
// //since one methos inside same class is called inside same class, using this.metohd.(this.handlepick)
// class Options extends React.Component{
//     handleRemoveAll(){

//     }
//     render(){
//         return(
//         <div>
//             <button onClick={this.handleRemoveAll}>Remove All</button>
//             {
//                 this.props.options.map((book)=>{
//                     return <Option bookslist={book} />
//                 })
//             }
//         </div>
//     )}
// }
// class Option extends React.Component{
//     render(){
//         return(
//         <div>
//               {this.props.bookslist}         
//         </div>
//     )}
// }
// class AddOption extends React.Component{
//     form_submission(e){
//         e.preventDefault()
//         console.log("Form_submit called")
//     }
//     render(){
//         return(
//         <div>
//             <form onSubmit={this.form_submission}>
//                 <input type="text" name="option"></input>
//                 <button>Add option</button>        
//             </form>
//         </div>
//     )}
// }

// var approot = document.getElementById("root")
// //ReactDOM.render(<Action></Action>,approot)
// ReactDOM.render(<BookApp />,approot) //when you nothing in tags, we can just close within one tag.


//////////////////Day 5////////////////////////////////////////////////////////////////////
//logic for components

// class BookApp extends React.Component{
//     render(){
//         const title = "MyBookApp"
//         const subtitle = "Help me choose a book!"
//         const options = ["Book1","Book2","Book3"]
//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle}/>
//                 <Options options={options} />
//                 <Action />
//                 <AddOption />
//             </div>
//         )
//     }
// }

// class Header extends React.Component{
//     render(){
//         return(
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>
//     )}
// }
// class Action extends React.Component{
//     handlepick(){ //method to handle the below button

//     }
//     render(){
//         return(
//         <div>
//             <button onClick={this.handlepick}>Choose a book!</button>            
//         </div>
//     )}
// }
// //since one methos inside same class is called inside same class, using this.metohd.(this.handlepick)
// class Options extends React.Component{
//     constructor(props){
//         super(props) //super is a special method passes information to parent.
//         console.log(this.props.options)
//         this.handleRemoveAll = this.handleRemoveAll.bind(this)
//     }
//     handleRemoveAll(){
//         console.log(this.props.options) //this.props is not avaialable here, so we defined a constructor, since it can have props.
//     }
//     render(){
//         return(
//         <div>
//             <button onClick={this.handleRemoveAll}>Remove All</button>
//             {
//                 this.props.options.map((book)=>{
//                     return <Option bookslist={book} />
//                 })
//             }
//         </div>
//     )}
// }
// class Option extends React.Component{
//     render(){
//         return(
//         <div>
//               {this.props.bookslist}         
//         </div>
//     )}
// }
// class AddOption extends React.Component{
//     form_submission(e){
//         e.preventDefault()
//         console.log("Form_submit called")
//     }
//     render(){
//         return(
//         <div>
//             <form onSubmit={this.form_submission}>
//                 <input type="text" name="option"></input>
//                 <button>Add option</button>        
//             </form>
//         </div>
//     )}
// }

// var approot = document.getElementById("root")
// //ReactDOM.render(<Action></Action>,approot)
// ReactDOM.render(<BookApp />,approot) //when you nothing in tags, we can just close within one tag.


//example counter as a component
//avoiding calling renderApp() method many times
// class Counter extends React.Component{
//     constructor(){
//         super()
//         this.addd=this.addd.bind(this)
//         this.sub=this.sub.bind(this)
//         this.reset=this.reset.bind(this)
//         this.state={ //monitors count for a change.
//             count:0
//         }
//     }
//     addd(){
//         this.setState((previousState)=>{
//             return {
//                 count:previousState.count+1
//             }
//         })
//     }
//     sub(){
//         this.setState((previousState)=>{
//             return {
//                 count:previousState.count-1
//             }
//         })
//     }
//     reset(){
//         this.setState((previousState)=>{
//             return {
//                 count:0
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Count:{this.state.count}</h1>
//                 <button onClick={this.addd}>add</button>
//                 <button onClick={this.sub}>subs</button>
//                 <button onClick={this.reset}>reset</button>
//             </div>
//         )
//     }
// }

// var approot = document.getElementById("root")
// ReactDOM.render(<Counter />,approot) 


//Toggle example
// class Toggle extends React.Component{
//     constructor(){
//         super()
//         this.toggler=this.toggler.bind(this)
//         this.state={
//             toggle:false
//         }
//     }
//     toggler(){
//         this.setState((previousState)=>{
//             return{
//                 toggle:!previousState.toggle
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Toggle Me!</h1>
//                 <button onClick={this.toggler}>{this.state.toggle?"Show":"Hide!"}</button>
//                 {!this.state.toggle&&<h1>Surprise!!</h1>}

//             </div>  
//         )
//     }
// }

// var approot = document.getElementById("root")
// ReactDOM.render(<Toggle />,approot) 

//Readymade package replacing running babel, live-server cmds.
//c:\>npm install -g create-react-app 
//c:\>create-react-app reactapplication
"use strict";
