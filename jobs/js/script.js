// import trendingJobs from './utils/mock.js';

// document.addEventListener("DOMContentLoaded", function () {
//     fetchTrendingJobs();
// });

// function fetchTrendingJobs() {
//     const jobList = document.getElementById("jobList");
//     jobList.innerHTML = "";

//     trendingJobs.forEach(job => {
//         const jobCard = document.createElement("div");
//         jobCard.classList.add("job-card");
//         jobCard.innerHTML = `
//             <h3>${job.jobTitle}</h3>
//             <p>Company: ${job.companyName}</p>
//             <p>Skill Match: ${job.skillMatchPercent}%</p>
//             <p>Reliability: ${job.companyReliabilityScore}%</p>
//             <p>${job.feedback}</p>
//         `;
//         jobList.appendChild(jobCard);
//     });
// }

import trendingJobs from "../utils/mock.js";

document.addEventListener("DOMContentLoaded", function () {
  fetchTrendingJobs();
});

function fetchTrendingJobs() {
  const jobList = document.getElementById("jobList");
  if (!jobList) return;

  jobList.innerHTML = "";

  // Display only 4 jobs on the homepage
  trendingJobs.slice(0, 4).forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
            <h3>${job.jobTitle}</h3>
            <p><strong>Company:</strong> ${job.companyName}</p>
            <p><strong>Skill Match:</strong> ${job.skillMatchPercent}%</p>
            <p><strong>Reliability:</strong> ${job.companyReliabilityScore}%</p>
            <p>${job.feedback}</p>
        `;
    jobList.appendChild(jobCard);
  });

  // Show "View More Jobs" button only if there are more than 4 jobs
  const viewMoreButton = document.querySelector(".view-more");
  viewMoreButton.style.display = trendingJobs.length > 4 ? "block" : "none";
}

function viewMoreJobs() {
  window.location.href = "/trending-jobs";
}

// Attach event listener to the "View More Jobs" button
document.querySelector(".view-more").addEventListener("click", viewMoreJobs);
