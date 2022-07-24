const projects = [
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized readsno accounts or sign ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './assets/images/Img-Placeholder.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    livedemo: 'https://gordonotieno.github.io/portfolio-website/',
    sourceCode: 'https://github.com/GordonOtieno/portfolio-website/',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized readsno accounts or sign ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './assets/images/Img-Placeholder.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    livedemo: 'https://gordonotieno.github.io/portfolio-website/',
    sourceCode: 'https://github.com/GordonOtieno/portfolio-website/',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized readsno accounts or sign ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './assets/images/Img-Placeholder.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    livedemo: 'https://gordonotieno.github.io/portfolio-website/',
    sourceCode: 'https://github.com/GordonOtieno/portfolio-website/',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized readsno accounts or sign ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './assets/images/Img-Placeholder.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    livedemo: 'https://gordonotieno.github.io/portfolio-website/',
    sourceCode: 'https://github.com/GordonOtieno/portfolio-website/',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized readsno accounts or sign ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: './assets/images/Img-Placeholder.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    livedemo: 'https://gordonotieno.github.io/portfolio-website/',
    sourceCode: 'https://github.com/GordonOtieno/portfolio-website/',
  },
];

function getProjects(args) {
  let html = '';
  for (let i = 0; i < args.length; i += 1) {
    html += ` <li class="project-list--li" tabindex="0">
   <div class="project-detail">
       <h3 class="project-title">${args[i].name}</h3>
       <p class="project-desc">${args[i].description} </p>
       <ul class="tech-list">
           <li class="skills">${args[i].technologies[0]}</li>
           <li class="skills">${args[i].technologies[1]}</li>
           <li class="skills">${args[i].technologies[2]}</li>
       </ul>
   </div>
       <button role="button" type="button" class="project_list--li__cta" data-toggle="modal" data-target="#myModal">See Project</button>
</li>`;

    document.querySelector('.work-section-container__project--list').innerHTML = html;
  }
}
getProjects(projects);

function displaymodal() {
  let html = '';
  html += ` <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
         <div class="modol-closing">
          <button type="button" class="close" data-dismiss="modal">&times;</button> 
         </div>
        <div class="modal-top-content">
          <h4 class="modal-header-title">Multi Post Stories</h4>
        <div class="modal-body">
          <ul class="tech-list model">
          <li><button type="button">html</button></li>
            <li><button type="button">bootstrap</button></li>
            <li><button type="button">ruby</button></li>
        </ul>
        </div>
        <div class="image-prag-container">
          <div class="project-image">
            <img src="./assets/images/SnapshootPortfolio.svg" alt="SnapshootPortfolio">
          </div>
          <div class="modol-pb-container">
            <div class="modal-info">
              Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
               but also the leap into electronic typesetting, remaining essent
            </div>
            <div class="modal-buttons">
              <button type="button" class="btn btn-default" ><a href="${projects[0].livedemo}">See Live</a><i class="fa fa-external-link" aria-hidden="true"></i></button>
              <button type="button" class="btn btn-default" ><a href="${projects[0].sourceCode}">See Source</a><i class="fa fa-github" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      
    </div>
  </div>`;
  document.querySelector('.container').innerHTML = html;
}
displaymodal();
