const STATIC_QR_IMAGE = "./Qr%20code.png";

const events = [
  {
    id: "tech-innovation-summit",
    title: "Tech Innovation Summit",
    date: "Dec 10, 2025",
    time: "10:00 AM - 12:00 PM",
    venue: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "digital-marketing-workshop",
    title: "Digital Marketing Workshop",
    date: "Dec 11, 2025",
    time: "2:00 PM - 4:00 PM",
    venue: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "leadership-team-building",
    title: "Leadership & Team Building",
    date: "Dec 12, 2025",
    time: "9:00 AM - 11:00 AM",
    venue: "Online (Google Meet)",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai-ml-bootcamp",
    title: "AI & Machine Learning Bootcamp",
    date: "Dec 14, 2025",
    time: "1:00 PM - 3:00 PM",
    venue: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "entrepreneurship-talk",
    title: "Entrepreneurship Talk",
    date: "Dec 15, 2025",
    time: "5:00 PM - 6:30 PM",
    venue: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "uiux-design-conference",
    title: "UI/UX Design Conference",
    date: "Dec 16, 2025",
    time: "7:00 PM - 9:00 PM",
    venue: "Online (Google Meet)",
    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cybersecurity-awareness-session",
    title: "Cybersecurity Awareness Session",
    date: "Dec 18, 2025",
    time: "10:00 AM - 12:00 PM",
    venue: "Online (Microsoft Teams)",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cloud-computing-masterclass",
    title: "Cloud Computing Masterclass",
    date: "Dec 19, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Online (Google Meet)",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "data-analytics-lab",
    title: "Data Analytics Lab",
    date: "Dec 20, 2025",
    time: "11:00 AM - 1:00 PM",
    venue: "Online (Zoom)",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
];

const app = document.getElementById("app");
const modal = document.getElementById("qrModal");
const modalEventName = document.getElementById("modalEventName");
const modalEventMeta = document.getElementById("modalEventMeta");
const qrImage = document.getElementById("qrImage");
const closeModalBtn = document.getElementById("closeModalBtn");
const scanHint = document.getElementById("scanHint");

renderEventList();

function renderEventList() {
  app.innerHTML = "";

  const page = document.createElement("section");
  page.className = "page";
  page.innerHTML = `
    <h1 class="title">Upcoming Online Events</h1>
    <div id="eventGrid" class="grid"></div>
  `;

  const grid = page.querySelector("#eventGrid");

  events.forEach((eventItem) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${eventItem.image}" alt="${eventItem.title}" loading="lazy" />
      <div class="card-body">
        <h3>${eventItem.title}</h3>
        <p class="info"><b>Date:</b> ${eventItem.date}</p>
        <p class="info"><b>Time:</b> ${eventItem.time}</p>
        <p class="info"><b>Venue:</b> ${eventItem.venue}</p>
        <button class="btn primary">Check In</button>
      </div>
    `;

    const button = card.querySelector("button");
    button.addEventListener("click", () => openQrModal(eventItem));
    grid.appendChild(card);
  });

  app.appendChild(page);
}

function openQrModal(eventItem) {
  modalEventName.textContent = eventItem.title;
  modalEventMeta.textContent = `${eventItem.date} - ${eventItem.time}`;
  scanHint.textContent = "Scan this QR code with your phone to open the Google Form.";

  // Force refresh to avoid stale image cache after QR image replacement.
  qrImage.src = `${STATIC_QR_IMAGE}?v=${Date.now()}`;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

qrImage.addEventListener("error", () => {
  scanHint.textContent = 'QR image not found. Please verify the file name is "Qr code.png".';
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
