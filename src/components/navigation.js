import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
html {
  scroll-padding-top: 80px;
}
@media (max-width: 991px) {
html {
  scroll-padding-top: 70px;
}
}
@media (max-width: 767px) {
html {
  scroll-padding-top: 64px;
}
}
@media (max-width: 479px) {
html {
  scroll-padding-top: 60px;
}
}
@media (prefers-reduced-motion: reduce) {
.navigation-link::before, .navigation-logo, .navigation-toggle, .navigation-menu {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigationOverlay = document.getElementById("navigationOverlay")

  let isMenuOpen = false

  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen

    navigationToggle.setAttribute("aria-expanded", isMenuOpen.toString())

    if (isMenuOpen) {
      navigationMenu.classList.add("navigation-menu-open")
      navigationOverlay.classList.add("navigation-overlay-active")
      document.body.style.overflow = "hidden"
    } else {
      navigationMenu.classList.remove("navigation-menu-open")
      navigationOverlay.classList.remove("navigation-overlay-active")
      document.body.style.overflow = ""
    }
  }

  function closeMobileMenu() {
    if (isMenuOpen) {
      isMenuOpen = false
      navigationToggle.setAttribute("aria-expanded", "false")
      navigationMenu.classList.remove("navigation-menu-open")
      navigationOverlay.classList.remove("navigation-overlay-active")
      document.body.style.overflow = ""
    }
  }

  // Toggle menu on button click
  navigationToggle.addEventListener("click", toggleMobileMenu)

  // Close menu when clicking overlay
  navigationOverlay.addEventListener("click", closeMobileMenu)

  // Close menu when clicking navigation links (mobile)
  const navigationLinks = document.querySelectorAll(".navigation-link")
  navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      closeMobileMenu()
    }
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991 && isMenuOpen) {
      closeMobileMenu()
    }
  })

  // Add scroll effect to navigation
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const navigation = document.querySelector(".navigation")
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      navigation.style.background =
        "color-mix(in srgb, var(--color-surface) 98%, transparent)"
      navigation.style.boxShadow = "var(--elevated-shadow)"
    } else {
      navigation.style.background =
        "color-mix(in srgb, var(--color-surface) 95%, transparent)"
      navigation.style.boxShadow = "none"
    }

    lastScrollY = currentScrollY
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="navigation"
      >
        <div className="navigation-container">
          <div className="navigation-brand">
            <a href="/">
              <div
                aria-label="MySalesHub - Go to Homepage"
                className="navigation-logo"
              >
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="navigation-logo-icon"
                >
                  <defs>
                    <linearGradient
                      id="logoGradient"
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop offset="0%" className="navigation-icon12"></stop>
                      <stop offset="100%" className="navigation-icon13"></stop>
                    </linearGradient>
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    rx="2"
                    fill="url(#logoGradient)"
                    width="12"
                    height="12"
                  ></rect>
                  <rect
                    x="18"
                    y="2"
                    rx="2"
                    fill="var(--color-primary)"
                    width="12"
                    height="8"
                    opacity="0.8"
                  ></rect>
                  <rect
                    x="2"
                    y="18"
                    rx="2"
                    fill="var(--color-accent)"
                    width="12"
                    height="8"
                    opacity="0.7"
                  ></rect>
                  <rect
                    x="18"
                    y="18"
                    rx="2"
                    fill="var(--color-secondary)"
                    width="12"
                    height="8"
                    opacity="0.6"
                  ></rect>
                </svg>
                <span className="navigation-logo-text">MySalesHub</span>
              </div>
            </a>
          </div>
          <div id="navigationMenu" className="navigation-menu">
            <ul role="menubar" className="navigation-links">
              <li role="none" className="navigation-item">
                <a href="#dashboard">
                  <div role="menuitem" className="navigation-link">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="navigation-link-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="3" y="3" rx="1" width="7" height="9"></rect>
                        <rect x="14" y="3" rx="1" width="7" height="5"></rect>
                        <rect x="14" y="12" rx="1" width="7" height="9"></rect>
                        <rect x="3" y="16" rx="1" width="7" height="5"></rect>
                      </g>
                    </svg>
                    <span>Dashboard</span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="#leads">
                  <div role="menuitem" className="navigation-link">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="navigation-link-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <circle r="6" cx="12" cy="12"></circle>
                        <circle r="2" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>Leads</span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="#contacts">
                  <div role="menuitem" className="navigation-link">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="navigation-link-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                    <span>Contacts</span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="#companies">
                  <div role="menuitem" className="navigation-link">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="navigation-link-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                        <rect x="4" y="2" rx="2" width="16" height="20"></rect>
                      </g>
                    </svg>
                    <span>Companies</span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="#deals">
                  <div role="menuitem" className="navigation-link">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="navigation-link-icon"
                    >
                      <path
                        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>Deals</span>
                  </div>
                </a>
              </li>
              <li role="none" className="navigation-item">
                <a href="#reports">
                  <div role="menuitem" className="navigation-link">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="navigation-link-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="m19 9l-5 5l-4-4l-3 3"></path>
                      </g>
                    </svg>
                    <span>Reports</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-cta">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          <button
            id="navigationToggle"
            aria-label="Toggle navigation menu"
            aria-controls="navigationMenu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="navigation-toggle-open"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="navigation-navigation-toggle-close"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div id="navigationOverlay" className="navigation-overlay"></div>
      </nav>
    </div>
  )
}

export default Navigation
