// console.log('hello world')

// const inputField = document.querySelector('#Add')

// //function

// const addMovie = (event) => {
//     console.log(event)
//    console.log(addMovie)
// }
    
// //addEventListner
// inputField.addEventListener('click', addMovie)

const message = document.querySelector('#message')



const addMovie = (event) => {
    event.preventDefault()

    let inputField = document.querySelector('input')

    let movie = document.createElement ("li")

    let movieTitle = document.createElement ("span")

    movieTitle.addEventListener('click', crossOffMovie)

    movieTitle.textContent = inputField.value

    movie.appendChild(movieTitle)

    let deleteButton = document.createElement('button')

    deleteButton.textContent = 'x'

    deleteButton.addEventListener('click', deleteMovie)

    movie.appendChild(deleteButton)

document.querySelector('ul').appendChild(movie)

     inputField.value = ('')

}

document.querySelector('form').addEventListener('submit', addMovie)


const deleteMovie = (event) => {
    event.preventDefault()

    event.target.parentNode.remove() 

    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = (event) => {
    event.preventDefault()

    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked')) 
        return message.textContent = "Movie Watched."
     else return message.textContent = "Movie Added Back!"

}

const revealMessage = (event) => {
    const myTimeout = setTimeout(myGreeting, 1000);

}




