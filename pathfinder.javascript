/* JavaScript File (script.js) */
function uploadResume() {
    alert("Resume uploaded successfully!");
}
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
}
