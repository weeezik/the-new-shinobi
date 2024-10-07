const userName = document.querySelector('input');
const joinButton = document.querySelector('button');
const officialShinobis = []

joinButton.addEventListener("click", function() {
    if(userName) {
      alert(`You, ${userName.value}, are now a New Shinobi.`);
      officialShinobis.push(userName.value)
      userName.value = ""
      console.log(officialShinobis)
    };
  }
);