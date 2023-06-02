const $logoutBtn = document.getElementById("logoutBtn");
const $alert = document.getElementById("alert");

// This is a function called alertDisplay
// It has 1 parameter: 'message'
// It will display the message in the alert box
const alertDisplay = (message) => {
  $alert.textContent = message;
};

$logoutBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    // If the response is okay, redirect to the login page
    if (response.ok) {
      location.href = "/login";
    }
  } catch (err) {
    console.log({ err });
  }
});
