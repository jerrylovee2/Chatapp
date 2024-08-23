var socket = new WebSocket('ws://localhost:9000/ws');

let connect = (cb) => {
    console.log('connect');

    socket.onopen = () => {
        console.log("Successfully connected");
    };

    socket.onmessage = (event) => {
        console.log("message from websocket:", event.data);
        cb(event.data);
    };

    socket.onclose = (event) => {
        console.log("Socket closed", event);
    };

    socket.onerror = (err) => {
        console.log(err);
    };

    // Return a function to close the WebSocket connection
    // return () => {
    //     socket.close();
    // };
};

let sendMsg = (msg) => {
    console.log("Sending Message", msg);
    socket.send(msg);
};

export { connect, sendMsg };
