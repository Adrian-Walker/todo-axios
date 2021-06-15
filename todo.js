
// Get Request


function getTodo() {
    axios.get('https://api.vschool.io/adrianw/todo')
        .then(res => console.log(res.data))
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

    axios.post('https://api.vschool.io/adrianw/todo', newTodo)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
})

//dom

let info = ['']

function createTodo() {
    for (let i = 0; i < info.length; i++) {
        const newPost = document.createElement('h2')
        newPost.textContent = info[i].title
        document.getElementById('list').appendChild(newPost)
    }
}

createTodo()

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
