/** @type {HTMLFormElement} */
let form = document.querySelector("#form")
let errorMsg = document.querySelector("#errorMsg")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let vaildEmail = false
    if (form.elements.email.value.includes("@") && form.elements.email.value.includes(".")) {
        vaildEmail = true
    }

    if (form.elements.name.value.length < 3) {
        showError("Navn er ikke udfyldt korrekt", form.elements.name)
    }
    else if (form.elements.email.value.length < 5 || !vaildEmail) {
        showError("Udfyld en vaild Email", form.elements.email)
    }
    else if (form.elements.feedback.value.length < 5) {
        showError("Feedback besked er ikke lang nok", form.elements.feedback)
    }
    else if (form.elements.question.value.length < 5) {
        showError("Ikke et ordenligt spørgsmål", form.elements.question)
    }
    else {
        form.submit()
    }

})


function showError(msg, input) {
    errorMsg.innerHTML = msg
    // input.focus()
    input.classList.add("form__input--red__border")
    input.addEventListener("input", function () {
        input.classList.remove("form__input--red__border")
        errorMsg.innerHTML = ""
    })
}