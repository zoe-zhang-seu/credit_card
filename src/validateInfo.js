import valid from "card-validator";//https://www.npmjs.com/package/card-validator

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.cardNumber);
  creditCard.cmonth= valid.expirationMonth(values.cardMonth);
  creditCard.cyear= valid.expirationYear(values.cardYear,6);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);
  
  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured. Please try again later"
  errors.cname = false;
  errors.cnumber = false;
  errors.cmonth = false;
  errors.cyear = false;
  errors.ccvv = false;
 


  //Card CVV expiration
 //trim() method removes whitespace from both sides of a string
  if (values.cardSecurityCode ===null || !values.cardSecurityCode.trim()) {
    errors.message = "Credit card CVC is not complete";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true; 
  } else {
    errors.message = "Credit card CVC is invalid";
  }

  //Card Expiration Month Verification
  if (values.cardMonth === null || !values.cardMonth.trim()) {
    errors.message = "Credit card expiration date is not complete";
  } else if (creditCard.cmonth.isValid) {
    errors.cmonth = true;
  } else {
    errors.message = "Credit card expiration month date is invalid";
  }

  //Card Expiration Year Verification
  if (values.cardYear === null || !values.cardYear.trim()) {
    errors.message = "Credit card expiration year is not complete";
  } else if (creditCard.cyear.isValid) {
    errors.cyear = true;
  } else {
    errors.message = "Credit card expiration year date is invalid";
  }

  //Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = "Credit card number is not complete";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "Credit card number is invalid";
  }

  //Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = "Cardholder name is not complete";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Cardholder name is invalid";
  }

// if check all these features are true
  if (
    errors.cname &&
    errors.cnumber &&
    errors.cmonth &&
    errors.cyear &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "Credit Card is valid";
  }

  return errors;
}
