
// Get Request



function getTodo() {
    console.log("We got todo's")
    axios.get('https://api.vschool.io/adrianw/todo')
        .then(res => createTodo(res.data))
        .catch(err => console.log(err));
}

getTodo()


//Post

const myForm = document.myForm

myForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const newTodo = {
        title: myForm.title.value,
        price: myForm.price.value,
        description: myForm.description.value,
        imgUrl: myForm.imgUrl.value,
    }

    myForm.title.value = ''
    myForm.price.value = ''
    myForm.description.value = ''
    myForm.imgUrl.value = ''

    axios.post('https://api.vschool.io/adrianw/todo', newTodo)
        .then(getTodo)
        .catch(err => console.log(err))
})

//dom


// const addBttn = document.myForm.add

// addBttn.addEventListener("submit",

//     function newElement(data) {
//         data.preventDefault()

//         for (let i = 0; i < data.length; i++) {
//             const newPost = document.createElement('h2')
//             newPost.textContent = data[i].title
//             document.getElementById('list').appendChild(newPost)
//         }
//     }
// )




function createTodo(data) {
    const whateverIwant = document.getElementById('toDoList')
    console.log("Created todo list")
    clearList()
    for (let i = 0; i < data.length; i++) {
        div = document.createElement('div')
        title = document.createElement('h2')
        description = document.createElement('h2')
        price = document.createElement('h2')
        image = document.createElement('img')
        delButton = document.createElement('button')



        delButton.textContent = "DELETE"
        delButton.addEventListener('click', () => {
            deleteBtn(data[i]._id)
        })

        checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = data[i].completed
        checkbox.addEventListener('click', () => {
            completed(data[i]._id, checkbox.checked)
        })
        console.log(data[i].completed)

        div.className = 'todo' + ` ${data[i].completed}`

        title.textContent = data[i].title
        description.textContent = data[i].description
        price.textContent = data[i].price
        image.textContent = data[i].title

        div.appendChild(title)
        div.appendChild(description)
        div.appendChild(price)
        div.appendChild(image)
        div.appendChild(delButton)

        div.appendChild(checkbox)

        whateverIwant.appendChild(div)

    }

}

// Clear DOM

function clearList() {
    const el = document.getElementById('toDoList')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

//Delete

function deleteBtn(id) {
    axios.delete(`https://api.vschool.io/adrianw/todo/${id}`)
        .then(getTodo)
        .catch(err => console.log(err))

    console.log('delete clicked')
}

//Complete (Checked)

function completed(id, comp) {
    console.log(comp)
    axios.put(`https://api.vschool.io/adrianw/todo/${id}`, { 'completed': comp })
        .then(getTodo)
        .catch(err => console.log(err))

}

//Put

// let changes = {
//     title: 'Groceries',
//     description: 'veggies and vegan snacks',
//     imgUrl: 'https://bit.ly/2RRKo6G',
//     price: '125'
// }

// function editTodo() {
//     axios.put('https://api.vschool.io/adrianw/todo/60c66951ee6f8d3fc3fee14e', changes)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
// }

// editTodo()

//
