function one() {
    for (let i = 1; i < 11; i++) console.log(i)
}
function two() {
    for (let i = 10; i > 0; i--) console.log(i)
}
function three() {
    const input = prompt('Digite um número inteiro:', '10');
    for (let i = 1; i <= input; i++) console.log(i)
}
function four() {
    for (let i = 0; i <= 100; i++) {
        let dividers = 0;
        for (let n = 1; n <= i; n++) {
            if (i % n === 0) dividers++;
        }
        if(dividers === 2) console.log(i)
    }
}
function five() {
    n = 1;
    while (n <= 10) {
        console.log(`Tabuada do ${n}: `)
        j = 0;
        while (j <= 10) {
            console.log(`${j} * ${n} = ${j * n}`);
            j++
        }
        n++
    }
}
function six() {
    const input = prompt('Digite um número inteiro:', '1');
    for (let i = 0; i <= 10; i++) {
        console.log(`${input} * ${i} = ${input * i}`)
    }
}
function seven() {
    const input = prompt('Digite um número inteiro:', '10');
    var even = [];
    var odd = [];
    for (let i = 1; i <= input; i++) {
        if (i % 2 == 0) even.push(i)
        else odd.push(i)
    }
    console.log(`Os números pares de 1 a ${input} são: ${even}`);
    console.log(`Os números ímpares de 1 a ${input} são: ${odd}`)
}
function eight() {
    const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31');
    const values = input.split(',');
    console.log('Idades', values);

    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += parseInt(values[i]);
    }
    console.log('Média', total / values.length);
}
function nine() {
    const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31,15,25,26,40,55');
    const values = input.split(',');
    console.log('Idades', values);

    var total = 0;
    for (let i = 0; i < values.length; i++) {
        if(values[i] >= 18) total++
    }
    console.log(`O número de pessoas maiores (ou iguais) a 18 anos é: ${total}`)
}
function ten() {
    const input = prompt('Qual o tamanho dos lados do quadrado?: ', '5');
    let result = '';
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) { result += '*' }
        result += '\n'
    }
    console.log(result)
}

function eleven() {
    const input = prompt('Qual a altura do triangulo?: ', '5');
    let result = '';
    for (let i = 1; i <= input; i++) {
        for (let j = 0; j < i; j++) {result += '*' }
        result += '\n'
    }
    console.log(result)
}