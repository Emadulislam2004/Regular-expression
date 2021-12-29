// User data
let name        = 'Emadul islam';
let age         = '22';
let email       = 'akash@emadulislam.com';
let userName    = "akash1";
let password    = 'A406699A';
let zipCode     = '3450';
let number      = +8801827816062;


// validation
let namePattern        = /^[a-z ]*$/i;
let emailPattern       = /^[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z]{2,6}$/;
let userNamePattern    = /^[a-z]{5,8}[0-9]{1}$/;
let PassPattern        = /^.{8,10}$/;
let agePattern         = /^[0-9]{2}$/;
let zipCodePattern     = /^[0-9]{4}$/;
let numPattern         = /^(01|8801|\+8801)[0-9]{9}$/;



let nameValidation       = namePattern.test(name);
let passValidation       = PassPattern.test(password);
let userNameValidation   = userNamePattern.test(userName);
let emailValidation      = emailPattern.test(email);
let ageValidation        = agePattern.test(age);
let zipCodeValidation    = zipCodePattern.test(zipCode);
let numberValidation     = numPattern.test(number)






try{
    if(numberValidation == false||nameValidation == false ||emailValidation ==false|| passValidation == false || userNameValidation == false||ageValidation==false||zipCodeValidation==false){

        throw 'Please input valid value '
        
    }else{

        console.log(`

        Your name    : ${name}
        Your age     : ${age}
        Your email   : ${email}
        Your User    : ${userName}
        Your Pass    : ${password}
        Your Zip     : ${zipCode}
        Your Number  : ${number}
        
        
        `)
    }

}catch(err){

    console.error(err)

}


