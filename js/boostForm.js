const EmailInput = document.getElementById("email");
const EmailInputError = document.getElementById("emailError");
const ConfirmEmailInput = document.getElementById("confirmEmail");
const ConfirmEmailError = document.getElementById("confirmEmailError");
const PriceDisplay = document.getElementById("price");
const StartDivisionSelectType = document.getElementById("startDivision");
const StartDivisionSelectValue = document.getElementById("startDivisionSelectValue");
const EndDivisionSelectType = document.getElementById("goalDivision");
const EndDivisionSelectValue = document.getElementById("endDivisionSelectValue");
const LessLPElement = document.getElementById("lessLP");


const LessLPModifier = 15;
const IronDivPrice = 15;
const IronDivPromoPrice = 20;
const BronzeDivPrice = 18;
const BronzeDivPromoPrice = 23;
const SilverDivPrice = 24;
const SilverDivPromoPrice = 30;
const GoldDivPrice = 34;
const GoldDivPromoPrice = 40;
const PlatinumDivPrice = 45;
const PlatinumDivPromoPrice = 75;
const D4D3Price = 100;
const D3D2Price = 130;
const D2D1Price = 150;
const MasterPrice = 300;


const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const checkIfEmailCorrect = () => {
    let email = EmailInput.value;
    if(email !== ""){
        if(!reEmail.test(String(email).toLowerCase())){
            EmailInputError.innerHTML = "Email nie jest poprawny!"
        }
        else{
            EmailInputError.innerHTML = ""
        }
        
    }
    else{
        EmailInputError.innerHTML = ""
    }
    ConfirmEmailError.innerHTML = "";
    
}

const checkIfEmailsMatch = () =>{
    let email = EmailInput.value;
    let confirmEmail = EmailInput.value;

    if(confirmEmail !== ""){
        if(!reEmail.test(String(email).toLowerCase())){
            ConfirmEmailError.innerHTML = "Pierwszy email nie jest poprawny!"
        }
        else if(!reEmail.test(String(confirmEmail).toLowerCase())){
            ConfirmEmailError.innerHTML = "Email nie jest poprawny!"
        }else if(email !== confirmEmail){
            ConfirmEmailError.innerHTML = "Emaile nie pasują do siebie!"
        }
        else{
            ConfirmEmailError.innerHTML = "";
        }
    }
    else{
        ConfirmEmailError.innerHTML = "";
    }
}


