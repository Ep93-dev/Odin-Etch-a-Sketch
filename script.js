
const btnContainer = document.querySelector(".btn-container");
const container = document.querySelector(".container");


let btn = document.createElement("button");
btn.textContent = "RESET GRID SIZE";
btn.classList.add("btn");
btnContainer.appendChild(btn);




   
function gridCreation (userInput){
 // `calc(100% / ${userInput})`;
        
    let divSize = `calc(100% / ${userInput})`;
    let divAmount = userInput  * userInput;

  
    for (let i = 0; i < divAmount; i++){
          let div = document.createElement("div");
          /*flexItem1.style.width = `${divSize}px`;
          flexItem1.style.height = `${divSize}px`;*/
          div.style.flexBasis = divSize;
          div.classList.add("flex-div");
          container.appendChild(div);
          
          div.addEventListener('mouseenter', () => {
             // e => e.target.classList.add('hovered'
            
          
          div.style.backgroundColor = getRandomColor();
          div.style.opacity = +div.style.opacity + 0.1;
        }); 
              
            
      }};
   

gridCreation(16);


btn.addEventListener('click', function (){
    
            container.innerHTML = '';
            let userInput = 16;
            userInput = +prompt("Please enter a valid positive number less than 100.");
            if(isNaN(userInput) || userInput <= 0 || userInput > 100) {
                alert("Please enter a valid positive number less than 100.");  
                return 
            }

            gridCreation (userInput);
  
});


function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}
   













