import { Component } from "react"

// function Child  ()=>{

// }

class Child extends Component {

    // instance of websocket connection as a class property
    ws = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/')
    
    componentDidMount() {
        this.ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
        }

        this.ws.onmessage = evt => {
        // listen to data sent from the websocket server
        // const message = JSON.parse(evt.data)
        // this.setState({dataFromServer: message})
        console.log(evt.data)
        }

        this.ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss

        }

    }

    render(){
        return(
            <div>
            </div>
        )
    }
}

export default Child