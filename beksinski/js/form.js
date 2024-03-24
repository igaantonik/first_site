function validateForm(){
  var name =
    document.forms.myForm.field1.value;
  var email =
    document.forms.myForm.field2.value;

  var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regName = /\d+$/g;

  if (name == "" || regName.test(name)) {
    window.alert("Please enter your name properly.");
    name.focus();
    return false;
  }


  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  window.alert("Gratulacje! Zostałeś zapisany!");
  return true;
}

