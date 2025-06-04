document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".news-container");
  const form = document.getElementById("newsForm");
  const toggleBtn = document.querySelector(".toggle-form-btn");

  let posts = JSON.parse(localStorage.getItem("newsPosts")) || [];

  function displayPost(post, index) {
    const article = document.createElement("article");
    article.classList.add("news-post");
    article.innerHTML = `
      <h2>${post.title}</h2>
      <p class="news-date">${post.date}</p>
      <p>${post.content}</p>
      <button class="delete-btn" data-index="${index}">🗑️ Radera</button>
    `;
    container.prepend(article);
  }

  function renderAllPosts() {
    container.innerHTML = ""; // clear all
    posts.forEach((post, i) => displayPost(post, i));
    attachDeleteHandlers();
  }

  function attachDeleteHandlers() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        posts.splice(index, 1);
        localStorage.setItem("newsPosts", JSON.stringify(posts));
        renderAllPosts();
      });
    });
  }

  // Show/hide form
  toggleBtn.addEventListener("click", () => {
    form.style.display = form.style.display === "none" ? "block" : "none";
  });

  // Submit new post
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("newsTitle").value.trim();
    const date = document.getElementById("newsDate").value;
    const content = document.getElementById("newsContent").value.trim();

    if (!title || !date || !content) return;

    const newPost = { title, date, content };
    posts.push(newPost);
    localStorage.setItem("newsPosts", JSON.stringify(posts));

    form.reset();
    form.style.display = "none";

    renderAllPosts();
  });

  // Initial render
  renderAllPosts();
});
