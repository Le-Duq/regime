
const ingredientsDB = {
  "poulet": 165, "bœuf": 250, "porc": 242, "agneau": 294, "canard": 337, "dinde": 135,
  "cordon bleu": 195, "jambon": 145, "saucisse": 301, "lardon": 393,
  "tomate": 18, "brocoli": 55, "carotte": 41, "poivron": 20, "haricot vert": 31,
  "épinard": 23, "courgette": 17, "chou-fleur": 25, "champignon": 22, "oignon": 40,
  "pomme de terre": 77, "patate douce": 86, "riz": 130, "pâtes": 131,
  "semoule": 360, "quinoa": 120, "polenta": 70, "lentilles": 116,
  "sel": 0, "poivre": 255, "cumin": 375, "paprika": 282, "curcuma": 354,
  "lait entier (mL)": 64, "lait demi-écrémé (mL)": 47, "lait écrémé (mL)": 35,
  "crème fraîche (mL)": 300, "crème liquide 30% (mL)": 290, "yaourt nature (mL)": 60,
  "yaourt grec (mL)": 97, "fromage blanc (mL)": 80, "ketchup (mL)": 112,
  "mayonnaise (mL)": 680, "sauce tomate (mL)": 29, "sauce soja (mL)": 53,
  "vinaigre balsamique (mL)": 14, "moutarde (mL)": 135, "béchamel (mL)": 105,
  "sauce barbecue (mL)": 120, "sauce curry (mL)": 190, "eau (mL)": 0,
  "soda (mL)": 41, "jus d'orange (mL)": 45, "café (mL)": 2, "thé (mL)": 1,
  "lait chocolaté (mL)": 89, "boisson énergétique (mL)": 45, "vin rouge (mL)": 85, "bière (mL)": 43
};

const ingredientSelect = document.getElementById("ingredient");
const form = document.getElementById("form");
const liste = document.getElementById("liste");
const totalSpan = document.getElementById("total");
let totalCalories = 0;

Object.keys(ingredientsDB).sort().forEach(key => {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = key;
  ingredientSelect.appendChild(option);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const ingredient = ingredientSelect.value;
  const quantite = parseFloat(document.getElementById("quantite").value);
  if (ingredient && quantite > 0) {
    const cal = ingredientsDB[ingredient] * quantite / 100;
    const li = document.createElement("li");
    li.textContent = `${quantite}g/mL de ${ingredient} = ${cal.toFixed(2)} kcal`;
    liste.appendChild(li);
    totalCalories += cal;
    totalSpan.textContent = totalCalories.toFixed(2);
    form.reset();
  }
});
