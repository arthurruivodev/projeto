function cadastrar(){
const email= document.querySelector('#email').value
const senha= document.querySelector('#password').value
const c_senha= document.querySelector('#c_password').value
const error=document.querySelector('#error')



if(senha.length<6){
console.log('senha deve ter 6 digitos')

}else{

if(c_senha==senha){
    
    firebase.auth().createUserWithEmailAndPassword(
        email, senha
    ).then(() => {
      
        window.location.href = "https://focoensino.github.io/Dev.finances/";
    }).catch(error => {
       
       
    })


}else{
    

    error.style.display = 'block'


}



}













}