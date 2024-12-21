document.addEventListener('DOMContentLoaded', function () {
    // Set up event listeners for menu items
    const menuLinks = document.querySelectorAll('.menu a');
    const mainContent = document.querySelector('main');

    // Function to clear the main content
    function clearMainContent() {
        mainContent.innerHTML = ''; // Clear existing content
    }

    // Function to update the main content based on the menu item clicked
    function updateMainContent(contentType) {
        clearMainContent();
        
        switch (contentType) {
            case 'home':
                mainContent.innerHTML = `
                     <header>
                <h1>Good Morning</h1>
                <h2>Welcome Back 🎉</h2>
                <button class="subscribe">Subscribe</button>
            </header>
            
            <section class="stats">
                <div class="card steps">
                    <h3>Steps</h3>
                    <canvas id="stepsChart"></canvas>
                </div>
                <div class="card water">
                    <h3>Water</h3>
                    <canvas id="waterChart"></canvas>
                </div>
                <div class="card calories">
                    <h3>Calories</h3>
                    <canvas id="caloriesChart"></canvas>
                </div>
                <div class="card heart-rate">
                    <h3>Heart Rate</h3>
                    <canvas id="heartRateChart"></canvas>
                </div>
            </section>
            <section class="activity-progress">
                <div class="activity">
                    <h3>Activity</h3>
                    <canvas id="activityChart"></canvas>
                </div>
                <div class="progress">
                    <h3>Progress</h3>
                    <canvas id="progressChart"></canvas>
                </div>
            </section>
            <section class="recommendations">
                <h3>Recommended Trainer for you</h3>
                <div class="trainer-cards">
                    <div class="trainer">
                        <img src="trainer1.jpg" alt="Trainer">
                        <h4>Cameron Williamson</h4>
                        <p>Fitness Specialist</p>
                    </div>
                    <div class="trainer">
                        <img src="trainer2.jpg" alt="Trainer">
                        <h4>Cameron Williamson</h4>
                        <p>Fitness Specialist</p>
                    </div>
                </div>
            </section> 
                `;
                break;
            case 'steps':
                mainContent.innerHTML = `
                    <h1>Steps Overview</h1>
                    <canvas id="stepsChart"></canvas>
                `;
                // Reinitialize the steps chart (optional: you may want to update the chart data dynamically)
                updateStepsChart();
                break;
            case 'water':
                mainContent.innerHTML = `
                    <h1>Water Consumption</h1>
                    <canvas id="waterChart"></canvas>
                `;
                // Reinitialize the water chart
                updateWaterChart();
                break;
            case 'calories':
                mainContent.innerHTML = `
                    <h1>Calories Intake</h1>
                    <canvas id="caloriesChart"></canvas>
                `;
                // Reinitialize the calories chart
                updateCaloriesChart();
                break;
            case 'heartRate':
                mainContent.innerHTML = `
                    <h1>Heart Rate Data</h1>
                    <canvas id="heartRateChart"></canvas>
                `;
                // Reinitialize the heart rate chart
                updateHeartRateChart();
                break;
            case 'settings':
                mainContent.innerHTML = `
                    <h1>Settings</h1>
                    <p>Configure your preferences here.</p>
                `;
                break;
            default:
                mainContent.innerHTML = `
                    <h1>Good Morning</h1>
                    <h2>Welcome Back 🎉</h2>
                `;
        }
    }

    // Add event listeners to each menu item
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default link behavior
            // Remove 'active' class from all menu items
            menuLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked menu item
            link.classList.add('active');

            // Determine which link was clicked and update content
            const clickedLinkId = event.target.id;
            if (clickedLinkId === 'homeLink') {
                updateMainContent('home');
            } else if (clickedLinkId === 'stepsLink') {
                updateMainContent('steps');
            } else if (clickedLinkId === 'waterLink') {
                updateMainContent('water');
            } else if (clickedLinkId === 'caloriesLink') {
                updateMainContent('calories');
            } else if (clickedLinkId === 'heartRateLink') {
                updateMainContent('heartRate');
            } else if (clickedLinkId === 'settingsLink') {
                updateMainContent('settings');
            }
        });
    });

    // Initialize the page with the "Home" section by default
    updateMainContent('home');
});

