const lists = document.querySelectorAll(".list");
const subItems = {
  Race: ['Elf', 'Dwarf', 'Human'],
  Classes: ['Warrior', 'Mage', 'Cleric'],
  Antecedent: ['Acolyte', 'Anthropologist', 'Athlete'],
  Equipament: ['Sword', 'Shield', 'Armor'],
  Magias: ['Fireball', 'Sacred Flame', 'Concert']
}

lists.forEach((list) => {
  list.addEventListener('click', () => {
    list.classList.toggle(".listOnClick");
    let listName = list.textContent.trim(); 

    // Se a lista já foi preenchida, é limpado
    if (list.children.length > 1) {
      while (list.children.length > 1) {
        list.removeChild(list.lastChild);
      }
      return;
    }

    if (subItems[listName]) {
      for (let i = 0; i < 3; i++) {
        let newSubItem = document.createElement('li');
        newSubItem.textContent = subItems[listName][i];
        list.appendChild(newSubItem);
      }
    }
  })
})

