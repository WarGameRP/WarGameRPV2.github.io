

const webhookUrl = "https://discord.com/api/webhooks/1359258745112105171/7u_bpdYiuWYFpaGQyHRRu4TdPTtIi7vGQEyXMzdg3ydmIsX-Uu922AXcDxISdwXKL9t4";

function hashIP(ip) {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    hash = ((hash << 5) - hash) + ip.charCodeAt(i);
    hash |= 0;
  }
  return `UID${Math.abs(hash)}`;
}

function sendIdea() {
  const pseudo = document.getElementById("pseudo").value.trim();
  const tag = document.getElementById("tag").value;
  const message = document.getElementById("message").value.trim();

  if (!pseudo || !message) {
    alert("Merci de remplir tous les champs.");
    return;
  }

  const emojis = {
    "Gameplay": "🎮",
    "Véhicules": "🚗",
    "Map": "🗺️",
    "Idée prochaine saison": "🌟",
    "Autres": "❓"
  };

  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      const uid = hashIP(data.ip);

      const embed = {
        embeds: [
          {
            title: "🧠 Nouvelle idée proposée",
            color: 5814783,
            fields: [
              { name: "👤 Pseudo", value: pseudo, inline: true },
              { name: "🏷️ Catégorie", value: `${emojis[tag]} ${tag}`, inline: true },
              { name: "🧬 UID", value: `\`${uid}\``, inline: true },
              { name: "💡 Idée", value: message }
            ],
            footer: {
              text: "Envoyé le " + new Date().toLocaleString()
            },
            timestamp: new Date().toISOString()
          }
        ]
      };

      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(embed)
      });

      alert("✅ Idée envoyée avec succès !");
      document.getElementById("message").value = "";
    });
}
