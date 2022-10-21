let endPoint = `https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/`;
let jobs_endPoint = `${endPoint}jobs`;
let users_endPoint = `https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/users`;

//--------------------------------------------------------- start categories setting

let cardsElement = document.getElementById("cards");

async function cateJobs() {
  let response = await fetch(jobs_endPoint);
  let jobs = await response.json();
  // console.log(jobs);

  function createCard(item) {
    let cardParent = document.createElement("card");
    cardParent.classList.add("card");
    cardParent.innerHTML += `
    <div id="card-cate">
      <div id="name-cate">
        <h4>${item.category}</h4>
      </div>
    </div>
    `;
    cardsElement.appendChild(cardParent);
  }

  jobs.slice(0, 7).forEach((jobCategories) => {
    createCard(jobCategories);
  });
}

cateJobs();
//--------------------------------------------------------- end categories setting

//--------------------------------------------------------- start recommendation setting

let recomjobElement = document.getElementById("recomjob");

async function recomJobs() {
  let response = await fetch(jobs_endPoint);
  let jobs = await response.json();
  // console.log(jobs);

  function createJobCard(item) {
    let jobParent = document.createElement("job");
    jobParent.classList.add("job");
    jobParent.innerHTML += `
  <div id="kiri">
    <div id="icon-job"><i class="bx bxl-facebook-circle"></i></div>
    <div id="details">
      <div id="detail-kiri">
        <div id="h-detail"><h4>${item.jobName}</h4></div>
        <div id="name-job"><h6>${item.company}</h6></div>
        <div id="experience"><h6>${item.employee}</h6></div>
      </div>
      <div id="detail-kanan">
        
      </div>
    </div>
  </div>
  <div id="kanan">
    <a href="jobDetail.html">
      <button id="btn-detail" name="detail" value="detail">view detail</button>
    </a>
    <div id="icon-save"><i class="bx bx-bookmark" style="color: #a776d8"></i></div>
    
  </div>
  `;
    recomjobElement.appendChild(jobParent);
  }

  jobs.slice(0, 9).forEach((jobRecommendation) => {
    createJobCard(jobRecommendation);
  });
}
recomJobs();
//--------------------------------------------------------- end recommendation setting
