let editDiv;
let btnIncomeClick=()=>{
    if(btnincome.innerHTML=="Insert Income"){
        addIncome();
    }else{
        updateIncome();
    }
}
let btnExpenseClick=()=>{
    if(btnexpense.innerHTML=="Insert Expense"){
        addExpense();
    }else{
        updateExpense();
    }
}
let addIncome=()=>{
    let name=incomename.value;
    let amt=+incomeamount.value;
    let date=incomedate.value;

    let outDiv=document.createElement("div");
    outDiv.classList.add("row","data");

    let nDiv=document.createElement("div");
    nDiv.innerHTML=name;

    let dDiv=document.createElement("div");
    dDiv.innerHTML=date;

    let aDiv=document.createElement("div");
    aDiv.innerHTML=amt;

    let btnDiv=document.createElement("div");
    btnDiv.innerHTML="<button onclick='editIncome(this);'><i class='fa-solid fa-pen-to-square'></i></button>";
    btnDiv.innerHTML+="<button onclick='delIncome(this);'><i class='fa-solid fa-trash-can'></i></button>";

    outDiv.appendChild(nDiv);
    outDiv.appendChild(dDiv);
    outDiv.appendChild(aDiv);
    outDiv.appendChild(btnDiv);
    allincome.appendChild(outDiv);

    //sum to itotal
    let itvalue=+itotal.innerHTML;
    itvalue+=amt;
    itotal.innerHTML=itvalue;

    //sum to balance
    let bv=+balance.innerHTML;
    bv+=amt;
    balance.innerHTML=bv;

    //income value
    incomename.value="";
    incomeamount.value="";
    incomedate.value="";
}
let updateIncome=()=>{
    alert("Successfully Update");
    let name=incomename.value;
    let amt=+incomeamount.value;
    let date=incomedate.value;

    let arr=editDiv.children;
    let oldamt=+arr[2].innerHTML;
    let itvalue=itotal.innerHTML;
    itvalue-=oldamt;
    itvalue+=amt;
    itotal.innerHTML=itvalue;

    let bv=+balance.innerHTML;
    bv-=oldamt;
    bv+=amt;
    balance.innerHTML=bv;
    

    arr[0].innerHTML=name;
    arr[1].innerHTML=date;
    arr[2].innerHTML=amt;

    incomename.value="";
    incomeamount.value="";
    incomedate.value="";
}
let updateExpense=()=>{
    alert("Successfully Update");
    let name=expensename.value;
    let amt=+expenseamount.value;
    let date=expensedate.value;

    let arr=editDiv.children;
    let oldamt=+arr[2].innerHTML;
    let etvalue=etotal.innerHTML;
    etvalue-=oldamt;
    etvalue+=amt;
    etotal.innerHTML=etvalue;

    let bv=+balance.innerHTML;
    bv-=oldamt;
    bv-=amt;
    balance.innerHTML=bv;
    

    arr[0].innerHTML=name;
    arr[1].innerHTML=date;
    arr[2].innerHTML=amt;

    expensename.value="";
    expenseamount.value="";
    expensedate.value="";
    btnexpense.innerHTML="Insert Expense";
}
let addExpense=()=>{
    let name=expensename.value;
    let amt=+expenseamount.value;
    let date=expensedate.value;

    let outDiv=document.createElement("div");
    outDiv.classList.add("row","data");

    let nDiv=document.createElement("div");
    nDiv.innerHTML=name;

    let dDiv=document.createElement("div");
    dDiv.innerHTML=date;

    let aDiv=document.createElement("div");
    aDiv.innerHTML=amt;

    let btnDiv=document.createElement("div");
    btnDiv.innerHTML="<button onclick='editbtnExpense(this);'><i class='fa-solid fa-pen-to-square'></i></button>";
    btnDiv.innerHTML+="<button onclick='delbtnExpense(this);'><i class='fa-solid fa-trash-can'></i></button>";

    outDiv.appendChild(nDiv);
    outDiv.appendChild(dDiv);
    outDiv.appendChild(aDiv);
    outDiv.appendChild(btnDiv);
    allexpense.appendChild(outDiv);

    //sum to itotal
    let etvalue=+etotal.innerHTML;
    etvalue+=amt;
    etotal.innerHTML=etvalue;

    //sum to balance
    let bv=+balance.innerHTML;
    bv-=amt;
    balance.innerHTML=bv;

    //income value
    expensename.value="";
    expenseamount.value="";
    expensedate.value="";
}
let delIncome=(btn)=>{
    let outDiv=btn.parentNode.parentNode;
    let arr=outDiv.children;
    let amt=+arr[2].innerHTML;

    let itvalue=+itotal.innerHTML;
    itvalue-=amt;
    itotal.innerHTML=itvalue;

    let bv=+balance.innerHTML;
    bv-=amt;
    balance.innerHTML=bv;

    allincome.removeChild(outDiv);
}
let editIncome=(btn)=>{
    let outDiv=btn.parentNode.parentNode;
    editDiv=outDiv;
    let arr=outDiv.children;

    let n=arr[0].innerHTML;
    let d=arr[1].innerHTML;
    let amt=+arr[2].innerHTML;

    incomename.value=n;
    incomedate.type=Text;
    incomedate.value=d;
    incomeamount.value=amt;

    btnincome.innerHTML="Update";
}
let delbtnExpense=(btn)=>{
    let outDiv=btn.parentNode.parentNode;
    let arr=outDiv.children;
    let amt=+arr[2].innerHTML;

    let etvalue=+etotal.innerHTML;
    etvalue-=amt;
    etotal.innerHTML=etvalue;

    let bv=+balance.innerHTML;
    bv+=amt;
    balance.innerHTML=bv;

    allexpense.removeChild(outDiv);
}

let editbtnExpense=(btn)=>{
    let outDiv=btn.parentNode.parentNode;
    editDiv=outDiv;
    let arr=outDiv.children;

    let n=arr[0].innerHTML;
    let d=arr[1].innerHTML;
    let amt=+arr[2].innerHTML;

    expensename.value=n;
    expensedate.type=Text;
    expensedate.value=d;
    expenseamount.value=amt;

    btnexpense.innerHTML="Update";
}