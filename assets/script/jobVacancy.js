let endPoint = `https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/`;
let jobs_endPoint = `${endPoint}jobs`;
let users_endPoint = `${endPoint}users`;

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
        <div id="name-company"><h6>${item.company}</h6></div>
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
    <div id="icon-save"><i class="bx bx-bookmark"></i></div>
    
  </div>
  `;
    recomjobElement.appendChild(jobParent);
  }

  jobs.forEach((jobRecommendation) => {
    createJobCard(jobRecommendation);
  });
}
recomJobs();
//--------------------------------------------------------- end recommendation setting

//--------------------------------------------------------- start search setting

let searchQuery = document.getElementById("input-search");

function removeAllChild() {
  while (recomjobElement.lastChild) {
    recomjobElement.removeChild(recomjobElement.lastChild);
  }
}

searchQuery.addEventListener("change", (nilai) => {
  removeAllChild();
  searchJob(nilai.target.value);
});

async function searchJob(keyword) {
  let resp = await fetch(jobs_endPoint.replace("searchQuery", keyword));
  let jobSearch = await resp.json();
  // console.log(jobSearch);

  jobSearch.forEach((data) => {
    recomJobs(data);
  });
  console.log(jobSearch);
  return jobSearch;
}

// let searchKerja = async (keyword) => {
//   let resp = await fetch(jobs_endPoint.replace("searchQuery", keyword));
//   let result = await resp.json();

//   // console.log(result);

//   let hasilSearch = [];
//   result.forEach((item) => {
//     if (item.jobName.includes(`${searchQuery.value}`)) {
//       hasilSearch.push(item);
//     }
//   });
//   console.log(hasilSearch);
//   return result;
// };

//--------------------------------------------------------- end recommendation setting
