import { courses } from "./data.js";

const box = document.getElementById("box");

function render(list) {
  box.innerHTML = "";

  list.forEach((c) => {
    box.innerHTML += `
      <div class="card">
        <h3>${c.title}</h3>
        <p>📊 سطح: ${c.level}</p>
        <p>${c.desc}</p>
        <button onclick="alert('ثبت‌نام: ${c.title}')">
          ثبت‌نام
        </button>
      </div>
    `;
  });
}

render(courses);
