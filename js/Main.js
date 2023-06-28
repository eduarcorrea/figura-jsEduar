function circulo(){

let figura = document.getElementById("figura");
figura.classList.toggle("CIRCULO");
//figura.classList.remove("rectangulo");
//figura.classList.remove("rectangulo");
}

function rectangulo(){

let figura = document.getElementById("figura");
figura.classList.toggle("RECTANGULO");
//figura.classList.remove("circulo");

}

function triangulo(){

    let figura = document.getElementById("figura");
    figura.classList.toggle("TRIANGULO");
    //figura.classList.remove("rectangulo,circulo");


}

function girar(){

    let figura = document.getElementById("figura");
    figura.classList.toggle("GIRAR");
    //figura.classList.remove("rectangulo,circulo,triangulo");
    }

    function arriba(){
        let figura = document.getElementById("figura");
        figura.classList.toggle("ARRIBA");
    
    }
    function abajo(){
        let figura = document.getElementById("figura");
        figura.classList.toggle("ABAJO");
    
    }
    function izquierda(){
        let figura = document.getElementById("figura");
        figura.classList.toggle("IZQUIERDA");
    
    }
    function derecha(){
        let figura = document.getElementById("figura");
        figura.classList.toggle("DERECHA");
    }
    function ocultar(){
        let figura = document.getElementById("figura");
        figura.classList.toggle("OCULTAR");
    }
    function gif(){
        let figura = document.getElementById("figura");
        figura.classList.toggle("GIF");
        
    }
    function degradado(){
        let figura = document.getElementById("figura");
        figura.classList.toggle("DEGRADADO");
    }

//function lateral(){
    //let figura = document.getElementById("figura");
    //figura.classList.toggle("izquierda");
    //figura.classList.remove("rectangulo,circulo,triangulo,arriba");


    function panel(){
        const panel = document.querySelector(".paneliz");
        panel.classList.toggle("activo");
    }
    function panelsup(){
        const panel = document.querySelector(".panelsup");
        panel.classList.toggle("activo");
    }