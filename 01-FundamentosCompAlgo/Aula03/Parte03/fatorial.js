function fatorial(number){
    if (number < 0)
        return undefined;
    let total = 1;
    for (let n = number; n > 1; n--)
        total = total * n

    return total;
}

console.log(fatorial(5));

function fatorialRecursivo(number){
    if (number === 1 || number === 0)
        return 1;

    return number * fatorialRecursivo(number - 1);
}

console.log(fatorialRecursivo(5));