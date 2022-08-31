// console.log('hello world')

// const inputField = document.querySelector('#Add')

// //function

// const addMovie = (event) => {
//     console.log(event)
//    console.log(addMovie)
// }
    
// //addEventListner
// inputField.addEventListener('click', addMovie)



const addMovie = (event) => {
    event.preventDefault()

    let inputField = document.querySelector('input')

    let movie = document.createElement ("li")

    let movieTitle = document.createElement ("span")

    movieTitle.textContent = inputField.value

    movie.appendChild(movieTitle)

document.querySelector('ul').appendChild(movie)

     inputField.value = ('')

}

document.querySelector('form').addEventListener('submit', addMovie)
