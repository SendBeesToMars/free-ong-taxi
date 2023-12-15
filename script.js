

let friks = `Your fantasies can't ever be quenched can they?!
You freakin' friks! When will you learn?!
When will you learn?!
That your actions has consequences!!!`;

let is_writing = false
// const text_writer_interval = setInterval(text_writer, 500, friks);
async function text_writer(text) {
    let content = document.getElementById("text");
    friks = friks.split("\n");

    for (let i = 0; i < friks.length; i++) {
        for (let j = 0; j < friks[i].length; j++) {
            is_writing = true
            let char = friks[i].charAt(j);
            // content.append(one);
            let new_p = document.createElement("p");
            new_p.innerText = friks;
            // content.appendChild(new_p);
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

var doSomethingAfterAWhile = function(content, char) {
    content.append(char);
    console.log(char);
}

let dot_flag = true;
const dot_interval = setInterval(dot, 500);
function dot(){
    let content = document.getElementById("text");
    if (is_writing) { // while writing text to the screen ignore the cursor function
        return;
    }
    if (dot_flag) {
        content.append("_");
    }else{
        content.innerText = content.innerText.substring(0, content.innerHTML.length - 13); // where is this 13 comming from?
    }
    dot_flag = !dot_flag;
}

text_writer(friks)