/***********expenses total ammount****************/
function expensesAmmount(){
     // expenses input tages
     const foodInput=document.getElementById('food-input');
     const rentInput=document.getElementById('rent-input');
     const clothesInput=document.getElementById('clothes-input');
     const foodAmmount=parseInt(foodInput.value);
     const rentAmmount=parseInt(rentInput.value);
     const clothesAmmount=parseInt(clothesInput.value);
    
     //error handling
     if(foodAmmount>0 && typeof foodAmmount=='number' && rentAmmount>0 && typeof rentAmmount=='number' && clothesAmmount>0 && typeof clothesAmmount=='number'){

        // expenses total ammount
        const totalExpenses=foodAmmount+rentAmmount+clothesAmmount;
        // subtraction function call
        subtraction('income-input', totalExpenses, 'balance')
     }else{
         alert('Sorry, your value is incorrect. Type the number:')
     }
           
}

// subtraction
function subtraction(incomeBalanceInput, expenses,amountId){
    const incomeInput=document.getElementById(incomeBalanceInput).value;  
     //error handling
     if(expenses>parseInt(incomeInput)){
         alert('You do not have enough money to spend')
     }
    else if(parseInt(incomeInput)>0 && typeof parseInt(incomeInput)=='number'){
        const totalBalance=parseInt(incomeInput)-expenses;
        document.getElementById(amountId).innerText=totalBalance;
        document.getElementById('total-expenses').innerText=expenses;
    }else{
        alert('Sorry, your value is incorrect. Type the number:') 
    }
   
}



/*********************Calculate button code********************/
document.getElementById('Calculate-btn').addEventListener('click', function(){
expensesAmmount();
})

/************************save button code***************************/
document.getElementById('save-btn').addEventListener('click', function(){
    const incomeInput=document.getElementById('income-input');
    const savingInput=document.getElementById('saving-input');

    const savingAmount=(parseFloat(incomeInput.value)*parseFloat(savingInput.value))/100;
    const balance=document.getElementById('balance').innerText;

    //error handling
    if(parseInt(balance)>savingAmount){
        document.getElementById('saving-amount').innerText=savingAmount;
        document.getElementById('remaining-balance').innerText=parseFloat(balance)-savingAmount;
    }else{
        alert('You do not have enough money to save')
    }
 
});



