

let getData = () => {
     let email = document.getElementById('email').value;
     let password = document.getElementById('password').value;

     firebase.auth().createUserWithEmailAndPassword(email, password)

     .then( (result) =>{
         console.log('User Successfully Sign Up and can login now...')
         console.log(result);
     })
     .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorMessage);
        
      })
}



let login = () => {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;


    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( (result) =>{
        console.log('User Login Successfully....');
        console.log(result);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       
       
        console.log(errorMessage);

 
      });


}