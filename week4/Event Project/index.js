document.getElementById("listChar").addEventListener("click", function(){    
    if(document.getElementById("listChar").textContent === "List Pokemon"){
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                for(let i = 0; i < response.data.results.length; i++){
                    const ol = document.createElement("ol")
                    document.body.appendChild(ol)
                    const name = response.data.results[i].name
                    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
                    const li = document.createElement('li')
                    li.textContent = nameCapitalized
                    document.getElementById("list").appendChild(li)
                }
            })
            .catch(error => console.log(error))
    } else if(document.getElementById("listChar").textContent === "List Ghibli Characters"){
        axios.get("https://ghibliapi.herokuapp.com/people")
            .then(response => {
                for(let i = 0; i < response.data.length; i++){
                    const ol = document.createElement("ol")
                    document.body.appendChild(ol)
                    const name = response.data[i].name
                    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
                    const li = document.createElement('li')
                    li.textContent = nameCapitalized
                    document.getElementById("list").appendChild(li)
                }
            })
            .catch(error => console.log(error))
    }
})

