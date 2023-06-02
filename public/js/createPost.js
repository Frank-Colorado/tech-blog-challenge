const $postBtn = document.getElementById("postBtn");
const $postTitle = document.getElementById("title");
const $postContent = document.getElementById("content");

// This is a click event listener for the post button
$postBtn.addEventListener("click", () => {
  console.log("clicked");
  // We set any previous alerts to empty
  $alert.textContent = "";
  // We get the values from the input fields
  const title = $postTitle.value;
  const content = $postContent.value;
  // We check if the title and content are empty
  if (title === "" || content === "") {
    // If they are, we display an alert
    return alertDisplay("The title and content cannot be empty!");
  }
  // We create a new post object
  const post = {
    title,
    content,
  };
  // We call the sendPost function and pass in the post object
  sendPost(post);
});
