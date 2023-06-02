const $postDiv = document.getElementById("postDiv");
const $postTitle = document.getElementById("title");
const $postContent = document.getElementById("content");
const $updatePostBtn = document.getElementById("updateBtn");
const $deletePostBtn = document.getElementById("deleteBtn");

const updatePost = async (post) => {
  try {
    // We destructure the post parameter
    const { title, content, id } = post;
    // We send a PUT request to the server
    // We pass in the ID as a parameter in the URL
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // The body of the request is the post object
      body: JSON.stringify({ title, content }),
    });
    // We wait for the response from the server
    const data = await response.json();
    // If the response is ok
    if (response.ok) {
      // We redirect to the dashboard page
      location.href = "/dashboard";
    } else {
      const { error } = data;
      alertDisplay(error);
    }
  } catch (err) {
    console.error({ err });
  }
};

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
