// Navbar component-----------------------------
const navbarTemplate = document.createElement('Template')
navbarTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="/assets/fonts/themify-icons/themify-icons.css">
<script src="https://kit.fontawesome.com/04bc621e57.js" crossorigin="anonymous"></script>
<style>
li {
  list-style: none;
}
a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
}
img {
  height: 30px;
  width: 30px;
}
.navbar {
  width: 240px;
  background-color: rgb(54, 55, 64);
  height: 100%;
}
.navbar-nav {
  width: 100%;
  border-bottom: 1px solid rgb(92, 90, 90);
}
.nav-logo {
  height: 80px;
  margin-top: 23px;
  width: 100%;
}
.nav-item {
  margin-top: 10px;
  padding-left: 40px;
}
.nav-item:hover {
  background-image: linear-gradient(rgb(236, 247, 246,0.5),rgb(236, 247, 246,0.5));
}
.nav-item i {
  margin-right: 10px;
}

</style>
<nav class="navbar d-flex flex-column justify-content-start">
<div class="nav-logo text-white d-flex justify-content-around">
  <div>
    <img src="/assets/image/conan.png" alt="">
    RalliP Smart
  </div>
  
</div>

<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link text-white" href="http://127.0.0.1:5500/Overview/overview.html">
      <i class="ti-pie-chart"></i>
      Overview
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="http://127.0.0.1:5500/Requests/request.html">
      <i class="ti-comments"></i>
      Requests</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="http://127.0.0.1:5500/gateway/gateway.html">
      <i class="ti-light-bulb"></i>
      Gateway</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="http://127.0.0.1:5500/user/user.html">
      <i class="ti-id-badge"></i>
      Users
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="http://127.0.0.1:5500/SettingP/setting.html">
      <i class="ti-user"></i>
      Setting
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">
      <i class="ti-settings"></i>Subscription
    </a>
  </li>
</ul>              
</nav>
<script>
  
</script>
`;

class Navbar extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
       const shadowRoot = this.attachShadow({mode:'closed'});
       shadowRoot.appendChild(navbarTemplate.content); 
    }
}
customElements.define('nav-component',Navbar);

/*Inform tab component*/ 
const informTemplate = document.createElement('Template')
informTemplate.innerHTML =`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="/assets/fonts/themify-icons/themify-icons.css">
<script src="https://kit.fontawesome.com/04bc621e57.js" crossorigin="anonymous"></script>

<style>
.inform-tab {
  height: 30px;
  margin-top: 10px;
}
.inform-text {
  font-weight: 600;
  font-size: 18px;
}
.inform-tab form {
  margin-left: 600px;
}
.inform-tab input {
  border: none;
  outline: none;
  text-align: end;
}
.inform-text form {
  display: flex;
  flex-direction: row;
}
img {
  width: 40px;
  height: 40px;
  justify-content: space-around;
}
img:hover {
  opacity: 0.6;
}
.icon {
  padding-top: 7px;
  margin-left: 20px;
}
.inform-name {
  padding-left: 10px;
  border-left: 1px solid rgb(203, 198, 198);
  height: 30px;
  font-weight: 400;
}

</style>

<div class="inform-tab d-flex justify-content-between">
  <p class="inform-text" style="height: 30px;">Overview</p>
  <form action="" class="d-flex">
    <input class="form-control" type="text" placeholder="search">
    <i class="ti-search icon"></i>
    <i class="ti-bell icon"></i>
  </form>               
  <p class="inform-name" style="font-size: 15px;">Nguyen Tien Thanh
  <img class="rounded-pill" src="/assets/image/conan.png" alt="">
  </p>
</div>
<script>
function turnOn() {
  const edit = document.querySelector('.tool-log');
  edit.classList.add(".tool-on");
}
</script>
`;

class Inform extends HTMLElement {
  constructor() {
      super()
  }
  connectedCallback() {
     const shadowRoot = this.attachShadow({mode:'closed'});
     shadowRoot.appendChild(informTemplate.content); 
  }
}
customElements.define('inform-tab', Inform);
