// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page

const { response } = require("express");
const { object } = require("webidl-conversions")

const createForm = document.querySelector("form")
createForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const teacherData = new formData(form);
    const reqBody = object.fromEntries(teacherData)

    const response = await fetch("/add/teacher", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)

    })
    window.location.href = "/"

    const data = await response.json()
    console.log(data)
})

