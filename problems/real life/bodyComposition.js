const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question){
    return new Promise((resolve) => {
        rl.question(question,function(answer) {
            resolve(answer);
        })
    })
}

async function main() {
                const weight = await ask("What is your weight?");
                const fat = await ask("What is your fat percentage?");
                const muscle = await ask("What is your muscle percentage?");
                
                let leanBodyMass = Number(weight) - Number(fat);
                let otherLeanMass = leanBodyMass - Number(muscle);

                console.log("Lean Body Mass (Muscle , bones, water, organs, skin, other fat tissues):", leanBodyMass, "KG");
                console.log("Other lean Mass ( bones, water, organs, skin, other fat tissues):", otherLeanMass, "KG");             
}

main();