const lists = document.querySelectorAll(".list");
const arrowsSymbols = document.querySelectorAll(".arrow");
const subItems = {
    Race:{
        0: 'Elf',
        1: 'Dwarf',
        2: 'Human'
    },
    Classes:{
        0: 'Warrior',
        1: 'Mage',
        2: 'Cleric'
    },
    Antecedent:{
        0: 'Acolyte',
        1: 'Anthropologist',
        2: 'Athlete'
    },
    Equipament:{
        0: 'Sword',
        1: 'Shield',
        2: 'Armor'
    },
    Magias:{
        0: 'Fireball',
        1: 'Sacred Flame',
        2: 'Concert'
    }
}

lists.forEach((list, index, lists)=>{
    list.addEventListener('click',()=>{
        for(let i=0;i<3;i++){
            let newSubItem = document.createElement('li');
            let text;
            newSubItem.textContent = text;
            switch(list){
                case list=='Race':
                    text = subItems.Race.i;
                    break;
                case list=='Classes':
                    text = subItems.Classes.i;
                    break;
                case list=='Antecedent':
                    text = subItems.Antecedent.i;
                    break;
                case list=='Equipament':
                    text= subItems.Equipament.i;
                    break;
                case list=='Magias':
                    text= subItems.Magias.i;
            }
        } 
    })
})