// A list of clear text passwords (for educational purposes only)
const passwordsList = {
  "MattH": "matt1979",
  "TerryK": "terry198?",
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username exists in the password list
  if (passwordsList.hasOwnProperty(username)) {
    const storedPassword = passwordsList[username];
    // Compare the entered password with the stored password
    if (password === storedPassword) {
      window.location.href = 'ItemsIndex.html';
    } else {
      alert("Invalid password - fuck off and try again smeghead!");
    }
  } else {
    alert("Username not found - who the HELL are you!");
  }
}
