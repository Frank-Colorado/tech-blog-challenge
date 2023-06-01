const $logoutBtn = document.getElementById("logoutBtn");

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
