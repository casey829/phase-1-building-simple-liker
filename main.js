
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeElements = document.querySelectorAll(".like-glyph");

//iterating over each heart
likeElements.forEach(likeElement =>{
//starting by setting the hearts to empty
likeElement.textContent = EMPTY_HEART;
//invoking the server call
mimicServerCall().then(() => {

}).catch((error) => {
    const errorMessage = document.getElementById("modal-message");
    errorMessage.textContent = error;
});


likeElement.onclick = (event) => {
  if (event.target.textContent === EMPTY_HEART){
    event.target.textContent = FULL_HEART
    event.target.classList.add('activated-heart');
  } else {
    event.target.textContent = EMPTY_HEART
    event.target.classList.remove('activated-heart');
  }

//Selecting the hidden modal
const hiddenModal = document.querySelector(".hidden");


hiddenModal.classList.remove("hidden");


setTimeout(() => {
  hiddenModal.classList.add("hidden");
}, 3000);
};
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
