 import React from 'react';
 import "./LectureDashboard.css";
 

 const LectureDashboard = () => {
return (
    <Div>
    //Sidebar 
    <nav ClassName="sidebar">
        <div class="sidebar-header">
            <h1>UNIVERSITY<br/>LECTURER</h1>
        </div>
        <ul ClassName="nav-menu">
            <li class="nav-item">
                <a href="dashboard.php" class="nav-link">
                    <svg className="nav-icon" viewBox="0 0 24 24">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                    Dashboard
                </a>
            </li>
            <li className="nav-item">
                <a href="students.php" class="nav-link">
                    <svg className="nav-icon" viewBox="0 0 24 24">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1.01L12 13l-2-4H7c-.8 0-1.54.37-2.01 1.01L2.46 17.37A1.5 1.5 0 0 0 3.88 19H6c.8 0 1.54-.37 2.01-1.01L10 14l2 4h2.54c.8 0 1.54-.37 2.01-1.01L20 22z"/>
                    </svg>
                    Students
                </a>
            </li>
            <li className="nav-item">
                <a href="papers.php" class="nav-link">
                    <svg className="nav-icon" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    Papers
                </a>
            </li>
            <li className="nav-item">
                <a href="courses.php" class="nav-link">
                    <svg className="nav-icon" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    Courses
                </a>
            </li>
            <li className="nav-item">
                <a href="schedule.php" class="nav-link">
                    <svg className="nav-icon" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    Schedule
                </a>
            </li>
            <li className="nav-item">
                <a href="logout.php" class="nav-link">
                    <svg className="nav-icon" viewBox="0 0 24 24">
                        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                    </svg>
                    Logout
                </a>
            </li>
        </ul>
    </nav>

    <main className="main-content">
        <div className="header">
            <h1>UNIVERSITY LECTURER</h1>
            <div className="user-avatar">👤</div>
        </div>

        <div className="content-wrapper">
            <div className="left-column">
                <div className="section">
                    <h2 className="section-title">Research Papers</h2>
                    
 
<div className="paper-item">
    <div className="paper-icon">PDF</div>
    <div className="paper-main-content">
        <div className="paper-details">
            <div className="paper-title">Deep Learning Approaches</div>
            <div className="paper-meta">
                <span className="paper-size">1.2 MB</span>
            </div>
        </div>
    </div>
    <div className="paper-actions">
        <div className="paper-status status-approved">APPROVED</div>
        <a href="papers/deep_learning.pdf" className="download-emoji" download>⬇️</a>
    </div>
</div>

<div className="paper-item">
    <div className="paper-icon">PDF</div>
    <div className="paper-main-content">
        <div className="paper-details">
            <div className="paper-title">Social Media Impacts</div>
            <div className="paper-meta">
                <span className="paper-size">800 KB</span>
            </div>
        </div>
    </div>
    <div className="paper-actions">
        <div className="paper-status status-review">IN REVIEW</div>
        <a href="papers/social_media.pdf" className="download-emoji" download>⬇️</a>
    </div>
</div>

<div className="paper-item">
    <div className="paper-icon">PDF</div>
    <div className="paper-main-content">
        <div className="paper-details">
            <div className="paper-title">Renewable Energy Strategies</div>
            <div className="paper-meta">
                <span className="paper-size">620 KB</span>
            </div>
        </div>
    </div>
    <div className="paper-actions">
        <div className="paper-status status-rejected">REJECTED</div>
        <a href="papers/renewable_energy.pdf" className="download-emoji" download>⬇️</a>
    </div>
</div>

<div className="paper-item">
    <div className="paper-icon">PDF</div>
    <div className="paper-main-content">
        <div className="paper-details">
            <div className="paper-title">Quantum Computing Overview</div>
            <div className="paper-meta">
                <span className="paper-size">1.1 MB</span>
            </div>
        </div>
    </div>
    <div className="paper-actions">
        <div className="paper-status status-approved">APPROVED</div>
        <a href="papers/quantum_computing.pdf" className="download-emoji" download>⬇️</a>
    </div>
</div>        
                </div>

                <div className="section">
                    <h2 className="section-title">My Courses</h2>
                    <div className="course-item">
                        <div className="course-details">
                            <h3>Introduction to Sociology</h3>
                            <div className="course-schedule">Tue, Thu 10:00 AM – 11:30 AM</div>
                        </div>
                        <div className="course-code">SOC101</div>
                    </div>
                    <div className="course-item">
                        <div className="course-details">
                            <h3>Data Structures</h3>
                            <div className="course-schedule">Mon, Wed, Fri 2:00 PM – 3:30 PM</div>
                        </div>
                        <div className="course-code">CSC201</div>
                    </div>
                    <div className="course-item">
                        <div className="course-details">
                            <h3>Modern Political Thought</h3>
                        </div>
                        <div className="course-code">POL303</div>
                    </div>
                </div>
            </div>

            <div className="right-column">
                <div className="upcoming-section">
                    <div className="upcoming-header">
                        <h2 className="upcoming-title">Upcoming</h2>
                        <span className="upcoming-nav">›</span>
                    </div>
                    <div className="calendar-header">
                        <span id="monthYear"></span>
                        <div className="calendar-nav">
                            <button id="prevMonth">‹</button>
                            <button id="nextMonth">›</button>
                        </div>
                    </div>
                    <div className="calendar-grid" id="calendarGrid">
                        <div className="calendar-day-header">MO</div>
                        <div className="calendar-day-header">TU</div>
                        <div className="calendar-day-header">WED</div>
                        <div className="calendar-day-header">TH</div>
                        <div className="calendar-day-header">FR</div>
                        <div className="calendar-day-header">SA</div>
                        <div className="calendar-day-header">SU</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </Div>
 );
    

    
        
        const publications = [
            { title: "Deep Learning for Natural Language Processing" },
            { title: "Quantum Computing Advances" },
            { title: "Renewable Energy Technologies" },
            { title: "AI in Healthcare" },
            { title: "Data Privacy and Security" },
            { title: "Machine Learning in Education" }
        ];

        function handleSearch(event) {
            event.preventDefault();
            const query = document.getElementById('searchInput').value.trim().toLowerCase();
            if (!query) {
                alert("Please enter keywords to search.");
                return;
            }
            const results = publications.filter(pub => pub.title.toLowerCase().includes(query));
            if (results.length > 0) {
                alert("Search Results:\n" + results.map(r => r.title).join("\n"));
            } else {
                alert("No publications found matching your keywords.");
            }
        }

        // Toggle sidebar on mobile
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('active');
        }

        // Highlight active sidebar link based on URL
        function setActiveLink() {
            const currentPage = window.location.pathname.split('/').pop() || 'dashboard.php';
            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        class Calendar {
            constructor() {
                this.today = new Date();
                this.currentDate = new Date();
                this.selectedDate = new Date();
                this.monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];
                this.init();
            }

            init() {
                this.render();
                this.bindEvents();
            }

            bindEvents() {
                document.getElementById('prevMonth').addEventListener('click', () => {
                    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
                    this.render();
                });

                document.getElementById('nextMonth').addEventListener('click', () => {
                    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
                    this.render();
                });
            }

            render() {
                this.renderHeader();
                this.renderDays();
            }

            renderHeader() {
                const monthYear = document.getElementById('monthYear');
                monthYear.textContent = `${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
            }

            renderDays() {
                const calendarGrid = document.getElementById('calendarGrid');
                const dayElements = calendarGrid.querySelectorAll('.calendar-day');
                dayElements.forEach(day => day.remove());

                const year = this.currentDate.getFullYear();
                const month = this.currentDate.getMonth();
                const firstDay = new Date(year, month, 1);
                const lastDay = new Date(year, month + 1, 0);
                const daysInMonth = lastDay.getDate();
                
                let startingDayOfWeek = firstDay.getDay();
                if (startingDayOfWeek === 0) startingDayOfWeek = 7;
                startingDayOfWeek = startingDayOfWeek - 1;

                for (let i = 0; i < startingDayOfWeek; i++) {
                    const emptyDay = document.createElement('div');
                    emptyDay.className = 'calendar-day other-month';
                    calendarGrid.appendChild(emptyDay);
                }

                for (let day = 1; day <= daysInMonth; day++) {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-day';
                    dayElement.textContent = day;
                    
                    const dayDate = new Date(year, month, day);
                    
                    if (this.isSameDate(dayDate, this.today)) {
                        dayElement.classList.add('today');
                    }
                    
                    if (this.isSameDate(dayDate, this.selectedDate)) {
                        dayElement.classList.add('selected');
                    }
                    
                    dayElement.addEventListener('click', () => {
                        document.querySelectorAll('.calendar-day.selected').forEach(el => {
                            el.classList.remove('selected');
                        });
                        dayElement.classList.add('selected');
                        this.selectedDate = new Date(year, month, day);
                    });
                    
                    calendarGrid.appendChild(dayElement);
                }

                const totalCells = 42;
                const currentCells = startingDayOfWeek + daysInMonth;
                const remainingCells = totalCells - currentCells;
                
                for (let i = 0; i < remainingCells && currentCells + i < totalCells; i++) {
                    const emptyDay = document.createElement('div');
                    emptyDay.className = 'calendar-day other-month';
                    calendarGrid.appendChild(emptyDay);
                }
            }

            isSameDate(date1, date2) {
                return date1.getFullYear() === date2.getFullYear() &&
                       date1.getMonth() === date2.getMonth() &&
                       date1.getDate() === date2.getDate();
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            new Calendar();
            setActiveLink();
        });
        function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert("Please enter keywords to search.");
        return;
    }
    window.location.href = `ResearchOpportunity.html?query=${encodeURIComponent(query)}`;
}
         
     
 };

 export default LectureDashboard;