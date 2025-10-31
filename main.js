// Save a project
function saveProject(name) {
  let saved = JSON.parse(localStorage.getItem("savedProjects")) || [];

  if (!saved.includes(name)) {
    saved.push(name);
    localStorage.setItem("savedProjects", JSON.stringify(saved));
    alert(
      `Saved "${name}". You now have ${saved.length} item(s) saved for later.`
    );
  } else {
    alert("This project is already saved!");
  }
}

// Display saved projects (on saveforlater.html)
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("saved-projects");
  const message = document.getElementById("empty-message");
  if (!list) return; // Only run this on saveforlater.html

  const saved = JSON.parse(localStorage.getItem("savedProjects")) || [];

  if (saved.length === 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
    saved.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
});
