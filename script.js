const projectDetails = {
  helmet: {
    vi: {
      title: "Mũ bảo hiểm thông minh",
      description: "Thiết bị cảnh báo tai nạn giao thông và hỗ trợ chống trộm, kết hợp cảm biến, Arduino/ESP32 và module SIM để gửi tín hiệu khẩn cấp.",
      tech: ["Arduino", "ESP32", "Module SIM", "Embedded system"]
    },
    en: {
      title: "Smart Helmet",
      description: "A traffic accident warning and anti-theft device combining sensors, Arduino/ESP32 and a SIM module to send emergency signals.",
      tech: ["Arduino", "ESP32", "SIM module", "Embedded system"]
    }
  },
  medical: {
    vi: {
      title: "Hệ thống quản lý và đăng ký khám bệnh",
      description: "Giải pháp đăng ký tự động giúp giảm tải quy trình, kết nối giao diện web với dữ liệu Firebase và khu vực quản trị dành cho bác sĩ.",
      tech: ["HTML", "CSS", "JavaScript", "Python", "Firebase"]
    },
    en: {
      title: "Medical Registration and Management System",
      description: "An automated registration solution that reduces operational load and connects a web interface with Firebase data and an admin area.",
      tech: ["HTML", "CSS", "JavaScript", "Python", "Firebase"]
    }
  },
  assistive: {
    vi: {
      title: "Thiết bị dành cho người khuyết tật",
      description: "Dự án hướng tới việc hỗ trợ người khuyết tật tự tin hơn trong sinh hoạt, thông qua phần cứng nhúng và các giải pháp điều khiển phù hợp.",
      tech: ["C++", "Python", "Embedded system", "Assistive technology"]
    },
    en: {
      title: "Equipment for the Disabled",
      description: "A project focused on helping people with disabilities feel more confident through embedded hardware and accessible control solutions.",
      tech: ["C++", "Python", "Embedded system", "Assistive technology"]
    }
  },
  car: {
    vi: {
      title: "Xe tự động cân bằng",
      description: "Mô hình xe tự cân bằng dùng để tìm hiểu thuật toán PID, tối ưu điều khiển động cơ và kết hợp thiết kế mạch thủ công với thiết kế 3D.",
      tech: ["C++", "ESP32", "PID control", "3D Design"]
    },
    en: {
      title: "Self-balancing Car",
      description: "A self-balancing car built to explore PID control, motor optimization, handmade circuits and 3D design.",
      tech: ["C++", "ESP32", "PID control", "3D Design"]
    }
  }
};

let currentLanguage = localStorage.getItem("language") || "vi";

document.addEventListener("DOMContentLoaded", () => {
  initializeStudyProgress();
  setLanguage(currentLanguage);
  initializeTheme();
  initializeProjectFilters();
  initializeProjectModal();
  if (!document.getElementById("github")?.hidden) {
    loadGitHubData();
  }
});

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-en]").forEach((element) => {
    const translation = element.getAttribute(`data-${lang}`);
    if (translation) {
      element.innerHTML = translation;
    }
  });
  updateStudyProgressStatus();
}

function initializeTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateThemeIcon(themeToggle);
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateThemeIcon(themeToggle);
  });
}

function updateThemeIcon(themeToggle) {
  const icon = themeToggle.querySelector("i");
  const isDark = document.body.classList.contains("dark-mode");
  icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  themeToggle.setAttribute("aria-label", isDark ? "Chuyển chế độ sáng" : "Chuyển chế độ tối");
}

function initializeStudyProgress() {
  const progressBar = document.getElementById("studyProgressBar");
  const progressValue = document.getElementById("studyProgressValue");
  const progressTrack = document.querySelector(".progress-track");
  const startDate = new Date("2025-09-01T00:00:00");
  const endDate = new Date("2030-06-30T23:59:59");
  const now = new Date();
  const totalDuration = endDate - startDate;
  const elapsedDuration = Math.min(Math.max(now - startDate, 0), totalDuration);
  const percentage = Math.round((elapsedDuration / totalDuration) * 100);

  if (!progressBar || !progressValue || !progressTrack) {
    return;
  }

  progressBar.style.width = `${percentage}%`;
  progressValue.textContent = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", percentage);
  updateStudyProgressStatus();
}

function updateStudyProgressStatus() {
  const progressStatus = document.getElementById("studyProgressStatus");
  const progressValue = document.getElementById("studyProgressValue");
  if (!progressStatus || !progressValue) {
    return;
  }

  const percentage = Number.parseInt(progressValue.textContent, 10);
  progressStatus.textContent = percentage >= 100
    ? (currentLanguage === "vi" ? "Đã hoàn thành dự kiến" : "Expected completion reached")
    : (currentLanguage === "vi" ? "Đang theo học" : "Currently studying");
}

function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card[data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      projectCards.forEach((card) => {
        card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
      });
    });
  });
}

function initializeProjectModal() {
  const modal = document.getElementById("projectModal");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const tech = document.getElementById("modalTech");
  const closeButton = modal.querySelector(".modal-close");

  document.querySelectorAll(".details-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const details = projectDetails[button.dataset.project][currentLanguage];
      title.textContent = details.title;
      description.textContent = details.description;
      tech.innerHTML = details.tech.map((item) => `<span>${item}</span>`).join("");
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      closeButton.focus();
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }

    async function loadGitHubData() {
      const stats = document.getElementById("githubStats");
      const reposContainer = document.getElementById("githubRepos");

      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch("https://api.github.com/users/SevKan10"),
          fetch("https://api.github.com/users/SevKan10/repos?sort=updated&per_page=3")
        ]);

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error("GitHub API request failed");
        }

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        document.getElementById("repoCount").textContent = profile.public_repos;
        document.getElementById("followerCount").textContent = profile.followers;
        document.getElementById("followingCount").textContent = profile.following;
        reposContainer.innerHTML = repos.map((repo) => `
          <article class="github-repo">
            <h3>${escapeHtml(repo.name)}</h3>
            <p>${escapeHtml(repo.description || "Public project by SevKan.")}</p>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i> View repository
            </a>
          </article>
        `).join("");
      } catch (error) {
        stats.setAttribute("aria-label", "GitHub statistics unavailable");
        reposContainer.innerHTML = `<p class="github-status">GitHub data is temporarily unavailable. <a href="https://github.com/SevKan10" target="_blank" rel="noopener noreferrer">View profile directly</a>.</p>`;
      }
    }

    function escapeHtml(value) {
      return value.replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[character]));
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}
