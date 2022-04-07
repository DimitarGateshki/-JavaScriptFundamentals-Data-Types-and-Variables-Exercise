function sumDigs(number){

    let strNumb=number.toString();
    let sum=0;

    for (let digit of strNumb) {
        sum+=Number(digit);
    }

    console.log(sum);
}