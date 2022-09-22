var number;
const myApi = 'http://112.137.129.232:3701/api/users/';
function editGateway(value) {
    const edit = document.querySelector('.edit-gateway');
    edit.classList.add("edit-turn");
    number = value;
}

function changeData(string) {
  
  if (string === 'btn-primary'){
    getId(number);
    deleteRow();
    hiddenEdit();
  }
  
  else hiddenEdit();
}
function deleteRow() {
  const dataTable = document.querySelectorAll('tr.column-table');
  dataTable[number].innerHTML='';
}
// 
function deleteUser(id) {
  var options = {
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json'
    }
  };
  fetch(myApi + '/' + id, options)
  .then(function(response) {
    response.json();
  })
  .catch(console.log('this is a default row, have not Id'))
}
function hiddenEdit() {
    const edit = document.querySelector('.edit-gateway');
    edit.classList.remove("edit-turn");
}
function hiddenTool() {
  const edit = document.querySelector('.tool-log');
  edit.style = 'display:none';
}
function turnOn(){
  const edit = document.querySelector('.tool-log');
  edit.style = 'display:block';
}

// ----Start--------------------------------------------------
function start(){
  fetch(myApi)
    .then((responsive) => responsive.json())
    .then((data) => {
      const dataGet = data.body.results;
      const dataTable = document.querySelectorAll('tr.column-table');
      for (var i = 0; i < 8; i++)

          {
            var role;
            if (dataGet[i].role ===0) role = 'Super Admin';
            if (dataGet[i].role ===1) role = 'Project Admin';
            if (dataGet[i].role ===2) role = 'User';
            dataTable[i].innerHTML = `
            <tr class="column-table">
                
            <td class="row-table d-flex">
              <img class="rounded-pill avatar-img" src="/assets/image/conan.png" alt="">
              <ul>
                <li class="bold-text name">${dataGet[i].name}</li>
              </ul>          
            </td>
            <td><p class="rows">${dataGet[i].currentFarm}</p></td>
            <td><p class="rows">${dataGet[i].greenhouseId}</p></td>
            <td><b>${role}</b></td>
            <td>
              <div class="icons">
                  <i class="fa-solid fa-pen-to-square"onclick="construction(${i})"></i>
                  <i class="fa-solid fa-trash-can" onclick="editGateway(${i})"></i>
              </div>
            </td>
            </tr>
            `           
          }
  });
}
start();
// ----------------------------------------------------
var numberName;

function cancel() {
  const edit = document.querySelector('.edit-api');
  edit.classList.remove("edit-name");
}
function construction(count) {
  const edit = document.querySelector('.edit-api');
  edit.classList.add("edit-name");
  numberName = count;
}

function submitNewData() {
  const names = document.querySelector('input[name="name"]').value;
  let obj = {
    name:names,
    username:names + numberName,
    password:names+123,
  }
  deleteById(numberName);
  postData(obj);
  AutoRefresh(500);
}
function postData(obj) {
  fetch(myApi,{
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  .then((response)=>response.json())
  .then((data)=>console.log(data))
}
function deleteById(value) {
  fetch(myApi)
    .then((responsive) => responsive.json())
    .then((data) => {
    
    const dataGet = data.body.results;
    myDelete = dataGet[value].id;
    deleteUser(myDelete);
    })
}
function AutoRefresh( t ) {
  setTimeout("location.reload(true);", t);
}

