let form = document.querySelector('form');
let task = document.getElementById('task');
let priority = document.getElementById('priority');
let button = document.querySelector('tbody');

Alldata = [];

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    data = {};
    data.task = task.value;
    data.priority = priority.value;
    Alldata.push(data);
    button.innerText = "";
    console.log(Alldata)
    Alldata.map((element)=>
    {
        let table = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td1.innerText = element.task;
        td2.innerText = element.priority;
        table.append(td1, td2)
        button.append(table)
    })
})
