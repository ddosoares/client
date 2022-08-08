
const districts = {
    1: "Aveiro",
    2: "Beja", 
    3: "Braga",
    4: "Bragança",
    5: "Castelo Branco",
    6: "Coimbra",
    7: "Évora",
    8: "Faro",
    9: "Guarda",
    10: "Leiria",
    11: "Lisboa",
    12: "Portalegre",
    13: "Porto",
    14: "Santarém",
    15: "Setúbal",
    16: "Viana do Castelo",
    17: "Vila Real",
    18: "Viseu",
}

const restaurants = {
    1: {
        name: "O Bairro",
        rating: '4.7',
        price: '3',
        district_id: '1',
        district_name: 'Aveiro',},
    
    2:{
    name: 'Bacalhau e Afins',
    rating: '4.5',
    price: '2',
    district_id: '1',
    district_name: 'Aveiro',},
    3:{
    name: 'O Adriano',
    rating: '4.2',
    price: '1',
    district_id: '1',
    district_name: 'Aveiro',},


    4:{
    name: 'Adega Típica 25 de Abril',
    rating: '4.5',
    price: '3',
    district_id: '2',
    district_name: 'Beja',},
    5:{
    name:'Dom Dinis',
    rating:'4.5',
    price: '2',
    district_id: '2',
    district_name: 'Beja',},
    6:{
    name:'Tem Avondo',
    rating:'4.5',
    price: '1',
    district_id: '2',
    district_name: 'Beja',},

    7:{
    name: 'Taberna Belga',
    rating:'4.5',
    price: '3',
    district_id: '3',
    district_name: 'Braga',},
    8:{
    name:'Tasquinha Dom Ferreira',
    rating:'4.5',
    price: '2',
    district_id: '3',
    district_name: 'Braga',
    },
    9:{
    name:'Casa de Pasto das Carvalheiras',
    rating:'4.7',
    price: '1',
    district_id: '3',
    district_name:'Braga',
    }, 
    10:{
    name:'Restaurante Solar Bragançano',
    rating:'4.7',
    price: '3',
    district_id: '4',
    district_name:'Bragança',
    },
    11:{
    name:'Restaurante Poças',
    rating:'4.5',
    price: '2',
    district_id: '4',
    district_name:'Bragança',
    },
    12:{
    name:'Taberna do Javali',
    rating:'4.2',
    price:'1',
    district_id: '4',
    district_name:'Bragança'
    }, 
    13:{    
    name:'Dom Tasko',
    rating:'4.7',
    price:'3',
    district_id:'5',
    district_name:'Castelo Branco'
    },
    14:{
    name:'Bona Ferreirinha',
    rating:'4.5',
    price:'2',
    district_id:'5',
    district_name:'Castelo Branco'
    },
    15:{
    name:'A Cozinha',
    rating:'4.2',
    price:'1',
    district_id:'5',
    district_name:'Castelo Branco'
    },
    16:{
        name:'Sete',
        rating:'4.7',
        price:'3',
        district_id:'6',
        district_name:'Coimbra'
    },
    17:{
        name:'Tapa nas Costas',
        rating:'4.5',
        price:'2',
        district_id:'6',
        district_name: 'Coimbra'   
    },   
    18:{
        name:'Restaurante Dom Pedro',
        rating:'4.2',
        price:'1',
        district_id:'6',
        district_name:'Coimbra'
    },
    19:{
        name:'Taberna Tipica Quarta-Feira',
        rating:'4.8',
        price:'3',
        district_id:'7',
        district_name:'Évora'
    }, 

    20:{
        name:'O Trovador',
        rating:'4.5',
        price:'2',
        district_id:'7',
        district_name:'Évora'    
    },
    21:{
        name:'A Gruta',
        rating:'4.4',
        price:'1',
        district_id:'7',
        district_name:'Évora'    
    },
    
    22:{
        name:'Pigs and Cows',
        rating:'4.8',
        price:'3',
        district_id:'8',
        district_name:'Faro'

    },
    23:{
        name:'Los Locos Far',
        rating:'4.5',
        price:'2',
        district_id:'8',
        district_name:'Faro'

    },
    24:{
        name:'Restaurante Chefe Branco',
        rating:'4.3',
        price:'1',
        district_id:'8',
        district_name:'Faro'

    },
    25:{
        name:'Nobre Vinhos e Tal',
        rating:'4.7',
        price:'3',
        district_id:'9',
        district_name:'Guarda'

    },
    26:{
        name:'Restaurante Bola de Prata',
        rating:'4.5',
        price:'2',
        district_id:'9',
        district_name:'Guarda'

    },
    27:{
        name:'Marisqueira O Caçador',
        rating:'4.4',
        price:'1',
        district_id:'9',
        district_name:'Guarda'

    },
   
    28:{
        name:'Puttanesca',
        rating:'4.4',
        price:'3',
        district_id:'10',
        district_name:'Leiria'

    },
    29:{
        name:'Mata Bicho Real Taverna',
        rating:'4.2',
        price:'2',
        district_id:'10',
        district_name:'Leiria'

    },
    30:{
        name:'Restaurante O Galochas',
        rating:'4.4',
        price:'1',
        district_id:'10',
        district_name:'Leiria'

    },


    31:{
        name:'KOB by Oliviera',
        rating:'4.4',
        price:'3',
        district_id:'11',
        district_name:'Lisboa'

    },
    32:{
        name:'Casanostra',
        rating:'4.5',
        price:'2',
        district_id:'11',
        district_name:'Lisboa'

    },

    33:{
        name:'Roulote Bar O Mário',
        rating:'4.4',
        price:'1',
        district_id:'11',
        district_name:'Lisboa'

    },


    34:{
        name:'Solar do Forcado',
        rating:'4.6',
        price:'3',
        district_id:'12',
        district_name:'Portalegre'

    },
    35:{
        name:'O Talho Stakehouse',
        rating:'4.5',
        price:'2',
        district_id:'12',
        district_name:'Portalegre'

    },
    36:{
        name:'O Cortiço',
        rating:'3.3',
        price:'1',
        district_id:'12',
        district_name:'Portalegre'

    },



    37:{
        name:'MUU Steakhouse',
        rating:'4.9',
        price:'3',
        district_id:'13',
        district_name:'Porto'

    },
    38:{
        name:'Brasão Coliseu',
        rating:'4.6',
        price:'2',
        district_id:'13',
        district_name:'Porto'

    },
    39:{
        name:'Roulote D`Aninhas',
        rating:'4.5',
        price:'1',
        district_id:'13',
        district_name:'Porto'

    },




    40:{
        name:'OH! Vargas',
        rating:'4.6',
        price:'3',
        district_id:'14',
        district_name:'Santarém'

    },
    41:{
        name:'Eva Pecado Natural',
        rating:'4.5',
        price:'2',
        district_id:'14',
        district_name:'Santarém'

    },
    42:{
        name:'Adiafa',
        rating:'3.9',
        price:'1',
        district_id:'14',
        district_name:'Santarém'

    },


    43:{
        name:'Feito ao Bife',
        rating:'4.7',
        price:'3',
        district_id:'15',
        district_name:'Setubal'

    },
    44:{
        name:'Pizzaria Anexo',
        rating:'4.4',
        price:'2',
        district_id:'15',
        district_name:'Setubal'

    },
    45:{
        name:'Tasca da Fatinha',
        rating:'3.9',
        price:'1',
        district_id:'15',
        district_name:'Setubal'

    },
    46:{
        name:'O Laranjeira',
        rating:'4.5',
        price:'3',
        district_id:'16',
        district_name:'Viana do Castelo'

    },
    47:{
        name:'In Francesinha',
        rating:'4.4',
        price:'2',
        district_id:'16',
        district_name:'Viana do Castelo'

    },
    48:{
        name:'Indian Punjabi Restaurante',
        rating:'4.5',
        price:'1',
        district_id:'16',
        district_name:'Viana do Castelo'

    },
    49:{
        name:'Cais da Villa',
        rating:'4.5',
        price:'3',
        district_id:'17',
        district_name:'Vila Real'

    },
    50:{
        name:'Terra de Montanha',
        rating:'4.4',
        price:'2',
        district_id:'17',
        district_name:'Vila Real'

    },
    51:{
        name:'Restaurante Gina',
        rating:'3.9',
        price:'1',
        district_id:'17',
        district_name:'Vila Real'

    },
            52:{
        name:'Restaurante Santa Luzia',
        rating:'4.6',
        price:'3',
        district_id:'18',
        district_name:'Viseu'

    },
    53:{
        name:'3B`s Restaurante',
        rating:'4.4',
        price:'2',
        district_id:'18',
        district_name:'Viseu'

    },
    54:{
        name:'Zé do Pernil',
        rating:'3.9',
        price:'1',
        district_id:'18',
        district_name:'Viseu'

    },
}

