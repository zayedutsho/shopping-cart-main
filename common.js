function totalPriceAll(elementId) {

    const totalElement = document.getElementById(elementId)
    const TotalStr = totalElement.innerText;
    const Total = parseFloat(TotalStr);
    return Total;






}


function setElementId(elementId, value) {

    const textAMount = document.getElementById(elementId);
    textAMount.innerText = value;


}

function subtotal() {


    const phnTotal = totalPriceAll('price1')
    const caseTotal = totalPriceAll('case-value')
    const currentSubtotal = phnTotal + caseTotal;

    const subTotalPre = document.getElementById('Subtotal');
    subTotalPre.innerText = currentSubtotal;


    //calculate tex

    const tax = (currentSubtotal * 0.1).toFixed(2);
    const taxStr = tax;
    const taxint = parseFloat(tax);

    setElementId('tax', taxint)


    //calculate total


    const allTotal = currentSubtotal + taxint;
    setElementId('all', allTotal)



}