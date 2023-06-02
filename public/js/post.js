const $commentBtn = document.getElementById("commentBtn");
const $commentInput = document.getElementById("commentInput");

// This is an async function called sendComment
// It has 1 parameter: 'comment'
// It will send the comment object to the server
const sendComment = async (comment) => {
  try {
    // We destructure the content and post_id from the comment object
    const { content, post_id } = comment;
    // We send a POST request to the server
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // The body of the request is the comment object
      body: JSON.stringify({ content, post_id }),
    });
    // We wait for the response from the server
    const data = await response.json();
    // If the response is ok
    if (response.ok) {
      // We set the comment input field to be empty
      $commentInput.value = "";
      // We reload the page
      location.reload();
    } else {
      const { error } = data;
      alertDisplay(error);
    }
  } catch (err) {
    console.error({ err });
  }
};

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
