$(document).ready(function(){
    $("#design").click(function(){
        
      $("#designinfo").toggle("slow");
    });
    $("#dev").click(function(){
        $("#devinfo").toggle();
      });
      $("#prod").click(function(){
        $("#prodinfo").toggle();
      });


    //   this takes user data and alerts the user 

      $("#submit").click(function(e){
          let name = $('#name').val()
          let mail = $('#email').val()
          let message = $('#message').val()
          alert("Hello " + name + " we have recieved your feedback. Thank you!")

          e.preventDefault();
      })
  });