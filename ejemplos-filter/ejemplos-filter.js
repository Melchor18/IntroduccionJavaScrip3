let numeros = [1,2,3,4,5,6,7,8,9,10];

function esPar(n){
    return n % 2 === 0;
}

console.log(numeros.filter(esPar));

console.log(numeros.filter( x => x % 2 !== 0))
let datos = [{
    "id": 1,
    "first_name": "Morry",
    "last_name": "Stopp",
    "email": "mstopp0@vinaora.com",
    "gender": "Male",
    "ip_address": "204.91.244.109"
}, {
    "id": 2,
    "first_name": "Jeffry",
    "last_name": "Freire",
    "email": "jfreire1@google.com.hk",
    "gender": "Male",
    "ip_address": "89.131.178.108"
}, {
    "id": 3,
    "first_name": "Lonna",
    "last_name": "Binns",
    "email": "lbinns2@accuweather.com",
    "gender": "Female",
    "ip_address": "67.215.164.102"
}, {
    "id": 4,
    "first_name": "Luisa",
    "last_name": "Camsey",
    "email": "lcamsey3@java.com",
    "gender": "Female",
    "ip_address": "108.196.144.184"
}, {
    "id": 5,
    "first_name": "Kylie",
    "last_name": "Seargeant",
    "email": "kseargeant4@unicef.org",
    "gender": "Bigender",
    "ip_address": "6.214.155.165"
}, {
    "id": 6,
    "first_name": "Kip",
    "last_name": "Burdin",
    "email": "kburdin5@tuttocitta.it",
    "gender": "Female",
    "ip_address": "138.11.79.107"
}, {
    "id": 7,
    "first_name": "Cindi",
    "last_name": "Donisi",
    "email": "cdonisi6@blogtalkradio.com",
    "gender": "Female",
    "ip_address": "247.86.100.201"
}, {
    "id": 8,
    "first_name": "Durant",
    "last_name": "Cariss",
    "email": "dcariss7@salon.com",
    "gender": "Male",
    "ip_address": "80.220.15.137"
}, {
    "id": 9,
    "first_name": "Natasha",
    "last_name": "Lademann",
    "email": "nlademann8@slashdot.org",
    "gender": "Female",
    "ip_address": "120.57.190.132"
}, {
    "id": 10,
    "first_name": "Janella",
    "last_name": "Copcott",
    "email": "jcopcott9@e-recht24.de",
    "gender": "Female",
    "ip_address": "181.190.47.80"
}, {
    "id": 11,
    "first_name": "Atalanta",
    "last_name": "Kitchinham",
    "email": "akitchinhama@etsy.com",
    "gender": "Genderfluid",
    "ip_address": "73.239.11.82"
}, {
    "id": 12,
    "first_name": "El",
    "last_name": "Climson",
    "email": "eclimsonb@hostgator.com",
    "gender": "Male",
    "ip_address": "203.55.128.130"
}, {
    "id": 13,
    "first_name": "Adina",
    "last_name": "Hollingby",
    "email": "ahollingbyc@csmonitor.com",
    "gender": "Female",
    "ip_address": "218.194.39.86"
}, {
    "id": 14,
    "first_name": "Arly",
    "last_name": "Sparshutt",
    "email": "asparshuttd@japanpost.jp",
    "gender": "Female",
    "ip_address": "216.87.189.26"
}, {
    "id": 15,
    "first_name": "Napoleon",
    "last_name": "Bargh",
    "email": "nbarghe@cisco.com",
    "gender": "Male",
    "ip_address": "140.201.55.123"
}, {
    "id": 16,
    "first_name": "Charita",
    "last_name": "O' Mullan",
    "email": "comullanf@vistaprint.com",
    "gender": "Female",
    "ip_address": "69.168.151.200"
}, {
    "id": 17,
    "first_name": "Bernadina",
    "last_name": "Marchent",
    "email": "bmarchentg@nydailynews.com",
    "gender": "Female",
    "ip_address": "108.178.60.190"
}, {
    "id": 18,
    "first_name": "Bo",
    "last_name": "Desaur",
    "email": "bdesaurh@simplemachines.org",
    "gender": "Male",
    "ip_address": "185.167.215.87"
}, {
    "id": 19,
    "first_name": "Kore",
    "last_name": "Kite",
    "email": "kkitei@slate.com",
    "gender": "Female",
    "ip_address": "189.105.184.65"
}, {
    "id": 20,
    "first_name": "Karrie",
    "last_name": "Blenkin",
    "email": "kblenkinj@constantcontact.com",
    "gender": "Female",
    "ip_address": "28.44.124.196"
}, {
    "id": 21,
    "first_name": "Erminie",
    "last_name": "Muge",
    "email": "emugek@xing.com",
    "gender": "Female",
    "ip_address": "207.221.152.85"
}, {
    "id": 22,
    "first_name": "Linea",
    "last_name": "Bowdery",
    "email": "lbowderyl@springer.com",
    "gender": "Female",
    "ip_address": "128.110.93.121"
}, {
    "id": 23,
    "first_name": "Der",
    "last_name": "Putson",
    "email": "dputsonm@prlog.org",
    "gender": "Male",
    "ip_address": "92.186.190.155"
}, {
    "id": 24,
    "first_name": "Nadia",
    "last_name": "Ties",
    "email": "ntiesn@forbes.com",
    "gender": "Female",
    "ip_address": "158.11.159.90"
}, {
    "id": 25,
    "first_name": "Tracey",
    "last_name": "Burnyeat",
    "email": "tburnyeato@springer.com",
    "gender": "Male",
    "ip_address": "103.116.2.69"
}, {
    "id": 26,
    "first_name": "Mellicent",
    "last_name": "Enrietto",
    "email": "menriettop@infoseek.co.jp",
    "gender": "Female",
    "ip_address": "14.50.173.75"
}, {
    "id": 27,
    "first_name": "Jana",
    "last_name": "Hurnell",
    "email": "jhurnellq@sitemeter.com",
    "gender": "Female",
    "ip_address": "247.228.238.116"
}, {
    "id": 28,
    "first_name": "Teddi",
    "last_name": "Lawrinson",
    "email": "tlawrinsonr@blinklist.com",
    "gender": "Female",
    "ip_address": "45.250.152.224"
}, {
    "id": 29,
    "first_name": "Dinny",
    "last_name": "Lyard",
    "email": "dlyards@chron.com",
    "gender": "Female",
    "ip_address": "159.255.191.50"
}, {
    "id": 30,
    "first_name": "Isabel",
    "last_name": "Weiner",
    "email": "iweinert@time.com",
    "gender": "Polygender",
    "ip_address": "104.19.205.213"
}, {
    "id": 31,
    "first_name": "Marlow",
    "last_name": "Colbertson",
    "email": "mcolbertsonu@macromedia.com",
    "gender": "Male",
    "ip_address": "138.113.49.246"
}, {
    "id": 32,
    "first_name": "Jen",
    "last_name": "Eccles",
    "email": "jecclesv@sciencedaily.com",
    "gender": "Female",
    "ip_address": "227.66.9.61"
}, {
    "id": 33,
    "first_name": "Emera",
    "last_name": "Watsam",
    "email": "ewatsamw@altervista.org",
    "gender": "Female",
    "ip_address": "57.177.130.106"
}, {
    "id": 34,
    "first_name": "Lory",
    "last_name": "Coie",
    "email": "lcoiex@dell.com",
    "gender": "Female",
    "ip_address": "178.22.203.247"
}, {
    "id": 35,
    "first_name": "Rosana",
    "last_name": "Isacsson",
    "email": "risacssony@businesswire.com",
    "gender": "Female",
    "ip_address": "40.105.217.148"
}, {
    "id": 36,
    "first_name": "Weylin",
    "last_name": "Allot",
    "email": "wallotz@bbb.org",
    "gender": "Polygender",
    "ip_address": "176.167.250.216"
}, {
    "id": 37,
    "first_name": "Alleyn",
    "last_name": "Valenta",
    "email": "avalenta10@stumbleupon.com",
    "gender": "Male",
    "ip_address": "223.170.60.232"
}, {
    "id": 38,
    "first_name": "Karoline",
    "last_name": "Lawson",
    "email": "klawson11@e-recht24.de",
    "gender": "Female",
    "ip_address": "205.62.50.9"
}, {
    "id": 39,
    "first_name": "Roz",
    "last_name": "Junkison",
    "email": "rjunkison12@paypal.com",
    "gender": "Female",
    "ip_address": "160.165.135.188"
}, {
    "id": 40,
    "first_name": "Rowe",
    "last_name": "Trotman",
    "email": "rtrotman13@clickbank.net",
    "gender": "Female",
    "ip_address": "95.193.138.114"
}, {
    "id": 41,
    "first_name": "Bink",
    "last_name": "Handrok",
    "email": "bhandrok14@acquirethisname.com",
    "gender": "Male",
    "ip_address": "204.55.198.63"
}, {
    "id": 42,
    "first_name": "Lauren",
    "last_name": "Hince",
    "email": "lhince15@multiply.com",
    "gender": "Female",
    "ip_address": "155.88.165.248"
}, {
    "id": 43,
    "first_name": "Heddi",
    "last_name": "Brownett",
    "email": "hbrownett16@upenn.edu",
    "gender": "Female",
    "ip_address": "33.87.61.219"
}, {
    "id": 44,
    "first_name": "Eloise",
    "last_name": "Sollner",
    "email": "esollner17@last.fm",
    "gender": "Female",
    "ip_address": "52.139.24.76"
}, {
    "id": 45,
    "first_name": "Duane",
    "last_name": "Jorio",
    "email": "djorio18@sina.com.cn",
    "gender": "Male",
    "ip_address": "93.225.130.242"
}, {
    "id": 46,
    "first_name": "Willis",
    "last_name": "Linacre",
    "email": "wlinacre19@sakura.ne.jp",
    "gender": "Male",
    "ip_address": "20.27.2.161"
}, {
    "id": 47,
    "first_name": "Anitra",
    "last_name": "Joontjes",
    "email": "ajoontjes1a@miibeian.gov.cn",
    "gender": "Female",
    "ip_address": "118.176.145.205"
}, {
    "id": 48,
    "first_name": "Marinna",
    "last_name": "Janczewski",
    "email": "mjanczewski1b@tamu.edu",
    "gender": "Female",
    "ip_address": "49.53.149.118"
}, {
    "id": 49,
    "first_name": "Mose",
    "last_name": "Cullotey",
    "email": "mcullotey1c@google.de",
    "gender": "Male",
    "ip_address": "49.209.162.252"
}, {
    "id": 50,
    "first_name": "Ardelle",
    "last_name": "Fairey",
    "email": "afairey1d@globo.com",
    "gender": "Female",
    "ip_address": "103.250.110.117"
}]
/*
console.log(datos.filter(persona => persona.gender === "Female")
.map(persona => persona.first_name)
)
console.log(datos.filter(persona => persona.gender === "Male")
.map(persona => persona.first_name)
)
console.log(
    datos
    .map(persona => persona.gender)
    .sort()

)
*/
console.log(
    datos.sort(
        (a, b) => {
            if (a.first_name < b.first_name) return -1;
            if (a.first_name > b.first_name) return  1;
            if (a.first_name = b.first_name) return  0;

        }
    )
);

function personaHTML(persona){
    return `
    <div class= "ficha-persona">
    <h2>${persona.first_name} ${persona.last_name} </h2>
    <a href="mailto:${persona.email}">Enviar Mail</a>
    </div>`;
}

document.getElementById("lista-clientes").innerHTML =
    datos.sort(
        (a, b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
        }
    )
    .filter(x => x.gender !== "Female" &&  x.gender !== "Male")
    .map(personaHTML)
    .map(x =>`<li>${x} </li>`)
    .join("\n")
    
