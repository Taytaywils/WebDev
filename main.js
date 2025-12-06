
document.addEventListener("DOMContentLoaded", function (event) {
    initValidation("#visitorForm");
    
});

function initValidation(selector) {
    const form = document.querySelector(selector);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!formCheck(form)) {
            console.log("Form is invalid");
        } else {
            console.log("Form is valid");

        }
    });

    const fields = form.querySelectorAll(".input, textarea, select, #checkbox label input");

    fields.forEach(field => {
        field.addEventListener("blur", function () {
            validateField(field);
        });
        if (field.id === "state") {
            field.addEventListener("change", function () {
                validateField(field);
            })
        }
    });
}