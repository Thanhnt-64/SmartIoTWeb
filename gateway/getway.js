function hiddenTool() {
    const edit = document.querySelector('.tool-log');
    edit.style = 'display:none';
}
function turnOn(){
    const edit = document.querySelector('.tool-log');
    edit.style = 'display:block';
}
function displaySearchBar() {
  const myDisplay = document.querySelector('.displaySearch');
  myDisplay.style = 'display:block';
}
function hiddenSearchBar() {
  const myDisplay = document.querySelector('.displaySearch');
  myDisplay.style = 'display:none';
}
//Get data and upload table
const myApi = 'http://112.137.129.232:3701/api/greenhouses/';
function start() {
  getData(uploadData);
}
start();
function getData(callback) {
  fetch(myApi)
  .then((response)=>response.json())
  .then((data)=>{
    callback(data.body);
  })
}
function uploadData(value) {
  const dataTable = document.querySelectorAll('.column-table');
  let value_final;
  let active;
  let className;
  for (let i =0; i < 8; i++)
  {
    if(i%2 === 0){
      value_final = value.results[0];
    }
    else {
      value_final = value.results[1];
    }
    if (value_final.active ===true) 
    {
      active = "Online";
      className = "btn-success";
    }
    else
    {
      active = "Offline";
      className = "btn-danger";
    }
    dataTable[i].innerHTML = `
        <tr class="column-table">
          <td></td>
          <td class="row-table d-flex">
            <img class="rounded-pill avatar-img" src="/assets/image/conan.png" alt="">
            <ul>
              <li class="bold-text">${value_final.name}</li>
              <li class="opacity-text">Update at:${value_final.updatedAt}</li>
            </ul>          
          </td>
          <td><p class="rows">${value_final.farmId}</p></td>
          <td><p class="rows">${value_final.mac}</p></td>
          <td> 
            <div class="row-time">
              <li class="bold-text">${"1.1.1"}</li>   
            </div>
          </td>
          <td>
            <button type="button" class="btn-radius btn ${className}">${active}</button>
          </td>
          <td>
            <div class="row-add">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </td>
        </tr>
        `;
  }
}
  

function postData() {
  
  const mac = document.querySelector('.mac').value;
  const names = document.querySelector('.name').value;
  const myAnnouce = document.querySelector('.annouce');
  let obj = { 
    mac: ''+mac,
    name:''+names,
  }
  const myCheckApi =`http://112.137.129.232:3701/api/greenhouses?mac=${obj.mac}&name=${obj.name}`;
  fetch(myCheckApi)
  .then((response)=>response.json())
  .then((data)=>{
    if (data.body.results ==='') console('biến');
    myAnnouce.innerHTML = data.message;
  })
}