/** Pubs */
const pubs = {
    1: {
      name:'The Iron Duke Pub - Craft Beer',
      rating: '4.4',
      price: '3',
      district_id:'1',
      district_name:'Aveiro',
    },
    2: {
      name:'Piano Bar',
      rating: '4.5',
      price: '2',
      district_id: '1',
      district_name:'Aveiro',
    },
    3:{
      name:'Taberna do Rockabilio',
      rating:'4.8',
      price:'1',
      district_id:'1',
      district_name:'Aveiro',
    },
    4:{
      name:'Restaurante Bar BejaTennis Courts Club',
      rating:'5.0',
      price:'3',
      district_id:'2',
      district_name:'Beja',
    },
      5:{
      name:'The Pub Sports Caffe',
      rating:'4.1',
      price:'2',
      district_id:'2',
      district_name:'Beja',
    },
    6:{
      name:'Bar 58',
      rating:'4.1',
      price:'1',
      district_id:'2',
      district_name:'Beja',
    },
    7:{
      name:'Liffey Irish Pub',
      rating:'4.6',
      price:'3',
      district_id:'3',
      district_name:'Braga',
    },
    8:{
      name:'Mal Amado',
      rating:'4.6',
      price:'2',
      district_id:'3',
      district_name:'Braga',
    },
    9:{
      name:'Bar do Liper',
      rating:'4.7',
      price:'1',
      district_id:'3',
      district_name:'Braga',
    },
    10:{
      name:'Grau Douro Tapas & Wine Bar',
      rating:'4.9',
      price:'3',
      district_id:'4',
      district_name:'Bragança',
    },
    11:{
      name:'Under - Drink & Dance',
      rating:'4.0',
      price:'2',
      district_id:'4',
      district_name:'Bragança',
    },
    12:{
      name:'Lagoa Azul Bar',
      rating:'4.1',
      price:'1',
      district_id:'4',
      district_name:'Bragança',
    },
    13:{
      name:'Kimika Lounge',
      rating:'4.2',
      price:'3',
      district_id:'5',
      district_name:'Castelo Branco',
    },
    14:{
      name:'Aqui ao Lado Café',
      rating:'4.3',
      price:'2',
      district_id:'5',
      district_name:'Castelo Branco',
    },
    15:{
      name:'Bar dos Bombeiros',
      rating:'5.0',
      price:'1',
      district_id:'5',
      district_name:'Castelo Branco',
    },
    16:{
      name:'Bar Botânico',
      rating:'4.2',
      price:'3',
      district_id:'6',
      district_name:'Coimbra',
    },
    17:{
      name:'The Murphy`s Irish Pub',
      rating:'4.4',
      price:'2',
      district_id:'6',
      district_name:'Coimbra',
    },
    18:{
      name:'Kamartelo 2.0',
      rating:'4.1',
      price:'1',
      district_id:'6',
      district_name:'Coimbra',
    },
    19:{
      name:'Terraza Drinks & Co.',
      rating:'3.9',
      price:'3',
      district_id:'7',
      district_name:'Évora',
    },
    20:{
      name:'A Ver Évora - Rooftop Bar',
      rating:'5.0',
      price:'2',
      district_id:'7',
      district_name:'Évora',
    },
    21:{
      name:'Quisque Jardim Diana',
      rating:'5.0',
      price:'1',
      district_id:'7',
      district_name:'Évora',
    },
    22:{
      name:'Columbus Cocktail & Wine Bar',
      rating:'4.7',
      price:'3',
      district_id:'8',
      district_name:'Faro',
    },
    23:{
      name:'3 POINTS - SPORTS BAR',
      rating:'4.2',
      price:'2',
      district_id:'8',
      district_name:'Faro',
    },
    24:{
      name:'Alambres Bar',
      rating:'3.1',
      price:'1',
      district_id:'8',
      district_name:'Faro',
    },
    25:{
      name:'Gin Gibre',
      rating:'4.3',
      price:'3',
      district_id:'9',
      district_name:'Guarda',
    },
    26:{
      name:'jamaica_bar',
      rating:'4.7',
      price:'2',
      district_id:'9',
      district_name:'Faro',
    },
    27:{
      name:'Rock On Café',
      rating:'4.0',
      price:'1',
      district_id:'9',
      district_name:'Faro',
    },
    28:{
      name:'Mulligan’s',
      rating:'4.5',
      price:'3',
      district_id:'10',
      district_name:'Leiria',
    },
    29:{
      name:'Chico Lobo',
      rating:'4.3',
      price:'2',
      district_id:'10',
      district_name:'Leiria',
    },
    30:{
      name:'Bar Académico Leiria',
      rating:'4,1',
      price:'1',
      district_id:'10',
      district_name:'Leiria',
    },
    31:{
      name:'The Insólito',
      rating:'4.3',
      price:'3',
      district_id:'11',
      district_name:'Lisboa',
    },
    32:{
      name:'Cinco Lounge',
      rating:'4.6',
      price:'2',
      district_id:'11',
      district_name:'Lisboa',
    },
    33:{
      name:'O Avião',
      rating:'4.6',
      price:'1',
      district_id:'11',
      district_name:'Lisboa',
    },
    34:{
      name:'Real Spot Bar',
      rating:'4.3',
      price:'3',
      district_id:'12',
      district_name:'Portalegre',
    },
    35:{
      name:'Gémeos Bar',
      rating:'4.3',
      price:'2',
      district_id:'12',
      district_name:'Portalegre',
    },
    36:{
      name:'Porta aviões Bar',
      rating:'3.3',
      price:'1',
      district_id:'12',
      district_name:'Portalegre',
    },
    37:{
      name:'Wine Quay Bar',
      rating:'4.9',
      price:'3',
      district_id:'13',
      district_name:'Porto',
    },
    38:{
      name:'Aduela',
      rating:'4.5',
      price:'2',
      district_id:'13',
      district_name:'Porto',
    },
    39:{
      name:'Barracuda Clube de Roque',
      rating:'4.7',
      price:'1',
      district_id:'13',
      district_name:'Porto',
    },
    40:{
      name:'Ponto G',
      rating:'4.5',
      price:'3',
      district_id:'14',
      district_name:'Santarém',
    },
    41:{
      name:'Respublica',
      rating:'3.9',
      price:'2',
      district_id:'14',
      district_name:'Santarém',
    },
    42:{
      name:'Cerve-jolas',
      rating:'4.1',
      price:'1',
      district_id:'14',
      district_name:'Santarém',
    },
    43:{
      name:'Best Coffee Lounge',
      rating:'4.2',
      price:'3',
      district_id:'15',
      district_name:'Setubal',
    },
    44:{
      name:'Obladi Oblada',
      rating:'4.5',
      price:'2',
      district_id:'15',
      district_name:'Setubal',
    },
    45:{
      name:'Moto Clube de Setubal',
      rating:'4.6',
      price:'1',
      district_id:'15',
      district_name:'Setubal',
    },
    46:{
      name:'Ribeiros Brewers',
      rating:'4.7',
      price:'3',
      district_id:'16',
      district_name:'Viana do Castelo',
    },
    47:{
      name:'Cerqueiras Lounge',
      rating:'4.7',
      price:'2',
      district_id:'16',
      district_name:'Viana do Castelo',
    },
    48:{
      name:'Praxxe Bar',
      rating:'3.0',
      price:'1',
      district_id:'16',
      district_name:'Viana do Castelo',
    },
    49:{
      name:'Espassus Wine Bar',
      rating:'4.7',
      price:'3',
      district_id:'17',
      district_name:'Vila Real',
    },
    50:{
      name:'Pool Shot',
      rating:'4.7',
      price:'2',
      district_id:'17',
      district_name:'Vila Real',
    },
    51:{
      name:'Núcleo Sportinguista De Vila Real',
      rating:'3.6',
      price:'1',
      district_id:'17',
      district_name:'Vila Real',
    },
    52:{
      name:'Irish Bar',
      rating:'4.4',
      price:'3',
      district_id:'18',
      district_name:'Viseu',
    },
    53:{
      name:'4You Bar',
      rating:'4.2',
      price:'2',
      district_id:'18',
      district_name:'Viseu',
    },
    54:{
      name:'Litradas Bar',
      rating:'4.1',
      price:'1',
      district_id:'18',
      district_name:'Viseu',
    },
}




