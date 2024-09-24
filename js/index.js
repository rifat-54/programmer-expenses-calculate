
function inputValueById(id){
    const value=parseFloat(document.getElementById(id).value);
    return value;
}

function showError(id)
{
    document.getElementById(id).classList.remove('hidden');
}

function formetcurrency(amount)
{
    return `${amount.toFixed(2)}`;
}

function historyAdd(income,totalExpence,newBalance)
{
     // added history

     const div=document.createElement('div');
     div.classList='bg-white p-3 rounded-md'
     div.innerHTML=`
     <p>${new Date().toLocaleDateString()}</p>
             <p class="text-xs text-gray-500">Income: $${income} </p>
             <p class="text-xs text-gray-500">Expense: $${totalExpence} </p>
             <p class="text-xs text-gray-500">Balance: $${newBalance}</p>
     
     `
 
     // where add
 
     const historyContaier=document.getElementById('history-list');
     historyContaier.insertBefore(div,historyContaier.firstChild);
 
}


// calculate balance
const calculate=document.getElementById('calculate');

calculate.addEventListener('click',function(){
    // const income=parseFloat(document.getElementById('income').value);
    const income=inputValueById('income')
    const software=parseFloat(document.getElementById('software').value);
    const courses=parseFloat(document.getElementById('courses').value);
    const internet=parseFloat(document.getElementById('internet').value);
    // console.table({income,software,courses,internet})
    const totalExpence=software+courses+internet;
    const newBalance=income-totalExpence;
    // console.log(totalExpence,newBalance)

    // validation start

   

    if(income<0 || isNaN(income))
    {
        // document.getElementById('income-error').classList.remove('hidden');
        showError('income-error');
        return;
    }

    if(software<0 || isNaN(software))
    {
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }

    if(internet<0 || isNaN(internet))
    {
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }

    if(courses<0 || isNaN(courses))
    {
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }

    
    if(income<totalExpence)
    {
        alert('your income is less then expences');
        return;
    }

    // validation end

    document.getElementById('total-expenses').innerText=
    totalExpence.toFixed(2);
    document.getElementById('balance').innerText=newBalance.toFixed(2);
    const result=document.getElementById('results');
    result.classList.remove('hidden');


    historyAdd(income,totalExpence,newBalance);


    // // added history

    // const div=document.createElement('div');
    // div.classList='bg-white p-3 rounded-md'
    // div.innerHTML=`
    // <p>${new Date().toLocaleDateString()}</p>
    //         <p class="text-xs text-gray-500">Income: $${income} </p>
    //         <p class="text-xs text-gray-500">Expense: $${totalExpence} </p>
    //         <p class="text-xs text-gray-500">Balance: $${newBalance}</p>
    
    // `

    // // where add

    // const historyContaier=document.getElementById('history-list');
    // historyContaier.insertBefore(div,historyContaier.firstChild);

})


// saving button

const calculateSaving=document.getElementById('calculate-savings');
calculateSaving.addEventListener('click',function(){
    const saving=parseFloat(document.getElementById('savings').value);
    const income=parseFloat(document.getElementById('income').value);
const software=parseFloat(document.getElementById('software').value);
const courses=parseFloat(document.getElementById('courses').value);
const internet=parseFloat(document.getElementById('internet').value);

    const totalExpence=software+courses+internet;
    const newBalance=income-totalExpence;
    const savingBalance=(newBalance*saving)/100;
    const remaininBalance=newBalance-savingBalance;
    // console.log(savingBalance,remaininBalance)

    // document.getElementById('savings-amount').innerText=savingBalance.toFixed(2);
    document.getElementById('savings-amount').innerText=formetcurrency(savingBalance);
    document.getElementById('remaining-balance').innerText=remaininBalance.toFixed(2);

   
})


// history button
const history=document.getElementById('history-tab');
history.addEventListener('click',function(){
    history.classList.add(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
    );

    const assistentButton=document.getElementById('assistant-tab');
    assistentButton.classList.remove(
        'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
    );

    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('expense-form').classList.add('hidden');
})

// assistent button

document.getElementById('assistant-tab')
.addEventListener('click',function(){
    history.classList.remove(
        'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
        );


        const assistentButton=document.getElementById('assistant-tab');
        assistentButton.classList.add(
            'text-white',
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600'
        );


        document.getElementById('history-section').classList.add('hidden');
        document.getElementById('expense-form').classList.remove('hidden');

        
})

// live validation

// document.getElementById('income').addEventListener('input',function(){
//     const income=parseFloat(document.getElementById('income').value);
//     if(income<0 || isNaN(income))
//     {
//         document.getElementById('income-error').classList.remove('hidden');
        
//     }

// })