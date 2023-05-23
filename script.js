

var input=document.getElementById("task");
var ekle=document.getElementById("liveToastBtn");
var ulList=document.getElementById("list")


ekle.addEventListener("click",function(e){
    e.preventDefault();

    if(input.value){
        var list=`
        <li class="listt">${input.value}
            <a href="#" class="float-left mr-2 tick" style="display: none;">
                <i class="fa-solid fa-check"></i>
            </a>
            <a href="#" class="delete-item float-right">
                <i class="fas fa-times"></i>
            </a>
        </li>`
        ulList.innerHTML+=list;
    }else{
        alert("Lütfen bir bilgi giriniz")
    }
    input.value=""

    // if(input.value){
    //     //li
    //     var li=document.createElement("li");
    //     li.innerHTML=input.value

    //     //a
    //     var a=document.createElement("a");
    //     a.setAttribute("href","#");
    //     a.className = 'delete-item float-right';
    //     a.innerHTML=`<i class="fas fa-times"></i>`

    //     li.appendChild(a)

    //     ulList.appendChild(li)
    // }else{
    //     alert("Lütfen bir bilgi giriniz")
    // }

    
})

ulList.addEventListener("click",function(e){
    
    if(e.target.className==="fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }

    e.target.style.backgroundColor="#17c0eb";
    e.target.childNodes[1].style.display="block"
    

    // if(e.target.classList.contains("listt")){
    //     e.target.style.backgroundColor="#17c0eb";
    //     e.target.childNodes[1].style.display="block"
    //     // e.target.classList.add("ticket");
    //     // e.target.classList.remove("listt")
    // }
    // if(e.target.classList.contains("ticket")){
    //     e.target.style.backgroundColor="grey";
    //     e.target.childNodes[1].style.display="none"
    //     e.target.classList.remove("ticket")
    //     e.target.classList.add("listt")
    // }
    // if(e.target.classList.contains("ticket")){
        
    //     e.target.style.backgroundColor="grey";
    //     e.target.childNodes[1].style.display="none"
    //     e.target.classList.remove("ticket")
    // }
    

    
})

