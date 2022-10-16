//Day4
let state=false

const toggle=()=>{
    state=!state
    console.log(state)
    renderApp()
}

const renderApp=()=>{
    var template=
    <div>
    <button onClick={toggle}>{state?"Show":"Hide!"}</button>
    {!state&&<h1>Surprise!!</h1>} 
    </div>
    var approot = document.getElementById("root")
    ReactDOM.render(template,approot)
}

renderApp()

//Day5 
//Same toggle app but as a component.

class Toggle extends React.Component{
    constructor(){
        super()
        this.toggler=this.toggler.bind(this)
        this.state={
            toggle:false
        }
    }
    toggler(){
        this.setState((previousState)=>{
            return{
                toggle:!previousState.toggle
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Toggle Me!</h1>
                <button onClick={this.toggler}>{this.state.toggle?"Show":"Hide!"}</button>
                {!this.state.toggle&&<h1>Surprise!!</h1>}

            </div>  
        )
    }
}

var approot = document.getElementById("root")
ReactDOM.render(<Toggle />,approot) 
