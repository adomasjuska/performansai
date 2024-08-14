// Arrays containing different options

const locations = ["Baltame kube", "Buvusiame fabrike", "Bašto pastate","Teatro foje", "Miesto aikštėje","Autobusų parke","Dideliame narve" ];
const actors = ["aštuonios avys", "nuoga moteris", "baltai apsirengusi minia","keturi identiškai apsirengę vyrai", "grupė žmonių ilgais plaukais ir laisvai krentančiais žemės spalvos drabužiais", "įžymus žmogus ne iš meno srities","trys jaunos merginos ryškiais neoniniais kostiumais"];
const actions = ["lėtai lipa kopėčiomis", "skaito telefonų knygą", "dalimis išrinkinėja automobilį","valandą guli ant grindų","ilgai skaito socialinės teorijos tekstus","pila ant savęs netikrą kraują ir panašius skysčius","kas trisdešimt sekundžių surinka","energingai vaikšto ratais kvadratais","pusdienį sėdį vienoje vietoje","verkia","raitosi ant grindų ir panašiai šoka","bet kaip teplioja dažus ant didelės drobės","tampo sunkius objektus"];

const fonai = [" viršuje skraidant dviem dronams",", fone skambant šalies himnui",", fone skambant liaudies dainoms",", kol antrame plane mušamas gongas",", kol projekcijoje rodomi įvairūs archyviniai kadrai"," gyvai grojant styginių kvartetui",", kol fone rodomas livestream’as iš judrios sankryžos viename Azijos didmiesčių",", kol fone per kolonėles garsiai leidžiamas white noise’as",", fone saksofonistui pučiant vieną natą",];
const temp = ["","","","","","","","","","","","","","","","","","","",""];
const skatinimai = ["kvestionuoja","analizuoja","reinterpretuoja","dekonstruoja","skatina žiūrovus permąstyti","tyrinėja","atspindi","kritikuoja","provokuoja susimąstyti apie"];
const normas = ["nusistovėjusias normas","galios santykius","intersekcionalumą","tradicinius naratyvus","žmogiškosios patirties hermetiškumą","izoliacijos poveikį","lyties ir socialinių vaidmenų kintamumą","produktyvumo kultą","įtampą tarp gamtos ir urbanistinių procesų","meno komercializaciją","traumų cikliškumą",];
const visuomenes = ["darbo aplinkoje","vartotojiškoje visuomenėje","skaitmenizuotame pasaulyje","kapitalistinėje santvarkoje","vykstančio karo fone","post-truth amžiuje","formuojant asmeninę tapatybę","formuojant tautinę tapatybę","instituciniame lygmenyje"];

// Function to generate a random sentence
function generateSentence() {
    const action = actions[Math.floor(Math.random() * actions.length)];
    const actor = actors[Math.floor(Math.random() * actors.length)];
    const fonas = fonai[Math.floor(Math.random() * fonai.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const skatina= skatinimai[Math.floor(Math.random() * skatinimai.length)];
    const norma= normas[Math.floor(Math.random() * normas.length)];
    const visuomene= visuomenes[Math.floor(Math.random() * visuomenes.length)];


    return `${location} ${actor} ${action}${fonas}. Šis performansas ${skatina} ${norma} ${visuomene}.`;
}

// Event listener for button click
document.getElementById('generate-button').addEventListener('click', function() {
    const generatedText = generateSentence();
    document.getElementById('generated-text').innerText = generatedText;
});