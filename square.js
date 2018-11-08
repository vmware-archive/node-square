function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

module.exports = x => {
    sleepFor(2000);
    const xx = x ** 2;
    console.log(`the square of ${x} is ${xx}`);
    return xx;
}
