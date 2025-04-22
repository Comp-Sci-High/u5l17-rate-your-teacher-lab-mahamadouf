// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page

const creatForm = document.querySelector("form")
creatForm.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const RatingData = new formData(form);
    const reqBody = object.fromEntries(RatingData)

    const response = await fetch ("/delete/rating",{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        },
        body: json.stringify(reqBody)
    
})
window.location.href = "/"

 const data = await response.json()
 console.log(data)
})

 