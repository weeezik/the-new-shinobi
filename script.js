const userName = document.querySelector('input');
const joinButton = document.querySelector('button');

joinButton.addEventListener("click", function() {
    if(userName) {
      alert(userName.value);
    };
  }
);