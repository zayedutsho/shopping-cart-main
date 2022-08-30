function updateNum(incresev) {


    const inputValue = document.getElementById('input-v1');
    const preInputValueStr = inputValue.value;
    const preInput = parseInt(preInputValueStr);

    let newValue

    if (incresev === true) {
        newValue = preInput + 1;


    } else {
        newValue = preInput - 1;

    }


    inputValue.value = newValue;
    return newValue;






}

function totalprice(newValue) {
    const newtotalPrice = newValue * 1219;

    const preprice = document.getElementById('price1');
    preprice.innerText = newtotalPrice;
}





document.getElementById('btn-p1').addEventListener('click', function () {

    const newValue = updateNum(true);
    totalprice(newValue);


    //calculate total phn

    subtotal()







})
document.getElementById('btn-m1').addEventListener('click', function () {


    const newValue = updateNum(false);
    totalprice(newValue);


    subtotal()


})


