function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

document.getElementById("field_theones").setCustomValidity("You're about as much use as a condom machine in the Vatican. Try again dumbass! or better yet, don't use our services anymore! You ain't getting your password back! Sue us!");

