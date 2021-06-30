
// Get Request



function getTodo() {
    axios.get('https://api.vschool.io/adrianw/todo')
        .then(res => createTodo(res.data))
        .catch(err => console.log(err));
}

getTodo()


//Post

const myForm = document.myForm.submits

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



// function newElement(data) {
//     for (let i = 0; i < data.length; i++) {
//         const newPost = document.createElement('h2')
//         newPost.textContent = data[i].title
//         document.getElementById('list').appendChild(newPost)
//     }
// }


const addBttn = document.myForm.add
addBttn.addEventListener("submit",
    function newElement() {
        var item = document.createElement("li");
        var content = document.getElementById("title").value;
        var post = document.createTextNode(content);
        item.appendChild(post);
        if (content === '') {
            alert("Incomplete");
        } else {
            document.getElementById("unOrdered").appendChild(item);
        }

        document.getElementById("myInput").value = "";

    }

)


// newElement()

// createTodo()

//Put

let changes = {
    title: 'Groceries',
    description: 'veggies and vegan snacks',
    imgUrl: 'https://bit.ly/2RRKo6G',
    price: '125'
}

function editTodo() {
    axios.put('https://api.vschool.io/adrianw/todo/60c66951ee6f8d3fc3fee14e', changes)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

editTodo()
