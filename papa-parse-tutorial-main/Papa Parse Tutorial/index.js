const file_inp = document.getElementById('file_inp');
const upload = document.getElementById('upload');

upload.addEventListener('click',()=>{
    PapaParse(file_inp);
});

//papa parse function

function PapaParse(inp_file){
    let arrayobj = [];
    Papa.parse(
        inp_file.files[0],
        {
            download: true,
            header:true,
            skipEmptyLines:true,
            complete: function(results){
                arrayobj = results.data;
                console.log(arrayobj);
                for(let data in arrayobj){
                    display(arrayobj[data]['FirstName'],arrayobj[data]['LastName'],arrayobj[data]['Developed']);
                }
            }
        }
    );
}

// display function
const tbody = document.getElementById('tbody');
function display(fname, lname, developed){
    let tr = document.createElement('tr');
    tr.innerHTML =   `
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${developed}</td>
    `;
    tbody.appendChild(tr);
}