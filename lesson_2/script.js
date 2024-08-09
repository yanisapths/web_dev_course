import { lessons } from "./const.js";

const lessonContainer = document.getElementById("lesson-container");

lessons.forEach((lesson) => {
  const lessonDiv = document.createElement("div");
  const lessonLink = document.createElement("a");

  lessonLink.href = lesson.link;
  lessonLink.textContent = lesson.name;

  lessonDiv.appendChild(lessonLink);
  lessonContainer.appendChild(lessonDiv);
});
