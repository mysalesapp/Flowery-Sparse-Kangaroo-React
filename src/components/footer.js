import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-newsletter">
(function(){
  const newsletterForm = document.getElementById("newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector(".footer-email-input")
      const submitButton = this.querySelector(".footer-subscribe-btn")

      if (emailInput && emailInput.value) {
        // Show loading state
        submitButton.style.opacity = "0.7"
        submitButton.style.pointerEvents = "none"

        // Simulate API call
        setTimeout(() => {
          // Show success message
          emailInput.value = ""
          emailInput.placeholder = "Thank you for subscribing!"

          // Reset button state
          submitButton.style.opacity = "1"
          submitButton.style.pointerEvents = "auto"

          // Reset placeholder after 3 seconds
          setTimeout(() => {
            emailInput.placeholder = "Enter your email"
          }, 3000)
        }, 1000)
      }
    })
  }

  // Smooth hover animations for navigation links
  const navLinks = document.querySelectorAll(".footer-nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(4px)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"
    })
  })

  // Social links hover effects
  const socialLinks = document.querySelectorAll(".footer-social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-company">
              <div className="footer-logo">
                <h3 className="footer-brand">MySalesHub</h3>
                <div className="footer-tagline">
                  <span>Streamlining Your Sales Success</span>
                </div>
              </div>
              <p className="footer-description">
                {' '}
                A comprehensive CRM solution designed to manage leads, contacts,
                deals, and drive revenue growth for modern sales teams.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <span>hello@mysaleshub.com</span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="footer-nav-section">
              <div className="footer-nav-group">
                <h4 className="footer-nav-title">Platform</h4>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#dashboard">
                      <div className="footer-nav-link">
                        <span>Dashboard</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#leads">
                      <div className="footer-nav-link">
                        <span>Lead Management</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#contacts">
                      <div className="footer-nav-link">
                        <span>Contact Database</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#deals">
                      <div className="footer-nav-link">
                        <span>Deal Pipeline</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#reports">
                      <div className="footer-nav-link">
                        <span>Analytics &amp; Reports</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#tasks">
                      <div className="footer-nav-link">
                        <span>Task Management</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-group">
                <h4 className="footer-nav-title">Solutions</h4>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#small-business">
                      <div className="footer-nav-link">
                        <span>
                          {' '}
                          Small Business
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#enterprise">
                      <div className="footer-nav-link">
                        <span>Enterprise</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#sales-teams">
                      <div className="footer-nav-link">
                        <span>Sales Teams</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#integrations">
                      <div className="footer-nav-link">
                        <span>Integrations</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#mobile-app">
                      <div className="footer-nav-link">
                        <span>Mobile App</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#api">
                      <div className="footer-nav-link">
                        <span>API Access</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-group">
                <h4 className="footer-nav-title">Resources</h4>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#documentation">
                      <div className="footer-nav-link">
                        <span>Documentation</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#help-center">
                      <div className="footer-nav-link">
                        <span>Help Center</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#training">
                      <div className="footer-nav-link">
                        <span>Training Videos</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#webinars">
                      <div className="footer-nav-link">
                        <span>Webinars</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#case-studies">
                      <div className="footer-nav-link">
                        <span>Case Studies</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#blog">
                      <div className="footer-nav-link">
                        <span>Blog</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-group">
                <h4 className="footer-nav-title">Company</h4>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#about">
                      <div className="footer-nav-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#careers">
                      <div className="footer-nav-link">
                        <span>Careers</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#press">
                      <div className="footer-nav-link">
                        <span>Press</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#partners">
                      <div className="footer-nav-link">
                        <span>Partners</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <div className="footer-nav-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#security">
                      <div className="footer-nav-link">
                        <span>Security</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-newsletter">
              <h4 className="footer-newsletter-title">Stay Updated</h4>
              <p className="footer-newsletter-description">
                {' '}
                Get the latest product updates, sales insights, and industry
                news.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <form id="newsletter-form" className="footer-newsletter-form">
                <div className="footer-input-group">
                  <input
                    type="email"
                    required="true"
                    aria-label="Email address"
                    placeholder="Enter your email"
                    className="footer-email-input"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="btn btn-primary footer-subscribe-btn"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7l-7 7"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div className="footer-privacy-note">
                <span>
                  {' '}
                  By subscribing, you agree to our
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="#privacy">
                  <div className="footer-privacy-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-legal">
                <p className="footer-copyright">
                  {' '}
                  © 2025 MySalesHub. All rights reserved.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-legal-links">
                  <a href="#privacy">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#terms">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#cookies">
                    <div className="footer-legal-link">
                      <span>Cookie Policy</span>
                    </div>
                  </a>
                  <a href="#gdpr">
                    <div className="footer-legal-link">
                      <span>GDPR Compliance</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-social">
                <span className="footer-social-label">Follow Us</span>
                <div className="footer-social-links">
                  <a href="#linkedin">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#twitter">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#facebook">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
