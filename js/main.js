// ===============================
// MODAL COMPÉTENCES
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // THEME CLAIR / SOMBRE
  // ===============================

  const themeToggle = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const initialTheme = savedTheme || "dark";

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;

    if (themeToggle) {
      const isLight = theme === "light";
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Activer le mode sombre" : "Activer le mode clair",
      );
      themeToggle.setAttribute(
        "title",
        isLight ? "Activer le mode sombre" : "Activer le mode clair",
      );
    }

    // Changement dynamique des icônes Portainer et Tailscale
    const iconPortainer = document.getElementById("icon-portainer");
    const iconTailscale = document.getElementById("icon-tailscale");
    if (iconPortainer) {
      iconPortainer.src =
        theme === "light"
          ? "./assets/images/logos/portainerLight.png"
          : "./assets/images/logos/portainer.png";
    }
    if (iconTailscale) {
      iconTailscale.src =
        theme === "light"
          ? "./assets/images/logos/tailscaleLight.png"
          : "./assets/images/logos/tailscale.png";
    }
  };

  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        document.documentElement.dataset.theme === "light" ? "dark" : "light";

      localStorage.setItem("portfolio-theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  // ===============================
  // MODAL COMPETENCES
  // ===============================

  const modal = document.getElementById("skillModal");
  const modalImg = document.getElementById("modalSkillImg");
  const modalTitle = document.getElementById("modalSkillTitle");
  const modalContent = document.getElementById("modalSkillContent");

  const closeBtn = document.querySelector(".modal-skill-close");
  const backdrop = document.querySelector(".modal-skill-backdrop");

  if (modal && modalImg && modalTitle && modalContent && closeBtn && backdrop) {
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

      Debian: `
    <ul>
      <li>Déploiement de services Linux</li>
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
      <li>Installation de modules SFP fibre</li>
    </ul>
  `,

      Tailscale: `
    <ul>
      <li>Accès distant sécurisé en réseau privé</li>
      <li>Architecture Zero Trust</li>
      <li>Connexion sans ouverture de ports</li>
      <li>Utilisation avec MFA et appareils autorisés</li>
    </ul>
  `,

      Pfsense: `
    <ul>
      <li>Découverte du pare-feu PfSense</li>
      <li>Configuration réseau et filtrage</li>
      <li>Segmentation logique et sécurité</li>
      <li>Tests de règles réseau</li>
    </ul>
  `,

      "OCS inventory": `
    <ul>
      <li>Inventaire automatisé du parc informatique</li>
      <li>Collecte des informations matérielles</li>
      <li>Suivi des équipements</li>
      <li>Intégration avec la gestion de parc</li>
    </ul>
  `,

      GLPI: `
    <ul>
      <li>Gestion des tickets d’incidents</li>
      <li>Support utilisateurs</li>
      <li>Suivi des demandes et interventions</li>
      <li>Gestion de parc informatique</li>
    </ul>
  `,

      WAPT: `
    <ul>
      <li>Déploiement logiciel centralisé</li>
      <li>Intégration Active Directory</li>
      <li>Gestion et distribution de paquets</li>
      <li>Administration du parc Windows</li>
    </ul>
  `,

      "Git / GitHub": `
    <ul>
      <li>Gestion de versions Git</li>
      <li>Push / Pull / gestion de branches</li>
      <li>Hébergement de projets GitHub</li>
      <li>Suivi des modifications de projets</li>
    </ul>
  `,

      Azure: `
    <ul>
      <li>Découverte des services Microsoft Azure</li>
      <li>Machines virtuelles et services cloud</li>
      <li>Gestion des ressources Azure</li>
      <li>Préparation certification AZ-900</li>
    </ul>
  `,

      Portainer: `
    <ul>
      <li>Administration d’environnements Docker</li>
      <li>Gestion des conteneurs et stacks</li>
      <li>Déploiement via interface web</li>
      <li>Supervision simplifiée des services</li>
    </ul>
  `,

      Docker: `
  <ul>
    <li>Découverte de Docker et des conteneurs</li>
    <li>Déploiement de services auto-hébergés</li>
    <li>Utilisation basique de Docker Compose</li>
    <li>Gestion simple des volumes et réseaux</li>
  </ul>
`,
    };

    // Ouverture modal
    document
      .querySelectorAll(".skills-category .skill-card")
      .forEach((card) => {
        card.style.cursor = "pointer";

        card.addEventListener("click", () => {
          const img = card.querySelector("img");
          const span = card.querySelector("span");

          modalImg.src = img.src;
          modalImg.alt = img.alt;

          modalTitle.textContent = span.textContent;

          modalContent.innerHTML =
            skillsData[span.textContent] ||
            "<p>Aucune information disponible.</p>";

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
  }

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

  if (sections.length > 0) {
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
  }
});
