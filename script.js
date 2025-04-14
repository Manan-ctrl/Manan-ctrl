document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("blogUser", user);
    document.getElementById("login-signup").style.display = "none";
    document.getElementById("blog-post-area").style.display = "block";
  }
});

function postBlog() {
  const content = document.getElementById("blogContent").value;
  if (content.trim()) {
    const div = document.createElement("div");
    div.innerHTML = `<p>${content}</p><hr>`;
    document.getElementById("blogs").prepend(div);
    document.getElementById("blogContent").value = "";
  }
}