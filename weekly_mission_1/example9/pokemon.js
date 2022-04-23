class pokemon {

    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Mi pokemon ${this.name} dice hola :D !!`);

    }

    sayMessage(message){
        console.log(`Mi pokemon ${this.name} dice: ${message}`)

    }
}

module.exports = pokemon