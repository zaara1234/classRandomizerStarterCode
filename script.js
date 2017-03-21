$(document).ready(function(){
    var teachers = ["Nick", "Michael", "Mat", "Rafi", "Jenna"];
    var student = ['pamela', 'lauren', 'felix', 'jacky', 'isabela', 'daril', 'ana', 'Zaara']
 
   $("#studentButton").click(function(){
    $("#studentDisplay").html(random2)
          var random2 = Math.floor(Math.random()* student.length);
              console.log(student[random2]);
                  $("#studentDisplay").html(student[random2]);
      });
      $('#teacherButton').click(function(){
    $("#teacherDisplay").html(random1)
          var random1 = Math.floor(Math.random()* teachers.length);
              console.log(student[random1]);
                  $("#teacherDisplay").html(teachers[random1]);
      });
});