// Functions to reinitialize charts for each content type (optional)
function updateStepsChart() {
    const ctx = document.getElementById('stepsChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Steps', 'balance'],
            datasets: [{
                data: [1000, 200],
                backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(211, 211, 211, 0.5)'],
                hoverOffset: 4,
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } },
        }
    });
}

function updateWaterChart() {
    const ctx = document.getElementById('waterChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Consumed', 'Remaining'],
            datasets: [{
                data: [1.25, 2.75],
                backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(211, 211, 211, 0.5)'],
                hoverOffset: 4,
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } },
        }
    });
}

function updateCaloriesChart() {
    const ctx = document.getElementById('caloriesChart').getContext('2d');
    new Chart(ctx, {
        type: 'gauge', // Use gauge type for calories
                data: {
                    datasets: [{
                        data: [300], // Current calories
                        backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(211, 211, 211, 0.5)'],
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false },
                    },
                    scales: {
                        r: {
                            min: 0,
                            max: 1000, // Set maximum calories
                            ticks: {
                                stepSize: 100,
                            },
                        }
                    }
                }
            });
        }

function updateHeartRateChart() {
    const ctx = document.getElementById('heartRateChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Heart Rate (bpm)',
                data: [110, 115, 120, 125, 130, 128, 122],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                tension: 0.4,
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, min: 100, max: 140 } },
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Steps Chart
    const stepsCtx = document.getElementById('stepsChart').getContext('2d');
    const stepsChart = new Chart(stepsCtx, {
        type: 'doughnut',
data: {
labels: ['Steps', 'balance'],
datasets: [{
data: [1000, 200],
backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(211, 211, 211, 0.5)'],
hoverOffset: 4,
}]
},
options: {
responsive: true,
plugins: { legend: { position: 'bottom' } },
}
});
    // Water Chart
    const waterCtx = document.getElementById('waterChart').getContext('2d');
    const waterChart = new Chart(waterCtx, {
        type: 'doughnut',
        data: {
            labels: ['Consumed', 'Remaining'],
            datasets: [{
                data: [1.25, 2.75],
                backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(211, 211, 211, 0.5)'],
                hoverOffset: 4,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
            },
        }
    });

    // Calories Chart
    const caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
    const caloriesChart = new Chart(caloriesCtx, {
        type: 'doughnut',
data: {
labels: ['Consumed', 'Remaining'],
datasets: [{
data: [300, 400],
backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(211, 211, 211, 0.5)'],
hoverOffset: 2,
}]
},
options: {
responsive: true,
plugins: { legend: { position: 'bottom' } },
}
});

    // Heart Rate Chart
    const heartRateCtx = document.getElementById('heartRateChart').getContext('2d');
    const heartRateChart = new Chart(heartRateCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Heart Rate (bpm)',
                data: [110, 115, 120, 125, 130, 128, 122],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                tension: 0.4,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
            },
            scales: {
                y: { 
                    beginAtZero: true,
                    min: 100, // Set minimum heart rate threshold
                    max: 140, // Set maximum heart rate threshold
                },
            },
        }
    });

    // Simulate dynamic data updates for all charts
    let stepsData = [2000, 2500, 3000, 3500, 4000, 3000, 2500];
    let waterData = [1.25, 2.75];
    let caloriesData = [300, 500, 600, 200];
    let heartRateData = [110, 115, 120, 125, 130, 128, 122];

    setInterval(function () {
        // Steps Chart update
        stepsData.shift();
        stepsData.push(Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000); // Random steps between 1000 and 5000
        stepsChart.data.datasets[0].data = stepsData;
        stepsChart.update();

        // Water Chart update
        waterData[0] = parseFloat((Math.random() * 4).toFixed(2)); // Random consumed water between 0 and 4 liters
        waterData[1] = (4 - waterData[0]).toFixed(2); // Remaining water
        waterChart.data.datasets[0].data = waterData;
        waterChart.update();

        // Calories Chart update
        caloriesData = caloriesData.map(val => Math.floor(Math.random() * (700 - 150 + 1)) + 150); // Random calories between 150 and 700
        caloriesChart.data.datasets[0].data = caloriesData;
        caloriesChart.update();

        // Heart Rate Chart update
        heartRateData.shift();
        heartRateData.push(Math.floor(Math.random() * (140 - 100 + 1)) + 100); // Random heart rate between 100 and 140 bpm
        heartRateChart.data.datasets[0].data = heartRateData;
        heartRateChart.update();

    }, 5000); // Update every 5 seconds
});



                document.addEventListener('DOMContentLoaded', function () {
                    // Steps Chart
                    const stepsCtx = document.getElementById('stepsChart').getContext('2d');
                    const stepsChart = new Chart(stepsCtx, {
                        type: 'doughnut',
        data: {
            labels: ['Steps', 'balance'],
            datasets: [{
                data: [1000, 200],
                backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(211, 211, 211, 0.5)'],
                hoverOffset: 4,
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } },
        }
    });
                    // Water Chart
                    const waterCtx = document.getElementById('waterChart').getContext('2d');
                    const waterChart = new Chart(waterCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['Consumed', 'Remaining'],
                            datasets: [{
                                data: [1.25, 2.75],
                                backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(211, 211, 211, 0.5)'],
                                hoverOffset: 4,
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                legend: { position: 'bottom' },
                            },
                        }
                    });
            
                    // Calories Chart
                    const caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
                    const caloriesChart = new Chart(caloriesCtx, {
                        type: 'doughnut',
        data: {
            labels: ['Consumed', 'Remaining'],
            datasets: [{
                data: [300, 400],
                backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(211, 211, 211, 0.5)'],
                hoverOffset: 2,
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } },
        }
    });

                    // Heart Rate Chart
                    const heartRateCtx = document.getElementById('heartRateChart').getContext('2d');
                    const heartRateChart = new Chart(heartRateCtx, {
                        type: 'line',
                        data: {
                            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            datasets: [{
                                label: 'Heart Rate (bpm)',
                                data: [110, 115, 120, 125, 130, 128, 122],
                                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                                borderColor: 'rgba(255, 159, 64, 1)',
                                borderWidth: 2,
                                tension: 0.4,
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                legend: { display: false },
                            },
                            scales: {
                                y: { 
                                    beginAtZero: true,
                                    min: 100, // Set minimum heart rate threshold
                                    max: 140, // Set maximum heart rate threshold
                                },
                            },
                        }
                    });
            
                    // Simulate dynamic data updates for all charts
                    let stepsData = [2000, 2500, 3000, 3500, 4000, 3000, 2500];
                    let waterData = [1.25, 2.75];
                    let caloriesData = [300, 500, 600, 200];
                    let heartRateData = [110, 115, 120, 125, 130, 128, 122];
            
                    setInterval(function () {
                        // Steps Chart update
                        stepsData.shift();
                        stepsData.push(Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000); // Random steps between 1000 and 5000
                        stepsChart.data.datasets[0].data = stepsData;
                        stepsChart.update();
            
                        // Water Chart update
                        waterData[0] = parseFloat((Math.random() * 4).toFixed(2)); // Random consumed water between 0 and 4 liters
                        waterData[1] = (4 - waterData[0]).toFixed(2); // Remaining water
                        waterChart.data.datasets[0].data = waterData;
                        waterChart.update();
            
                        // Calories Chart update
                        caloriesData = caloriesData.map(val => Math.floor(Math.random() * (700 - 150 + 1)) + 150); // Random calories between 150 and 700
                        caloriesChart.data.datasets[0].data = caloriesData;
                        caloriesChart.update();
            
                        // Heart Rate Chart update
                        heartRateData.shift();
                        heartRateData.push(Math.floor(Math.random() * (140 - 100 + 1)) + 100); // Random heart rate between 100 and 140 bpm
                        heartRateChart.data.datasets[0].data = heartRateData;
                        heartRateChart.update();
            
                    }, 5000); // Update every 5 seconds
                });
           
    document.addEventListener('DOMContentLoaded', function () {
        // Activity Chart
        const activityCtx = document.getElementById('activityChart').getContext('2d');
        new Chart(activityCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Steps',
                    data: [2000, 2500, 3000, 4000, 5000, 3500, 2500],
                    backgroundColor: 'rgba(108, 99, 255, 0.5)',
                    borderColor: 'rgba(108, 99, 255, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    y: { beginAtZero: true },
                },
            }
        });

        // Progress Chart
        const progressCtx = document.getElementById('progressChart').getContext('2d');
        new Chart(progressCtx, {
            type: 'doughnut',
            data: {
                labels: ['Cardio', 'Stretching', 'Treadmill', 'Strength'],
                datasets: [{
                    data: [30, 40, 30, 20],
                    backgroundColor: [
                        'rgba(108, 99, 255, 0.8)',
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'right' },
                },
            }
        });
    });

    document.getElementById("edit-profile").onclick = function() {
        document.getElementById("profile-modal").style.display = "block";
        
        openTab(event, 'PersonalInfo'); // Open the personal info tab by default
    };
    
    document.querySelector(".close").onclick = function() {
        document.getElementById("profile-modal").style.display = "none";
    };
    
    function openTab(evt, tabName) {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        const tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    document.getElementById("save-profile").onclick = function() {
        const fullName = document.getElementById("full-name").value;
        const location = document.getElementById("location").value;
        const dob = document.getElementById("dob").value;
        const height = document.getElementById("height-input").value;
        const weight = document.getElementById("weight-input").value;
    
        const steps = document.getElementById("steps-input").value;
        const running = document.getElementById("running-input").value;
        const sleep = document.getElementById("sleep-input").value;
        const targetWeight = document.getElementById("target-weight-input").value;
        const water = document.getElementById("water-input").value;
    
        // Update the profile information on the dashboard
        document.getElementById("weight").innerText = weight;
        document.getElementById("height").innerText = height;
        // Assuming age calculation from dob
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        document.getElementById("age").innerText = age;
        document.getElementById("steps").innerText = steps;
        document.getElementById("running").innerText = running;
        document.getElementById("target-weight").innerText = targetWeight;
    
        // Calculate completion percentage
        let percentage = 0;
        percentage += fullName ? 10 : 0;
        percentage += location ? 10 : 0;
        percentage += dob ? 10 : 0;
        percentage += height ? 10 : 0;
        percentage += weight ? 10 : 0;
        percentage += steps ? 10 : 0;
        percentage += running ? 10 : 0;
        percentage += sleep ? 10 : 0;
        percentage += targetWeight ? 10 : 0;
        percentage += water ? 10 : 0;
    
        document.getElementById("profile-completion").innerText = percentage + "% your Profile set";
    
        // Simulate saving to a database
        // Here, you would make an AJAX call to save this data using PHP and MySQL
        // For example:
        /*
        const data = {
            fullName,
            location,
            dob,
            height,
            weight,
            steps,
            running,
            sleep,
            targetWeight,
            water
        };
    
        fetch('save_profile.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                console.log('Profile saved');
            }
        });
        */
    
        document.getElementById("profile-modal").style.display = "none";
    };
    
    // Sign-out button functionality
    document.getElementById("sign-out").onclick = function() {
        alert("You have signed out!");
        // Implement sign-out logic
    };


    async function fetchUserData() {
        try {
            const response = await fetch('http://localhost/dashboard.php');
            const user = await response.json();

            // Populate the dashboard
            document.querySelector('.steps p').textContent = `${user.steps} Steps`;
            document.querySelector('.water p').textContent = `${user.water} Liters`;
            document.querySelector('.calories p').textContent = `${user.calories} Today`;
            document.querySelector('.heart-rate p').textContent = `${user.heart_rate} bpm`;
            document.querySelector('.profile-stats').innerHTML = `
                <p>${user.profile_completion}% Profile Complete</p>
                <p>Weight: ${user.weight}kg</p>
                <p>Height: ${user.height}</p>
                <p>Age: ${user.age}</p>`;
            document.querySelector('.goals').innerHTML = `
                <h3>Your Goals</h3>
                <p>Running: ${user.running_goal}km</p>
                <p>Sleeping: ${user.sleeping_goal}hrs</p>
                <p>Weight Loss Target: ${user.weight_loss_target}kg</p>`;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    // Fetch data on page load
    fetchUserData();



    document.addEventListener('DOMContentLoaded', function () {
        const subscribeButton = document.querySelector('.subscribe');

        subscribeButton.addEventListener('click', function () {
            alert('Thank you for subscribing! Your subscription is now active.');
        });
    });