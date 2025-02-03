// Handle resume upload
function uploadResume() {
    alert("Resume uploaded successfully!");
}

/*//Handle job search and display featured jobs
function searchJobs() {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";
    const jobs = [
        { title: "Software Engineer", company: "Google", location: "Mountain View, CA", salary: "$120k - $150k" },
        { title: "Web Developer", company: "Facebook", location: "Menlo Park, CA", salary: "$110k - $140k" }
    ];
    jobs.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job-card");
        jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.company} | ${job.location}</p><p>${job.salary}</p>`;
        jobList.appendChild(jobElement);
    });
}*/
//Handle job search and display featured jobs
function searchJobs() {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = ""; // Clear any existing job listings

    // Sample job data
    const jobs = [
        { title: "Software Engineer", company: "Google", location: "Mountain View, CA", salary: "$120k - $150k" },
        { title: "Web Developer", company: "Facebook", location: "Menlo Park, CA", salary: "$110k - $140k" },
        { title: "Data Scientist", company: "Apple", location: "Cupertino, CA", salary: "$130k - $160k" },
        { title: "Backend Engineer", company: "Amazon", location: "Seattle, WA", salary: "$110k - $145k" }
    ];

    // Fetch search query
    const searchQuery = document.getElementById("jobSearch").value.toLowerCase();

    // Filter jobs based on search query
    const filteredJobs = jobs.filter(job => {
        return (
            job.title.toLowerCase().includes(searchQuery) || 
            job.company.toLowerCase().includes(searchQuery)
        );
    });

    // Display filtered job listings
    filteredJobs.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job-card");
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company} | ${job.location}</p>
            <p>${job.salary}</p>
        `;
        jobList.appendChild(jobElement);
    });

    // If no jobs match the search query, show a message
    if (filteredJobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found matching your search.</p>";
    }
}
