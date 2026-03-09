document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    let isValid = true;

    const empId = document.getElementById("empId").value.trim();
    if (empId === "") {
      showError("empIdError", "Employee ID is required");
      isValid = false;
    } else {
      clearError("empIdError");
    }

    const empName = document.getElementById("empName").value.trim();
    if (empName === "") {
      showError("empNameError", "Employee Name is required");
      isValid = false;
    } else {
      clearError("empNameError");
    }

    const empEmail = document.getElementById("empEmail").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(empEmail)) {
      showError("empEmailError", "Enter a valid email address");
      isValid = false;
    } else {
      clearError("empEmailError");
    }

    const empDept = document.getElementById("empDept").value;
    if (empDept === "") {
      showError("empDeptError", "Please select a department");
      isValid = false;
    } else {
      clearError("empDeptError");
    }

    const empDob = document.getElementById("empDob").value;
    if (empDob === "") {
      showError("empDobError", "Date of Birth is required");
      isValid = false;
    } else {
      clearError("empDobError");
    }

    const empGender = document.querySelector('input[name="empGender"]:checked');
    if (!empGender) {
      showError("empGenderError", "Please select gender");
      isValid = false;
    } else {
      clearError("empGenderError");
    }
    const spouse = document.querySelector('input[name="spouse"]:checked');
    const spouseName = document.getElementById("spouseName").value.trim();
    if (!spouse) {
      showError("spouseError", "Please select spouse option");
      isValid = false;
    } else if (spouse.value === "yes" && spouseName === "") {
      showError("spouseError", "Please enter spouse name");
      isValid = false;
    } else {
      clearError("spouseError");
    }
    const empPhone = document.getElementById("empPhone").value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(empPhone)) {
      showError("empPhoneError", "Enter a valid 10-digit phone number");
      isValid = false;
    } else {
      clearError("empPhoneError");
    }

    const empAddress = document.getElementById("empAddress").value.trim();
    if (empAddress === "") {
      showError("empAddressError", "Address is required");
      isValid = false;
    } else {
      clearError("empAddressError");
    }

    
    const salary = document.getElementById("salary").value.trim();
    if (salary === "" || parseFloat(salary) <= 0) {
      showError("salaryError", "Enter a valid salary");
      isValid = false;
    } else {
      clearError("salaryError");
    }

    if (isValid) {
      alert("Employee registered successfully!");
      form.reset();
    }
  });

  document.getElementById("spouseYes").addEventListener("change", () => {
    document.getElementById("spouseName").style.display = "inline-block";
  });

  document.getElementById("spouseNo").addEventListener("change", () => {
    document.getElementById("spouseName").style.display = "none";
    document.getElementById("spouseName").value = "";
  });

  function showError(id, message) {
    document.getElementById(id).textContent = message;
  }

  function clearError(id) {
    document.getElementById(id).textContent = "";
  }
});