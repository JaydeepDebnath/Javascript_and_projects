const randomColor = function (){
    const hex = '123456789ABCDEF';
    let color = '#';
    for(let i= 0; i<6;i++)
    {
        color += hex[ Math.floor(Math.random()*16)];
    
    }
    // console.log(color);
    return color;
};
let intervelId ;
const startChangingColor = function(){
    if (!intervelId) {
        intervelId = setInterval(backgroundColorChanger, 1000);
    }
    
    function backgroundColorChanger (){
        document.body.style.backgroundColor = randomColor();
    }
};

const endChangingColor = function (){
    clearInterval(intervelId);
    intervelId = null ;
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',endChangingColor);
