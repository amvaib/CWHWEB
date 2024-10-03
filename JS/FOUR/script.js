let div = document.createElement("div");
div.innerHTML = "I HAVE BEEN INSERTED <b>by vaibhav</b>";

div.setAttribute("class", "created");
document.querySelector(".container").append(div);

console.log("hi");