/*
beds
*/
const beds = {
1:{
name:'Montebelo Vista Alegre Ílhavo Hotel',
rating:'4.7',
price:'3',
district_id:'1',
district_name:'Aveiro'

},
2:{
name:'Estalagem Quinta do Louredo',
rating:'4.5',
price:'2',
district_id:'1',
district_name:'Aveiro'

},
3:{
name:'Urban City',
rating:'2.8',
price:'1',
district_id:'1',
district_name:'Aveiro'

},
4:{
name:'Clube de Campo Vila Galé',
rating:'4.5',
price:'3',
district_id:'2',
district_name:'Beja'

},
5:{
name:'Agroturismo Xistos Herdade Monte da Ponte',
rating:'4.5',
price:'2',
district_id:'2',
district_name:'Beja'

},
6:{
name:'HI Beja – Pousada de Juventude',
rating:'4.5',
price:'1',
district_id:'2',
district_name:'Beja'

},
7:{
name:'Torre de Gomariz Wine & Spa Hotel',
rating:'4.8',
price:'3',
district_id:'3',
district_name:'Braga'

},
8:{
name:'Burgus Tribute & Design Hotel',
rating:'4.6',
price:'2',
district_id:'3',
district_name:'Braga'

},
9:{
name:'MicroRent Rooms',
rating:'4.1',
price:'1',
district_id:'3',
district_name:'Braga'

},
10:{
name:'Quinta da Boa Ventura',
rating:'4.7',
price:'3',
district_id:'4',
district_name:'Bragança'

},
11:{
name:'Hotel Turismo São Lázaro',
rating:'4.5',
price:'2',
district_id:'4',
district_name:'Bragança'

},
12:{
name:'Hotel Ibis Braganca',
rating:'4.1',
price:'1',
district_id:'4',
district_name:'Bragança'

},
13:{
name:'Herdade da Urgueira',
rating:'4.6',
price:'3',
district_id:'5',
district_name:'Castelo Branco'

},
14:{
name:'Casa das Jardas, Turismo Rural',
rating:'4.7',
price:'2',
district_id:'5',
district_name:'Castelo Branco'

},
15:{
name:'Residencial Terminal',
rating:'3.8',
price:'1',
district_id:'5',
district_name:'Castelo Branco'

},
16:{
name:'Bussaco Palace Hotel',
rating:'4.5',
price:'3',
district_id:'6',
district_name:'Coimbra'

},
17:{
name:'Grande Hotel de Luso',
rating:'4.4',
price:'2',
district_id:'6',
district_name:'Coimbra'

},
18:{
name:'Alojamento Local Duarte`s',
rating:'3.7',
price:'1',
district_id:'6',
district_name:'Coimbra'

},
19:{
name:'Convento do Espinheiro, Historic Hotel & Spa',
rating:'4.7',
price:'3',
district_id:'7',
district_name:'Évora'

},
20:{
name:'Vitória Stone Hotel',
rating:'4.4',
price:'2',
district_id:'7',
district_name:'Évora'

},
21:{
name:'Good Mood Hostel',
rating:'3.6',
price:'1',
district_id:'7',
district_name:'Évora'

},
22:{
name:'Barco Casa Catamarã sleepandboat',
rating:'4.9',
price:'3',
district_id:'8',
district_name:'Faro'

},
23:{
name:'Casa Apollo Guesthouse Garden Pool Faro',
rating:'4.5',
price:'2',
district_id:'8',
district_name:'Faro'

},
24:{
name:'Ria Terrace',
rating:'3.7',
price:'1',
district_id:'8',
district_name:'Faro'

},
25:{
name:'Quinta do Quinto - Turismo Rural',
rating:'4.9',
price:'3',
district_id:'9',
district_name:'Guarda'

},
26:{
name:'Hotel Lusitânia',
rating:'4.4',
price:'2',
district_id:'9',
district_name:'Guarda'

},
27:{
name:'Residencial Pinto',
rating:'3.1',
price:'1',
district_id:'9',
district_name:'Guarda'

},28:{
name:'Luz Charming Houses',
rating:'4.8',
price:'3',
district_id:'10',
district_name:'Leiria'

},
29:{
name:'Hotel Lux Fátima',
rating:'4.8',
price:'2',
district_id:'10',
district_name:'Leiria'

},
30:{
name:'Hotel Santa Rita',
rating:'3.8',
price:'1',
district_id:'10',
district_name:'Leiria'

},
31:{
name:'Four Seasons',
rating:'4.8',
price:'3',
district_id:'11',
district_name:'Lisboa'

},
32:{
name:'Altis Grand Hotel',
rating:'4.4',
price:'2',
district_id:'11',
district_name:'Lisboa'

},
33:{
name:'Xroomz Motel',
rating:'2.9',
price:'1',
district_id:'11',
district_name:'Lisboa'

},
34:{
name:'Pousada Mosteiro do Crato',
rating:'4.6',
price:'3',
district_id:'12',
district_name:'Portalegre'

},
35:{
name:'Quinta da Dourada',
rating:'4.4',
price:'2',
district_id:'12',
district_name:'Portalegre'

},
36:{
name:'Motel Desejo',
rating:'4.1',
price:'1',
district_id:'12',
district_name:'Portalegre'

},
37:{
name:'InterContinental Porto - Palácio das Cardosas',
rating:'4.7',
price:'3',
district_id:'13',
district_name:'Porto'

},
38:{
name:'Pestana Vintage porta',
rating:'4.5',
price:'2',
district_id:'13',
district_name:'Porto'

},
39:{
name:'Hotel Love',
rating:'3.7',
price:'1',
district_id:'13',
district_name:'Porto'

},
40:{
name:'Casa da Alcáçova',
rating:'4.9',
price:'3',
district_id:'14',
district_name:'Santarém'

},
41:{
name:'Monte do Areeiro',
rating:'4.5',
price:'2',
district_id:'14',
district_name:'Santarém'

},
42:{
name:'Hotel Humo',
rating:'3.7',
price:'1',
district_id:'14',
district_name:'Santarém'

},
43:{
name:'The Editory By The Sea Troia Comporta Hotel',
rating:'4.5',
price:'3',
district_id:'15',
district_name:'Setubal'

},
44:{
name:'Pousada de São Filipe',
rating:'4.5',
price:'2',
district_id:'15',
district_name:'Setubal'

},
45:{
name:'COME INN SESIMBRA',
rating:'2.5',
price:'1',
district_id:'15',
district_name:'Setubal'

},
46:{
name:'Quinta de Valverde',
rating:'4.7',
price:'3',
district_id:'16',
district_name:'Viana do Castelo'

},
47:{
name:'Hotel Flôr de Sal',
rating:'4.5',
price:'2',
district_id:'16',
district_name:'Viana do Castelo'

},
48:{
name:'ALEX POINT - Guest House/ B&B',
rating:'2.8',
price:'1',
district_id:'16',
district_name:'Viana do Castelo'

},
49:{
name:'Six Senses Douro Valley',
rating:'4.9',
price:'3',
district_id:'17',
district_name:'Vila Real'

},
50:{
name:'Quinta da Pacheca',
rating:'4.6',
price:'2',
district_id:'17',
district_name:'Vila Real'

},
51:{
name:'Hotel Miraneve',
rating:'3.2',
price:'1',
district_id:'17',
district_name:'Vila Real'

},
52:{
name:'Parador Casa da Ínsua',
rating:'4.7',
price:'3',
district_id:'18',
district_name:'Viseu'

},
53:{
name:'Douro Cister Hotel',
rating:'4.4',
price:'2',
district_id:'18',
district_name:'Viseu'

},
54:{
name:'Hotel Belavista',
rating:'3.5',
price:'1',
district_id:'18',
district_name:'Viseu'

},

}
// --------------------- SUBMIT FORM  ----------------------    


