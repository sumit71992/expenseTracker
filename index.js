let amount = document.querySelector("#expense_input");
let desc = document.getElementById("description_input");
let cat = document.getElementById("category_input");
let btn = document.getElementById('btn');
let ul = document.querySelector('.lists');


//Add Expense
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let obj1={
        amount: amount.value,
        description: desc.value,
        category: cat.value
    }
    let obj = JSON.stringify(obj1);
let li = document.createElement('li');
li.className='li';
li.id=String(localStorage.length);
li.appendChild(document.createTextNode(amount.value+" "+"-"+" "+desc.value+" "+"-"+" "+"On"+" "+cat.value+" "));
let del= document.createElement('button');
let edit = document.createElement('button');
del.className = 'btn btn-secondary p-0 del';
edit.className = 'btn btn-secondary p-0 edit';
del.appendChild(document.createTextNode('Delete Expense'));
edit.appendChild(document.createTextNode('Edit Expense'));
li.appendChild(del);
li.appendChild(edit);
ul.appendChild(li);

localStorage.setItem(localStorage.length,obj);
});
//remove expense
ul.addEventListener('click',(e)=>{
   if(e.target.classList.contains('del')){
    ul.removeChild(e.target.parentElement);
    localStorage.removeItem(Number(e.target.parentElement.id))
   }
})
//edit expense
ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('edit')){
        ul.removeChild(e.target.parentElement);
        
        amount.value = Number(e.target.parentElement.innerText.split("-")[0]);
        desc.value= e.target.parentElement.innerText.split("-")[1];
        let txt =e.target.parentElement.innerText.split("-")[2];
        txt=txt.split("\n")[0].split(" ")[2]
        console.log(txt);
        cat.value = txt;
    }
})