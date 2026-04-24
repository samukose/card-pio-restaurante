console.log('qual é a mulher mais linda do mundo');

let nome = '';
readline.question('digite o nome da mulher mais linda do mundo: '), (answer) => {
    nome = answer;
};

if(nome === 'julia') {
    console.log('a mulher mais linda do mundo é a julia');
} else {
    console.log('errado');
}
