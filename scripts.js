/*========================  VARIABLES START HERE ========================*/
//Program Constants
const TAX_RATE = '0.08';

//Customer Info
var mentalSpending = '';
var nPhones = '';
var bankAccount = '';

//Store Prices
var pCost = 200.00;
var aCost = 75.00;
var gTotal = '';
/*========================  VARIABLES START HERE ========================*/

/*========================  FUNCTIONS START HERE ========================*/

//Program Functions
function printPrice(total){
	return '$'+ String(total);
}
function calcTotal(cCash,tCost){
	return cCash - tCost;
}
function toUpper(str){
	return str.toUpperCase();
}
function customerCost(phones,accessories){
	//code here
	var phoneTotal = phones * pCost;
	var aTotal = accessories * aCost;
	gTotal = (phoneTotal + aTotal);
	gTotal = gTotal + (gTotal * TAX_RATE);
	return gTotal;
}

function canBuy(){
	var i = 0;
	while(mentalSpending >= pCost){
		mentalSpending = mentalSpending - pCost;
		i = i+1;
	}
	return i;
}

function calcPhoneCost(){
	//See if the customer would like more than one phone
	nPhones = prompt('Are you looking to buy more than one phone?');

	if(toUpper(nPhones) === 'YES'){
		var phonesNeeded = prompt('How many phones would you like to buy?');
		phonesNeeded = Number(phonesNeeded);
	}else{
		var phonesNeeded = 1;
	}

	//See if customer would like to add accessories to their phone
	var accessoriesNeeded = prompt('Do you need accessories for your phones?')

	if(toUpper(accessoriesNeeded) === 'YES'){
		var nAccessories = phonesNeeded;
	}else{
		var nAccessories = '';
	}

	//This is the total cost of the Phone
	gTotal = customerCost(phonesNeeded,nAccessories);
	alert('Each phone costs $200 plus tax, accessories are $75 per phone your cost will be ' + printPrice(gTotal) + '.');
}

/*========================  FUNCTIONS END HERE ========================*/

//Intro
alert('Hello, I see you are looking to buy a new phone. Lets start with a few questions.');

mentalSpending = prompt('How much are you willing to spend today?');
if(mentalSpending < pCost){
	alert('I am sorry you don\'t have enough money to buy a phone today. You need at least ' + (pCost - mentalSpending) + ' dollars more.' );
}else{
	var availablePhones = canBuy();
	alert('You have enough money to purchase ' + availablePhones + ' phones.' );
	calcPhoneCost();
}



