
function showErrorMessage(field) {
    let errorArea = field.nextElementSibling;
    field.classList.add("invalid");
    if (field.id === "state") {
        errorArea.innerHTML = "Please select a state";
    } else if (field.id === "zip") {
        if (field.value === "") {
            errorArea.innerHTML = "Please fill out this field"
        } else {
            errorArea.innerHTML = "Zip code is incorrect";
        }
    } else if (field.id === "email") {
        if (field.value === "") {
            errorArea.innerHTML = "Please enter an email address"
        } else {
            errorArea.innerHTML = "Email address in incorrect (johndoe@example.com)"
        }
    } else {
        field.nextElementSibling.innerHTML = field.validationMessage;
    }
}

function checkFormat(field) {
    if (field.id === "zip") {
        let reg = /^\d{5}$/;
        return reg.test(field.value);
    } else if (field.id === "email") {
        let reg = /^[^\s@]+@[^\s@]+\.(com|net|gov|org)$/i;
        return reg.test(field.value);
    }
}

function formCheck(form) {
    const fields = form.querySelectorAll(".input, textarea, select, #checkbox label input");
    let arr = [];
    for (let field of fields) {
        if (!validateField(field)) {
            arr.push(false);
        }
    }
    if (arr.includes(false)) {
        return false;
    } else {
        return true;
    }
     
}

function removeErrorMessage(field) {
    field.nextElementSibling.innerHTML = "";
    field.classList.remove("invalid");
    field.classList.add("valid");
}

function checkRequired(field) {
    if (field.value !== "") {
        return true;
    } else {
        return false;
    }
}

function validateField(field) {
    if (field.id === "comments") {
        return true;
    } else if (field.id === "state") {
        if (field.value === "") {
            field.classList.add("invalid");
            showErrorMessage(field);
            return false;
        } else {
            removeErrorMessage(field);
            return true;
        }
    } else if (field.name === "zip") {
        if (!checkFormat(field)) {
            field.classList.add("invalid");
            showErrorMessage(field);
            return false;
        } else {
            removeErrorMessage(field);
            return true;
        }
    } else if (field.id === "email") {
        if (!checkFormat(field)) {
            field.classList.add("invalid");
            showErrorMessage(field);
            return false;
        } else {
            removeErrorMessage(field);
            return true;
        }
    } else if (field.name === "hear") {
        const group = document.querySelectorAll('input[name="hear"]');
        const errorArea = document.getElementById("checkbox").nextElementSibling;

        const oneChecked = Array.from(group).some(cb => cb.checked);

        if (!oneChecked) {
            errorArea.innerHTML = "Please select at least one option";
            return false;
        }

        errorArea.innerHTML = "";
        return true;
    } else if (!checkRequired(field)) {
        showErrorMessage(field);
        return false;
    } else {
        removeErrorMessage(field);
        return true;
    }
}