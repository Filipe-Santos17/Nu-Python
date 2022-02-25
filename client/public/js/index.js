function mascaraCpf(){
    const cpf = document.getElementById("cpf")
    if (cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += ".";
    } else if(cpf.value.length == 11){
        cpf.value += "-";
    }
}

function SeePassword(){ 
    let Passwd = document.getElementById("password")
    //let eye = document.getElementById("show")

    let inputType = Passwd.type == "password"; 

    function showPassword(){
        Passwd.setAttribute("type", "text")
    }
    
    function hidePassword(){
        Passwd.setAttribute("type", "password")
    }
        
    if (inputType){
        showPassword()
    } else{
        hidePassword()
    }
}


