function testEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
}

function testOdd(n) {
return testEven(Number(n) + 1);
}