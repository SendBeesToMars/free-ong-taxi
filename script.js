

let friks = `Your fantasies can't ever be quenched can they?!
You freakin' friks!
When will you learn?!
When will you learn?!?!?
That your actions have consequences!!!`;

let is_writing = false
// const text_writer_interval = setInterval(text_writer, 500, friks);
let content = document.getElementById("text");
async function text_writer(text, element) {
    let friks = text.split("\n");

    for (let i = 0; i < friks.length; i++) {
        for (let j = 0; j < friks[i].length; j++) {
            is_writing = true
            let char = friks[i].charAt(j);
            element.append(char);
            const min = 10;
            const max = 30;
            let rand_timeout = Math.floor(Math.random() * (max - min) + min);
            await new Promise(r => setTimeout(r, rand_timeout));
        }
        element.appendChild(document.createElement("br"));
        const min = 200;
        const max = 800;
        let rand_timeout = Math.floor(Math.random() * (max - min) + min);
        await new Promise(r => setTimeout(r, rand_timeout));
    }
    is_writing = false
}

// keep focus on text area
let input = document.getElementById("input");
input.focus()
input.addEventListener("blur", function () {
    input.focus();
})
input.addEventListener("keypress", function (event) { // different to input
    if ((event.code == "Enter" || event.keyCode == 13) && !event.shiftKey) {
        event.preventDefault(); // prevents new line input
        send_message(input.value);
        input.value = "" // clears textbox
    }
})

function send_message(message) {
    content.append(message);
    content.appendChild(document.createElement("br"));
}

async function idle(min=5000, max=5000){
    let rand_timeout = Math.floor(Math.random() * (max - min) + min);
    await new Promise(r => setTimeout(r, rand_timeout));
    is_writing = false;
}

// auto increase the size of textarea
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", on_input); // different to keypress
}
function on_input(event) {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
}

text_writer(friks, content)

let pow = document.getElementById("pow");

const intervalID = setInterval(its_pow_time, 1000);

function its_pow_time() {
    const pow_time = 1736166300000
    const rn = Date.now();
    const count_down = pow_time - rn;
    const days = Math.floor(count_down/60/60/24/1000);
    const hours = Math.floor(count_down/60/60/1000 % 24);
    const mins = Math.floor(count_down/60/1000 % 60);
    const secs = Math.floor(count_down/1000 % 60);
    pow.innerHTML = `${days} ${hours}:${mins}:${secs}`;
}