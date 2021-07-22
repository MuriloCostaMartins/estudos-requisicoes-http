const api = 'http://localhost:3333/info/'

/**
 * GET      ->    /info
 * POST     ->    /info
 * PUT      ->    /info/${id}
 * DELETE   ->    /info/${id}
 * PATCH    ->    /info/${id}
 */


// Method GET
const methodGet = () => {
    // Code Block
    var xhr = new XMLHttpRequest();
    xhr.open("GET", api);

    // xhr.setRequestHeader("Authorization", "Bearer secrettoken");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        // console.log(xhr.responseText);
        const responseApi = JSON.parse(xhr.responseText);
        
        // innerHTML
        if(responseApi.length === 0) {
            $(document).ready(() => {
                const noResultsFoundImage = "https://i.kym-cdn.com/photos/images/original/001/157/196/bcf.gif"
                const image = `
                    <img 
                        src="${noResultsFoundImage}" 
                        alt="no results found"
                        width="200"
                    >`;
        
                $("#no_items").append(image);
            })
        } else {
            responseApi.forEach((element, i) => {
                $(document).ready(() => {
                    
                    const test = `
                    <div class="card">
                        <h3>${element.title}</h3>
                        <p>${element.describe}</p>
                        <h5>${element.tag}</h5>
                        <button onclick="methodDelete(${element.id})">Delete</button>
                    </div>
                    `;
                
                    $("#content").append(test);
        
                });  
            });
        }
    }};

    xhr.send();
}

// Method POST
const methodPost = () => {
    // Code Block

    // get inputs from forms
    var titleApi = document.getElementById('title').value;
    var describeApi = document.getElementById('describe').value;
    var tagApi = document.getElementById('tag').value;

    // send inputs from form to api
    var xhr = new XMLHttpRequest();
    xhr.open("POST", api);

    // xhr.setRequestHeader("Authorization", "Bearer secrettoken");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    var data = `{
    "title": "${titleApi}",
    "describe": "${describeApi}",
    "tag": "${tagApi}"
    }`;

    xhr.send(data);

    return location.reload();
}

// Method PUT
const methodPut = () => {
    // Code Block
    var id = Number(document.getElementById('id-number').value);
    var titleApi = document.getElementById('titlePut').value;
    var describeApi = document.getElementById('describePut').value;
    var tagApi = document.getElementById('tagPut').value;

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", api + id);

    //xhr.setRequestHeader("Authorization", "Bearer dsdassd");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    var data = `{
        "title": "${titleApi}",
        "describe": "${describeApi}",
        "tag": "${tagApi}"
    }`;

    xhr.send(data);

    return location.reload();
}

// Method DELETE
const methodDelete = (id) => {
    // Code Block
    // get id to delete
    //var id = Number(document.getElementById('id').value);

    var deleteId = api + id;

    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", deleteId);

    // xhr.setRequestHeader("Authorization", "Bearer secrettoken");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    xhr.send();
    return location.reload();
}

// Method PATCH
const methodPatch = (id) => {
    // Code Block
    return alert('Edited')
}