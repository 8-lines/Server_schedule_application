$(document).ready ( function (){
  $.ajax({
      type: "GET",
      url:'/schedulesList',
      dataType:"json",
      success: function(data){
          console.log(data);
          schedules = data;
          ShowSchedules(schedules);
      }
  });
});

function ShowSchedules(schedules){
  //window.alert("We are here!!!");
  for (var i=0; i<schedules.length; i++) {
      console.log(schedules[i].col1);
      var list = '<div class = "Schedule">'+ schedules[i].col1 + ":                                       " + schedules[i].col2 + "                    " +
      schedules[i].col3 + "          -          " + schedules[i].col4 + "                    " + schedules[i].col5 + '</div>';
      //var list = '<div class = "Schedule">'+ schedules[i].col1 + '</div>';
      document.getElementById('schedulesField').innerHTML += list;
  }
}

function directMain(){
  document.location.href = "/index.html";
}