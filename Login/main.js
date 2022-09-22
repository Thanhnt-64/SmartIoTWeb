var myApi = 'http://112.137.129.232:3701/api/auth/login'


function handleCreateForm() {
    let createBtn = document.querySelector('#btn')
    createBtn.onclick = function () {
        let email = document.querySelector('input[name = "email"]').value;
        let password = document.querySelector('input[name="psw"]').value;
        let formData = {
            username: email,
            password: password
        };
        console.log(formData)
        createAccount(formData)
    }
}

function createAccount(myData) {
    fetch(myApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(myData)
    })
    .then((response) =>response.json())
    .then((data) => {
        const announce = document.getElementById('announce');
        if (data.message === "Login successfully"){
            announce.style.display = "none";
            redirectPage();
        }
        else {
            announce.style.display = "block";
            announce.innerHTML = data.message;
        }
    })
}
function redirectPage() {   
    window.location = "http://127.0.0.1:5500/Overview/overview.html";
}



