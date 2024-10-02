const container = document.querySelector(".container");
const input = document.querySelector(".userInput");
input.addEventListener('input', function (){
    container.innerHTML = "";
    const fragment = document.createDocumentFragment(); 
    if(input.value > 100){
        alert("MAX VALUE IS 100!");
        return; 
    }
    const total = input.value * input.value;
    let boxSize = 100/input.value;
    for(let i = 1; i <= total;i++){
        let div = document.createElement("div");
        div.classList.add("boxSizing");
        div.style.flexBasis = `${boxSize}%`;
        div.style.height = `${boxSize}%`;
        div.style["background-color"] = 'rgb(255, 243, 176)';
        fragment.appendChild(div);
        
    }
    container.appendChild(fragment);
});
container.addEventListener('mouseover',  function(event){
    let red = Math.round(Math.random() * 256).toString(16);
    let green = Math.round(Math.random() * 256).toString(16);
    let blue = Math.round(Math.random() * 256).toString(16);
    if (event.target !== container) {
        event.target.style.backgroundColor = `#${red}${green}${blue}`; 
    }
});
