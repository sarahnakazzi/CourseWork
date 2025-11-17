function submitForm() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let phone = document.getElementsByName("phone-number")[0].value;
  let DateOfBirth = document.getElementById("DateOfBirth").value;
  let district = document.getElementById("district").value;
  let subCounty = document.getElementById("sub-county").value;
  let village = document.getElementById("village").value;

  let gender = document.querySelector('input[name="gender"]:checked');
  gender = gender ? gender.value : "Not specified";

  let maritalStatus = document.querySelector('input[name="marital-status"]:checked');
  maritalStatus = maritalStatus ? maritalStatus.value : "Not specified";

  let country = document.querySelector('select[name="dropdown"]').value;

  let symptoms = document.getElementById("symptoms").value;

  let pastMedicalHistory = [];
  document.querySelectorAll('input[type="checkbox"][name]').forEach(box => {
    if (box.checked) pastMedicalHistory.push(box.name);
  });

  let BloodGroup = document.querySelector('select[name="dropdown"]').value;

  if (!firstName || !lastName || !age || !phone || !district || !country || !pastMedicalHistory) {
    alert("Please fill in all required fields!");
    return false;
  }

  let summary = `          
    Name: ${firstName} ${lastName}
    Age: ${age}
    Gender: ${gender}
    Phone: ${phone}
    Address: ${district}, ${subCounty}, ${village}
    Country: ${country}
    Symptoms: ${symptoms}
    Past medical history: ${pastMedicalHistory}
    Blood group: ${BloodGroup}
    Marital Status: ${maritalStatus.join(", ") || "None"}
  `;
  alert(summary);

  return false; 
}
