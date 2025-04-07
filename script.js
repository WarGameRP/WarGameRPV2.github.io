// 🎯 JS sécurisé pour envoyer une commande sans exposer le webhook ni les mots de passe

const weapons = {
  "Air-sol": {
    "Bombe de 100kilo": 50,
    "Bombe de 150kilo": 75,
    "Bombe de 200kilo": 100,
    "Bombe de 250kilo": 125,
    "Bombe de 500kilo": 250,
    "Bombe de 1 000kilo": 500,
    "Bombe de 2 000kilo": 1000,
    "Bombe de 3 000kilo": 1500,
    "BLU-107": 150,
    "CBU-103": 200,
    "CBU-104": 250,
    "CBU-105 SFW": 350,
    "CBU-107": 400,
    "GBU-8": 450,
    "GBU-12": 500,
    "GBU-15": 600,
    "GBU-16": 650,
    "GBU-24": 800,
    "GBU-31": 1000,
    "GBU-35": 1100,
    "GBU-38": 1200,
    "GBU-39": 1300
  },
  "Anti-air": {
    "AIM-7F": 250,
    "AIM-7M": 300,
    "AIM-7P": 350,
    "AIM-9P": 200,
    "AIM-9L": 300,
    "AIM-9M": 350,
    "AIM-9X": 500,
    "AIM-120A": 600,
    "AIM-120B": 700,
    "AIM-120C": 800,
    "AIM-120D": 1000,
    "AIM-132": 950,
    "AIM-260": 1500,
    "IRIS-T": 800,
    "Matra R550 Magic II": 400,
    "Meteor BVRAAM": 2000,
    "MICA-EM": 1000,
    "MICA-IR": 800,
    "R-27ER": 750,
    "R-27ET": 700,
    "R-27R": 600,
    "R-27T": 650,
    "R-73": 400,
    "R-73-1": 450,
    "R-77": 800,
    "R-77-1": 900
  },
  "Anti-char": {
    "AGM-65D": 500,
    "AGM-65E": 550,
    "AGM-65F": 600,
    "AGM-65G": 650,
    "AGM-130A-12": 1200,
    "Kh-25ML": 800,
    "Kh-25MP": 850,
    "Kh-29T": 1000,
    "Kh-38": 1100
  },
  "Anti-navire": {
    "AGM-84 Harpoon": 1200,
    "AGM-84 Harpoon Block II": 1500,
    "AM-39 Exocet": 1300,
    "ASM-3": 1800,
    "Kh-22": 1500,
    "Kh-31": 1500,
    "RBS-15": 1600,
    "Sea Eagle": 1200
  },
  "Missile de croisière": {
    "AGM-84E SLAM": 2000,
    "AGM-84H/K SLAM-ER": 2500,
    "AGM-154 JSOW": 3000,
    "AGM-158 JASSM": 4000,
    "Joint Strike Missile": 3500,
    "Kh-55": 4000,   
    "Kh-59": 3000,
    "SCALP-EG": 4500, 
    "Taurus KEPD 350": 5000
  },
  "Missile multi rôles": {
    "AGM-88 HARM": 1500,
    "Kh-58": 1500,
    "Lightweight Multi-role Missile ": 800
  },
  "Pods": {
    "AN/ALQ-135": 1500,
    "ALQ-TLS": 1800,
    "LANTIRN": 1200,
    "LITENING II": 1500,
    "LITENING III": 2000,
    "LITENING V": 2500,
    "Pod de désignation DAMOCLES": 2500,
    "Pod de désignation TALIOS": 3000,
    "Pod de reconnaissance AREOS": 3500
  },
  "Réservoirs": {
    "Réservoir conforme 500 litres": 100,
    "Réservoir conforme 800 litres": 150,
    "Réservoir conforme 1 000 litres": 200,
    "Réservoir conforme 1 300 litres": 250,
    "Réservoir conforme 1 500 litres": 300,
    "Réservoir conforme 1 800 litres": 350,
    "Réservoir largables 500 litres": 200,
    "Réservoir largables 800 litres": 250,
    "Réservoir largables 1 000 litres": 300,
    "Réservoir largables 1 300 litres": 350,
    "Réservoir largables 1 500 litres": 400,
    "Réservoir largables 1 800 litres": 450
  }
};

const idMap = {
  "Air-sol": "air-sol",
  "Anti-air": "anti-air",
  "Anti-char": "anti-char",
  "Anti-navire": "anti-navire",
  "Missile de croisière": "missile-croisiere",
  "Missile multi rôles": "missile-multi",
  "Pods": "pods",
  "Réservoirs": "reservoirs"
};

const cart = [];

function populateSelects() {
  for (const category in weapons) {
    const select = document.getElementById(idMap[category]);
    if (!select) continue;
    for (const item in weapons[category]) {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    }
  }
}

function addItem(category) {
  const select = document.getElementById(idMap[category]);
  const item = select.value;
  const qty = parseInt(document.getElementById(`qty-${idMap[category]}`).value);
  const price = weapons[category][item];

  const existing = cart.find(c => c.name === item);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ name: item, qty, price });
  }

  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.qty}</span>
      <span>${item.name}</span>
      <span style="color: orange;">${item.qty * item.price}</span>
      <span class="delete" onclick="removeItem(${i})">❌</span>
    `;
    list.appendChild(li);
    total += item.qty * item.price;
  });

  document.getElementById("total").textContent = total;
}

function sendOrder() {
  const pseudo = document.getElementById("pseudo").value;
  const code = document.getElementById("code").value;

  if (!pseudo || !code) {
    alert("Veuillez entrer votre pseudo et le code.");
    return;
  }

  if (cart.length === 0) {
    alert("Votre panier est vide.");
    return;
  }

  fetch("https://backends-g03x.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pseudo,
      code,
      cart
    })
  })
    .then(response => {
      if (!response.ok) {
        return response.text().then(msg => { throw new Error(msg); });
      }
      alert("Commande envoyée à Discord !");
      cart.length = 0;
      renderCart();
    })
    .catch(error => {
      alert(`Erreur : ${error.message}`);
    });
}

populateSelects();
