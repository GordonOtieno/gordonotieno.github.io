const decodedMessage = JSON.parse(localStorage.getItem('message'));

document.getElementById('fullname').value = decodedMessage.name;
document.getElementById('emailaddress').value = decodedMessage.email;
document.getElementById('messagearea').value = decodedMessage.message;

function captureData() {
  const project = {
    name: document.getElementById('fullname').value,
    email: document.getElementById('emailaddress').value,
    message: document.getElementById('messagearea').value,
  };
  localStorage.setItem('message', JSON.stringify(project));
}
captureData();
