


// function updateNumC(incresevalue) {


//     const inputValue = document.getElementById('case');
//     const preValueStr = inputValue.value;
//     const preValue = parseInt(preValueStr);

//     let newValue

//     if (incresevalue === true) {


//         newValue = preValue + 1;
//     } else {
//         newValue = preValue - 1;
//     }
//     inputValue.value = newValue;

//     return newValue;


// }


// function updatePrice(newValue) {
//     const totalPricePhone = newValue * 59;
//     const preCase = document.getElementById('case-value');
//     preCase.innerText = totalPricePhone;

// }





// document.getElementById('btnC-p').addEventListener('click', function () {

//     const newPrice = updateNumC(true);
//     updatePrice(newPrice)











// })


// document.getElementById('btnC-m').addEventListener('click', function () {

//     const newPrice = updateNumC(fa);
//     updatePrice(newPrice)





// })




function updateNumC(incresevC) {



    const inputValue = document.getElementById('case');
    const inputCaseStr = inputValue.value;
    const inputCasePre = parseInt(inputCaseStr);

    let newInputCase
    if (incresevC === true) {


        newInputCase = inputCasePre + 1;

    }
    else {
        newInputCase = inputCasePre - 1;
    }


    inputValue.value = newInputCase;

    return newInputCase;
}


function updatePriceC(newInputCase) {



    const newPrice = newInputCase * 59;
    const preValueCase = document.getElementById('case-value');
    preValueCase.innerText = newPrice;

}




document.getElementById('btnC-p').addEventListener('click', function () {


    const newInputCase = updateNumC(true);
    updatePriceC(newInputCase)

    //calculate total phn
    subtotal()





})
document.getElementById('btnC-m').addEventListener('click', function () {


    const newInputCase = updateNumC(false);
    updatePriceC(newInputCase);

    subtotal()




})