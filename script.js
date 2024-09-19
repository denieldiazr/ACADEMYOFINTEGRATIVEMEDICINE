const number=document.querySelectorAll(".number")
const speed=100;
number.forEach(element => {
    incNumber(element)
});

function incNumber(elem){
    const text=+elem.innerText;
    const value=elem.getAttribute("data-target");
    const inc= 1;
    if(text<value){
        elem.innerText=inc+text;
        setTimeout(()=>{
            incNumber(elem);
        },20);
    }else{
        elem.innerText=value;
    }
}