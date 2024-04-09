document.addEventListener('DOMContentLoaded', function () {
    var destinos = {
      "Brasil": ["Brasil - Acre - Rio Branco",
        "Brasil - Alagoas - Maceió",
        "Brasil - Amapá - Macapá",
        "Brasil - Amazonas - Manaus",
        "Brasil - Bahia - Salvador",
        "Brasil - Ceará - Fortaleza",
        "Brasil - Distrito Federal - Brasília",
        "Brasil - Espírito Santo - Vitória",
        "Brasil - Goiás - Goiânia",
        "Brasil - Maranhão - São Luís",
        "Brasil - Mato Grosso - Cuiabá",
        "Brasil - Mato Grosso do Sul - Campo Grande",
        "Brasil - Minas Gerais - Belo Horizonte",
        "Brasil - Pará - Belém",
        "Brasil - Paraíba - João Pessoa",
        "Brasil - Paraná - Curitiba",
        "Brasil - Pernambuco - Recife",
        "Brasil - Piauí - Teresina",
        "Brasil - Rio de Janeiro - Rio de Janeiro",
        "Brasil - Rio Grande do Norte - Natal",
        "Brasil - Rio Grande do Sul - Porto Alegre",
        "Brasil - Rondônia - Porto Velho",
        "Brasil - Roraima - Boa Vista",
        "Brasil - Santa Catarina - Florianópolis",
        "Brasil - São Paulo - São Paulo",
        "Brasil - Sergipe - Aracaju",
        "Brasil - Tocantins - Palmas"],

      "África": {
        "África do Sul": ["África do Sul - Pretória (executiva)", "África do Sul - Bloemfontein (judiciária)", "África do Sul - Cidade do Cabo (legislativa)"],
        "Angola": "Angola - Luanda",
        "Argélia": "Argélia - Argel",
        "Benim": ["Benim - Porto-Novo (constitucional)", "Benim - Cotonu (sede do governo)"],
        "Botswana": "Botswana - Gaborone",
        "Burkina Faso": "Burkina Faso - Ouagadougou",
        "Burundi": "Burundi - Bujumbura",
        "Cabo Verde": "Cabo Verde - Praia",
        "Camarões": "Camarões - Yaoundé",
        "Chade": "Chade - N’Djamena",
        "Comores": "Comores - Moroni",
        "Costa do Marfim": ["Costa do Marfim - Abidjan (sede do governo)", "Costa do Marfim - Yamoussoukro (constitucional)"],
        "Djibouti": "Djibouti - Djibouti",
        "Egito": "Egito - Cairo",
        "Eritreia": "Eritreia - Asmara",
        "Etiópia": "Etiópia - Adis-Abeba",
        "Gabão": "Gabão - Libreville",
        "Gana": "Gana - Acra",
        "Guiné": "Guiné - Conacri",
        "Guiné Equatorial": "Guiné Equatorial - Malabo",
        "Guiné-Bissau": "Guiné-Bissau - Bissau",
        "Gâmbia": "Gâmbia - Banjul",
        "Lesoto": "Lesoto - Maseru",
        "Libéria": "Libéria - Monróvia",
        "Líbia": "Líbia - Trípoli",
        "Madagáscar": "Madagáscar - Antananarivo",
        "Malawi": "Malawi - Lilongwe",
        "Mali": "Mali - Bamako",
        "Marrocos": "Marrocos - Rabat",
        "Mauritânia": "Mauritânia - Nouakchott",
        "Maurícia": "Maurícia - Port Louis",
        "Moçambique": "Moçambique - Maputo",
        "Namíbia": "Namíbia - Windhoek",
        "Nigéria": "Nigéria - Abuja",
        "Níger": "Níger - Niamey",
        "Quénia": "Quénia - Nairobi",
        "República Centro-Africana": "República Centro-Africana - Bangui",
        "República Democrática do Congo": "República Democrática do Congo - Kinshasa",
        "República do Congo": "República do Congo - Brazzaville",
        "Ruanda": "Ruanda - Kigali",
        "Senegal": "Senegal - Dakar",
        "Serra Leoa": "Serra Leoa - Freetown",
        "Seychelles": "Seychelles - Victoria",
        "Somália": "Somália - Mogadíscio",
        "Suazilândia": ["Suazilândia - Lobamba (real e legislativa)", "Suazilândia - Mbabane (administrativa)"],
        "Sudão": "Sudão - Cartum",
        "Sudão do Sul": "Sudão do Sul - Juba",
        "São Tomé e Príncipe": "São Tomé e Príncipe - São Tomé",
        "Tanzânia": ["Tanzânia - Dar es Salaam (administrativa)", "Tanzânia - Dodoma (oficial)"],
        "Togo": "Togo - Lomé",
        "Tunísia": "Tunísia - Tunis",
        "Uganda": "Uganda - Kampala",
        "Zâmbia": "Zâmbia - Lusaka",
        "Zimbabwe": "Zimbabwe - Harare"
      },
      "América do Norte": {
        "Canadá": "Canadá - Ottawa",
        "Estados Unidos da América": "Estados Unidos da América - Washington",
        "México": "México - Cidade do México"
      },
      "América Central": {
        "Antígua e Barbuda": "Antígua e Barbuda - Saint John’s",
        "Bahamas": "Bahamas - Nassau",
        "Barbados": "Barbados - Bridgetown",
        "Belize": "Belize - Belmopan",
        "Costa Rica": "Costa Rica - São José",
        "Cuba": "Cuba - Havana",
        "Dominica": "Dominica - Roseau",
        "El Salvador": "El Salvador - São Salvador",
        "Granada": "Granada - Saint George’s",
        "Guatemala": "Guatemala - Cidade da Guatemala",
        "Haiti": "Haiti - Porto Príncipe",
        "Honduras": "Honduras - Tegucigalpa",
        "Jamaica": "Jamaica - Kingston",
        "Nicarágua": "Nicarágua - Manágua",
        "Panamá": "Panamá - Cidade do Panamá",
        "República Dominicana": "República Dominicana - São Domingos",
        "Santa Lúcia": "Santa Lúcia - Castries",
        "São Cristóvão e Nevis": "São Cristóvão e Nevis - Basseterre",
        "São Vicente e Granadinas": "São Vicente e Granadinas - Kingstown",
        "Trinidad e Tobago": "Trinidad e Tobago - Porto de Espanha"
      },
      "América do Sul": {
        "Argentina": "Argentina - Buenos Aires",
        "Bolívia": ["Bolívia - La Paz (sede do governo)", "Bolívia - Sucre (constitucional)"],
        "Chile": "Chile - Santiago",
        "Colômbia": "Colômbia - Bogotá",
        "Equador": "Equador - Quito",
        "Guiana": "Guiana - Georgetown",
        "Paraguai": "Paraguai - Assunção",
        "Peru": "Peru - Lima",
        "Suriname": "Suriname - Paramaribo",
        "Uruguai": "Uruguai - Montevidéo",
        "Venezuela": "Venezuela - Caracas"
      },
      "Ásia": {
        "Afeganistão": "Afeganistão - Cabul",
        "Arábia Saudita": "Arábia Saudita - Riad",
        "Azerbaijão": "Azerbaijão - Baku",
        "Bangladesh": "Bangladesh - Dacca",
        "Barein": "Barein - Manama",
        "Brunei": "Brunei - Bandar Seri Begawan",
        "Butão": "Butão - Thimphu",
        "Camboja": "Camboja - Phnom Penh",
        "Cazaquistão": "Cazaquistão - Astana",
        "Catar": "Catar - Doha",
        "China": "China - Pequim",
        "Cingapura": "Cingapura - Cingapura",
        "Coreia do Norte": "Coreia do Norte - Pyongyang",
        "Coreia do Sul": "Coreia do Sul - Seul",
        "Emirados Árabes Unidos": "Emirados Árabes Unidos - Abu Dhabi",
        "Filipinas": "Filipinas - Manila",
        "Iêmen": "Iêmen - Sana",
        "Índia": "Índia - Nova Délhi",
        "Indonésia": "Indonésia - Jacarta",
        "Irã": "Irã - Teerã",
        "Iraque": "Iraque - Bagdá",
        "Israel": "Israel - Jerusalém",
        "Japão": "Japão - Tóquio",
        "Jordânia": "Jordânia - Amã",
        "Kuwait": "Kuwait - Cidade do Kuwait",
        "Laos": "Laos - Vientiane",
        "Líbano": "Líbano - Beirute",
        "Malásia": "Malásia - Kuala Lumpur",
        "Maldivas": "Maldivas - Malé",
        "Mianmar": "Mianmar - Naypyidaw",
        "Mongólia": "Mongólia - Ulan Bator",
        "Nepal": "Nepal - Katmandu",
        "Omã": "Omã - Mascate",
        "Paquistão": "Paquistão - Islamabad",
        "Quirguistão": "Quirguistão - Bishkek",
        "Rússia (parte asiática)": "Rússia (parte asiática) - Moscou",
        "Síria": "Síria - Damasco",
        "Sri Lanka": "Sri Lanka - Sri Jayawardenapura Kotte",
        "Tailândia": "Tailândia - Bangcoc",
        "Taiwan": "Taiwan - Taipé",
        "Tajiquistão": "Tajiquistão - Duchambe",
        "Turcomenistão": "Turcomenistão - Asgabate",
        "Turquia": "Turquia - Ancara",
        "Uzbequistão": "Uzbequistão - Tashkent",
        "Vietnã": "Vietnã - Hanói"
      },
      "Europa": {
        "Albânia": "Albânia - Tirana",
        "Alemanha": "Alemanha - Berlim",
        "Andorra": "Andorra - Andorra-a-Velha",
        "Armênia": "Armênia - Erevan",
        "Áustria": "Áustria - Viena",
        "Azerbaijão (parte europeia)": "Azerbaijão (parte europeia) - Baku",
        "Bélgica": "Bélgica - Bruxelas",
        "Bielorrússia": "Bielorrússia - Minsk",
        "Bósnia e Herzegovina": "Bósnia e Herzegovina - Saraievo",
        "Bulgária": "Bulgária - Sófia",
        "Chipre": "Chipre - Nicósia",
        "Croácia": "Croácia - Zagreb",
        "Dinamarca": "Dinamarca - Copenhague",
        "Eslováquia": "Eslováquia - Bratislava",
        "Eslovênia": "Eslovênia - Liubliana",
        "Espanha": "Espanha - Madri",
        "Estônia": "Estônia - Tallinn",
        "Finlândia": "Finlândia - Helsinque",
        "França": "França - Paris",
        "Geórgia": "Geórgia - Tbilisi",
        "Grécia": "Grécia - Atenas",
        "Holanda": "Holanda - Amsterdã",
        "Hungria": "Hungria - Budapeste",
        "Irlanda": "Irlanda - Dublin",
        "Islândia": "Islândia - Reykjavik",
        "Itália": "Itália - Roma",
        "Letônia": "Letônia - Riga",
        "Liechtenstein": "Liechtenstein - Vaduz",
        "Lituânia": "Lituânia - Vilnius",
        "Luxemburgo": "Luxemburgo - Luxemburgo",
        "Macedônia do Norte": "Macedônia do Norte - Skopje",
        "Malta": "Malta - Valletta",
        "Moldávia": "Moldávia - Quixinau",
        "Mônaco": "Mônaco - Mônaco",
        "Montenegro": "Montenegro - Podgorica",
        "Noruega": "Noruega - Oslo",
        "Polônia": "Polônia - Varsóvia",
        "Portugal": "Portugal - Lisboa",
        "Reino Unido": "Reino Unido - Londres",
        "República Checa": "República Checa - Praga",
        "Romênia": "Romênia - Bucareste",
        "Rússia (parte europeia)": "Rússia (parte europeia) - Moscou",
        "San Marino": "San Marino - San Marino",
        "Sérvia": "Sérvia - Belgrado",
        "Suécia": "Suécia - Estocolmo",
        "Suíça": "Suíça - Berna",
        "Ucrânia": "Ucrânia - Quieve",
        "Vaticano": "Vaticano - Cidade do Vaticano"
      },
      "Oceania": {
        "Austrália": "Austrália - Camberra",
        "Fiji": "Fiji - Suva",
        "Ilhas Marshall": "Ilhas Marshall - Majuro",
        "Ilhas Salomão": "Ilhas Salomão - Honiara",
        "Kiribati": "Kiribati - Taraua do Sul",
        "Micronésia": "Micronésia - Paliquir",
        "Nauru": "Nauru - Yaren",
        "Nova Zelândia": "Nova Zelândia - Wellington",
        "Palau": "Palau - Ngerulmud",
        "Papua Nova Guiné": "Papua Nova Guiné - Porto Moresby",
        "Samoa": "Samoa - Apia",
        "Tonga": "Tonga - Nucualofa",
        "Tuvalu": "Tuvalu - Funafuti",
        "Vanuatu": "Vanuatu - Port Vila"
      }
    };




    function autocomplete(inp, arr) {
      var currentFocus;
      inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-list");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("div");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function (e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });
      inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { //up
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-list");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }

    autocomplete(document.getElementById("fromInput"), destinos["Brasil"]);
    autocomplete(document.getElementById("toInput"), destinos["Brasil"]);


    var allDestinations = [];
    for (var continent in destinos) {
      if (typeof destinos[continent] === "object") {
        for (var country in destinos[continent]) {
          if (typeof destinos[continent][country] === "object") {
            // Se for um objeto (no caso da África), percorra suas cidades
            destinos[continent][country].forEach(function (city) {
              allDestinations.push(city);
            });
          } else {
            // Se for uma string (no caso da maioria dos países), adicione o país
            allDestinations.push(destinos[continent][country]);
          }
        }
      }
    }

    autocomplete(document.getElementById("fromInput"), allDestinations);
    autocomplete(document.getElementById("toInput"), allDestinations);


  });

