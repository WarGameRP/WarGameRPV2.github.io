const weapons = {
  "William": {
    "BM-Classe Ticonderoga": 35000,
    "BM-Classe America": 40000,
    "BM-UH-60": 2000,
    "BM-F/A-18C": 20000
  },
  "Ivan": {
    "BM-Classe Amiral Gorchkov": 45000,
    "BM-TOS-1": 1000,
    "BM-Pantsir-S1": 15000
  },
  "Xiang": {
    "BM-WZ-551": 1250,
    "BM-HQ-16": 4000,
    "BM-ZTZ-99A": 20000
  },
  "Mohamed": {
    "BM-Leclerc": 2000,
    "BM-Rafale M": 10000,
    "BM-Scarabee": 150
  }
};

const idMap = {
  "William": "William",
  "Ivan": "Ivan",
  "Xiang": "Xiang",
  "Mohamed": "Mohamed"
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

const webhookUrl = "https://discord.com/api/webhooks/1358915246525382766/NN5WwVPEtSTYP6wFzxHcG198S6x_yxNeaFWgsgg6cdWztM40wsc7qsEkXBwIJyy2_z7-";

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
        title: `🛒 Nouvelle commande BlackMarket 👿`,
        color: 0x6C13EA ,
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
