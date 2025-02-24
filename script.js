function changeColor(){
    console.log("clicked");
    changeElement(document.getElementById("pText"));
    changeElement(document.getElementById("h2Text"));    
}

function changeElement(element){
    switch(element.style.color){
        case "red":
            element.style.color = "rgb(152, 207, 255)";
            break;
        case "rgb(152, 207, 255)":
            element.style.color = "red"; 
            break;
        default:
            element.style.color = "red"; 
            break;
    } 
}
