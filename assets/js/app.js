const viewWorkBtn = document.getElementById("view-work");

const portafolio = document.getElementById("portafolio");

const nameForm = document.getElementById("name");
const subjectForm = document.getElementById("subject");
const messageForm = document.getElementById("message");

const submitForm = document.getElementById("send-email-form");

viewWorkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  portafolio.scrollIntoView();
});

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameStr = nameForm.value.trim();
  let subjectStr = subjectForm.value.trim();
  let messageStr = messageForm.value.trim();

  if (nameStr !== "" && subjectStr !== "" && messageStr !== "") {
    sendEmail(nameStr, subjectStr, messageStr);
  }
});

function sendEmail() {
  submitForm.reset();
  alert("Message Delivered");
}
