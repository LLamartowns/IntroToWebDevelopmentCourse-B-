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
	var ans = document.getElementById("a15").checked;
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
	var ans = document.getElementById("a18").checked;
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
   window.alert("If you are familiar with JS then might seem like deja vue, But trust it is not, if your are having a hard time with this then refer back to The Cheatsheet or The Intro to Web Development(B) walkthrough videos "); 
}

function myTip2() {
   window.alert("Are we talking about an element or a specific element here?? Hmmm. "); 
}

function myTip3() {
   window.alert("Im sure if you type this into any large scale search engine This riddle will be solved in less than .2 seconds, but try to resist the urge"); 
}

function myTip4() {
   window.alert("A good reference would be The Intro to Web Development(B) walkthrough videos or the cheatsheet that was provided "); 
}

function myTip5() {
   window.alert("This is another case of understanding on how to make a CSS rule, if you are having trouble with this then refer back to The Intro to Web Development(B) walkthrough videos"); 
}

