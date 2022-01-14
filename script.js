function cambio(i){
    principal = document.getElementsByClassName("principal")[0];
    secundario = document.getElementById(i);
   
    principal.classList.remove("principal");
    principal.classList.add("tableta");
    principal.classList.add(secundario.classList[1]);
    
    secundario.classList.remove(secundario.classList[1]);
    secundario.classList.remove("tableta");
    secundario.classList.add("principal");
}