const generate = document.querySelector(".genbtn");
const imagebox = document.querySelector(".imgbox");
const imgcontent = document.querySelector(".genimg");
const textinput = document.querySelector(".input");



// let text = textinput.value;

function generateQR(){
    if(textinput.value.length > 0){
        imgcontent.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textinput.value;
        imagebox.classList.add("show-img");
    }

    else{
        imagebox.classList.add("error");    }


}


generate.addEventListener("click",generateQR);

textinput.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        generateQR();
    }
});