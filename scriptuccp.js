/* =========================================================
   UCCP CABAY WEBSITE SCRIPT
   Shared by index.html, about.html, and events.html.
   Every block below is wrapped so it only runs if the matching
   element exists on the current page - safe to include everywhere.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. Mobile hamburger menu ---------- */
  var hamburger = document.querySelector(".hamburger");
  var navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("is-open");
      navLinks.classList.toggle("is-open");
    });

    // Close the menu automatically when a link is tapped (mobile UX)
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("is-open");
        navLinks.classList.remove("is-open");
      });
    });
  }

  /* ---------- 2. Announcement "Read more" toggle (homepage) ---------- */
  var announcementToggle = document.querySelector(".announcement-toggle");
  var announcementDetails = document.querySelector(".announcement-details");

  if (announcementToggle && announcementDetails) {
    announcementToggle.addEventListener("click", function () {
      var isOpen = announcementDetails.classList.toggle("is-open");
      announcementToggle.textContent = isOpen ? "Show less" : "Read more";
    });
  }

  /* ---------- 3. Event card "Read more" toggles (events.html + featured event) ----------
     Add as many .event-card blocks as you like in the HTML;
     this code automatically wires up every one of them. */
  var eventCards = document.querySelectorAll(".event-card");

  eventCards.forEach(function (card) {
    var btn = card.querySelector(".event-readmore");
    var details = card.querySelector(".event-details");

    if (btn && details) {
      btn.addEventListener("click", function () {
        var isOpen = details.classList.toggle("is-open");
        btn.textContent = isOpen ? "Show less" : "Read more";
      });
    }
  });

  /* ---------- 4. Gallery lightbox ----------
     Clicking any image with class "gallery-item" opens it full-size
     in the lightbox modal at the bottom of the page. */
  var galleryItems = document.querySelectorAll(".gallery-item");
  var lightbox = document.querySelector(".lightbox");
  var lightboxImg = document.querySelector(".lightbox-img");
  var lightboxClose = document.querySelector(".lightbox-close");

  if (lightbox && lightboxImg) {
    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        if (!img) return;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("is-open");
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
    }

    if (lightboxClose) {
      lightboxClose.addEventListener("click", closeLightbox);
    }

    // Close when clicking the dark background (but not the image itself)
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    // Close with the Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    });
  }

  /* ---------- History "See more / See less" (about.html) ---------- */
  var historyText = document.getElementById("historyText");
  var seeMoreBtn = document.getElementById("seeMoreBtn");

  if (historyText && seeMoreBtn) {
    var historyExpanded = false;

    // Kunin ang collapsed height mula sa CSS (--history-collapsed)
    var getCollapsedHeight = function () {
      var value = getComputedStyle(historyText).getPropertyValue("--history-collapsed");
      return parseInt(value, 10) || 220;
    };

    // Ina-update ang taas, fade, at button ayon sa kasalukuyang estado
    var updateHistory = function () {
      var collapsed = getCollapsedHeight();
      var fullHeight = historyText.scrollHeight;

      // Maikli ang history: itago ang button at ipakita lahat
      if (fullHeight <= collapsed + 4) {
        seeMoreBtn.style.display = "none";
        historyText.classList.add("is-expanded");
        historyText.style.maxHeight = "none";
        return;
      }

      // Mahaba ang history: ipakita ang button
      seeMoreBtn.style.display = "";
      historyText.classList.toggle("is-expanded", historyExpanded);
      historyText.style.maxHeight = (historyExpanded ? fullHeight : collapsed) + "px";
      seeMoreBtn.textContent = historyExpanded ? "See less" : "See more";
      seeMoreBtn.setAttribute("aria-expanded", historyExpanded ? "true" : "false");
    };

    seeMoreBtn.addEventListener("click", function () {
      historyExpanded = !historyExpanded;
      updateHistory();

      // Pagbalik sa collapsed, i-scroll pabalik sa simula ng History
      if (!historyExpanded) {
        historyText.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    updateHistory();                                  // unang sukat
    window.addEventListener("load", updateHistory);   // pagkatapos ma-load ang images
    window.addEventListener("resize", updateHistory); // kapag nag-resize o nag-rotate
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateHistory);       // pagkatapos ma-load ang fonts
    }
  }

      
  /* ---------- 5. Back-to-top button ---------- */
  var backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTop.classList.add("is-visible");
      } else {
        backToTop.classList.remove("is-visible");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 6. Highlight the active nav link ---------- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var linkPage = link.getAttribute("href").split("#")[0];
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

});
