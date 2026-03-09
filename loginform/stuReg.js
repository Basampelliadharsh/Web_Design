document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.querySelector("form");

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const firstname = document.getElementById("firstname");
    const fullNameError = document.getElementById("fullNameError");
    if (!firstname.value.trim()) {
      fullNameError.textContent = "Firstname is required";
      isValid = false;
    } else {
      fullNameError.textContent = "";
    }
    const middlename = document.getElementById("middlename");
    const middlenameError = document.getElementById("middlenameError");
    if (
      middlename.value.trim().length > 0 &&
      middlename.value.trim().length < 2
    ) {
      middlenameError.textContent = "Middlename must be at least 2 characters";
      isValid = false;
    } else {
      middlenameError.textContent = "";
    }

    const lastname = document.getElementById("lastname");
    const lastnameError = document.getElementById("lastnameError");
    if (!lastname.value.trim()) {
      lastnameError.textContent = "Lastname is required";
      isValid = false;
    } else {
      lastnameError.textContent = "";
    }

    const dob = document.getElementById("dob");
    const dobError = document.getElementById("dobError");
    if (!dob.value) {
      dobError.textContent = "Date of Birth is required";
      isValid = false;
    } else {
      dobError.textContent = "";
    }

    const course = document.getElementById("course");
    const courseError = document.getElementById("courseError");
    if (!course.value) {
      courseError.textContent = "Please select a course";
      isValid = false;
    } else {
      courseError.textContent = "";
    }

    const branch = document.getElementById("branch");
    const branchError = document.getElementById("branchError");
    if (!branch.value) {
      branchError.textContent = "Please select a branch";
      isValid = false;
    } else {
      branchError.textContent = "";
    }

    const year = document.getElementById("year");
    const yearError = document.getElementById("yearError");
    if (!year.value) {
      yearError.textContent = "Please select year of study";
      isValid = false;
    } else {
      yearError.textContent = "";
    }

    const genderError = document.getElementById("genderError");
    const genderSelected = document.querySelector(
      'input[name="gender"]:checked',
    );
    if (!genderSelected) {
      genderError.textContent = "Please select your gender";
      isValid = false;
    } else {
      genderError.textContent = "";
    }

    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.value.match(phonePattern)) {
      phoneError.textContent = "Enter a valid 10-digit phone number";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      emailError.textContent = "Enter a valid email address";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    const nationality = document.getElementById("nationality");
    const nationalityError = document.getElementById("nationalityError");
    if (!nationality.value.trim()) {
      nationalityError.textContent = "Nationality is required";
      isValid = false;
    } else {
      nationalityError.textContent = "";
    }

    const address = document.getElementById("address");
    const addressError = document.getElementById("addressError");
    if (!address.value.trim()) {
      addressError.textContent = "Address is required";
      isValid = false;
    } else {
      addressError.textContent = "";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      myForm.submit();
    }
  });
});
