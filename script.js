const element = document.getElementById("makePasswordButton");
element.addEventListener("click", function () {
  let originalPassword = document.getElementById("originalPassword").value;
  if (!originalPassword) {
    alert("Please enter a password that you want to cipher."); // Show an alert if the task text is empty
    return;
  } else {
    let asciiPassword = "";
    let length = originalPassword.length;
    for (let i = 0; i < length; i++) {
      let ascii = originalPassword.charCodeAt(i);
      asciiPassword += String.fromCharCode(ascii + 3);
    }
    // Get the first element with the class 'my-container'
    let container = document.querySelector(".content");

    // Create a new element
    let newParagraph = document.createElement("p");
    newParagraph.textContent =
      "Your password has been encoded using the Caesar cipher:" + asciiPassword;

    // Append the new element to the container
    container.appendChild(newParagraph);
    alert(asciiPassword); //it works
  }
});
