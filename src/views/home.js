import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Flowery Sparse Kangaroo</title>
        <meta property="og:title" content="Flowery Sparse Kangaroo" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="dashboard-interactions">
(function(){
  // Chart controls functionality
  document.querySelectorAll(".chart-control").forEach((control) => {
    control.addEventListener("click", function () {
      // Remove active class from siblings
      this.parentNode.querySelectorAll(".chart-control").forEach((sibling) => {
        sibling.classList.remove("active")
      })

      // Add active class to clicked control
      this.classList.add("active")

      // Animate chart bars (simple simulation)
      const chartBars = document.querySelectorAll(".chart-bar")
      chartBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.transform = "scaleY(0)"
          setTimeout(() => {
            bar.style.transform = "scaleY(1)"
          }, 100)
        }, index * 50)
      })
    })
  })

  // Task checkbox functionality
  document
    .querySelectorAll('.task-item input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const label = this.nextElementSibling
        if (this.checked) {
          label.style.textDecoration = "line-through"
          label.style.opacity = "0.6"
        } else {
          label.style.textDecoration = "none"
          label.style.opacity = "1"
        }

        // Update task count
        const taskCount = document.querySelector(".task-count")
        const totalTasks = document.querySelectorAll(
          '.task-item input[type="checkbox"]'
        ).length
        const completedTasks = document.querySelectorAll(
          '.task-item input[type="checkbox"]:checked'
        ).length
        const pendingTasks = totalTasks - completedTasks
        taskCount.textContent = \`\${pendingTasks} pending\`
      })
    })

  // Deal card hover effects
  document.querySelectorAll(".deal-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Performance bars animation on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const performanceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll(".performance-fill")
        fills.forEach((fill, index) => {
          setTimeout(() => {
            const width = fill.style.width
            fill.style.width = "0%"
            setTimeout(() => {
              fill.style.width = width
            }, 100)
          }, index * 200)
        })
      }
    })
  }, observerOptions)

  document.querySelectorAll(".performance-list").forEach((list) => {
    performanceObserver.observe(list)
  })

  // Chart bars animation on scroll
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".chart-bar")
        bars.forEach((bar, index) => {
          setTimeout(() => {
            const height = bar.style.height
            bar.style.height = "0%"
            setTimeout(() => {
              bar.style.height = height
            }, 100)
          }, index * 100)
        })
      }
    })
  }, observerOptions)

  document.querySelectorAll(".revenue-chart").forEach((chart) => {
    chartObserver.observe(chart)
  })

  // Funnel stages animation
  const funnelObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const stages = entry.target.querySelectorAll(".funnel-stage")
        stages.forEach((stage, index) => {
          setTimeout(() => {
            const width = stage.style.width
            stage.style.width = "0%"
            setTimeout(() => {
              stage.style.width = width
            }, 100)
          }, index * 150)
        })
      }
    })
  }, observerOptions)

  document.querySelectorAll(".funnel-chart").forEach((funnel) => {
    funnelObserver.observe(funnel)
  })

  // Real-time data simulation (optional enhancement)
  function simulateRealTimeUpdates() {
    const statValues = document.querySelectorAll(".stat-value")

    // Simulate small changes in values every 30 seconds
    setInterval(() => {
      statValues.forEach((stat) => {
        const currentValue = stat.textContent
        if (currentValue.includes("\$") && currentValue.includes("M")) {
          const numericValue = parseFloat(
            currentValue.replace("\$", "").replace("M", "")
          )
          const variation = (Math.random() - 0.5) * 0.1 // ±5% variation
          const newValue = Math.max(0, numericValue + variation)
          stat.textContent = \`\$\${newValue.toFixed(1)}M\`
        }
      })
    }, 30000)
  }

  // Initialize real-time updates
  simulateRealTimeUpdates()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <main>
        <section className="hero-dashboard">
          <div className="hero-content">
            <div className="hero-background">
              <video
                src="https://videos.pexels.com/video-files/5989753/5989753-hd_720_1280_25fps.mp4"
                loop="true"
                muted="true"
                autoPlay="true"
              ></video>
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-text-content">
              <div className="hero-header">
                <div className="hero-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
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
                </div>
                <h1 className="hero-title">Sales Dashboard</h1>
                <p className="hero-subtitle">
                  {' '}
                  Your comprehensive overview of sales performance, pipeline
                  health, and team activities
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="hero-stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">$2.4M</span>
                    <span className="stat-label">Total Revenue</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
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
                        <circle r="10" cx="12" cy="12"></circle>
                        <circle r="6" cx="12" cy="12"></circle>
                        <circle r="2" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">87%</span>
                    <span className="stat-label">Target Achievement</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
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
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">34%</span>
                    <span className="stat-label">Win Rate</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">156</span>
                    <span className="stat-label">Active Deals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pipeline-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Pipeline Snapshot</h2>
              <p className="section-subtitle">
                {' '}
                Track your deals through each stage of the sales process
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="pipeline-board">
              <div className="pipeline-column">
                <div className="column-header">
                  <h3>Qualification</h3>
                  <span className="deal-count">24 deals</span>
                  <span className="deal-value">$480K</span>
                </div>
                <div className="deal-cards">
                  <div className="deal-card">
                    <div className="deal-info">
                      <h4>Enterprise Software License</h4>
                      <p>TechCorp Inc.</p>
                      <div className="deal-meta">
                        <span className="deal-amount">$45,000</span>
                        <span className="deal-close">Close: Jan 15</span>
                      </div>
                    </div>
                  </div>
                  <div className="deal-card">
                    <div className="deal-info">
                      <h4>Marketing Automation</h4>
                      <p>Growth Dynamics</p>
                      <div className="deal-meta">
                        <span className="deal-amount">$28,500</span>
                        <span className="deal-close">Close: Jan 22</span>
                      </div>
                    </div>
                  </div>
                  <div className="deal-card">
                    <div className="deal-info">
                      <h4>Cloud Infrastructure</h4>
                      <p>Digital Solutions Ltd</p>
                      <div className="deal-meta">
                        <span className="deal-amount">$67,200</span>
                        <span className="deal-close">Close: Feb 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pipeline-column">
                <div className="column-header">
                  <h3>Proposal</h3>
                  <span className="deal-count">18 deals</span>
                  <span className="deal-value">$720K</span>
                </div>
                <div className="deal-cards">
                  <div className="deal-card">
                    <div className="deal-info">
                      <h4>CRM Integration</h4>
                      <p>Innovative Systems</p>
                      <div className="deal-meta">
                        <span className="deal-amount">$85,000</span>
                        <span className="deal-close">Close: Jan 30</span>
                      </div>
                    </div>
                  </div>
                  <div className="deal-card">
                    <div className="deal-info">
                      <h4>Data Analytics Platform</h4>
                      <p>Analytics Pro</p>
                      <div className="deal-meta">
                        <span className="deal-amount">$120,000</span>
                        <span className="deal-close">Close: Feb 12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pipeline-column">
                <div className="column-header">
                  <h3>Negotiation</h3>
                  <span className="deal-count">12 deals</span>
                  <span className="deal-value">$960K</span>
                </div>
                <div className="deal-cards">
                  <div className="deal-card">
                    <div className="deal-info">
                      <h4>Enterprise Suite</h4>
                      <p>Global Enterprises</p>
                      <div className="deal-meta">
                        <span className="deal-amount">$250,000</span>
                        <span className="deal-close">Close: Feb 15</span>
                      </div>
                    </div>
                  </div>
                  <div className="deal-card">
                    <div className="deal-info">
                      <h4>Security Platform</h4>
                      <p>SecureFlow</p>
                      <div className="deal-meta">
                        <span className="deal-amount">$180,000</span>
                        <span className="deal-close">Close: Feb 28</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pipeline-column closed">
                <div className="column-header">
                  <h3>Closed Won</h3>
                  <span className="deal-count">8 deals</span>
                  <span className="deal-value">$640K</span>
                </div>
                <div className="deal-cards">
                  <div className="deal-card">
                    <div className="deal-info">
                      <h4>SaaS Implementation</h4>
                      <p>TechStart Solutions</p>
                      <div className="deal-meta">
                        <span className="deal-amount">$95,000</span>
                        <span className="deal-close">Closed: Jan 8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="activity-section">
          <div className="section-container">
            <div className="activity-grid">
              <div className="activity-feed">
                <div className="activity-header">
                  <h2 className="section-title">Recent Activity</h2>
                  <button className="btn btn-outline">View All</button>
                </div>
                <div className="activity-timeline">
                  <div className="activity-item">
                    <div className="activity-icon phone">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
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
                    </div>
                    <div className="activity-content">
                      <p>
                        <span className="home-text31">Sarah Johnson</span>
                        <span>
                          {' '}
                          called TechCorp Inc. regarding Enterprise Software
                          License
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </p>
                      <time>2 minutes ago</time>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon email">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
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
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div className="activity-content">
                      <p>
                        <span className="home-text35">Mike Chen</span>
                        <span>
                          {' '}
                          sent proposal to Analytics Pro for Data Analytics
                          Platform
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </p>
                      <time>15 minutes ago</time>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon meeting">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M8 2v4m8-4v4"></path>
                          <rect
                            x="3"
                            y="4"
                            rx="2"
                            width="18"
                            height="18"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="activity-content">
                      <p>
                        <span className="home-text39">Emma Davis</span>
                        <span>
                          {' '}
                          scheduled demo with Global Enterprises
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </p>
                      <time>1 hour ago</time>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon deal">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="activity-content">
                      <p>
                        <span className="home-text43">Alex Rodriguez</span>
                        <span>
                          {' '}
                          moved deal with SecureFlow to Negotiation stage
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </p>
                      <time>2 hours ago</time>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon company">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                          <rect
                            x="4"
                            y="2"
                            rx="2"
                            width="16"
                            height="20"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div className="activity-content">
                      <p>
                        <span className="home-text47">Lisa Park</span>
                        <span>
                          {' '}
                          added new contact from Digital Solutions Ltd
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </p>
                      <time>3 hours ago</time>
                    </div>
                  </div>
                </div>
              </div>
              <div className="upcoming-tasks">
                <div className="tasks-header">
                  <h3>Today&apos;s Tasks</h3>
                  <span className="task-count">7 pending</span>
                </div>
                <div className="task-list">
                  <div className="task-item">
                    <input type="checkbox" id="task1" />
                    <label htmlFor="task1">
                      {' '}
                      Follow up with TechCorp Inc. on contract terms
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                    <time>9:00 AM</time>
                  </div>
                  <div className="task-item">
                    <input type="checkbox" id="task2" />
                    <label htmlFor="task2">
                      {' '}
                      Demo presentation for Global Enterprises
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                    <time>11:30 AM</time>
                  </div>
                  <div className="task-item">
                    <input type="checkbox" id="task3" checked="true" />
                    <label htmlFor="task3">
                      {' '}
                      Send pricing proposal to Growth Dynamics
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                    <time>2:00 PM</time>
                  </div>
                  <div className="task-item">
                    <input type="checkbox" id="task4" />
                    <label htmlFor="task4">
                      {' '}
                      Review security requirements with SecureFlow
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                    <time>4:15 PM</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="performance-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Performance Analytics</h2>
              <p className="section-subtitle">
                {' '}
                Track your sales metrics and identify growth opportunities
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="charts-grid">
              <div className="large chart-card">
                <div className="chart-header">
                  <h3>Revenue Trend</h3>
                  <div className="chart-controls">
                    <button className="chart-control active">3M</button>
                    <button className="chart-control">6M</button>
                    <button className="chart-control">1Y</button>
                  </div>
                </div>
                <div className="chart-content">
                  <div className="revenue-chart">
                    <div className="chart-bars">
                      <div className="home-chart-bar1 chart-bar">
                        <span className="bar-value">$180K</span>
                      </div>
                      <div className="home-chart-bar2 chart-bar">
                        <span className="bar-value">$260K</span>
                      </div>
                      <div className="home-chart-bar3 chart-bar">
                        <span className="bar-value">$340K</span>
                      </div>
                      <div className="home-chart-bar4 chart-bar">
                        <span className="bar-value">$400K</span>
                      </div>
                      <div className="home-chart-bar5 chart-bar">
                        <span className="bar-value">$300K</span>
                      </div>
                      <div className="home-chart-bar6 chart-bar">
                        <span className="bar-value">$360K</span>
                      </div>
                    </div>
                    <div className="chart-labels">
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Conversion Funnel</h3>
                </div>
                <div className="funnel-chart">
                  <div className="home-funnel-stage1 funnel-stage">
                    <span className="stage-label">Leads</span>
                    <span className="stage-value">2,480</span>
                  </div>
                  <div className="home-funnel-stage2 funnel-stage">
                    <span className="stage-label">Qualified</span>
                    <span className="stage-value">1,860</span>
                  </div>
                  <div className="home-funnel-stage3 funnel-stage">
                    <span className="stage-label">Proposal</span>
                    <span className="stage-value">1,364</span>
                  </div>
                  <div className="home-funnel-stage4 funnel-stage">
                    <span className="stage-label">Negotiation</span>
                    <span className="stage-value">868</span>
                  </div>
                  <div className="home-funnel-stage5 funnel-stage">
                    <span className="stage-label">Closed Won</span>
                    <span className="stage-value">496</span>
                  </div>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Team Performance</h3>
                </div>
                <div className="performance-list">
                  <div className="performance-item">
                    <div className="performer-info">
                      <img
                        alt="Sarah Johnson"
                        src="https://images.pexels.com/photos/34007066/pexels-photo-34007066.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=100&amp;w=100"
                      />
                      <div className="performer-details">
                        <span className="performer-name">Sarah Johnson</span>
                        <span className="performer-role">Senior Sales Rep</span>
                      </div>
                    </div>
                    <div className="performance-metrics">
                      <span className="metric-value">$420K</span>
                      <div className="performance-bar">
                        <div className="home-performance-fill1 performance-fill"></div>
                      </div>
                    </div>
                  </div>
                  <div className="performance-item">
                    <div className="performer-info">
                      <img
                        alt="Mike Chen"
                        src="https://images.pexels.com/photos/34007065/pexels-photo-34007065.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=100&amp;w=100"
                      />
                      <div className="performer-details">
                        <span className="performer-name">Mike Chen</span>
                        <span className="performer-role">
                          Account Executive
                        </span>
                      </div>
                    </div>
                    <div className="performance-metrics">
                      <span className="metric-value">$380K</span>
                      <div className="performance-bar">
                        <div className="home-performance-fill2 performance-fill"></div>
                      </div>
                    </div>
                  </div>
                  <div className="performance-item">
                    <div className="performer-info">
                      <img
                        alt="Emma Davis"
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=100&amp;w=100"
                      />
                      <div className="performer-details">
                        <span className="performer-name">Emma Davis</span>
                        <span className="performer-role">Sales Manager</span>
                      </div>
                    </div>
                    <div className="performance-metrics">
                      <span className="metric-value">$340K</span>
                      <div className="performance-bar">
                        <div className="home-performance-fill3 performance-fill"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-background">
            <div className="cta-pattern"></div>
          </div>
          <div className="section-container">
            <div className="cta-content">
              <div className="cta-text">
                <h2 className="section-title">Ready to boost your sales?</h2>
                <p className="section-subtitle">
                  {' '}
                  Take immediate action with our quick access tools and
                  streamlined workflows
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="cta-actions">
                <button className="btn btn-lg btn-primary">Add New Deal</button>
                <button className="btn btn-lg btn-secondary">
                  Import Leads
                </button>
                <button className="btn btn-outline btn-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon48"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text68">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
