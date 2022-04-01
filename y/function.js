const emailId =   document.getElementById('emailId');
const firstName =   document.getElementById('firstName');
const lastName =   document.getElementById('lastName');
const streetName =   document.getElementById('streetName');
const houseNo =   document.getElementById('houseNo');
const passWord = document.getElementById('passWord');
const addBtn =   document.getElementById('addBtn');
const updateBtn =   document.getElementById('updateBtn');
const removeBtn =   document.getElementById('removeBtn');

// const database = firebase.database();
// const rootRef = database.ref('User')

addBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(emailId.value, passWord.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        database.ref('/users/15').set({
            first_name: firstName.value,
            last_name: lastName.value,
            street_name: streetName.value,
            house_no: houseNo.value,
            email_id: emailId.value,
            password: passWord.value, 
        });
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        prompt(error.message);
        // ..
        
    });
    
});

updateBtn.addEventListener('click',(e) =>{
    e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(emailId.value, passWord.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        prompt(error.message);
        // ..
        
    });
//     database.ref('User/U1').set({
//       emailss: "brijeshdungrani303@gmail.com"
//   });

     
});
var firebaseConfig = {
    apiKey: "AIzaSyCm1-5Ne4Kbr_YRfb-HuPmrvG2Q_d4DonI",
    authDomain: "postnotify-95f54.firebaseapp.com",
    databaseURL: "https://postnotify-95f54-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "postnotify-95f54",
    storageBucket: "postnotify-95f54.appspot.com",
    messagingSenderId: "418075602051",
    appId: "1:418075602051:web:834fbe662d8a5e75313fb6",
    measurementId: "G-GE67LNXXJC"
  };
  firebase.initializeApp(firebaseConfig);

    



    

  /*  firebase.auth().createUserWithEmailAndPassword(emailId.value, passWord.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        prompt(error.message);
        // ..
        
    });
 

    alert(userCredential.user)
    
    



});





  function signUp(event){
      
      var email = emailId.value;
      var password = passWord.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
    });
  }


  rootRef.on('value', snapshot => {
    console.log(snapshot.child("U1/email").val());
  });
  */
