const viewWorkBtn = document.getElementById("view-work");

const portafolio = document.getElementById("portafolio");

const nameForm = document.getElementById("name");
const subjectForm = document.getElementById("subject");
const messageForm = document.getElementById("message");

const submitForm = document.getElementById("send-email-form");

const rickPorta = document.getElementById("rickandmorty");

const developerQuotesPorta = document.getElementById("developerquotes");
const theWavePorta = document.getElementById("thewave");
const meetingPorta = document.getElementById("meeting");

rickPorta.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://github.com/S4ND1X/RickAndMortyJS");
});
developerQuotesPorta.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://developer-quotes.netlify.app/");
});
theWavePorta.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://github.com/S4ND1X/UnityProjects3D-TheWave");
});
meetingPorta.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://meeting-creator.netlify.app/");
});

viewWorkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  portafolio.scrollIntoView();
});

// submitForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let nameStr = nameForm.value.trim();
//   let subjectStr = subjectForm.value.trim();
//   let messageStr = messageForm.value.trim();

//   if (nameStr !== "" && subjectStr !== "" && messageStr !== "") {
//     alert("Message Delivered");
//   }
});
