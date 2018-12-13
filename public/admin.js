function logout(){
  isLog = 0;
  firebase.auth().signOut();
  document.location.href = "/index.html";
}

function directMain(){
  document.location.href = "/index.html";
}

function directSchedule(){
  document.location.href = "/schedule.html";
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
  SendDataTrain(train);
  isLog = 1;
}

function SendDataTrain(train)
{
$.ajax({
  url: "/api/train",
  type: "POST",
  data: JSON.stringify(train),
  contentType: "application/json",
  complete: 	function(data) {
    console.log(data.request); //в консоли браузера выводим json в параметре request
                                          //т.е. то что нам отправил сервер в ответ
      //console.log(data.request.name1);  //мы можем вывести какой-то параметр полученного json, например name1
  }
});
}


function addStation(){
  //var stationID = document.getElementById("stationID_field_sign").value.toString();
  var stationName = document.getElementById("stationName_field_sign").value.toString();

  var station = {
    //station_id: stationID,
    station_name: stationName,
  };
  //include("db.js");
  //var userJSON = JSON.stringify(user);
  SendDataStation(station);
  isLog = 1;
}

function SendDataStation(station)
{
$.ajax({
  url: "/api/station",
  type: "POST",
  data: JSON.stringify(station),
  contentType: "application/json",
  complete: 	function(data) {
    console.log(data.request); //в консоли браузера выводим json в параметре request
                                          //т.е. то что нам отправил сервер в ответ
      //console.log(data.request.name1);  //мы можем вывести какой-то параметр полученного json, например name1
  }
});
}

// function addTrain(){
//   var trainNB = document.getElementById("trainNB_field_sign").value.toString();
//   var homestationID = document.getElementById("homestationID_field_sign").value.toString();

//   var train = {
//     train_number: trainNB,
//     homestation_id: homestationID,
//   };
//   //include("db.js");
//   //var userJSON = JSON.stringify(user);
//   SendDataTrain(train);
//   isLog = 1;
// }

// function SendDataTrain(train)
// {
// $.ajax({
//   url: "/api/train",
//   type: "POST",
//   data: JSON.stringify(train),
//   contentType: "application/json",
//   complete: 	function(data) {
//     console.log(data.request); //в консоли браузера выводим json в параметре request
//                                           //т.е. то что нам отправил сервер в ответ
//       //console.log(data.request.name1);  //мы можем вывести какой-то параметр полученного json, например name1
//   }
// });
// }