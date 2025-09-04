// contact.js

// Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      response.style.color = "red";
      response.innerText = "⚠️ Please fill in all fields.";
      return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      response.style.color = "red";
      response.innerText = "⚠️ Please enter a valid email.";
      return;
    }

    // Success Message
    response.style.color = "green";
    response.innerText = `✅ Thanks, ${name}! Your message has been sent.`;

    // Clear form
    form.reset();
  });
});