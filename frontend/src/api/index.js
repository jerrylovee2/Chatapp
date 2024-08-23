var socket = new WebSocket('ws://localhost:9000/ws')

let connect =(cb)=>{
    console.log('connect');
    socket.onopen=()=>{
        console.log("Successfully connected")
    }
    socket.onmessage=(msg)=>{
        console.log("message from websocket:", msg);
    }
    socket.onclose=(event)=>{
        console.log("Socket closed",event)
    }
    socket.onerror=(err)=>{
        console.log(err)
    }
};


let sendMsg =(msg) =>{
    console.log("Sending Message", msg);
    socket.send(msg);
}

export {connect,sendMsg};