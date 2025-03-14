let counter = 0;

   export default async (req, res) => {
     // URLs und Alert-IDs für Kanal 1 und 2
     const channels = [
       {
         url: "https://tvwebhook.capitalise.ai",
         alertId: "e502a79c-11b2-4580-aada-5f00db45d1bb"
       },
       {
         url: "https://tvwebhook.capitalise.ai",
         alertId: "4134e249-9989-4b2a-ac45-7df5becd0bc9"
       }
     ];

     // Bestimme Zielkanal
     const target = channels[counter % 2];
     counter++;

     // Sende die Nachricht an Capitalise.ai
     await fetch(target.url, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ alertId: target.alertId })
     });

     res.status(200).send("Erfolgreich an " + target.url);
   };
