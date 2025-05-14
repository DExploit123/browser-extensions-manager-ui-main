const cardData = [
  { icon: "./assets/images/logo-devlens.svg", status: 'active', title: "DevLens", description: "Quickly inspect page layouts and visualize boundary" },
  { icon: "./assets/images/logo-style-spy.svg", status: 'active', title: "StyleSpy", description: "Instantly analyze and copy CSS from any web page content" },
  { icon: "./assets/images/logo-speed-boost.svg", status: 'inactive', title: "SpeedBoost", description: "Optimizes browser resource usage to accelerate page loading" },
  { icon: "./assets/images/logo-json-wizard.svg", status: 'active', title: "JSONWizard", description: "Format, validates, prettifies JSON responses in browser" },
  {icon: "./assets/images/logo-tab-master-pro.svg", status: 'active', title: "TabMaster Pro", description: "Organizes browser tab into groups and session"},
  { icon: "./assets/images/logo-viewport-buddy.svg", status: 'inactive', title: "ViewportBuddy", description: "Simulate various screen resolutions directly within the browser" },
  {icon: "./assets/images/logo-markup-notes.svg", status: 'active', title: "Markup Notes", description: "Enables annotation and notes directly onto webpages for collaborative debugging"},
  { icon: "./assets/images/logo-grid-guides.svg", status: 'inactive', title: "GridGuides", description: "Overlay customizable grids and alignment guides on any web page" },
  {icon: "./assets/images/logo-palette-picker.svg", status: 'active', title: "Palette Picker", description: "Instantly extract color palettes from the webpage"},
  {icon: "./assets/images/logo-link-checker.svg", status: 'active', title: "LinkChecker", description: "Scan and highlights any broken links on any page"},
  { icon: "./assets/images/logo-dom-snapshot.svg", status: 'inactive', title: "DOM Snapshot", description: "Captures and exports DOM structure quickly" },
  {icon: "./assets/images/logo-console-plus.svg", status: 'active', title: "ConsolePlus", description: "Enhance developer console with advanced filtering and logging"},





];

const container = document.getElementById("card-container");

cardData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
    <div class="card-inner">
      <img src="${data.icon}" alt="${data.title} icon" class='icon'>
      <div class="card-content">
        <h3>${data.title}</h3>
        <p>${data.description}</p><br><br>
        <a href='#' class='nav-link'>Remove</a>
        <label class= 'switch'>
          <input type= 'checkbox'>
          <span class = 'slider round'></span>
        </label>
      </div>
    </div>
    `;

container.appendChild(card);
 

});

function renderCards(filter = 'all'){
  const container = document.getElementById('card-container')
  container.innerHTML = '';

  cardData.forEach(card =>{
    if(filter === 'all' || card.status === filter){
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
      cardDiv.setAttribute('data-status', card.status);

      cardDiv.innerHTML = `
        <div class="card-inner">
      <img src="${card.icon}" alt="${card.title} icon" class='icon'>
      <div class="card-content">
        <h3>${card.title}</h3>
        <p>${card.description}</p><br><br>
        <a href='#' class='nav-link'>Remove</a>
        <label class= 'switch'>
          <input type= 'checkbox'>
          <span class = 'slider round'></span>
        </label>
      </div>
    </div>
        
      `;
  
       container.appendChild(cardDiv)
    }
  })
}

document.querySelectorAll('.nav-link').forEach(btn =>{
  btn.addEventListener('click', () =>{
    document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active')

    const filter = btn.getAttribute('data-filter');
    renderCards(filter);
  });
});

const themeSwitch = document.getElementById('theme-switch');

// Apply saved mode on initial load
if (localStorage.getItem('lightmode') === 'active') {
  document.body.classList.add('lightmode');
} else {
  document.body.classList.remove('lightmode');
}

// Handle toggle
themeSwitch.addEventListener('click', () => {
  const isLightMode = document.body.classList.contains('lightmode');

  if (isLightMode) {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'inactive');
  } else {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
  }
});