const calculatePrice = () =>{
    let startDivisionTypeSelected = parseInt(StartDivisionSelectType.value);
    let startDivisionValueSelected = parseInt(StartDivisionSelectValue.value);

    let endDivisionTypeSelected = parseInt(EndDivisionSelectType.value);
    let endDivisionValueSelected = parseInt(EndDivisionSelectValue.value);

    let ifLessLP = document.getElementById("lessLP");

    console.log(startDivisionTypeSelected + " | " + endDivisionTypeSelected)
    console.log(startDivisionValueSelected + " | " + endDivisionValueSelected)

    document.getElementById("endDivisionSelectValue").style.display = "inline";
    document.getElementById("startDivisionSelectValue").style.display = "inline";

    let price = 0;

    if(startDivisionTypeSelected == 7){
        document.getElementById("startDivisionSelectValue").style.display = "none";
    }

    if(endDivisionTypeSelected == 7){
        document.getElementById("endDivisionSelectValue").style.display = "none";

    }

    console.log(startDivisionValueSelected + "|" +  endDivisionTypeSelected + "|" + startDivisionValueSelected + "|" + endDivisionValueSelected);
    console.log(startDivisionTypeSelected == endDivisionTypeSelected && endDivisionValueSelected < startDivisionValueSelected);
    console.log(startDivisionTypeSelected == endDivisionTypeSelected);
    console.log(endDivisionValueSelected < startDivisionValueSelected);



    if(startDivisionTypeSelected > endDivisionTypeSelected){
        PriceDisplay.innerHTML = "0 ZŁ";
        return 0;
    }
    else if(startDivisionTypeSelected == endDivisionTypeSelected && endDivisionValueSelected >= startDivisionValueSelected){
        PriceDisplay.innerHTML = "0 ZŁ";
        return 0;
    }
    else{
        switch(startDivisionTypeSelected){
            case 1:{
                switch(endDivisionTypeSelected){
                    case 1:{
                        price = (startDivisionValueSelected - endDivisionValueSelected) * IronDivPrice;
                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}

                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 2:{
                        price = IronDivPromoPrice + ((startDivisionValueSelected - 1) * IronDivPrice)
                        price += ((4 - endDivisionValueSelected) * BronzeDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 3:{
                        price = IronDivPromoPrice + ((startDivisionValueSelected - 1) * IronDivPrice)
                        price += BronzeDivPromoPrice + (BronzeDivPrice * 3);
                        price += ((4 - endDivisionValueSelected) * SilverDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 4:{
                        price = IronDivPromoPrice + ((startDivisionValueSelected - 1) * IronDivPrice)
                        price += BronzeDivPromoPrice + (BronzeDivPrice * 3);
                        price += SilverDivPromoPrice + (SilverDivPrice * 3);
                        price += ((4 - endDivisionValueSelected) * GoldDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 5:{
                        price = IronDivPromoPrice + ((startDivisionValueSelected - 1) * IronDivPrice)
                        price += BronzeDivPromoPrice + (BronzeDivPrice * 3);
                        price += SilverDivPromoPrice + (SilverDivPrice * 3);
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += ((4 - endDivisionValueSelected) * PlatinumDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 6:{
                        price = IronDivPromoPrice + ((startDivisionValueSelected - 1) * IronDivPrice)
                        price += BronzeDivPromoPrice + (BronzeDivPrice * 3);
                        price += SilverDivPromoPrice + (SilverDivPrice * 3);
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);

                        switch(endDivisionValueSelected){
                            case 4:{
                                price += 0;
                                break;
                            }
                            case 3:{
                                price += D4D3Price;
                                break;
                            }
                            case 2:{
                                price += D4D3Price + D3D2Price;
                            }
                            case 1:{
                                price += D4D3Price + D3D2Price + D2D1Price;
                            }
                        }

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 7:{
                        price = IronDivPromoPrice + ((startDivisionValueSelected - 1) * IronDivPrice)
                        price += BronzeDivPromoPrice + (BronzeDivPrice * 3);
                        price += SilverDivPromoPrice + (SilverDivPrice * 3);
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);
                        price += D4D3Price + D3D2Price + D2D1Price;
                        price += MasterPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                }
            }
            case 2:{
                switch(endDivisionTypeSelected){
                    case 2:{
                        price = (startDivisionValueSelected - endDivisionValueSelected) * BronzeDivPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 3:{
                        price = BronzeDivPromoPrice + ((startDivisionValueSelected - 1) * BronzeDivPrice)
                        price += ((4 - endDivisionValueSelected) * SilverDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 4:{
                        price = BronzeDivPromoPrice + ((startDivisionValueSelected - 1) * BronzeDivPrice)
                        price += SilverDivPromoPrice + (SilverDivPrice * 3);
                        price += ((4 - endDivisionValueSelected) * GoldDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 5:{
                        price = BronzeDivPromoPrice + ((startDivisionValueSelected - 1) * BronzeDivPrice)
                        price += SilverDivPromoPrice + (SilverDivPrice * 3);
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += ((4 - endDivisionValueSelected) * PlatinumDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 6:{
                        price = BronzeDivPromoPrice + ((startDivisionValueSelected - 1) * BronzeDivPrice)
                        price += SilverDivPromoPrice + (SilverDivPrice * 3);
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);

                        switch(endDivisionValueSelected){
                            case 4:{
                                price += 0;
                                break;
                            }
                            case 3:{
                                price += D4D3Price;
                                break;
                            }
                            case 2:{
                                price += D4D3Price + D3D2Price;
                            }
                            case 1:{
                                price += D4D3Price + D3D2Price + D2D1Price;
                            }
                        }

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 7:{
                        price = BronzeDivPromoPrice + ((startDivisionValueSelected - 1) * BronzeDivPrice)
                        price += SilverDivPromoPrice + (SilverDivPrice * 3);
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);
                        price += D4D3Price + D3D2Price + D2D1Price;
                        price += MasterPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                }
            }
            case 3:{
                switch(endDivisionTypeSelected){
                    case 3:{
                        price = (startDivisionValueSelected - endDivisionValueSelected) * SilverDivPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 4:{
                        price = SilverDivPromoPrice + ((startDivisionValueSelected - 1) * SilverDivPrice)
                        price += ((4 - endDivisionValueSelected) * GoldDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 5:{
                        price = SilverDivPromoPrice + ((startDivisionValueSelected - 1) * SilverDivPrice)
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += ((4 - endDivisionValueSelected) * PlatinumDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 6:{
                        price = SilverDivPromoPrice + ((startDivisionValueSelected - 1) * SilverDivPrice)
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);

                        switch(endDivisionValueSelected){
                            case 4:{
                                price += 0;
                                break;
                            }
                            case 3:{
                                price += D4D3Price;
                                break;
                            }
                            case 2:{
                                price += D4D3Price + D3D2Price;
                            }
                            case 1:{
                                price += D4D3Price + D3D2Price + D2D1Price;
                            }
                        }

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 7:{
                        price = SilverDivPromoPrice + ((startDivisionValueSelected - 1) * SilverDivPrice)
                        price += GoldDivPromoPrice + (GoldDivPrice * 3);
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);
                        price += D4D3Price + D3D2Price + D2D1Price;
                        price += MasterPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                }
            }
            case 4:{
                switch(endDivisionTypeSelected){
                    case 4:{
                        price = (startDivisionValueSelected - endDivisionValueSelected) * GoldDivPrice;
    
                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 5:{
                        price = GoldDivPromoPrice + ((startDivisionValueSelected - 1) * GoldDivPrice)
                        price += ((4 - endDivisionValueSelected) * PlatinumDivPrice);

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 6:{
                        price = GoldDivPromoPrice + ((startDivisionValueSelected - 1) * GoldDivPrice)
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);

                        switch(endDivisionValueSelected){
                            case 4:{
                                price += 0;
                                break;
                            }
                            case 3:{
                                price += D4D3Price;
                                break;
                            }
                            case 2:{
                                price += D4D3Price + D3D2Price;
                            }
                            case 1:{
                                price += D4D3Price + D3D2Price + D2D1Price;
                            }
                        }

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 7:{
                        price = GoldDivPromoPrice + ((startDivisionValueSelected - 1) * GoldDivPrice)
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);
                        price += D4D3Price + D3D2Price + D2D1Price;
                        price += MasterPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                }
            }
            case 5:{
                switch(endDivisionTypeSelected){
                    case 5:{
                        price = (startDivisionValueSelected - endDivisionValueSelected) * PlatinumDivPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 6:{
                        price = PlatinumDivPromoPrice + ((startDivisionValueSelected - 1) * PlatinumDivPrice)
                        price += PlatinumDivPromoPrice + (PlatinumDivPrice * 3);

                        switch(endDivisionValueSelected){
                            case 4:{
                                price += 0;
                                break;
                            }
                            case 3:{
                                price += D4D3Price;
                                break;
                            }
                            case 2:{
                                price += D4D3Price + D3D2Price;
                            }
                            case 1:{
                                price += D4D3Price + D3D2Price + D2D1Price;
                            }
                        }

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 7:{
                        price = PlatinumDivPromoPrice + ((startDivisionValueSelected - 1) * PlatinumDivPrice)
                        price += D4D3Price + D3D2Price + D2D1Price;
                        price += MasterPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                }
            }
            case 6:{
                switch(endDivisionTypeSelected){
                    case 6:{
                        switch(endDivisionValueSelected){
                            case 4:{
                                price = 0;
                                break;
                            }
                            case 3:{
                                price = D4D3Price;
                                break;
                            }
                            case 2:{
                                price = D4D3Price + D3D2Price;
                                break;
                            }
                            case 1:{
                                price = D4D3Price + D3D2Price + D2D1Price;
                                break;
                            }
                        }

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                    case 7:{
                        switch(startDivisionValueSelected){
                            case 4:{
                                price = D4D3Price + D3D2Price + D2D1Price;
                                break;
                            }
                            case 3:{
                                price = D3D2Price + D2D1Price;
                                break;
                            }
                            case 2:{
                                price = D2D1Price;
                                break;
                            }
                            case 1:{
                                price = 0;
                                break;
                            }
                        }
                        price += MasterPrice;

                        if(ifLessLP.checked == true){price += Math.round((price * LessLPModifier / 100));}
                        PriceDisplay.innerHTML = price + " ZŁ";
                        return price;
                    }
                }
            }
            case 7:{
                PriceDisplay.innerHTML = 0 + " ZŁ";
                return 0;
            }

        }
    }
}


const changeDivisionTypeStart = () =>{
    var divisionSelected = parseInt(StartDivisionSelectType.value);

    switch(divisionSelected){
        case 1:{
            document.getElementById("start_div_img").src = "assets/img/Iron.png";
            document.getElementById("start_div_img").alt = "Iron";
            break;
        }
        case 2:{
            document.getElementById("start_div_img").src = "assets/img/Bronze.png";
            document.getElementById("start_div_img").alt = "Bronze";
            break;
        }
        case 3:{
            document.getElementById("start_div_img").src = "assets/img/Silver.png";
            document.getElementById("start_div_img").alt = "Silver";
            break;
        }
        case 4:{
            document.getElementById("start_div_img").src = "assets/img/Gold.png";
            document.getElementById("start_div_img").alt = "Gold";
            break;
        }
        case 5:{
            document.getElementById("start_div_img").src = "assets/img/Platinum.png";
            document.getElementById("start_div_img").alt = "Platinum";
            break;
        }
        case 6:{
            document.getElementById("start_div_img").src = "assets/img/Diamond.png";
            document.getElementById("start_div_img").alt = "Diamond";
            break;
        }
        case 7:{
            document.getElementById("start_div_img").src = "assets/img/Master.png";
            document.getElementById("start_div_img").alt = "Master";
            break;
        }
    }

    calculatePrice();
}

StartDivisionSelectType.addEventListener('change', changeDivisionTypeStart);


const changeDivisionTypeEnd = () =>{
    var divisionSelected = parseInt(EndDivisionSelectType.value);

    switch(divisionSelected){
        case 1:{
            document.getElementById("goal_div_img").src = "assets/img/Iron.png";
            document.getElementById("goal_div_img").alt = "Iron";
            break;
        }
        case 2:{
            document.getElementById("goal_div_img").src = "assets/img/Bronze.png";
            document.getElementById("goal_div_img").alt = "Bronze";
            break;
        }
        case 3:{
            document.getElementById("goal_div_img").src = "assets/img/Silver.png";
            document.getElementById("goal_div_img").alt = "Silver";
            break;
        }
        case 4:{
            document.getElementById("goal_div_img").src = "assets/img/Gold.png";
            document.getElementById("goal_div_img").alt = "Gold";
            break;
        }
        case 5:{
            document.getElementById("goal_div_img").src = "assets/img/Platinum.png";
            document.getElementById("goal_div_img").alt = "Platinum";
            break;
        }
        case 6:{
            document.getElementById("goal_div_img").src = "assets/img/Diamond.png";
            document.getElementById("goal_div_img").alt = "Diamond";
            break;
        }
        case 7:{
            document.getElementById("goal_div_img").src = "assets/img/Master.png";
            document.getElementById("goal_div_img").alt = "Master";
            break;
        }
    }

    calculatePrice();
}

EndDivisionSelectType.addEventListener('change', changeDivisionTypeEnd);


const selectValueFirstChange = () =>{
    calculatePrice();
}


const selectValueSecondChange = () =>{
    calculatePrice();
}

StartDivisionSelectValue.addEventListener('change', selectValueFirstChange);
EndDivisionSelectValue.addEventListener('change', selectValueSecondChange);

const lessLPHappened = () =>{
    calculatePrice();
}

LessLPElement.addEventListener('change', lessLPHappened);



async function getAccess(){
	const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
		method: 'post',
		headers:{
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization": "Basic " + "QVlTa2h4LWFZR3JCcHlwdEpNdWJNV2dsNzI4SUpwenRGT1NqYmVESndRb0lnRDR0VV8yYTFRTkNzZU83d0VCUDY0TWJsZWwzRGJfZkRVRmY6RU8tOHRlbVJmYXNxckVfczZxTWR2VlZxdFZJRDJfeWdtX3ZoSUZPTlpEUEEyclBMYWZIcTN2ODhmUVB3ZjVQRTVtMnpGTmNQTXAtdmVzZ2c="
		},
		body: "grant_type=client_credentials"
	});

	const ret = await response.json();
	return ret;
}

async function order(token, item, amount){
	var orderObj = {
		"intent": "CAPTURE",
		"application_context": {
		"return_url": "https://www.google.com/",
		"cancel_url": "https://kubaowczarek1.wixsite.com/mysite",
		"landing_page": "BILLING",
		"payment_method": {
		"payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
				}
			},
		"purchase_units": [
				{
		"description": item,
		"amount": {
		"currency_code": "PLN",
		"value": Number(amount),
		"breakdown": {
		"item_total": {
		"currency_code": "PLN",
		"value": Number(amount)
				}
			}
		},
		"items": [{
		"name": "Item Name - " + item,
		"unit_amount": {
		"currency_code": "PLN",
		"value": Number(amount)
		},
		"quantity": "1"
        }]
        }
    ]
    };
 const response = await fetch("https://api.sandbox.paypal.com/v2/checkout/orders", {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(orderObj)
    });
 const ret = await response.json();
 return ret;
}

async function capturePayment(url) {
 const response = await fetch(`${url}`, {
    method: 'post',
    headers: {
			"Content-Type": "application/json",
			"Authorization": "Basic" + "QVlTa2h4LWFZR3JCcHlwdEpNdWJNV2dsNzI4SUpwenRGT1NqYmVESndRb0lnRDR0VV8yYTFRTkNzZU83d0VCUDY0TWJsZWwzRGJfZkRVRmY6RU8tOHRlbVJmYXNxckVfczZxTWR2VlZxdFZJRDJfeWdtX3ZoSUZPTlpEUEEyclBMYWZIcTN2ODhmUVB3ZjVQRTVtMnpGTmNQTXAtdmVzZ2c="
		}
    });
 const ret = await response.json();
 return ret;
}