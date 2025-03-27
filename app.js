let cardNum = document.querySelector('#credit-card')
let cvc = document.querySelector('#cvc')
let amount = document.querySelector('#amount')
let firstName = document.querySelector('#name')
let lastName = document.querySelector('#last-name')
let city = document.querySelector('#city')
let state= document.querySelector('#state-select')
let postalCode = document.querySelector('#postal-code')
let paymentMethod = document.querySelector('#payment-method')
let message = document.querySelector('#message')
let submitBtn = document.querySelector('#submit-btn')
let alertMsg = document.querySelector('#alert-msg')
let cardBody = document.querySelector('#card-body')
let myForm = document.querySelector('.my-form')

submitBtn.addEventListener('click', function(){
    let paymentSelected = paymentMethod.querySelector('input[name="payment"]:checked')
    if (cardNum.value && cvc.value && amount.value && firstName.value && lastName.value && city.value && postalCode.value && paymentSelected && message.value
    ) {
        alert('all good')
        if (!alertMsg.classList.contains('d-none'))
            alertMsg.classList.toggle('d-none')
        myForm.reset()
    } else {
        if (alertMsg.classList.contains('d-none'))
        alertMsg.classList.toggle('d-none')
    }
})