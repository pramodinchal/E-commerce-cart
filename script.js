function activateRadioBtn1() {
  document.getElementById("radiobtn1").checked = true;
  document.getElementById("radiobtn2").checked = false;
  document.getElementById("radiobtn3").checked = false;
}
function activateRadioBtn2() {
  document.getElementById("radiobtn1").checked = false;
  document.getElementById("radiobtn2").checked = true;
  document.getElementById("radiobtn3").checked = false;
}
function activateRadioBtn3() {
  document.getElementById("radiobtn1").checked = false;
  document.getElementById("radiobtn2").checked = false;
  document.getElementById("radiobtn3").checked = true;
}
