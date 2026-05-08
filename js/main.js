// ===============================
// MODAL COMPÉTENCES
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("skillModal");
  const modalImg = document.getElementById("modalSkillImg");
  const modalTitle = document.getElementById("modalSkillTitle");
  const modalContent = document.getElementById("modalSkillContent");

  const closeBtn = document.querySelector(".modal-skill-close");
  const backdrop = document.querySelector(".modal-skill-backdrop");

  // Contenu des compétences
  const skillsData = {
    "Windows Server": `
      <ul>
        <li>Installation et administration Windows Server</li>
        <li>Gestion Active Directory</li>
        <li>Configuration DNS / DHCP</li>
        <li>Déploiement de GPO</li>
        <li>Gestion des utilisateurs et groupes</li>
      </ul>
    `,

    Windows: `
      <ul>
        <li>Support et maintenance des postes</li>
        <li>Diagnostic des incidents utilisateurs</li>
        <li>Installation de logiciels</li>
        <li>Configuration système</li>
      </ul>
    `,

    Linux: `
      <ul>
        <li>Administration Linux</li>
        <li>Gestion des permissions</li>
        <li>Services système</li>
        <li>Scripts Bash</li>
        <li>Maintenance serveur</li>
      </ul>
    `,

    Debian: `
      <ul>
        <li>Déploiement de services</li>
        <li>Gestion des paquets APT</li>
        <li>Configuration réseau</li>
        <li>Administration SSH</li>
      </ul>
    `,

    Ubuntu: `
      <ul>
        <li>Installation et configuration système</li>
        <li>Gestion des services Linux</li>
        <li>Tests et environnements de laboratoire</li>
      </ul>
    `,

    Cisco: `
      <ul>
        <li>Configuration de ports de switch</li>
        <li>Segmentation réseau VLAN</li>
        <li>Brassage réseau</li>
        <li>Modules SFP fibre optique</li>
      </ul>
    `,

    "Active Directory": `
      <ul>
        <li>Gestion des utilisateurs</li>
        <li>Organisation des OU</li>
        <li>Gestion des droits</li>
        <li>Authentification centralisée</li>
      </ul>
    `,

    "DNS / DHCP": `
      <ul>
        <li>Configuration DNS</li>
        <li>Attribution DHCP</li>
        <li>Résolution de noms</li>
        <li>Gestion réseau locale</li>
      </ul>
    `,

    GPO: `
      <ul>
        <li>Déploiement de configurations</li>
        <li>Stratégies de sécurité</li>
        <li>Automatisation Windows</li>
      </ul>
    `,

    Docker: `
      <ul>
        <li>Déploiement de conteneurs</li>
        <li>Docker Compose</li>
        <li>Gestion des volumes</li>
        <li>Isolation des services</li>
      </ul>
    `,

    GLPI: `
      <ul>
        <li>Gestion des tickets</li>
        <li>Suivi des incidents</li>
        <li>Support utilisateurs</li>
      </ul>
    `,

    WAPT: `
      <ul>
        <li>Déploiement logiciel centralisé</li>
        <li>Intégration Active Directory</li>
        <li>Gestion des paquets</li>
      </ul>
    `,

    "Git / GitHub": `
      <ul>
        <li>Gestion de versions Git</li>
        <li>Push / Pull / Branches</li>
        <li>Hébergement de projets GitHub</li>
      </ul>
    `,
  };

  // Ouverture modal
  document.querySelectorAll(".skills-category .skill-card").forEach((card) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const span = card.querySelector("span");

      modalImg.src = img.src;
      modalImg.alt = img.alt;

      modalTitle.textContent = span.textContent;

      modalContent.innerHTML =
        skillsData[span.textContent] || "<p>Aucune information disponible.</p>";

      modal.classList.add("active");
    });
  });

  // Fermeture modal
  function closeModal() {
    modal.classList.remove("active");
  }

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (
      modal.classList.contains("active") &&
      (e.key === "Escape" || e.key === "Esc")
    ) {
      closeModal();
    }
  });

  // ===============================
  // ANIMATION REVEAL
  // ===============================

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });

  // ===============================
  // NAVBAR ACTIVE
  // ===============================

  const sections = document.querySelectorAll("main section, header.hero");
  const navLinks = document.querySelectorAll(".nav-link");

  const setActiveLink = () => {
    let currentId = "home";

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentId}`,
      );
    });
  };

  window.addEventListener("scroll", setActiveLink);
  window.addEventListener("load", setActiveLink);
});
