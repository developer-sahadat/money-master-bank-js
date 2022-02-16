

/***********expenses total ammount****************/
function expenses(){
    const foodInput=document.getElementById('food-input');
    const rentInput=document.getElementById('rent-input');
    const clothesInput=document.getElementById('clothes-input');
    const totalExpenses=parseFloat(foodInput.value)+parseFloat(rentInput.value)+parseFloat(clothesInput.value);

    return totalExpenses;
}






/*********************Calculate button code********************/

document.getElementById('Calculate-btn').addEventListener('click', function(){
    document.getElementById('total-expenses').innerText=expenses();
    const incomeInput=document.getElementById('income-input');
    const balance=parseFloat(incomeInput.value)-expenses();
    document.getElementById('balance').innerText=balance;
})