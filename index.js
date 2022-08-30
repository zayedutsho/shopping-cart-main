

//increase value
function updateNum(incresev) {

    //calling id

    const inputValue = document.getElementById('input-v1');
    //get value
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

//increase price according to value num

function totalprice(newValue) {
    const newtotalPrice = newValue * 1219;
    //calling id
    const preprice = document.getElementById('price1');
    //set new price value
    preprice.innerText = newtotalPrice;
}




//Plus clcick
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


