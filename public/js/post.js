const $commentBtn = document.getElementById("commentBtn");
const $commentInput = document.getElementById("commentInput");

$commentBtn.addEventListener("click", (e) => {
  // we prevent the default behaviour of the form
  e.preventDefault();
  // We set the alert box to be empty
  $alert.textContent = "";
  // We get the value from the comment input field
  const content = $commentInput.value;
  // We get the data-id from the comment button
  const post_id = $commentBtn.getAttribute("data-id");
  // We check if the content is empty
  if (!content) {
    // If it is, we call the alertDisplay function
    return alertDisplay("Please enter a comment");
  }
  // We create a new object called 'comment'
  // It has 2 properties: content and post_id
  const comment = {
    content,
    post_id,
  };
  // We call the sendComment function
  sendComment(comment);
});
