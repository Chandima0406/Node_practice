const math = (number1, number2, number3, number4) =>{
    let a = number1 + number2 * 2;
    if(number3){
        a += number3 - 2;
    } if (number4){
        a += number4;
    }
    return a;
};

const aaa = () => {}; // functin name is 'aaa'
const bbb = () => {}; // function name is 'bbb'
const ccc = () => {}; // function name is 'ccc'

const main = {  // This is the main object that will be exported 
    aaa,
    bbb,
    ccc,
    math
}

export default main;  // Exporting the main object containing all functions

