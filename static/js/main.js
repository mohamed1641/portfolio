/* Mohamed Kamel | Creative portfolio interactions */

const portfolioItems = [
  {
    title: "Social Media Campaigns",
    category: "ads",
    categoryLabel: "Ads",

    description: "أفكار إعلانية بإيقاع سريع وHook واضح وCTA مناسب للسوشيال ميديا.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80",
    tags: ["Campaign", "Offer", "CTA"]
  },
  {
    title: "Brand Storytelling",
    category: "reels",
    categoryLabel: "Reels",

    description: "سرد بصري يبرز هوية البراند من خلال مونتاج موسيقي وكابشن واضح.",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
    tags: ["Branding", "Awareness", "Reels"]
  },
  {
    title: "Product Advertising",
    category: "ads",
    categoryLabel: "Ads",

    description: "محتوى إطلاق منتجات يركّز على المشكلة والحل والمميزات الأساسية.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    tags: ["Launch", "Product", "Sales"]
  },
  {
    title: "Animated Explainers",
    category: "motion",
    categoryLabel: "Motion",

    description: "موشن جرافيك لتبسيط الأفكار وشرح الخدمات والعروض التسويقية.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    tags: ["Motion", "Explainer", "Offer"]
  },
  {
    title: "Podcast Repurposing",
    category: "youtube",
    categoryLabel: "YouTube",

    description: "تحويل الحلقات الطويلة إلى مقاطع قصيرة مناسبة للنشر على المنصات.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80",
    tags: ["Podcast", "Funnel", "Clips"]
  },
  {
    title: "Food & Restaurant Ads",
    category: "ads",
    categoryLabel: "Ads",

    description: "فيديوهات ترويج للمطاعم تبرز التفاصيل البصرية مع دعوة واضحة للتواصل.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
    tags: ["Food", "Promo", "Booking"]
  },
  {
    title: "Personal Branding Content",
    category: "reels",
    categoryLabel: "Reels",

    description: "محتوى تعريفي لأصحاب الأعمال لبناء الثقة وتوضيح قيمة الخدمات.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=80",
    tags: ["Personal Brand", "Trust", "Content"]
  },
  {
    title: "Motion Typography",
    category: "motion",
    categoryLabel: "Motion",

    description: "رسائل تسويقية بخطوط متحركة وإيقاع بصري واضح في الإعلانات.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    tags: ["Typography", "Sale", "Neon"]
  }
];

const pageLoader = document.getElementById("pageLoader");
const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const portfolioGrid = document.getElementById("portfolioGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioSearch = document.getElementById("portfolioSearch");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const backToTop = document.getElementById("backToTop");
const typingText = document.getElementById("typingText");

let currentFilter = "all";
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

window.addEventListener("load", () => {
  setTimeout(() => {
    pageLoader.classList.add("hidden");
  }, 700);
});

document.getElementById("year").textContent = new Date().getFullYear();

/* Header + back to top */
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 22);
  backToTop.classList.toggle("visible", window.scrollY > 650);
  setActiveNavLink();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Mobile menu */
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

function setActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  let currentSectionId = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSectionId}`);
  });
}

/* Magnetic buttons */
document.querySelectorAll(".magnetic").forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.14}px, ${y * 0.14}px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});

/* Tilt cards */
document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * -10;
    const rotateX = ((y / rect.height) - 0.5) * 10;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* Reveal animation */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.13
});

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

/* Typing effect */
const typingWords = [
  "Marketing Reels",
  "Ad Creatives",
  "Content Strategy",
  "Meta Ads Videos",
  "Brand Storytelling",
  "Conversion Videos"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentWord = typingWords[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentWord.slice(0, charIndex);

  let delay = isDeleting ? 45 : 85;

  if (!isDeleting && charIndex === currentWord.length) {
    delay = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
    delay = 250;
  }

  setTimeout(typeLoop, delay);
}
typeLoop();

/* Portfolio render */
function renderPortfolio() {
  const searchValue = portfolioSearch.value.trim().toLowerCase();

  const filteredItems = portfolioItems.filter((item) => {
    const matchesFilter = currentFilter === "all" || item.category === currentFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchValue) ||
      item.description.toLowerCase().includes(searchValue) ||
      item.tags.join(" ").toLowerCase().includes(searchValue);

    return matchesFilter && matchesSearch;
  });

  if (!filteredItems.length) {
    portfolioGrid.innerHTML = `
      <div class="empty-state glass">
        مفيش أعمال مطابقة للبحث. جرّب كلمة تانية أو غيّر الفلتر.
      </div>
    `;
    return;
  }

  portfolioGrid.innerHTML = filteredItems.map((item, index) => `
    <article class="portfolio-card glass tilt-card enter" style="animation-delay: ${index * 0.055}s">
      <div class="portfolio-thumb">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="category">${item.categoryLabel}</span>
      </div>

      <div class="portfolio-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>

        <div class="tags">
          ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

  attachTiltToPortfolioCards();
}

function attachTiltToPortfolioCards() {
  document.querySelectorAll(".portfolio-card.tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      if (!window.matchMedia("(pointer: fine)").matches) return;

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * -8;
      const rotateX = ((y / rect.height) - 0.5) * 8;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-7px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderPortfolio();
  });
});

portfolioSearch.addEventListener("input", renderPortfolio);
renderPortfolio();

/* Contact form: generate an email draft; the visitor must press Send in the mail app. */
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !service || !message) {
    showFormMessage("كمل البيانات المطلوبة الأول.", "error");
    return;
  }

  const subject = `طلب تعاون - ${service} - ${name}`;
  const body = [
    `الاسم: ${name}`,
    `البريد الإلكتروني: ${email}`,
    `الخدمة: ${service}`,
    "",
    "تفاصيل المشروع:",
    message
  ].join("\n");

  const emailUrl = `mailto:m.kamel8543@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showFormMessage("هتفتح رسالة في تطبيق البريد؛ راجعها واضغط إرسال لإتمام الطلب. لو البريد ما فتحش، استخدم رابط Email الموجود بجانب الفورم.", "success");
  window.location.href = emailUrl;
});

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

/* Particles canvas */
const canvas = document.getElementById("particlesCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let dpr = Math.min(window.devicePixelRatio || 1, 2);

function resizeCanvas() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createParticles();
}

function createParticles() {
  const count = Math.min(Math.floor(window.innerWidth / 18), 90);
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2.2 + 0.6,
    speedX: (Math.random() - 0.5) * 0.35,
    speedY: (Math.random() - 0.5) * 0.35,
    alpha: Math.random() * 0.55 + 0.16
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((particle, index) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1;

    const gradient = ctx.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      particle.size * 7
    );

    gradient.addColorStop(0, `rgba(0, 229, 255, ${particle.alpha})`);
    gradient.addColorStop(1, "rgba(0, 229, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * 7, 0, Math.PI * 2);
    ctx.fill();

    for (let j = index + 1; j < particles.length; j++) {
      const other = particles[j];
      const dx = particle.x - other.x;
      const dy = particle.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 115) {
        ctx.strokeStyle = `rgba(124, 58, 237, ${0.13 * (1 - distance / 115)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawParticles();
