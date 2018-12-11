// var mysql = require('mysql'); //подключение к базе данных

// var con = mysql.createConnection({
//   host: "35.236.149.253",
//   user: "root",
//   password: "root",
//   database : 'train_schedule'
// });
// window.alert("OK!");
// con.connect(function(err) {
  
//   if (err) {   window.alert("ERROR!"); }
//   //Select all customers and return the result object:
//   con.query("use train_schedule;", function (err, result, fields){});
//   con.query("SELECT * FROM trains;", function (err, result, fields) {
//     if (err) throw err;
//     //console.log(result);
//     window.alert(result);
//   });
// });


//firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
var isLog = firebase.auth().currentUser;


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (isLog != null) {
      document.location.href = "/profile.html";
    }

  } 
});

function login(){
  isLog = firebase.auth().currentUser;
  if (isLog==null)
  {
    isLog = 1;
    var userEmail = document.getElementById("email_field").value.toString();
    var userPass = document.getElementById("passw_field").value.toString();
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });
  }
  else
  {
    window.alert("Allready logged in!" );
    document.location.href = "/profile.html";
  }
}

function logout(){
  isLog = 0;
  firebase.auth().signOut();
  document.location.href = "/index.html";
}

function signup(){
  var userEmail = document.getElementById("email_field_sign").value.toString();
  var userPass = document.getElementById("passw_field_sign").value.toString();
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //var errorCode = error.code;
    //var errorMessage = error.message;
    window.alert("Error: " + " " + error.message);
  });
  isLog = 1;
}


// добавление новых данных в таблицу
function addTrain(){
    var trainNB = document.getElementById("trainNB_field_sign").value.toString();
    var homestationID = document.getElementById("homestationID_field_sign").value.toString();

    var train = {
      train_number: trainNB,
      homestation_id: homestationID,
    };
    //include("db.js");
    //var userJSON = JSON.stringify(user);
    SendData(train);
    isLog = 1;
  }

function SendData(train)
{
  $.ajax({
    url: "/api/train",
    type: "POST",
    data: JSON.stringify(train),
    contentType: "application/json",
    complete: 	function(data) {
      console.log(data.request); //в консоле браузера выводим json в параметре request
                                            //т.е. то что нам отправил сервер в ответ
        //console.log(data.request.name1);  //мы можем вывести какой-то параметр полученного json, например name1
    }
  });
}
