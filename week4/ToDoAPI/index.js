axios.get("https://api.vschool.io/anthonyh/todo/")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            let input = document.createElement("input")
            input.setAttribute("type", "checkbox")
            input.setAttribute("id", response.data[i]._id)
            document.body.appendChild(input)
            const label = document.createElement('label')
            label.id = response.data[i].completed
            label.setAttribute("for", response.data[i]._id)
            label.textContent = response.data[i].title
            document.body.appendChild(label)
            const p = document.createElement("p")
            p.textContent = response.data[i].description
            document.body.appendChild(p)
            const img = document.createElement("img")
            img.setAttribute("src", response.data[i].imgUrl)
            img.style.display = "block"
            document.body.appendChild(img)
            if(label.id === "true"){
                input.checked = true
                label.style.textDecoration = "line-through"
            } else {
                label.style.textDecoration = "none"
            }
        }
        })
    .catch(error => console.log(error))

   
