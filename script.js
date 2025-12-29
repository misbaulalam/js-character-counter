let inp = document.querySelector("input");
let span = document.querySelector("span");

let textLength = 15;
span.textContent = textLength;

inp.addEventListener("input", function(evt){
    let charleft = textLength-inp.value.length;
    span.textContent = charleft;
    if(charleft<0){
        span.style.color = "red";
    }else{
        span.style.color= "whitesmoke"
    }

});
