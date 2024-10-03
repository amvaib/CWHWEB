const passwordBox = document.querySelector('.inputb');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*(){}[]<>?/-+=|~";
const allChar = upperCase+lowerCase+num+symbol;

const gen = document.querySelector(".genbtn");

const copy = document.querySelector('.copyimg')


function createPassword(){
    let password = "";
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= num[Math.floor(Math.random()*num.length)];
    password+= symbol[Math.floor(Math.random()*symbol.length)];


    while(length>password.length){
        password+= allChar[Math.floor(Math.random()*allChar.length)];
    }

    passwordBox.value = password;
}


gen.addEventListener('click',()=>{
    createPassword();
})

gen.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        createPassword();
    }
});

function copytoClipboard(){
passwordBox.select();
document.execCommand("copy");

}

copy.addEventListener("click",()=>{
    copytoClipboard();
    alert("copied to clipboard");
})

