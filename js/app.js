

/***********expenses total ammount****************/
function expensesAmmount(){

    //input tages
    const foodInput=document.getElementById('food-input');
    const rentInput=document.getElementById('rent-input');
    const clothesInput=document.getElementById('clothes-input');

    if(foodInput.value<0 || rentInput.value<0 || clothesInput.value<0){
        return 'Please type the number';
    }
    
    const totalExpenses=parseInt(foodInput.value)+parseInt(rentInput.value)+parseInt(clothesInput.value);
    return totalExpenses;

}

/*********************Calculate button code********************/

document.getElementById('Calculate-btn').addEventListener('click', function(){

    let expenses=expensesAmmount();
    const incomeInput=document.getElementById('income-input').value;
    if(typeof expenses=='number' && expenses>0 && typeof parseInt(incomeInput)=='number' && parseInt(incomeInput)>0){
        document.getElementById('total-expenses').innerText=expenses;
        const balance=parseInt(incomeInput)-expenses;
        document.getElementById('balance').innerText=balance;
    }else{
        alert('Please type the number')
    }
})




/************************save button code***************************/
document.getElementById('save-btn').addEventListener('click', function(){
    const incomeInput=document.getElementById('income-input');
    const savingInput=document.getElementById('saving-input');

    const savingAmount=(parseFloat(incomeInput.value)*parseFloat(savingInput.value))/100;
    document.getElementById('saving-amount').innerText=savingAmount;

    const balance=document.getElementById('balance').innerText;
    document.getElementById('remaining-balance').innerText=parseFloat(balance)-savingAmount;

})