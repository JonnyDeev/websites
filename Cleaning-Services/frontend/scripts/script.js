 const menuBtn = document.querySelector("#menu-btn");
      const menuIcon = document.querySelector("#menu-icon");
      const navBar = document.querySelector("#nav-bar");

      menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("translate-x-0");
        navBar.classList.toggle("translate-x-full");

        const isOpen = !navBar.classList.contains("translate-x-full");
        menuIcon.setAttribute(
          "class",
          isOpen ? "ri-close-line text-4xl text-white" : "ri-menu-line text-4xl text-white"
        );
      });