function turnOffLights() {
    // change background color of stop light to red
}
// turn on stop function
function turnOnStopLight() {
    // change background color of stop light to red
    let stopLight = $("#stopLight");
    stopLight.css("background","red");
}

// turn on slow function
function turnOnSlowLight() {
// change background color of slow light to yellow
    let slowLight = $("#slowLight");
    slowLight.css("background","yellow");
}

// turn on go function
function turnOnGoLight() {
    // change background color of go light to green
      let goLight = $("#goLight");
      goLight.css("background","green");
}

// set stop light click event
$("#stopButton").on("click",turnOnStopLight);
// set slow light click event
$("#slowButton").on("click",turnOnSlowLight);
// set go light click event
$("#goButton").on("click",turnOnGoLight);

// set turn off turnOffLights
