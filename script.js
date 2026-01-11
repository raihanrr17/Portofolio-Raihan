document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
const softwareProjects = [
  {
    title: "Virtual Campus Tour (VCT)",
    description:
      "Virtual Campus Tour berbasis foto 360° untuk kebutuhan akreditasi dan visualisasi lingkungan kampus.",
    tags: ["Insta360", "Lapentor", "Web Integration"],
    impact:
      "Meningkatkan pengalaman visualisasi kampus dan mendukung proses akreditasi secara interaktif.",
    image: "assets/images/vct.png"
  },
  {
    title: "Ruang Tani",
    description:
      "Aplikasi berbasis OOP untuk menghubungkan petani tanpa lahan dengan pemilik lahan guna meningkatkan kolaborasi pertanian.",
    tags: ["Java", "OOP", "MVC", "Database"],
    impact:
      "Meningkatkan efisiensi kolaborasi pertanian dan pemanfaatan lahan yang optimal.",
    image: "assets/images/ruang-tani.jpeg"
  },
  {
    title: "Web App Skuter Elektrik",
    description:
      "Aplikasi web untuk monitoring dan pengelolaan sistem skuter elektrik.",
    tags: ["Web Development", "UI/UX", "Data Handling"],
    impact:
      "Mempermudah pemantauan performa skuter elektrik dan pengelolaan armada terintegrasi database.",
    image: "assets/images/skuter.png"
  }
];
const softwareContainer = document.getElementById("software-projects");

softwareProjects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card project-card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image"/>

    <h3>${project.title}</h3>
    <p class="project-desc">${project.description}</p>

    <div class="tags">
      ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>

    <p class="project-impact">
      <strong>Impact:</strong> ${project.impact}
    </p>
  `;

  softwareContainer.appendChild(card);
});
document.querySelectorAll("[data-carousel]").forEach(carousel => {
  const images = carousel.querySelectorAll("img");
  let index = 0;

  function show(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  // AUTO SLIDE
  setInterval(() => {
    index = (index + 1) % images.length;
    show(index);
  }, 3000);

  // SWIPE SUPPORT
  let startX = 0;

  carousel.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) {
      index = (index + 1) % images.length;
    } else if (endX > startX + 50) {
      index = (index - 1 + images.length) % images.length;
    }
    show(index);
  });
});
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
});
