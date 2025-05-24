// Project data
const projectData = [
  {
    title: "SBL Agro Farms & Developers",
    image: "agro2.jpg",
    description:
      "Collaborated on a visionary concept to streamline operations for a premium agro-real estate venture. Focused on digital communications, enhanced client onboarding workflows, and improved financial transparency. The strategy strengthened brand positioning, created trust across investor touchpoints, and showcased operational discipline suited for elite clientele.<br><br><span class='highlight'>Reimagining the land investment journey with elegance, clarity, and high-conversion engagement.</span>",
    client: "SBL Agro Farms",
    services: "Digital Optimization & Strategy",
    year: "Lifestyle & Investment",
    hasMoreContent: true,
    contentType: "circular-chart",
    chartData: {
      labels: [
        "Client Inquiries",
        "Client Meetings",
        "Conversion Rate",
        "Avg. Response Time",
        "Compliance Issues",
        "Paperwork Time",
        "Engagement Score",
      ],
      values: [31.76666667, 9.5, 26.28376285, 9.544744487, 0.6666666667, 4.770422501, 76.46666667],
      units: ["", "", "%", "hrs", "", "days", "/100"],
      maxValues: [50, 20, 100, 24, 5, 10, 100], // Maximum values for each metric (for percentage calculation)
    },
  },
  {
    title: "Luxury Digital Solutions",
    image: "luxurydigital.jpg",
    description:
      "Curated digital ecosystems for prestige-focused brands looking to elevate their online narrative. This involved producing refined content strategies, tailoring user journeys for high-end engagement, and leveraging organic SEO visibility. Each brand story was shaped with empathy, authority, and sophistication, ensuring seamless resonance with discerning audiences.<br><br><span class='highlight'>Where luxury meets digital clarity — storytelling designed for impact and status.</span>",
    client: "Various Luxury Brands",
    services: "Narrative-Led Brand Identity",
    year: "Luxury Branding",
    hasMoreContent: true,
    // Changed to circular-chart instead of chart
    contentType: "circular-chart",
    chartData: {
      labels: [
        "Content Pieces",
        "SEO Score",
        "Organic Reach",
        "Avg. Time on Page",
        "Bounce Rate",
        "Leads Generated",
        "Brand Sentiment",
      ],
      values: [2.1, 85, 5208.13, 2.76, 29.01, 11.2, 85.8],
      units: ["", "/100", "", "min", "%", "", ""],
      // Added maxValues for circular chart
      maxValues: [5, 100, 10000, 5, 100, 20, 100],
    },
  },
  {
    title: "Elite Rentals",
    image: "digitaloptimization.jpg",
    description:
      "Developed a luxury-grade booking and property management interface tailored to the needs of high-net-worth individuals and service providers. From automation flows to real-time responsiveness, the entire system was crafted for elegance, efficiency, and elevated user satisfaction.<br><br><span class='highlight'>Digitizing luxury experiences — turning complex logistics into invisible, frictionless flow.</span>",
    client: "Luxury Rental Properties",
    services: "Concierge-Grade Booking Optimization",
    year: "Premium Rentals & Tech Enablement",
    hasMoreContent: true,
    contentType: "circular-chart",
    chartData: {
      labels: [
        "Inquiries Handled",
        "Booking Conversion",
        "Response Time",
        "Client Satisfaction",
        "Revenue Growth",
        "System Uptime",
      ],
      values: [42.3, 68.7, 15.2, 94.8, 32.5, 99.7],
      units: ["", "%", "min", "%", "%", "%"],
      maxValues: [60, 100, 60, 100, 50, 100], // Maximum values for each metric (for percentage calculation)
    },
  },
  {
    title: "Remote Luxury Ops",
    image: "remoteluxury.jpg",
    description:
      "Engineered a digital support system for managing luxury listings (Airbnb, Yachts, Jets) and VIP guest experiences. Tasks included listing optimization, remote concierge communication, VIP booking management, and business owner admin support. Prioritized discretion, speed, and the seamless service expected at the highest levels.<br><br><span class='highlight'>Behind every smooth luxury stay is flawless support — delivered quietly, remotely, and precisely.</span>",
    client: "Various Luxury Service Providers",
    services: "Discreet, White-Glove Digital Support",
    year: "Lifestyle Management",
    hasMoreContent: false,
  },
]

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  setTimeout(() => {
    const preloader = document.querySelector(".preloader")
    preloader.classList.add("fade-out")

    // Enable scrolling after preloader is gone
    setTimeout(() => {
      document.body.style.overflow = "visible"
      animateOnScroll()
    }, 500)
  }, 2000)
  // Custom cursor
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  // Header scroll effect
  const header = document.querySelector("header")
  const backToTop = document.querySelector(".back-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
      backToTop.classList.add("active")
    } else {
      header.classList.remove("scrolled")
      backToTop.classList.remove("active")
    }

    animateOnScroll()
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector("nav")

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active")
    menuToggle.classList.toggle("active")

    if (menuToggle.classList.contains("active")) {
      menuToggle.innerHTML = '<i class="fas fa-times"></i>'
    } else {
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
    }
  })

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll("nav ul li a")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active")
      menuToggle.classList.remove("active")
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
    })
  })

  // Active nav link on scroll
  const sections = document.querySelectorAll("section")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active")
      }
    })
  })

  // Project modal
  const projectLinks = document.querySelectorAll(".project-link")
  const modal = document.getElementById("project-modal")
  const closeModal = document.querySelector(".close-modal")

  projectLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Set modal content based on project data
      document.getElementById("modal-title").textContent = projectData[index].title
      document.getElementById("modal-image").src = projectData[index].image
      document.getElementById("modal-description").innerHTML = projectData[index].description
      document.getElementById("modal-client").textContent = projectData[index].client
      document.getElementById("modal-services").textContent = projectData[index].services
      document.getElementById("modal-year").textContent = projectData[index].year

      // Always show performance metrics if available
      const moreContentSection = document.getElementById("more-content-section")
      
      if (projectData[index].hasMoreContent) {
        moreContentSection.style.display = "block"

        if (projectData[index].contentType === "image") {
          // Show image content
          document.getElementById("chart-container").style.display = "none"
          document.getElementById("circular-chart-container").style.display = "none"
          document.getElementById("image-container").style.display = "block"
        } else if (projectData[index].contentType === "chart" || projectData[index].contentType === "circular-chart") {
          // Always show circular chart content regardless of the type
          document.getElementById("image-container").style.display = "none"
          document.getElementById("chart-container").style.display = "none"
          document.getElementById("circular-chart-container").style.display = "block"

          // Create the circular chart
          createCircularCharts(projectData[index].chartData)
        }
      } else {
        moreContentSection.style.display = "none"
      }

      // Show modal
      modal.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  })

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active")
    document.body.style.overflow = "visible"
  })

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
      document.body.style.overflow = "visible"
    }
  })

  // Function to create circular charts
  function createCircularCharts(data) {
    const chartContainer = document.getElementById("circular-chart-container")
    chartContainer.innerHTML = "" // Clear previous chart

    const chartTitle = document.createElement("h3")
    chartTitle.textContent = "Performance Metrics"
    chartTitle.style.marginBottom = "20px"
    chartTitle.style.color = "#b28538"
    chartContainer.appendChild(chartTitle)

    // Create chart wrapper
    const chartWrapper = document.createElement("div")
    chartWrapper.className = "circular-chart-wrapper"
    chartContainer.appendChild(chartWrapper)

    // Create circular charts for each data point
    data.labels.forEach((label, index) => {
      const chartItem = document.createElement("div")
      chartItem.className = "circular-chart-item"

      // Calculate percentage based on max value
      const maxValue = data.maxValues[index]
      const percentage = Math.min(Math.round((data.values[index] / maxValue) * 100), 100)

      // Create circular chart
      const chart = document.createElement("div")
      chart.className = "circular-chart"
      chart.setAttribute("data-percentage", percentage)

      // Create SVG for circular chart
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("viewBox", "0 0 36 36")

      // Background circle
      const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "path")
      bgCircle.setAttribute("class", "circle-bg")
      bgCircle.setAttribute("d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831")

      // Foreground circle (the progress)
      const fgCircle = document.createElementNS("http://www.w3.org/2000/svg", "path")
      fgCircle.setAttribute("class", "circle")
      fgCircle.setAttribute("stroke-dasharray", `${percentage}, 100`)
      fgCircle.setAttribute("d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831")

      // Percentage text
      const percentText = document.createElementNS("http://www.w3.org/2000/svg", "text")
      percentText.setAttribute("x", "18")
      percentText.setAttribute("y", "20.35")
      percentText.setAttribute("class", "percentage")
      percentText.textContent = `${percentage}%`

      svg.appendChild(bgCircle)
      svg.appendChild(fgCircle)
      svg.appendChild(percentText)
      chart.appendChild(svg)

      // Create label
      const labelEl = document.createElement("div")
      labelEl.className = "circular-chart-label"
      labelEl.textContent = label

      // Create value
      const valueEl = document.createElement("div")
      valueEl.className = "circular-chart-value"
      valueEl.textContent = `${data.values[index]}${data.units[index]}`

      chartItem.appendChild(chart)
      chartItem.appendChild(labelEl)
      chartItem.appendChild(valueEl)
      chartWrapper.appendChild(chartItem)
    })

    // Animate the circular charts
    setTimeout(() => {
      const circles = document.querySelectorAll(".circle")
      circles.forEach((circle) => {
        circle.style.transition = "stroke-dasharray 1.5s ease-in-out"
      })
    }, 100)
  }

  // Testimonial slider
  const testimonialTrack = document.querySelector(".testimonial-track")
  const testimonials = document.querySelectorAll(".testimonial-item")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-testimonial")
  const nextBtn = document.querySelector(".next-testimonial")
  let currentIndex = 0

  function updateSlider() {
    // Calculate the percentage to translate based on the current index
    const translateValue = currentIndex * 33.333
    testimonialTrack.style.transform = `translateX(-${translateValue}%)`

    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex)
    })
  }

  // Initialize the slider
  updateSlider()

  // Previous button click
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    updateSlider()
  })

  // Next button click
  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    updateSlider()
  })

  // Dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index
      updateSlider()
    })
  })

  // Auto slide testimonials every 5 seconds
  let autoSlideInterval = setInterval(() => {
    currentIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    updateSlider()
  }, 5000)

  // Pause auto-slide when hovering over the slider
  testimonialTrack.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval)
  })

  // Resume auto-slide when mouse leaves the slider
  testimonialTrack.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => {
      currentIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
      updateSlider()
    }, 5000)
  })

  // Animated dots background
  function createDots() {
    const dotContainers = document.querySelectorAll(".animated-dots")

    dotContainers.forEach((container) => {
      // Clear any existing dots
      container.innerHTML = ""

      // Create random number of dots (between 50-100)
      const numberOfDots = Math.floor(Math.random() * 50) + 50

      for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement("div")
        dot.classList.add("dot-particle")

        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100

        // Random size (2-5px)
        const size = Math.random() * 3 + 2

        // Random opacity (0.1-0.5)
        const opacity = Math.random() * 0.4 + 0.1

        // Set styles
        dot.style.left = `${posX}%`
        dot.style.top = `${posY}%`
        dot.style.width = `${size}px`
        dot.style.height = `${size}px`
        dot.style.opacity = opacity

        // Add animation with random duration and delay
        const duration = Math.random() * 20 + 10 // 10-30s
        const delay = Math.random() * 5 // 0-5s
        dot.style.animation = `floatParticle ${duration}s ${delay}s infinite linear`

        container.appendChild(dot)
      }
    })
  }

  // Add floating animation to CSS
  const style = document.createElement("style")
  style.textContent = `
  @keyframes floatParticle {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(10px, 10px);
    }
    50% {
      transform: translate(0, 20px);
    }
    75% {
      transform: translate(-10px, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  
  /* Circular Chart Styles */
  .circular-chart-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
  }
  
  .circular-chart-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    margin-bottom: 20px;
  }
  
  .circular-chart {
    width: 100px;
    height: 100px;
  }
  
  .circular-chart-label {
    margin-top: 10px;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #333;
  }
  
  .circular-chart-value {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
  }
  
  .circle-bg {
    fill: none;
    stroke: #eee;
    stroke-width: 3.8;
  }
  
  .circle {
    fill: none;
    stroke-width: 3.8;
    stroke: #E0AA3E;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  
  .percentage {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
  
  #more-content-section {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e0e0e0;
  }
`
  document.head.appendChild(style)

  // Create dots on load
  createDots()

  // Recreate dots on window resize
  window.addEventListener("resize", createDots)

  // Scroll animations
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".reveal-opacity, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right, .reveal-scale",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight * 0.85) {
        element.classList.add("active")
      }
    })
  }

  // Slideshow for hero section
  const slides = document.querySelectorAll(".slide")
  let currentSlide = 0

  function changeSlide() {
    // Remove active class from all slides
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Add active class to current slide
    slides[currentSlide].classList.add("active")

    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length
  }

  // Initialize first slide
  changeSlide()

  // Change slide every 5 seconds
  setInterval(changeSlide, 5000)

  // Back to top button
  const backToTopBtn = document.querySelector(".back-to-top")

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Initialize animations on page load
  animateOnScroll()
})