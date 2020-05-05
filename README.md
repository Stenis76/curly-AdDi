# curly-AdDi
En användarbaserad plattform där en användare har möjligheten att registrera sig, logga in och skapa innehåll


Lab 3 - User Based Content

Ni ska skapa en användarbaserad plattform där en användare har möjligheten att registrera sig, logga in och skapa innehåll. Vad för innehåll som användaren kan skapa är valfritt med det ska vara baserat på en resurs i erat Express-API. Användardatan ska även den baseras på en egen resurs (users), där lösenordet är krypterat. Samtligt innehåll som skapas, förändras eller tas bort ska sparas till en MongoDB databas. Innehållet som en användare skapar får endast lov att ändras eller tas bort av skaparen. Plattformen ska innehålla en klientapplikation där samtliga operationer som nämnts ovan är genomförbara. Dessutom ska innehållet på något sätt presenteras i gränssnittet och vara synligt föra alla - även om man inte är inloggad.

Ni väljer själva om ni vill använda en utökad utvecklings-stack i projektet, notera att detta inte är ett krav. Exempelvis: Typescript, React, Vue, mm - Låt kreativiteten flöda!

För att bli godkänd på den här uppgiften MÅSTE ni använda GIT och GitHub. Inlämningen sker som vanligt via Zenit där lämnar in er projektmapp som en zip-fil. I projektmappen ska det finnas (utöver all kod) en README.md fil som innehåller en titel, beskrivning av uppgiften och vad som krävs för att bygga och starta projektet, samt en länk till GitHub repot. Notera att om instruktioner för hur projektet byggs och startas inte finns eller om instruktionerna är felaktiga kan uppgiften bli underkänd.

En muntligt presentation ska genomföras per grupp där ni visar vad ni har skapat. Den laddas upp på Teams innan klockan 14:00 på presentationsdagen så ni har tid att opponera på varandra. Para ihop er i grupp om tre - ni väljer själva vilka ni jobbar med.

Krav för godkänt:

Git & GitHub har använts

Projektmappen innehåller en README.md fil (läs ovan för mer info)

Uppgiften lämnas in i tid!

Det ska finnas minst två stycken resurser med CRUD-Endpoints

Det ska gå att registrera sig, logga in och skapa innehåll som är kopplat till inloggad

användare.

Endast den inloggade användaren får lov att utföra C_UD actions på sitt innehåll.

Allt innehåll ska sparas i en MongoDB databas.

 

Krav för väl godkänt:

Alla punkter för godkänt är uppfyllda

Det ska finnas en adminroll i systemet där man som inloggad admin har rättigheten att

utföra CRUD operationer på allt innehåll.

Admins ska ha tillgång till ett gränssnitt som listar alla användare och deras roller. En

admin ska från gränssnittet kunna ta bort användare eller ändra dess roll.