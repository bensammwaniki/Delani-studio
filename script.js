$(document).ready(function(){
    $("#design").click(function(){
      $("#designimg").toggle("slow");    
      $("#designinfo").toggle("slow");
    });
    $("#dev").click(function(){
        $("#devimg").toggle();      
        $("#devinfo").toggle();
      });
      $("#prod").click(function(){
        $("#prodimg").toggle();
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