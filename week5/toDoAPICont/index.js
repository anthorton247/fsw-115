const idArray = [0]
const toDo = document.toDo

toDo.addEventListener("submit", function(event){
    event.preventDefault()

    const newToDo = {
        title: toDo.title.value,
        description: toDo.description.value,
        price: toDo.price.value
    }

    axios.post("https://api.vschool.io/anthonyh/todo/", newToDo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})

axios.get("https://api.vschool.io/anthonyh/todo/")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const form = document.createElement("form")
            form.setAttribute("id", i)
            const formname = "A" + i
            form.setAttribute("name", formname)
            document.getElementById("main").appendChild(form)
            let input = document.createElement("input")
            input.setAttribute("type", "checkbox")
            input.setAttribute("name", response.data[i]._id)
            input.setAttribute("id", "complete" + i)
            document.getElementById(i).appendChild(input)
            const h3 = document.createElement('h3')
            h3.id = response.data[i].completed
            h3.textContent = i + 1 + ". " + response.data[i].title
            document.getElementById(i).appendChild(h3)
            const p = document.createElement("p")
            p.textContent = response.data[i].description
            document.getElementById(i).appendChild(p)
            const price = document.createElement("p")
            price.textContent = response.data[i].price
            document.getElementById(i).appendChild(price)
            const img = document.createElement("img")
            img.setAttribute("src", "./thumb.jpg")
            img.style.display = "block"
            document.getElementById(i).appendChild(img)
            idArray.push(response.data[i]._id)
            const delbutton = document.createElement("button")
            delbutton.textContent = "Delete"
            delbutton.setAttribute("id", "delete" + i)
            delbutton.setAttribute("name", response.data[i]._id)
            document.getElementById(i).appendChild(delbutton)
            document.getElementById("delete" + i).addEventListener("click", function(event){
                event.preventDefault()
                const id = document.getElementById("delete" + i).getAttribute("name")
                const url = "https://api.vschool.io/anthonyh/todo/" + id
                console.log(url)
                axios.delete(url)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
            })
           document.getElementById("complete" + i).addEventListener("change", function(){
                event.preventDefault()
                const compTrue = {
                    completed: true
                }
                const compFalse = {
                    completed: false
                }
                const id = document.getElementById("complete" + i).getAttribute("name")
                const url = "https://api.vschool.io/anthonyh/todo/" + id
                if(input.checked){
                    axios.put(url, compTrue)
                } else {
                    axios.put(url, compFalse)
                }
            })
            if(h3.id === "true"){
                h3.style.textDecoration = "line-through"
                p.style.textDecoration = "line-through"
                price.style.textDecoration = "line-through"
            } else {
                h3.style.textDecoration = "none"
            }
        }
        })
    .catch(error => console.log(error))


const toDoEdit = document.toDoEdit

toDoEdit.addEventListener("submit", function(event){
    event.preventDefault()
    const id = idArray[toDoEdit.id.value]
    const editToDo = {
        title: toDoEdit.title.value,
        description: toDoEdit.description.value,
        completed: toDoEdit.price.value 
    }
    const url = "https://api.vschool.io/anthonyh/todo/" + id
    axios.put(url, editToDo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

})

