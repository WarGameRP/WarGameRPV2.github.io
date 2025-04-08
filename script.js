const weapons = {
  "Air-sol": {
    "AASM 250 HAMMER SBU 38": 500,
    "AASM 250 HAMMER SBU 54": 750,
    "AASM 250 HAMMER SBU 64": 700,
    "Bombe de 50kg": 25,
    "Bombe de 100kg": 50,
    "Bombe de 120kg": 60,
    "Bombe de 120kg parachutée": 70,
    "Bombe de 150kg": 75,
    "Bombe de 200kg": 100,
    "Bombe de 230kg": 115,
    "Bombe de 230kg parachutée": 115,
    "Bombe de 250kg": 125,
    "Bombe de 500kg": 250,
    "Bombe de 1 000kg": 500,
    "Bombe de 1 000kg parachutée": 550,
    "Bombe de 2 000kg": 1000,
    "Bombe de 3 000kg": 1500,
    "BLU-27/B": 200,
    "BLU-107": 150,
    "BLU-126": 125,
    "Cannon GSh-23L": 300,
    "CBU-103": 200,
    "CBU-104": 250,
    "CBU-105 SFW": 350,
    "CBU-107": 400,
    "FAB-250M-54": 125,
    "FAB-250M-62": 125,
    "FAB-500M-54": 250,
    "FAB-500M-62": 250,
    "19 x FFAR Mighty Mouse": 100,
    "GBU-8": 450,
    "GBU-10": 750,
    "GBU-12": 500,
    "GBU-15": 600,
    "GBU-16": 650,
    "GBU-22": 600,
    "GBU-24": 800,
    "GBU-27": 950,
    "GBU-31": 1000,
    "GBU-35": 1100,
    "GBU-38": 1200,
    "GBU-39": 1300,
    "GBU-48": 850,
    "GBU-49": 700,
    "GBU-54": 850,
    "19 x Hydra-70 M247": 120,
    "KAB-500Kr-E": 850,
    "KAB-500S": 800,
    "Kh-25": 700,
    "Kh-29L": 1100,
    "Kh-29TD": 1200,
    "OFAB-100": 50,
    "OFAB-250-270": 130,
    "OFAB-250Sh": 130,
    "OFAB-250Sv": 130,
    "Paveway IV": 900,
    "6 x Psrak m/70": 90,
    "20 x S-8KO": 120,
    "S-24B": 150,
    "S-25LD": 600,
    "5 x S-130F": 175,
    "S-250": 200,
    "S-250F": 220,
    "ZB-500": 250
  },

  "Anti-air": {
    "AIM-7F": 250,
    "AIM-7M": 300,
    "AIM-7P": 350,
    "AIM-9P": 400,
    "AIM-9L": 500,
    "AIM-9L/I-1": 600,
    "AIM-9M": 600,
    "AIM-9X": 900,
    "AIM-120A": 800,
    "AIM-120B": 850,
    "AIM-120C": 1000,
    "AIM-120D": 1200,
    "AIM-132": 950,
    "AIM-260": 1750,
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
    "R-77-1": 900,
    "RB-74": 500,
    "RB-74M": 600,
    "RB-99": 850
  },

  "Anti-char": {
    "AGM-65D": 500,
    "AGM-65E": 550,
    "AGM-65F": 600,
    "AGM-65G": 650,
    "AGM-130": 1000,
    "AGM-130A-12": 1200,
    "Brimstone": 900,
    "Kh-25ML": 800,
    "Kh-25MP": 850,
    "Kh-29T": 1000,
    "Kh-29TE": 1250,
    "Kh-38": 1100,
    "Kh-38ML": 1300,
    "Kh-38MT": 1350,
    "RB-75": 700,
    "RB-75T": 750
  },

  "Anti-navire": {
    "AGM-84 Harpoon": 1200,
    "AGM-84 Harpoon Block II": 1500,
    "AM-39 Exocet": 1300,
    "ASM-3": 1800,
    "Kh-22": 1500,
    "Kh-31": 1500,
    "Kh-41 Moskit": 1800,
    "Penguin": 950,
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
    "160 x Flares": 80,
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
    "Réservoir largable 500 litres": 200,
    "Réservoir largable 800 litres": 250,
    "Réservoir largable 820 litres": 260,
    "Réservoir largable 1 000 litres": 300,
    "Réservoir largable 1 100 litres": 320,
    "Réservoir largable 1 250 litres": 335,
    "Réservoir largable 1 300 litres": 350,
    "Réservoir largable 1 400 litres": 380,
    "Réservoir largable 1 500 litres": 400,
    "Réservoir largable 1 800 litres": 480,
    "Réservoir largable 2 000 litres": 500,
    "Réservoir largable 2 300 litres": 540
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

populateSelects(); 
const VALID_USERS = {
  "Admin": "@dmiN1P@ssw0Rds1a",
  "TEST": "TEST",
  "Ashley Graves": "@GF1oRl#7aG",
  "Charles Le Gloan": "C#qK8j@LKh",
  "hover": "NLg@jaLEj#",
  "Antoine Ramet": "KDH93@hHsf"

};

const webhookUrl = "https://discord.com/api/webhooks/1358915246525382766/NN5WwVPEtSTYP6wFzxHcG198S6x_yxNeaFWgsgg6cdWztM40wsc7qsEkXBwIJyy2_z7-"; // 🔁 remplace par le tien

function hashIP(ip) {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return `UID${Math.abs(hash)}`;
}

function generateOrderId(pseudo, ipHash) {
  const now = new Date();
  const dateStr = now.toISOString().replace(/[-:.TZ]/g, "");
  const random = Math.floor(Math.random() * 10000);
  return `${pseudo.replace(/\s+/g, '_')}_${ipHash}_${dateStr}_${random}`;
}

function sendEmbedToDiscord(embed, components = []) {
  const payload = {
    embeds: [embed],
    components: components
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}

function sendOrder() {
  const pseudo = document.getElementById("pseudo").value;
  const code = document.getElementById("code").value;

  if (!pseudo || !code) {
    alert("Veuillez sélectionner un pseudo et entrer le code.");
    return;
  }

  const validCode = VALID_USERS[pseudo];
  if (code !== validCode) {
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => {
        const ip = data.ip;
        const embed = {
          title: "🚨 Tentative d'accès refusée",
          color: 0x6B8E23,
          fields: [
            { name: "👤 Pseudo", value: pseudo, inline: true },
            { name: "🔐 Code Saisi", value: `\`${code}\``, inline: true },
            { name: "🧬 ID lié", value: `\`${hashIP(ip)}\``, inline: true }
          ],
          timestamp: new Date().toISOString(),
          footer: { text: "Alerte sécurité" }
        };
        sendEmbedToDiscord(embed);
        alert("Code invalide. Une alerte a été envoyée.");
      });
    return;
  }

  if (cart.length === 0) {
    alert("Votre panier est vide.");
    return;
  }

  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      const ip = data.ip;
      const ipHash = hashIP(ip);
      const orderId = generateOrderId(pseudo, ipHash);

      const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

      const embed = {
        title: `🛒 Nouvelle commande d'arme`,
        color: 0x4B5320,
        fields: [
          { name: "👤 Pseudo", value: pseudo, inline: true },
          { name: "🆔 Order ID", value: `\`${orderId}\``, inline: true },
          { name: "🔐 UID", value: `\`${ipHash}\``, inline: true },
          { name: "💰 Total", value: `${total} €`, inline: true },
          { name: "📦 Contenu", value: cart.map(item => `- ${item.qty} x ${item.name} (${item.qty * item.price}€)`).join('\n') }
        ],
        timestamp: new Date().toISOString()
      };

      const components = [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 3,
              label: "✅ Valider",
              custom_id: "valider_commande"
            },
            {
              type: 2,
              style: 4,
              label: "❌ Refuser",
              custom_id: "refuser_commande"
            }
          ]
        }
      ];

      sendEmbedToDiscord(embed, components);

      alert("Commande envoyée à Discord !");
      cart.length = 0;
      renderCart();
    });
}
