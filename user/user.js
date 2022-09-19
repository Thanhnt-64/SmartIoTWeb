function editGateway() {
    const edit = document.querySelector('.edit-gateway');
    edit.classList.add("edit-turn")
}
function hiddenEdit() {
    const edit = document.querySelector('.edit-gateway');
    edit.classList.remove("edit-turn")
}
const myApi = 'http://112.137.129.232:3701/api/users/';
fetch(myApi)
.then((responsive) => responsive.json())
.then((data) => {
    const dataGet = data.body.results;
    // dataGet[i]:obj
    console.log(dataGet)
    const dataTable = document.querySelectorAll('.column-table img')
    
    (dataTable[1].currentSrc)
})
