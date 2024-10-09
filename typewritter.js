const introText = "Hi, I'm Danica Sinabe, a passionate front-end developer.";
let i = 0;

function typeWriter() {
    if (i < introText.length) {
        document.getElementById("introText").innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;
