console.log("hello word typescript");

function sum(a:number, b:number){ // vai validar a entrada durate o desenvolvimento
    return a + b;
}

sum(1,3);

//interfaces
interface IAnimal{
    name: string;
    type: 'terreste' | 'Marinho',
    rugir(alturaDB: number): void;
}

 const animal: IAnimal = {
     name:'teste',
     type:"Marinho",
     rugir: (altuaDB) => (`${altuaDB}dB`)
 }
 console.log(animal);

 interface Ifelino extends IAnimal  {
     visaoNoturna: boolean;
 }

 const Felino: Ifelino = {
     name: 'felino',
     type: "terreste",
     visaoNoturna: true,
     rugir: (altuaDB) => (`${altuaDB}dB`)
 }
 console.log(Felino);
 console.log(Felino.rugir(1));
//types
