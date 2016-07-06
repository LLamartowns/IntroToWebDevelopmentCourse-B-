window.ansSubmit1 = function() {
	var ans = document.getElementById("a1").checked;
  var checkboxs = document.getElementsByClassName("question1");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit1").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit1").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit1").style.backgroundColor="green";
  }
}

window.ansSubmit2 = function() {
	var ans = document.getElementById("a8").checked;
  var checkboxs = document.getElementsByClassName("question2");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit2").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit2").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit2").style.backgroundColor="green";
  }
}

window.ansSubmit3 = function() {
	var ans = document.getElementById("a11").checked;
  var checkboxs = document.getElementsByClassName("question3");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit3").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit3").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit3").style.backgroundColor="green";
  }
}

window.ansSubmit4 = function() {
	var ans = document.getElementById("a14").checked;
  var checkboxs = document.getElementsByClassName("question4");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit4").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit4").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit4").style.backgroundColor="green";
  }
}

window.ansSubmit5 = function() {
	var ans = document.getElementById("a20").checked;
  var checkboxs = document.getElementsByClassName("question5");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit5").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit5").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit5").style.backgroundColor="green";
  }
}



function myTip1() {
   window.alert("To answer this question remember the consruct of creating CSS rules talked about during The Intro to Web Development(B) Class walkthrough videos"); 
}

function myTip2() {
   window.alert("A good reference could be to Look through the source code of the this Web App, Notice the selectors used to style an element by its id"); 
}

function myTip3() {
   window.alert("If one of these refers to an id, surely one of these refers to a class"); 
}

function myTip4() {
   window.alert("To find out if one of these is or is not a real property:value pair refer back to the Cheatsheet provided"); 
}

function myTip5() {
   window.alert("The values of this attribute are given only clockwise if not individually"); 
}

