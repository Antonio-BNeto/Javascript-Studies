var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function somaSemCarry(a,b){
    const result = (a^b);
    const positivo = result >>> 0;
    return positivo === 0 ? 0: positivo;
}

lines.forEach(line => {
    if(line.trim() !== ''){
        const [a, b] = line.split(' ').map(Number);
        const result = somaSemCarry(a, b);
        console.log(result);
    }    
})
