// console.log(process.argv)
// add, sub, mult, divide, sin, cos, tan, random
const { randomInt } = require('crypto');



const type = process.argv[2]
if(type === 'add'){
    console.log(+process.argv[3]+ +process.argv[4])
}
else if( type === 'sub'){
    console.log(+process.argv[3] - +process.argv[4]);
}
else if(type === 'mult'){
    console.log(+process.argv[3] * +process.argv[4]);
}

else if(type === 'divide'){
    console.log(+process.argv[3] / +process.argv[4]);
}
else if(type === 'sin'){
     console.log(Math.sin(+process.argv[3]*0.0175));
}
else if(type === 'cos'){
    console.log(Math.cos(+process.argv[3]*0.0175))
}
else if(type === 'tan'){
    console.log(Math.tan(+process.argv[3]*0.0175))
}
else if(type === 'random'){
    const number = randomInt(0,10);
   console.log(number)
}


