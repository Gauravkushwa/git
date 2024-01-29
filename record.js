// fill in javascript code here
let form = document.querySelector('form');
let name = document.getElementById('name');
let employeeID = document.getElementById('employeeID');
let department = document.getElementById('department');
let exp = document.getElementById('exp');
let email = document.getElementById('email');
let mbl = document.getElementById('mbl');
let tboday = document.querySelector('tbody');
Allelement = [];
form.addEventListener('submit', function(e)
{
    e.preventDefault();
    let array = {};
    array.name = name.value;
    array.employeeID = employeeID.value;
    array.department = department.value;
    array.exp = exp.value;
    array.email = email.value;
    array.mbl = mbl.value;
    Allelement.push(array);
    tboday.innerHTML = null;
    console.log(Allelement)
    Allelement.map((ele)=>
    {
        let row = document.createElement('tr');
        let inp1 = document.createElement('td');
        let inp2 = document.createElement('td');
        let inp3 = document.createElement('td');
        let inp4 = document.createElement('td');
        let inp5 = document.createElement('td');
        let inp6 = document.createElement('td');
        let inp7 = document.createElement('td');
        let inp8 = document.createElement('button');
        
        
        inp1.innerHTML = ele.name;
        inp2.innerHTML = ele.employeeID;
        inp3.innerHTML = ele.department;
        inp4.innerHTML = ele.exp;
        inp5.innerHTML = ele.email;
        inp6.innerHTML = ele.mbl;
        inp7.innerHTML = ele.exp;
        if(inp7.innerHTML > '5'){
            inp7.innerHTML = 'Senior'
        }
        else if( '2'<=inp7.innerHTML <='5' ){
            inp7.innerHTML = 'Junior'
        }
        else{
            inp7.innerHTML = 'Fresher';
        }
        inp8.innerHTML = 'Delete';
        inp8.addEventListener('click',function()
        {
            row.innerHTML = null;
        })
        row.append(inp1, inp2,inp3,inp4,inp5,inp6,inp7,inp8);
        
        tboday.append(row)
    })
})