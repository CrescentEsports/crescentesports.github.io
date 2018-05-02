// Validating Empty Field
function check_empty() {
if (document.getElementById('input_name').value == "" || document.getElementById('input_email').value == "" || document.getElementById('input_msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('popout').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('popout').style.display = "none";
}