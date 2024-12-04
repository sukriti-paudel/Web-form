function validate() {
  let valid = true;
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  var name = document.getElementById("namme");
  var phone = document.getElementById("phone");
  var mail = document.getElementById("mail");
  var gender = document.querySelector('input[name="gender"]:checked');
  var skills = document.querySelectorAll('input[name="skills[]"]:checked');
  var country = document.getElementById("country").value;

  const namevalue = name.value.trim();
  const phonevalue = phone.value.trim();
  const mailvalue = mail.value.trim();

  if (namevalue === "" || namevalue.length < 3 || namevalue.length > 50) {
      document.getElementById("nameError").textContent = "Valid username with range 3-50 letters";
      valid = false;
  }
  if (phonevalue === "" || phonevalue.length !== 10|| isNaN(phonevalue)) {
      document.getElementById("phoneError").textContent = "Enter valid number";
      valid = false;
  }
  if (mailvalue === "") {
      document.getElementById("emailError").textContent = "Enter valid mail";
      valid = false;
  }
  if (!gender) {
      document.getElementById("genderError").textContent = "Please select a gender";
      valid = false;
  }
  if (skills.length === 0) {
      document.getElementById("skillError").textContent = "Please select at least one skill";
      valid = false;
  }
  if (!country) {
      document.getElementById("cntError").textContent = "Please select a country";
      valid = false;
  }

  if (!valid) {
      alert("Please fill all the fields correctly.");
  }

  return valid;
}
