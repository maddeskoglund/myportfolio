const posts = [
    {
        id: "1",
        name: "Acedu",
        caption: "HTML CSS Bootstrap Durandal Knockout",
        info: "Mitt första projekt hos Eventful. En av deras samarbetspartners behövde en uppfräschning av deras sida. Temat skulle vara flatdesign, se snyggt och livfullt ut, och fortfarande inge förtroende för företaget. Började projektet med att göra mockup i Illustrator och diskutera detta med kunden. Jag har själv varit missnöjd många gånger och testat mig fram med olika stilar. Jag har använt google och youtube mycket för att hämta inspiration.",
        milestone: "Jag har lärt mig otroligt mycket i det här projektet. Jag har jobbat tätt tillsammans med min kollega Mikael Nilsson på Eventful. Mikael har gjort mestadels gjort saker i bakgrunden, han tagit hand om databaser, flytt av sidan, svårare programmeringsbitar och headern. Resten har jag gjort om och snyggat till. Mer information om Acedu finns i min examensrapport. De hinder vi haft på vägen har varit att få till en snygg design. Vi har haft fria händer gällande färger, bilder och utseende. Vilket gör det svårare tycker jag, men en stor lärdom jag tar med mig är att små detaljer spelar väldigt stor roll. Här har jag också träffat på jQuery för första gången.",
        image: '/myportfolio/images/responsive-acedu.png',
        responsive: '/myportfolio/images/responsive-acedu.png',
        // url: ''
    },
    {
        id: "2",
        name: "Madelein Skoglund",
        caption: "React PWA JSX CSS Javascript ES6",
        info: "Du ser den live nu! Kul att få jobba med React igen, jag gillar det. Det kändes inte lika avancerat den här gången, det gick mycket snabbare och smidigare.",
        milestone: "Jag bestämde ganska tidigt att jag ville använda mig av flatdesign. Jag har jobbat ganska hårt med att få till detaljer, som hover över bilderna i portfoliot och att footern ska vara fast bakom contentet. Jag hade även en del problem med att få till popupen.",
        image: '/myportfolio/images/madeleinskoglund.jpg',
        responsive: '/myportfolio/images/responsive-madeleinskoglund.gif',
        // url: ''
    },
    {
        id: "3",
        name: "Väderapp",
        caption: "React Redux PWA API JSX CSS Javascript ES6",
        info: "En väderapp byggd för skolarbete. Riktigt roligt och svårt att som nybörjare komma in i både Javascript och React samtidigt, efterhand las Redux till också. Appen visar högsta och lägsta temperaturen för tre dagar, icon för typen av väder, nederbörd och medelhastigheten för vindstyrka. API:t hämtar data från SMHI. Du hittar den på mitt Github-konto.",
        image: '/myportfolio/images/weather.jpg',
        milestone: "Som jag har kämpat och byggt om den här appen. Till en början är SMHI:s API svårt, det finns ingen logik i det. I en av mina första versioner använde jag ett API från en utländsk aktör, men kände att jag ändå ville använda mig av SMHI i slutändan. För ett kort stund hämtade appen även dina kordinater så att man fick vädret från sin närmaste väderstation, men svarstiden blev för lång så det kändes inte seriöst. På det stora hela är jag nöjd med appen, designen hade absolut kunnat vara bättre, men det var inte min prioritet under projektet.",
        responsive: '/myportfolio/images/weather.jpg',
        // url: ''                
    },
    {
        id: "4",
        name: "Trähusarkitekten",
        caption: "Logotyp Grafisk profil Webbdesign WordPress",
        info: "Arkitektbyrå som behövde en ny hemsida. Jag har tagit fram den grafiska designen, logotypen och gjort webbdesignen till dem. Byggd i WordPress.",
        image: '/myportfolio/images/trahusarkitekten.jpg',
        milestone: "En stor milstolpe i detta projekt, jag har fått fram en sida i Wordpress som faktiskt ser bra ut.",
        responsive: '/myportfolio/images/responsive-trahusarkitekten.gif',
        url: 'https://trahusarkitekten.se'
    },
    {
        id: "5",
        name: "Nyckelhus",
        caption: "Logotyp Grafisk profil Webbdesign WordPress",
        info: "Hustillverkare som delvis ska utöka sin verksamhet och behövde därför en ny hemsida. Jag har tagit fram den grafiska designen, logotypen och gjort webbdesignen till dem. Jag har även skrivit en hel del av texterna. Husmodeller kommer att läggas till inom kort. Byggd i WordPress.",
        image: '/myportfolio/images/nyckelhus.jpg',
        milestone: "En sida jag inte är speciellt nöjd med, jag håller på och filar på en ny version av denna. Som många av mina andra projekt så är även denna flatdesign. Jag kämpar på med Wordpress, men tycker att det är så himla svårt att få till allt som man vill. Vill man ändra en liten grej, så ligger det 10-20 klasser på den, så det är svårt att träffa rätt. Har börjat mixtra både ett childtheme och ett eget tema till den. Så småningom kommer den här sidan också att bli snygg, men det är en bit kvar.",
        responsive: '/myportfolio/images/responsive-nyckelhus.gif',
        url: 'https://nyckelhus.se'

    },
    {
        id: "6",
        name: "Lilla Gilbert",
        caption: "Logotyp Grafisk profil Webbdesign WordPress",
        info: "Skolprojekt. Uppdrag; Bygg en webbshop med minst en produkt. Slutligen hamnade mitt val på posters för barn, då jag tycker att det saknas söta posters på marknaden. Gjorde en del illustrationer i Adobe Illustrator. Byggd i WordPress.",
        image: '/myportfolio/images/lillagilbert.jpg',
        milestone: "Mitt första möte med Wordpress och fortfarande ett år senare kommer vi inte överens. Jag ville hålla sidan ren, jag gillar whitespace och stora hero-bilder. Största svårigheten i det här projektet hade med skolarbetet att göra; Pains, Gains and Jobs to be done. Jag hade svårt att hitta på vettigt content till att skriva om i mina blogginlägg, även SEO:n var lite svår. Det tog många timmar för varje inlägg att blir okej.",
        responsive: '/myportfolio/images/responsive-lillagilbert.gif',
        url: 'https://www.lillagilbert.se'
    },
    {
        id: "7",
        name: "Blogg i HTML / CSS",
        caption: "HTML CSS Responsive Resposive-images",
        info: "Skolprojekt. Uppdraget var att bygga en blogg i HTML och CSS. Självklart responsiv.",
        image: '/myportfolio/images/blogg.jpg',
        milestone: "Den här sidan var hyfsat enkel att göra, jag hade fått ganska mycket kött på benen efter bokhandeln som vi gjorde innan. Dessutom är HTML och CSS ganska enkelt och roligt att jobba med.",
        responsive: '/myportfolio/images/responsive-blogg.jpg',
        // url: ''
    },
    {
        id: "8",
        name: "Bokhandel i HTML / CSS",
        caption: "HTML CSS Responsive",
        info: "Skolprojekt. Mitt första projekt, kommer ihåg hur ingenting blev som jag ville till en början. Byggd i HTML och CSS. Uppdraget var att bygga en bokhandel, likt bokus.",
        image: '/myportfolio/images/min-bok.jpg',
        responsive: '/myportfolio/images/responsive-min-bok.jpg',
        // url: ''
    },
];

export default posts;
