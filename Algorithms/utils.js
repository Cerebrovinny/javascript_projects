// function addNumbers(num1, num2) {
//     return num1 + num2
// }

// //console.log(addNumbers(1, 2));
// //console.log(addNumbers(7, 3));
// //console.log(addNumbers(11, 253));
// //console.log(addNumbers(332, 345));

// function minutesToSeconds(min){
//     return (min + ' minutes is ' + min * 60 + ' seconds');
// //
 
//  //console.log(minutesToSeconds(40))
//  //console.log(minutesToSeconds(180))

//  function ageToSeconds(age){
//      return (age + ' years is ' + age * 365 * 86400 + ' seconds');
//  }
 
// //console.log(ageToSeconds(28))
// //console.log(ageToSeconds(38))

// function getFirstItem(items){
//     return items[0]
// }

// items = ['banana', 'pikle', 'guitar']

// console.log(getFirstItem())

// function badOrGoodMovie(movie, rate) {
//     if(rate < 6) {
//         console.log(`the ${movie} is bad`)
//     } else {
//         console.log(`the ${movie} is good`)
//     }
// }

// badOrGoodMovie('breaking bad', 10)

//need to correct to find the min number in array
// function findMin(array) {
//     for (i = 0; i < array.lenght; i++) {
//         console.log(i)
//     }
// }

// var endereco = {
//     rua: "Rua dos Pinheiros",
//     numero: 1293,
//     bairro: "Centro",
//     cidade: "São Paulo",
//     uf: "SP"
// };

// function adressData() {
//     var adress = `O usuário mora em ${endereco.cidade}/ ${endereco.uf},
//     no bairro ${endereco.bairro}, na rua ${endereco.rua} com nº ${endereco.numero}`;

//     return adress;
// };

// console.log(adressData())

// function showPares(x, y) {
//     for (i = x; i <= y; i++) {
//        if (i % 2 === 0) {
//             console.log(i)
//        }
//     }
// }

// console.log(showPares(12, 203))


//  function temHabilidade(skills) {
//     (skills.indexOf('Javascript') !== -1) ? console.log('Tem a skill') 
//     : console.log('Não tem a skill');
//  };

//  var skills = ['Javascript', 'ReactJS'];
// temHabilidade(skills);

// function experiencia(anos) {
//     if(anos <= 1) {
//         return 'Iniciante'
//     } else if(anos <= 3 && anos > 1) {
//         return 'Intermediário'
//     } else if (anos <= 6 && anos > 3) {
//         return 'Avançado'
//     } else {
//         return 'Jedi Master'
//     }
    
// }

// var anosEstudo = 5;
// console.log(experiencia(anosEstudo))

// De 0 - 1 ano : Iniciante
// De 1 - 3 anos: Intermediario
// De 3 - 6 anos: Avanacado
// De 7 acima: Jedi Master 



// var usuarios = [
//     {
//         nome: "Diego",
//         habilidades: ["Javascript", "ReactJS", "Redux"]
//     },
//     {
//         nome: "Gabriel",
//         habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
//     }
// ];

// function usersSkills(usuarios) {
//     for (const users of usuarios) {
//         const { nome, habilidades } = users
//         console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
//      }
//  };

//  usersSkills(usuarios)

//create a function that create square in DOM element every onclick button
// function createSquare() {
//    var square = document.createElement('div')

//    square.style.width = 100;
//    square.style.height = 100;
//    square.style.backgroundColor = '#f00';
//    square.style.margin = 10;
//    //adiciona a class .box na div criada
//    square.classList.add('box');

//    document.body.appendChild(square);
// }
