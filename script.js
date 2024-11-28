if (typeof window !== 'undefined') {
  window.toggleMenu = function() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', (event) => {
      const typingElement = document.getElementById('typing');
      const textArray = [
          "A Data Scientist",
          "EX NSF Data Science intern",
          "Research in Bio-Med Machine learning",
          "A Food truck Owner",
          
      ];
      let textIndex = 0;
      let charIndex = 0;
      let currentText = '';
      let currentChars = '';
      let isDeleting = false;

      function type() {
          if (textIndex < textArray.length) {
              if (charIndex < textArray[textIndex].length) {
                  currentChars += textArray[textIndex].charAt(charIndex);
                  typingElement.innerHTML = currentChars + '<span class="cursor">|</span>';
                  charIndex++;
                  setTimeout(type, 100);
              } else {
                  // Keep the cursor visible for a moment before starting to delete
                  setTimeout(() => {
                      charIndex = 0;
                      currentChars = '';
                      textIndex++;
                      typingElement.innerHTML = currentChars + '<span class="cursor">|</span>';
                      if (textIndex >= textArray.length) {
                          textIndex = 0;
                      }
                      setTimeout(type, 100);
                  }, 2000);
              }
          }
      }

      // Start the typing animation
      type();
  });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzN4xce3IHpvzW_mfsYFvhU432zZ0yVQ-fGy6aKGUYvlKGAt5lWQZECP8rH4qk_1kyR/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent succefully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})