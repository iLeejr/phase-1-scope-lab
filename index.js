// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob'
}

var writeBestCustomer = 'maybe bob'

function overwriteBestCustomer() {
    bestCustomer = writeBestCustomer
}

const leastFavoriteCustomer = 'probably bob'; 

function changeLeastFavoriteCustomer(newName) {
    leastFavoriteCustomer = newName; 
}

