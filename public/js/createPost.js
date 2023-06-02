const $postBtn = document.getElementById("postBtn");
const $postTitle = document.getElementById("title");
const $postContent = document.getElementById("content");

// This is a function called sendPost
// It has 1 parameter: 'post'
// It will send the post object to the server
const sendPost = async (post) => {
  try {
    // We destructure the title and content from the post object
    const { title, content } = post;
    // We send a POST request to the server
    const response = await fetch("/api/posts", {
      method: "POST",
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

// This is a click event listener for the post button
$postBtn.addEventListener("click", () => {
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
