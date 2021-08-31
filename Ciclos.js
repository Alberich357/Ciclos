class ciclos {
ciclo1(Limit){
    let cicloS = 4; 
    let Number =  1;
    for(let i= 0; i<= Limit; i++);{
        if( i < limit){
            //Le agrega un 2 al denominador por que es constante
            Number+=2
            cicloS-=(4/Number);
        }
        //Cancela el ciclo en caso de que sea la ultima operación  
        i++

        if( i < limit){
            Number+=2
            cicloS+=(4/Number);
        }
    }     
}
ciclo2(limit) {
    let cicloE = 1;
    let Nfactorial = 1;
    for(let i = 0; i < limit; i++){
        let total = 1
        for (let i = 1; i <= Nfactorial; i++){
            total = total * i
        }
        cicloE+=(1/total);
        if(Nfactorial < limit){
            Nfactorial++
        }
    }
    return cicloE;
}
}
console.log(ciclo1(50));
console.log(ciclo2(20));
new ciclos;