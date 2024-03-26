const accor = document.getElementsByClassName('container');

for(i = 0; i<accor.length; i++){
    accor[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
}