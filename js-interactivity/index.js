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

//read top to bottom.
//Questions above answers.


// In index.js, create a new function called addMovie that takes in an event as a parameter.
const addMovie = (event) => {
    event.preventDefault()

    // We are going to want to get and set the value of our input field in this function, so let’s select it now. Use querySelector to get the input, save it to a variable called inputField.
   
    let inputField = document.querySelector('input')

    // Let’s make the HTML for our movie list items. Create a new variable called movie, store a new li element in it using document.createElement, this will be the parent element of our movie’s title and the movie’s delete button.

    let movie = document.createElement ("li")

    // Next create a new span element and save it to a variable called movieTitle. 

    let movieTitle = document.createElement ("span")


//Finally, we need to add this function as an event handler for every movie title. In the addMovie function, after you set the textContent of the span element, use addEventListener to listen for a click event on the span and run the crossOffMovie function.
//This is adding in an event listner for crossoff movie function below.
//location in all of this is important.
    movieTitle.addEventListener('click', crossOffMovie)

    // Set the textContent of movieTitle to be the value of inputField. This will write what the user typed out into our new span.

    movieTitle.textContent = inputField.value

    // Now we’ll need to append the movieTitle span to our movie element. Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.

    movie.appendChild(movieTitle)


// In the addMovie function, after appending the movieTitle to movie, use createElement to create a new button element and save it to a variable called deleteBtn.
    let deleteButton = document.createElement('button')

// Set the textContent of deleteBtn to be the letter X.
    deleteButton.textContent = 'x'
//Use addEventListener to listen for a click event on the button and run the deleteMovie function. We will create that function later in this step.
    deleteButton.addEventListener('click', deleteMovie)
//Now that the button has been created, use the appendChild method to add deleteBtn onto the movie element.
    movie.appendChild(deleteButton)


    //Then, use querySelector to find the ul element that already exists in our HTML and use appendChild to attach the movie element we created to the list.
document.querySelector('ul').appendChild(movie)

     inputField.value = ('')

}
//Finally, outside of your function, use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.
document.querySelector('form').addEventListener('submit', addMovie)

//Finally, outside of the addMovie function, create a new function called deleteMovie that takes in an event parameter. When we click the button, we want to remove the entire list item. Since the button is a child of the list item, we can use event.target.parentNode.remove() to remove the entire list item. JavaScript knows what the target of this event is (the specific delete button that’s clicked) and will only get rid of that one button’s parent (the movie list item that holds the title and button). You should now have a functioning delete button on each movie you add!

const deleteMovie = (event) => {
    event.preventDefault()

    event.target.parentNode.remove() 

    message.textContent = 'Movie Deleted!'
}
//In index.js, create a new function called crossOffMovie that takes in an event as a parameter. - Later, we will need to add this as an event handler for every movie title span.
const crossOffMovie = (event) => {
    event.preventDefault()
   // Call event.target.classList.toggle() passing in the checked class so that the class is added or removed if the title is clicked. (We want users to be able to “un-cross” movies off in case they did it by accident).
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked')) 
        return message.textContent = "Movie Watched."
     else return message.textContent = "Movie Added Back!"

}
// Intermidate Section vv //


const revealMessage = (event) => {
    const myTimeout = setTimeout(myGreeting, 1000);

}


