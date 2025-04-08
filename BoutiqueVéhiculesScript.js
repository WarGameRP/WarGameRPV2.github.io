const weapons = {
  "USA": {
    "Classe Ticonderoga": 30000,
    "Classe America": 45000,
    "Classe Gerald R. Ford": 100000,
    "Classe San Antonio": 35000,
    "Classe Freedom": 15000,
    "Classe Zumwalt": 60000,
    "M10 Booker": 2500,
    "LSVR": 700,
    "M1297 AGMV": 600,
    "F-117": 15000,
    "F-16C":  15500,
    "F-15E": 17500,
    "MIM-104 Patriot": 14000,
    "AN/TWQ-1 Avenger": 2500,
    "UH-60": 1500,
    "Ch-47": 4000,
    "Classe Arleigh Burke": 25000,
    "Classe Ohio": 35000,
    "M142 HIMARS":  4000,
    "M270": 3000,
    "F/A-18C": 15800
  },

  "Russie": {
    "Classe Amiral Gorchkov": 50000,
    "Classe Oudaloï II": 22000,
    "Classe Slava": 25000,
    "Classe Ivan Gren": 20000,
    "Classe Admiral Kuznetsov": 75000,
    "Mig-29SMT": 15200,
    "GAZ 2330 TIGR": 700,
    "Kamaz Typhoon-63968": 700,
    "VPK-7829": 2200,
    "BMPT Terminator": 2750,
    "BMP-2": 1500,
    "T-90M": 4250,
    "2S25 Sprut-SD": 3000,
    "Su-33": 16000,
    "Su-25SM3":  13000,
    "Pantsir-S1":  8000,
    "Ka-52": 7000,
    "2S40 Floks":  2200,
    "2S43 Malva": 3800,
    "TOS-1": 3000,
    "2S35 Koalitsiya-SV":  3500
  },

  "Chine": {
    "Z-10":  5500,
    "Dongfeng EQ2050": 350,
    "FAW MV3": 600,
    "ZLT-11": 3500,
    "ZBL-08": 3250,
    "ZBD-04A": 3500,
    "QN-506":  4500,
    "ZTZ-99A":  4500,
    "ZTQ-15": 4000,
    "VT-4":  4250,
    "PLZ-05": 3000,
    "PHL-03": 3000,
    "PCL-171": 2500,
    "WZ-551":  1750,
    "Type 89 YW534": 900,
    "PGZ-09": 4000,
    "HQ-17": 6000,
    "HQ-16": 7000,
    "Z-19E": 4000
  },

  "France": {
    "Classe Charles de Gaulle": 85000,
    "FREMM":  35000,
    "Leclerc": 4000,
    "Rafale M": 17000,
    "VBCI-2/T40 Philoctète":  1500,
    "VCBI": 1200,
    "Griffon VBTT": 800,
    "Classe Amiral Ronarc h": 30000,
    "Mamba - (SAMP/T)": 7500,
    "CAESAR": 3000,
    "CAESAR 8x8": 3500,
    "Mirage 2000-5F": 16200,
    "Scarabee": 700
  },

  "Afrique-du-sud": {
    "Atlas Oryx":  1750,
    "Umkhonto SAM": 6000,
    "AH-2 Rooivalk": 5000,
    "Bateleur FV2": 2500,
    "G6 Rhino": 2800,
    "Olifant Mk.2":  2800,
    "Rooikat MTTD": 3000,
    "Badger IFV SV":  1400,
    "Mamba VBTT": 800
  },

  "Corée-du-Sud": {
    "KAI LAH": 4500,
    "K21": 1750,
    "K151 Raycolt": 800,
    "K200 KIFV": 900,
    "KAI Surion": 2000,
    "K2 Black Panther": 4750,
    "K9 Thunder": 3000,
    "K239 Chunmoo": 2750,
    "K808 White Tiger": 1800,
    "K30 Biho": 4000
  },

  "Japon": {
    "Type 89": 1500,
    "Type 90B": 4000,
    "Type 10": 4500,
    "Type 99": 3050,
    "Type 19": 2750,
    "Type 96": 900,
    "Type 87": 4000,
    "Type 16MCV": 3750
  },

  "Autres": {
    "Eurofighter Typhoon |Allemagne|": 17500,
    "PzH 2000|Allemagne|": 3000,
    "MAN HX 8x8 |Allemagne|": 3200,
    "MAN 8x8 |Allemagne|": 600,
    "AS21 Redback |Australie|": 2000,
    "Bell UH-1H |Belize|": 1200,
    "WS51200|Corée-du-Nord|": 10000,
    "Cheonma-2 |Corée-du-Nord|": 4000,
    "Merkava Mk.2D |Israel|": 3800,
    "AW159 Wildcat |Italie|": 5000,
    "Iveco SuperAV |Italie|": 1500,
    "Challenger 2 OES |Royaume-uni": 4000,
    "Eurofighter Typhoon |Royaume-uni| ": 17500,
    "DANA ShKH vz. 77|slovaquie|": 3500,
    "JAS 39C |Suède|": 14800,
    "CV90 |Suède|": 2500,
    "Piranha IIIC 30mm |Suisse|": 1100
  }
};


const idMap = {
  "USA": "USA",
  "Russie": "Russie",
  "Chine": "Chine",
  "France": "France",
  "Afrique-du-sud": "Afrique-du-sud",
  "Corée-du-Sud": "Corée-du-Sud",
  "Japon": "Japon",
  "Autres": "Autres"
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
          color: 0xFF0000,
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
        title: `🛒 Nouvelle commande`,
        color: 0x00BFFF,
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

