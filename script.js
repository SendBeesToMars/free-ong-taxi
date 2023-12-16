

let friks = `Your fantasies can't ever be quenched can they?!
You freakin' friks!
When will you learn?!
When will you learn?!?!?
That your actions have consequences!!!`;

let is_writing = false
// const text_writer_interval = setInterval(text_writer, 500, friks);
async function text_writer(text) {
    let content = document.getElementById("text");
    friks = friks.split("\n");

    for (let i = 0; i < friks.length; i++) {
        for (let j = 0; j < friks[i].length; j++) {
            is_writing = true
            let char = friks[i].charAt(j);
            content.append(char);
            const min = 10;
            const max = 30;
            let rand_timeout = Math.floor(Math.random() * (max - min) + min);
            await new Promise(r => setTimeout(r, rand_timeout));
        }
        content.appendChild(document.createElement("br"));
        const min = 200;
        const max = 800;
        let rand_timeout = Math.floor(Math.random() * (max - min) + min);
        await new Promise(r => setTimeout(r, rand_timeout));
    }
    is_writing = false
}

// keep focus on text area
let input = document.getElementById("input");
onkeydown = () => {
    input.focus()
}
onclick = () => {
    input.focus()
};
input.focus()

async function idle(min=5000, max=5000){
    let rand_timeout = Math.floor(Math.random() * (max - min) + min);
    await new Promise(r => setTimeout(r, rand_timeout));
    is_writing = false;
}

// auto increase the size of textarea
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", on_input, false);
}

function on_input() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}

text_writer(friks)