const $postDiv = document.getElementById("postDiv");
const $postTitle = document.getElementById("title");
const $postContent = document.getElementById("content");
const $updatePostBtn = document.getElementById("updateBtn");
const $deletePostBtn = document.getElementById("deleteBtn");

// This is a click listener for the update button
$updatePostBtn.addEventListener("click", () => {
  // We set any previous alerts to empty
  $alert.textContent = "";
  // We get the values from the input fields
  const title = $postTitle.value;
  const content = $postContent.value;
  const id = $postDiv.getAttribute("data-id");
  // We create a new post object
  const post = {
    id,
    title,
    content,
  };
  // We call the sendPost function and pass in the post object
  updatePost(post);
});
