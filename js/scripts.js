window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        const message = document.getElementById("message").value;
        console.log("The users initial input = " + message)

        

        document.querySelector("span#message1").innerText = message.toUpperCase();
        // console.log(message);

        // let prevFontSize = message.fontSize;
        // console.log(prevFontSize);
        // let newFontSize = parseInt(prevFontSize) * 1.5;
        // document.querySelecter("span#message1").style.fontSize = newFontSize + "%"

        document.querySelector("div#userShout").removeAttribute("class");
    };
};