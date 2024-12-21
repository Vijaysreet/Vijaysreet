document.addEventListener('DOMContentLoaded', function () {
    const subscribeButton = document.querySelector('.subscribe');

    subscribeButton.addEventListener('click', function () {
        alert('Thank you for subscribing! Your subscription is now active.');
    });
});
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
                <h1>Good Morning</h1><br>
                <h2>Welcome Back 🎉</h2>
                <button class="subscribe">Subscribe</button>
            </header>
            <section class="stats">
                <div class="card_steps">
                    <h3>Steps</h3>
                    <p id="profile-completion">0% your goal</p>
                    <p id="goal_step">0 Steps</p>
                </div>
                <div class="card_water">
                    <h3>Water</h3>
                    <p id="goal_water">0 litre</p>
                </div>
                <div class="card_calories">
                    <h3>Calories</h3>
                    <p id="goal_calories">0 calories</p>
                    
                </div>
                <div class="card_heart-rate">
                    <h3>Heart Rate</h3>
                    <p id="goal_heart_rate">0 calories</p>
                    
                </div>
            </section>
            
            <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->
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
            
            <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->
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
                <!-- <div class="action"> -->

                    <h3>Recommended Trainer for you</h3>
                    <div class="trainer-cards">
                    <div class="trainer">
                          <div class="trainerimage">  
                          <img src="trainer 1.avif" alt="Trainer"  class="trainer1">
                         

                          </div>
                            <h2>Cameron  </h2>
                            <p class="fit">Fitness Specialist</p>
                           <div class="cards"> <div >
                            <img src="achievements (1).png"  class="achive"/>
                            <h3 >25</h3>
                            </div>
                            <div >
                            <img src="star.png"  class="achive"/>
                            <h3>140</h3>
                            
                            </div>
                            <h4 class="fit">View profile</h4>
                            </div>
                        </div>
                        <div class="trainer">
                          <div class="trainerimage">  
                          <img src="trainer 1.avif" alt="Trainer"  class="trainer1">
                          

                          </div>
                            <h2>Cameron  </h2>
                            <p class="fit">Fitness Specialist</p>
                           <div class="cards"> <div >
                            <img src="achievements (1).png"  class="achive"/>
                            <h3 >25</h3>
                            </div>
                            <div >
                            <img src="star.png"  class="achive"/>
                            <h3>140</h3>
                            
                            </div>
                            <h4 class="fit">View profile</h4>
                            </div>
                        </div>
                        <div class="fast">
                           <div class="break"><h2>Breakfast</h2>
                           <h2> 10:00AM</h2></div>
                           <div class="breakimage">
                           <img src="avaca.jpg"  class="avaca">
                           <div>
                           <h2>Avacado salad</h2>
                           <div class="carbs" >
                          
                           <p><span>.<span>8% Carbs<p></div>
                           </div>
                           </div>
                           

                            </div>
                    </div>
                    
                  
            </section>
                `;
                break;
            case 'steps':
                mainContent.innerHTML = `
                    <h1>Steps Overview</h1>
                    // <canvas id="stepsChart"></canvas>
                `;
                // Reinitialize the steps chart (optional: you may want to update the chart data dynamically)
                updateStepsChart();
                break;
            case 'water':
                mainContent.innerHTML = `
                    <h1>Water Consumption</h1>
                    // <canvas id="waterChart"></canvas>
                `;
                // Reinitialize the water chart
                updateWaterChart();
                break;
            case 'calories':
                mainContent.innerHTML = `
                    <h1>Calories Intake</h1>
                    // <canvas id="caloriesChart"></canvas>
                `;
                // Reinitialize the calories chart
                updateCaloriesChart();
                break;
            case 'heartRate':
                mainContent.innerHTML = `
                    <h1>Heart Rate Data</h1>
                    // <canvas id="heartRateChart"></canvas>
                `;
                // Reinitialize the heart rate chart
                updateHeartRateChart();
                break;
            case 'settings':
                mainContent.innerHTML = `
                    <h1>Settings</h1>
                    // <p>Configure your preferences here.</p>
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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("edit-profile").onclick = function() {
        document.getElementById("profile-modal").style.display = "block";
        openTab(event, 'PersonalInfo'); // Open the personal info tab by default
    };
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".close").onclick = function() {
        document.getElementById("profile-modal").style.display = "none";
    };
});
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
document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save-profile");

    if (saveButton) {
        saveButton.onclick = function() {
            const fullName = document.getElementById("full-name").value;
            const location = document.getElementById("location").value;
            const dob = document.getElementById("dob").value;
            const height = document.getElementById("height-input").value;
            const weight = document.getElementById("weight-input").value;

            // Get goal values
            const steps = document.getElementById("steps-input").value;
            const running = document.getElementById("running-input").value;
            const sleep = document.getElementById("sleep-input").value;
            const targetWeight = document.getElementById("target-weight-input").value;
            const water = document.getElementById("water-input").value;

            // Update DOM with profile details
            document.getElementById("weight").innerText = weight;
            document.getElementById("height").innerText = height;
            document.getElementById("steps").innerText = height;
            document.getElementById("running").innerText = height;
            document.getElementById("target-weight").innerText = height;

            // Calculate age from DOB
            const age = new Date().getFullYear() - new Date(dob).getFullYear();
            document.getElementById("age").innerText = age;

            // Update main content values for steps, water, etc.
            document.getElementById("goal_step").innerText = steps + " Steps";
            document.getElementById("goal_water").innerText = water + " L";
            document.getElementById("goal_calories").innerText = "Calories: " + (steps * 0.04).toFixed(2); // You can adjust this formula based on your system
            document.getElementById("goal_heart_rate").innerText = "Heart Rate: 75 bpm"; // Assuming a default value for heart rate

            // Profile completion percentage calculation
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

            // Send data to the backend (optional)
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
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    console.log("Profile saved successfully.");
                } else {
                    console.error("Failed to save profile.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });

            // Close the modal after saving
            document.getElementById("profile-modal").style.display = "none";
        };
    }
});


// Sign-out button functionality
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sign-out").onclick = function() {
        alert("You have signed out!");
        // Implement sign-out logic here
    };
});