let currentUser; 
let currentUserJS;

const submitJS = () => {
    
let user ={
        nickname: $("#nickname").val(),
        district: $("#district").val(),
        bombasticlevel: $("#bombasticLevel").val(),
        
    }
    console.log(user.nickname);

    localStorage.setItem("test", JSON.stringify(user));
    //window.name = JSON.stringify(user);
    //console.log("HERE2: " + JSON.parse(window.name));
   // console.log(sessionStorage.getItem("test"));

    //sessionStorage.setItem("test", 'um dó');
    
    document.location.href = "http://localhost:5500/project-client/result/index.html";
  
}

const populateNewPageJS = () => {
    let json = localStorage.getItem('test');
 console.log(json);
   currentUserJS = JSON.parse(json);
    console.log("Here2: " + currentUserJS);
        getRestaurantDataJS();
        getPubDataJS();
        getBedDataJS();
        console.log("here: " + currentUserJS);

}

const getRestaurantDataJS = () => {
    let restaurantsInDistrictIds = [];

    let restaurantsResults = Object.entries(restaurants);

    // em baixo está OK
    for(let [key, value] of restaurantsResults){
        for(let [key1, value1] of Object.entries(value)){
            if(value1 == currentUserJS.district){
                restaurantsInDistrictIds.push(key);

            }
        }
    }
  
    console.log("bombasticLevel: " + currentUserJS.bombasticlevel);
    let level = currentUserJS.bombasticlevel;
    console.log("name: " + currentUserJS.nickname);

    console.log("AQUI: ", restaurants[1].name);

    if(level == 1){

        console.log("entrisetRestaurants:" + restaurantsInDistrictIds);

        for(let i = 0; i < 3; i++ ){
            if(restaurants[restaurantsInDistrictIds[i]].price == 3){
                $("#restaurantName").append(restaurants[restaurantsInDistrictIds[i]].name);
                console.log("HERE:" + restaurants[restaurantsInDistrictIds[i]].name );
                $("#restaurantRating").append(`${restaurants[restaurantsInDistrictIds[i]].rating} ⭐`);
            }
        }
        }

        if(level == 2){

            console.log("entrisetRestaurants:" + restaurantsInDistrictIds);
    
            for(let i = 0; i < 3; i++ ){
                if(restaurants[restaurantsInDistrictIds[i]].price == 2){
                    $("#restaurantName").append(restaurants[restaurantsInDistrictIds[i]].name);
                    console.log("HERE:" + restaurants[restaurantsInDistrictIds[i]].name );
                    $("#restaurantRating").append(`${restaurants[restaurantsInDistrictIds[i]].rating} ⭐`);  
                }
            }
            }
    
            if(level == 3){

                console.log("entrisetRestaurants:" + restaurantsInDistrictIds);
        
                for(let i = 0; i < 3; i++ ){
                    if(restaurants[restaurantsInDistrictIds[i]].price == 1){
                        $("#restaurantName").append(restaurants[restaurantsInDistrictIds[i]].name);
                        console.log("HERE:" + restaurants[restaurantsInDistrictIds[i]].name );
                        $("#restaurantRating").append(`${restaurants[restaurantsInDistrictIds[i]].rating} ⭐`);
                    }
                }
                }

    }


    const getPubDataJS = () => {
        let pubInDistrictIds = [];
    
        let pubResults = Object.entries(pubs);
    
        // em baixo está OK
        for(let [key, value] of pubResults){
            for(let [key1, value1] of Object.entries(value)){
                if(value1 == currentUserJS.district){
                    pubInDistrictIds.push(key);
    
                }
            }
        }
      
    
        let level = currentUserJS.bombasticlevel;

    
        if(level == 1){
    
           
    
            for(let i = 0; i < 3; i++ ){
          
                if(pubs[pubInDistrictIds[i]].price == 3){
                    $("#pubName").append(pubs[pubInDistrictIds[i]].name);
                    
                    $("#pubRating").append(`${pubs[pubInDistrictIds[i]].rating} ⭐`);
                }
            }
     }
    
            if(level == 2){
                for(let i = 0; i < 3; i++ ){
                    if(pubs[pubInDistrictIds[i]].price == 2){
                        $("#pubName").append(pubs[pubInDistrictIds[i]].name);
                        console.log("HERE:" + pubs[pubInDistrictIds[i]].name );
                        $("#pubRating").append(`${pubs[pubInDistrictIds[i]].rating} ⭐`);
                    }
                }
                }
        
                if(level == 3){
            
                    for(let i = 0; i < 3; i++ ){
                  
                        if(pubs[pubInDistrictIds[i]].price == 1){
                            $("#pubName").append(pubs[pubInDistrictIds[i]].name);
                            console.log("HERE:" + pubs[pubInDistrictIds[i]].name );
                            $("#pubRating").append(`${pubs[pubInDistrictIds[i]].rating} ⭐`);
                        }
                    }
                    }
    
        }
    


    
        const getBedDataJS = () => {
            let bedInDistrictIds = [];
        
            let bedResults = Object.entries(beds);
        
            // em baixo está OK
            for(let [key, value] of bedResults){
                for(let [key1, value1] of Object.entries(value)){
                    if(value1 == currentUserJS.district){
                        bedInDistrictIds.push(key);
        
                    }
                }
            }
          
        
            let level = currentUserJS.bombasticlevel;
    
        
            if(level == 1){
                for(let i = 0; i < 3; i++ ){
              
                    if(beds[bedInDistrictIds[i]].price == 3){
                        $("#bedName").append(beds[bedInDistrictIds[i]].name);
                        
                        $("#bedRating").append(`${beds[bedInDistrictIds[i]].rating} ⭐`);
                    }
                }
         }
        
                if(level == 2){
                    for(let i = 0; i < 3; i++ ){
                        if(beds[bedInDistrictIds[i]].price == 2){
                            $("#bedName").append(beds[bedInDistrictIds[i]].name);
                            console.log("HERE:" + beds[bedInDistrictIds[i]].name );
                            $("#bedRating").append(`${beds[bedInDistrictIds[i]].rating} ⭐`);
                        }
                    }
                    }
            
                    if(level == 3){
        
                        console.log("entrisetRestaurants:" + bedInDistrictIds);
                
                        for(let i = 0; i < 3; i++ ){
                      
                      
                      
                            if(beds[bedInDistrictIds[i]].price == 1){
                                $("#bedName").append(beds[bedInDistrictIds[i]].name);
                                console.log("HERE:" + beds[bedInDistrictIds[i]].name );
                                $("#bedRating").append(`${beds[bedInDistrictIds[i]].rating} ⭐`);
                            }
                        }
                        }
        
            }
        
        
        /*

const submit = () => {
location.replace("http://localhost:5500/load/load.html");
    let user ={
        nickname: $("#nickname").val(),
        district: $("#district").val(),
        bombasticlevel: $("#bombasticlevel").val()
    }

    currentUser = user;

    $.ajax({

        url: `http://localhost:8080/hack/api/user`,
        type: "POST",
        data: JSON.stringify({
        id: id,
        nickname: user.nickname,
        district: user.district,
        bombasticlevel: user.bombasticlevel,
    
    }),
    async: true,
    contentType: "application/json",
    success: successMessage,
    error: errorMessage,
})
    function successMessage (response){
        console.log("success!");
        document.location.href = "result/index.html";
        populateNewPage();
    }

    function errorMessage(){
        console.log("Error creating user!")
    }
}

const populateNewPage = () => {
    $(document).ready(function() {
        getRestaurantData();
        getPubData();
        getBedData();
      })
}

  
  // ----------------------- RESTAURANT
  
  let getRestaurantData = () => {
  
    $.ajax({
      url: `http://localhost:8080/hack/api/bed/${currentUser.nickname}`,
      type: "GET",  
      async: true,
      contentType: "application/json",
      success: successMessage,
      error: errorMessage,
    })
    function successMessage (response){
    populateTable(response);
      console.log("success!");
    }
  
    function errorMessage(){
      console.log("Error creating user!")
    }
  
    function populateTable(data){
      let restaurant = JSON.parse(data);
        $("#restaurantName").val(restaurant.name);
        $("#restaurantRating").val(restaurant.rating);
    }
  
  }
  
  
  //-------------------------- PUB
  
  let getPubData = () => {
  
    $.ajax({
      url: `http://localhost:8080/hack/api/bed/${currentUser.nickname}`,
      type: "GET",  
      async: true,
      contentType: "application/json",
      success: successMessage,
      error: errorMessage,
    })
    function successMessage (response){
    populateTable(response);
      console.log("success!");
    }
  
    function errorMessage(){
      console.log("Error creating user!")
    }
  
    function populateTable(data){
      let pub = JSON.parse(data);
        $("#pubName").val(pub.name);
        $("#pubRating").val(pub.rating);
    }
  
  }
  
  
  
  // ----------------------- BED

  let getBedData = () => {
  
    $.ajax({
      url: `http://localhost:8080/hack/api/bed/${currentUser.nickname}`,
      type: "GET",  
      async: true,
      contentType: "application/json",
      success: successMessage,
      error: errorMessage,
    })
    function successMessage (response){
    populateTable(response);
      console.log("success!");
    }
  
    function errorMessage(){
      console.log("Error creating user!")
    }
  
    function populateTable(data){
      let bed = JSON.parse(data);
        $("#bedName").val(bed.name);
        $("#bedRating").val(bed.rating);
    }
  
  }
}*/
