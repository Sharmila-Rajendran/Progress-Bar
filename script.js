const List=document.querySelectorAll(".list");
const buttons=document.querySelector(".butt");
let current=0;

function Updation(){
    List.forEach((list,index)=>{list.classList.remove('active','completed');
    if(index===current){
        list.classList.add('active');
        list.querySelector("i").innerHTML='✓';
    }
    else if(index<current){
        list.classList.add('completed'); 
        list.querySelector("i").innerHTML='✓';
    }
    else{
        list.querySelector("i").innerHTML='x';
    }
});
}
buttons.forEach((butt, index) => {
    butt.addEventListener('click', () => {
        if (index === 0) {
            if (current > 0) {
                current--;
            }
        } else {
            if (current < List.length - 1) {
                current++;
            }
        }
        Updation();
    });
});

Updation();


        

        
    