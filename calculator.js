let firstInput =document.getElementById("num1");
let SecondInput=document.getElementById("num2");
let Result=document.getElementById("result");

function calculator(operator){
    let num1=Number(firstInput.value);
    let num2=Number(SecondInput.value);
    let answer;

    if(operator==='+'){
        answer=num1+num2;
    }
    else if(operator==='-'){
        answer=num1-num2;

    }
    else if(operator==='*'){
        answer=num1*num2;

    }
    else if(operator==='/'){
        answer=num1/num2;

    }
    Result.innerText='Result:'+answer;
    }