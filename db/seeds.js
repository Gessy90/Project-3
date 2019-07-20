require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')
const { dbURI } = require('../config/environment')
mongoose.Promise = Promise

const User = require('../models/user')
const Gem = require('../models/gem')
const Trip = require('../models/trip')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create([{
        username: 'Tom',
        email: 't@mail.com',
        image: 'https://www.w3schools.com/w3images/avatar2.png',
        password: 't',
        passwordConfirmation: 't'
      },
      {
        username: 'Dexter',
        email: 'd@mail.com',
        image: 'https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg',
        password: 'd',
        passwordConfirmation: 'd'
      },
      {
        username: 'Bete',
        email: 'b@mail.com',
        image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwierMOs1MPjAhWuxIUKHQSoAuEQjRx6BAgBEAU&url=https%3A%2F%2Fdesigndroide.com%2Ffemale-avatar-2.html&psig=AOvVaw1TWCU5nYBpQaxOrOjF9IXu&ust=1563717613930357',
        password: 'b',
        passwordConfirmation: 'b'
      },{
        username: 'Jessica',
        email: 'j@mail.com',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRvbXS58ffkiq6gyWLPJ1mw-wsjDIzRtcFnxiEwSTW7dZ6XrS',
        password: 'j',
        passwordConfirmation: 'j'
      }
      ])
    })
    .then((user) => {
      return Gem.create([{
        name: 'Gordon\'s Wine Bar',
        user: user[1]._id,
        image: 'https://adventuresinpubs.co.uk/wp-content/uploads/2011/03/gordons-wine-bar-7.jpg',
        description: '19th-century wine bar in candlelit, vaulted cellars with original Dickensian-style decor.',
        category: 'Bars',
        location: {lat: 51.507944, lng: -0.1255027},
        address: '47 Villiers St, London WC2N 6NE',
        comments: {
          user: user[2]._id,
          content: 'A very very different and interesting place to visit. Usually when I personally go to a bar I try to find a place where I will be able to admire the surroundings. Here the place to admire is the bar itself!'
        }
      },{
        name: 'Saint Dunstan in the East Church Garden',
        user: user[1]._id,
        image: 'https://images.unsplash.com/photo-1467134903050-555df177d768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        description: 'City garden amongst the ruins of a grade I listed church with a tower & steeple by Christopher Wren.',
        category: 'Religious Sites',
        location: {lat: 51.5095891, lng: -0.087604},
        address: 'St Dunstan\'s Hill, London EC3R 5DD'
      },{
        name: 'Wharfinger Cottage',
        user: user[1]._id,
        image: 'https://images.unsplash.com/photo-1534067106003-bfd2053d0888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        description: 'There has been a cottage on this site for at least 200 years. Originally, it was the home of the Controller of the Tower Wharf.',
        category: 'Landmarks',
        location: {lat: 51.5082113, lng: -0.0804421},
        address: 'St Katharine\'s & Wapping, London EC3R 6LA'
      },{
        name: 'Regent\'s Park',
        user: user[0]._id,
        image: 'https://images.unsplash.com/photo-1459508583695-86e229e8855a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'The Regent\'s Park combines large open spaces with tree-lined pathways, formal gardens, and four children’s playgrounds. It has excellent sports facilities, and contains central London’s largest outdoor sports area.',
        category: 'Parks',
        location: {lat: 51.5312705, lng: -0.1591634},
        address: 'Chester Rd, London NW1 4NR'
      },{
        name: 'The Sheep Heid Inn',
        user: user[2]._id,
        image: 'https://absolutely.london/wp-content/uploads/2018/02/Untitled-1-2-1068x712.jpg',
        description: 'The Sheep Heid Inn is a premium pub, bar, and restaurant with its very own courtyard, centrally located in the heart of the picturesque town of Edinburgh',
        category: 'Restaurants',
        location: {lat: 55.942004, lng: -3.150730},
        address: '43-45 The Causeway, Edinburgh EH15 3QA'
      },{
        name: 'Urquhart Castle',
        user: user[2]._id,
        image: 'https://images.unsplash.com/photo-1541855148-b3bb8f814fe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
        description: 'The castle, situated on a headland overlooking Loch Ness, is one of the largest in Scotland in area. It was approached from the west and defended by a ditch and drawbridge.',
        category: 'Landmarks',
        location: {lat: 57.3241399, lng: -4.4441899},
        address: ' Drumnadrochit, Inverness IV63 6XJ',
        comments: {
          user: user[0]._id,
          content: 'The views are stunning - which ever way you look. The visit was made all the more enjoyable by speaking to Graham - the castle Warden. He had an unbelievable knowledge of the history, the people, wildlife and events an his enthusiasm was inspiring. '
        }
      },
      {
        name: 'Dan & Decarlo',
        user: user[0]._id,
        image: 'https://cdn.wallpaper.com/main/legacy/gallery/17052978/RM-Starbucks-Amsterdam-Bank-017.jpg',
        description: 'Breakfast, grills and burgers in arts centre cafe set in a former chapel with its own rear garden.',
        category: 'Cafes',
        location: {lat: 48.4784702, lng: 4.1089442},
        address: '17 Rue de l\'Orme, 10700 Saint-Remy-sous-Barbuise, France'
      },
      {
        name: 'Passeart Espace D\'art Contemporain',
        user: user[0]._id,
        image: 'https://images.unsplash.com/photo-1514195385834-0853a6eda41c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Passeart is a contemporary art exhibition space located in TROYES, in the heart of the city, Place Saint Rémy.PASSEART is also a place of exchange and training.',
        category: 'Galleries',
        location: {lat: 48.2993253, lng: 4.0736781},
        address: '15 Rue Passerat, 10000 Troyes, France'
      },
      {
        name: 'St Michael\'s Mount',
        user: user[1]._id,
        image: 'https://images.unsplash.com/photo-1493672044531-efdb1aa01b8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
        description: 'St Michael\'s Mount (Cornish: Karrek Loos yn Koos, meaning "hoar rock in woodland") is a small tidal island in Mount\'s Bay, Cornwall, England, United Kingdom. The island is a civil parish and is linked to the town of Marazion by a man-made causeway of granite setts, passable between mid-tide and low water',
        category: 'Viewpoints',
        location: {lat: 50.1175691, lng: -5.4822363},
        address: 'St Michaels Mount, Marazion, TR170HS '
      },
      {
        name: 'Camel Trail',
        user: user[1]._id,
        image: 'https://images.unsplash.com/photo-1532612821865-8cc3cb888f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        description: 'The Camel Trail is an 18 mile largely traffic free, surfaced and virtually level multi use trail which provides access to the beautiful Cornish countryside ',
        category: 'Landmarks',
        location: {lat: 50.5089749, lng: -4.9587513},
        address: ' Eddystone Rd, Wadebridge PL27 7AL',
        comments: {
          user: user[1]._id,
          content: 'We walked the Camel Trail from Padstow to Wadebridge yesterday. It’s a beautiful and gentle walk, all on the level, alongside the estuary. The scenery changes and there are regular stopping points with benches (no toilet facilities though!).'
        }
      },
      {
        name: 'Nerja Beaches',
        user: user[2]._id,
        image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        description: 'Nerja is a resort town along southern Spain\'s Costa del Sol. Its seafront promenade, Balcón de Europa, tops a promontory with views of the Mediterranean and surrounding mountains.',
        category: 'Landmarks',
        location: {lat: 36.7497316, lng: -3.870516},
        address: ' Camino de Burriana, s/n, 29780 Nerja, Málaga, Spain',
        comments: [{
          user: user[3]._id,
          content: 'Hi Dexter, should we go to Nerja Beaches at the end of the course?'
        },
        {
          user: user[1]._id,
          content: 'It will be lovely so that we can relax a bit'
        }]
      },
      {
        name: 'Café Fresco',
        user: user[2]._id,
        image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
        description: 'Hip, garden shed-style branch of small cafe chain for artisan coffee, plus sandwiches and cakes. ',
        category: 'Cafes',
        location: {lat: 36.1477101, lng: -5.35555},
        address: ' Ocean Village Promenade 33, Gibraltar'
      },
      {
        name: 'Camping Jungfrau Holiday Park',
        user: user[3]._id,
        image: 'https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Nestled in a valley of lush greenery in Switzerland, Jungfrau is one of Europe\'s most beautiful campsites offering the authentic alpine atmosphere.',
        category: 'Landmarks',
        location: {lat: 46.588744, lng: 7.906073},
        address: 'Weid 406, 3822 Lauterbrunnen, Switzerland'
      },
      {
        name: 'Camping Lazy Rancho 4',
        user: user[3]._id,
        image: 'https://images.unsplash.com/photo-1532876924456-d6460f2f56a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Campsite Lazy-Rancho 4 is a campsite in Unterseen, Bern, located a river/stream.The campsite has which are marked out and pitches with some shade. It is possible to rent hikers\' cabins and bungalows. The campsite has a playground. ',
        category: 'Landmarks',
        location: {lat: 46.6860467, lng: 7.8286186},
        address: ' Lehnweg 6, 3800 Unterseen, Switzerland'
      },
      {
        name: 'The Old Joint Stock',
        user: user[2]._id,
        image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        description: 'Victorian bank building, now home to a theatre and pub with an island bar below a glass-domed roo',
        category: 'Pubs',
        location: {lat: 52.480799, lng: -1.902177},
        address: '4 Temple Row W, Birmingham B2 5NY'
      },
      {
        name: 'Bacchus Bar',
        user: user[2]._id,
        image: 'https://images.unsplash.com/photo-1521394573970-cdcef757fddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80',
        description: 'Cask ales and a crowd-pleasing menu in a plush venue with vaulted ceilings and dark wood tables.',
        category: 'Pubs',
        location: {lat: 52.4788598, lng: -1.9008796},
        address: 'Burlington Arcade, New St, Birmingham B2 4JH'
      },
      {
        name: 'Santiago de Compostela Cathedral',
        user: user[2]._id,
        image: 'https://images.unsplash.com/photo-1532726858233-f3c23319edc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'The Cathedral of Santiago de Compostela is part of the Roman Catholic Archdiocese of Santiago de Compostela and is an integral component of the Santiago de Compostela World Heritage Site in Galicia, Spain. The cathedral is the reputed burial place of Saint James the Great, the apostles of Jesus Christ.',
        category: 'Religious Sites',
        location: {lat: 42.8805962, lng: -8.5798751},
        address: 'Praza do Obradoiro, s/n, 15704 Santiago de Compostela, A Coruña, Spain'
      },
      {
        name: 'Buckingham Palace',
        user: user[0]._id,
        image: 'https://www.royal.uk/sites/default/files/images/feature/buckingham-palace.jpg',
        description: 'Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning.',
        category: 'Landmarks',
        location: {lat: 51.501364, lng: -0.144084},
        address: 'Westminster, London SW1A 1AA',
        comments: {
          user: user[0]._id,
          content: 'The Changing of the guard does not happen every day and it is subject to last minute cancellation. Make sure to check the website for the schedule before going. If you get there by 10, you should be able to get a good viewing spot.'
        }
      },
      {
        name: 'Duomo di Napoli',
        user: user[3]._id,
        image: 'https://d1c96a4wcgziwl.cloudfront.net/274201_NaplesCathedral.jpg',
        description: 'Also known as the “City of Five Hundred Domes”, Naples boasts an incredible number of churches, monasteries and abbeys. In this forest of religious buildings, it’s impossible to ignore the Cattedrale di San Gennaro, the city’s main church, a splendid mixture of Gothic and Baroque styles. ',
        category: 'Religious Sites',
        location: {lat: 40.852589, lng: 14.2576883},
        address: 'Via Duomo, 147, 80138 Napoli NA, Italy'
      },
      {
        name: 'Reggia di Caserta',
        user: user[3]._id,
        image: 'https://c1.staticflickr.com/4/3903/15130807755_7b754bc99d_b.jpg',
        description: 'The Royal Palace of Caserta is a former royal residence in Caserta, southern Italy, constructed by the Spanish royal family as their main residence as kings of Naples. It is one of the largest palaces erected in Europe during the 18th century.',
        category: 'Landmarks',
        location: {lat: 41.0732181, lng: 14.3248743},
        address: 'Viale Douhet, 2/a, 81100 Caserta CE, Italy',
        comments: [{
          user: user[2]._id,
          content: 'Hi Jessica, this Royal Palace reminds me of Schönbrunn Palace.'
        },
        {
          user: user[3]._id,
          content: 'Yes it\'s very similar but I think that this is bigger than the one in Vienna.'
        }]
      },
      {
        name: 'Archaeological Museum',
        user: user[3]._id,
        image: 'https://images.unsplash.com/photo-1544213456-bc37cb97df74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'The Archaeological Museum hosts an extensive collection of Greek and Roman antiquities that were discovered during the excavations at Pompeii and Herculaneum. Among the great treasures of the museum are the Herculaneum papyri, carbonized by the eruption of Mount Vesuvius in AD 79 and found in the Villa of the Papyri. The Archaeological Museum of Naples is also famous for its Egyptian collection, the second largest in Italy after Turin',
        category: 'Landmarks',
        location: {lat: 40.8535985, lng: 14.2483314},
        address: 'Piazza Museo, 19, 80135 Napoli NA, Italy',
        comments: {
          user: user[1]._id,
          content: 'This is a must see when in Napoli because there are some amazing sculptures and artefacts from Romans and Egyptian times. Unfortunately some parts were closed for repair when we were there but we still had a brilliant time. '
        }
      },
      {
        name: 'Sandbar',
        user: user[1]._id,
        image: 'https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=884&q=80',
        description: 'Sandbar is located in an idyllic location overlooking Praa Sands Beach with panoramic views of the ocean. ',
        category: 'Bars',
        location: {lat: 50.1040579, lng: -5.3940355},
        address: ' Praa Sands, Cornwall TR20 9TQy'
      },
      {
        name: 'Post Office Vaults',
        user: user[0]._id,
        image: 'https://images.unsplash.com/photo-1497644083578-611b798c60f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Compact cellar bar serving real ales and international bottled beer selection.',
        category: 'Bars',
        location: {lat: 52.4793512, lng: -1.9040425},
        address: ' 84 Pinfold St, Birmingham B2 4AY ',
        comments: [{
          user: user[1]._id,
          content: 'Hi Tom, should we go here tonight?'
        },
        {
          user: user[0]._id,
          content: 'Yes please!'
        }]
      },
      {
        name: 'Palazzo Petrucci Ristorante',
        user: user[3]._id,
        image: 'https://images.unsplash.com/photo-1520099940286-947795ff7b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'We opened the Napoli restaurant back in June 2013 with the aim of bringing true Neapolitan pizza and beautiful handmade pasta to our home town of leek. The restaurant was designed to be a laid back and relaxing place to eat out with friends and loved ones whilst delivering the great quality traditional Italian food that we have come to love so much.',
        category: 'Restaurants',
        location: {lat: 40.8214106, lng: 14.2127399},
        address: 'Via Posillipo, 16 C, 80123 Napoli NA, Italy'
      },
      {
        name: 'Edinburgh Castle',
        user: user[3]._id,
        image: 'https://images.unsplash.com/photo-1533834181702-758cc2177c75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        description: 'Edinburgh Castle is a historic fortress which dominates the skyline of the city of Edinburgh, Scotland, from its position on the Castle Rock. Archaeologists have established human occupation of the rock since at least the Iron Age, although the nature of the early settlement is unclear',
        category: 'Landmarks',
        location: {lat: 55.9485947, lng: -3.2021075},
        address: 'Castlehill, Edinburgh EH1 2NG'
      },
      {
        name: 'Origin Coffee Roasters',
        user: user[0]._id,
        image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability.',
        category: 'Cafes',
        location: {lat: 51.5291649, lng: -0.1289018},
        address: '65 Charlotte Rd, London EC2A 3PE'
      },
      {
        name: 'Falls of Foyers',
        user: user[2]._id,
        image: 'https://images.unsplash.com/photo-1465350269328-169609160ee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'The Fall of Foyers is a waterfall on the River Foyers, which feeds Loch Ness, in Highland, Scotland, United Kingdom. The waterfall has "a fine cascade", having a fall of 165 feet.',
        category: 'Landmarks',
        location: {lat: 57.2502946, lng: -4.492759},
        address: '45 B852, Inverness IV2 6XX'
      },
      {
        name: 'Queen\'s View',
        user: user[3]._id,
        image: 'https://images.unsplash.com/photo-1529098964758-f21d46b6c525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Historic viewpoint with iconic panoramas over Loch Tummel, a cafe/tea room & a visitor centre.',
        category: 'Landmarks',
        location: {lat: 56.7159113, lng: -3.8607612},
        address: 'Pitlochry PH16 5NR'
      },
      {
        name: 'Annapurna Circuit Trek',
        user: user[1]._id,
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
        description: 'The Annapurna Circuit is a trek within the Annapurna mountain range of central Nepal. The total length of the route varies between 160–230 km (100-145 mi), depending on where motor transportation is used and where the trek is ended.',
        category: 'Landmarks',
        location: {lat: 27.7235121, lng: 85.3133928},
        address: 'Muktinath 33100, Nepal'
      },
      {
        name: 'Pokhara Paragliding',
        user: user[1]._id,
        image: 'https://images.unsplash.com/photo-1471247511763-88a722fc9919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80',
        description: 'Paragliding in Pokhara is the most popular as far as this adventure port is concerned. The take-off point is Sarangkot, which is at an altitude of 1592 meters and just 2.4 km due north of Lakeside in Pokhara (593 m). You can either hike to the site or go on a vehicle (20 minutes).',
        category: 'Viewpoints',
        location: {lat: 28.229651, lng: 83.8165329},
        address: 'Lakeside, Pokhara 33700, Nepal'
      },
      {
        name: 'Phewa Lake',
        user: user[1]._id,
        image: 'https://images.unsplash.com/photo-1508157942875-586a83457569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
        description: 'Phewa Lake, Phewa Tal or Fewa Lake is a freshwater lake in Nepal formerly called Baidam Tal located in the south of the Pokhara Valley that includes Pokhara city; parts of Sarangkot and Kaskikot.',
        category: 'Landmarks',
        location: {lat: 28.2116268, lng: 83.9322529},
        address: 'Pokhara 33700, Nepal',
        comments: {
          user: user[2]._id,
          content: 'I\'ts my 3rd time in pokhara. Pokhara trip is always good. Boating in the lake is my first priority and freshend my mind doing boating'
        }
      }])

        .then(gems => {
          return Trip.create({
            name: 'Sunday Afternoon Sights',
            user: user[1]._id,
            image: 'https://absolutely.london/wp-content/uploads/2017/06/Gordons-hero-1068x712.jpg',
            description: 'Take a sightseeing tour of London and learn from experts as they show you the city\'s best attractions and famous landmarks',
            category: 'Sunday Trips',
            location: 'London',
            gems: [gems[0]._id, gems[1]._id, gems[2]._id]
          },
          {name: 'Historical Trip',
            user: user[0]._id,
            image: 'https://vignette.wikia.nocookie.net/theenemy/images/d/de/Natural-history-museum.jpg/revision/latest?cb=20180106202456',
            description: 'Find out more about our history through our tours.',
            category: 'Family Trips',
            location: 'London',
            gems: [gems[1]._id, gems[2]._id , gems[17]._id, gems[25]._id],
            comments: {
              user: user[3]._id,
              content: 'I\'m sure that my kids will love this tour.'
            }
          },
          {name: 'Lock Ness ',
            user: user[2]._id,
            image: 'https://thewallpaper.co/wp-content/uploads/2016/03/mirror-lake-high-resolution-wallpaper-download-mirror-lake-photos-free-cool-colours-screen-1920x1200-768x480.jpg',
            description: 'With this rare trip you have the chance of visiting Loch Ness. Loch Ness is best known for alleged sightings of the cryptozoological Loch Ness Monster, also known affectionately as "Nessie". ',
            category: 'Rare Trips',
            location: 'Edinburgh',
            gems: [gems[4]._id, gems[5]._id, gems[26]._id]
          },
          {name: 'Discovering Scotland',
            user: user[3]._id,
            image: 'https://blogs.library.duke.edu/bitstreams/files/2015/08/duke-chapel-960x576.jpg',
            description: 'A wide range of itineraries and days out for your holiday in Scotland.',
            category: 'Weekend Trips',
            location: 'Edinburgh',
            gems: [gems[27]._id, gems[5]._id, gems[24]._id],
            comments: {
              user: user[3]._id,
              content: 'SCOTLAND and Ireland are two majestic lands. Please go sometime in your life. Fun, safe, amazing, beautiful,....you name it.'
            }
          },
          {name: 'Caravan Holiday around France',
            user: user[0]._id,
            image: 'https://images.unsplash.com/photo-1540500754616-370738ad6c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80',
            description: 'France is a fantastic country for an unforgettable camping holiday, and for good reason. With gorgeous sandy beaches, cool lakes, stunning mountain ranges and beautiful cities we can see why it’s the most visited country in the world.',
            category: 'Caravan Trips',
            location: 'Arcis-sur-Aube',
            gems: [gems[6]._id, gems[7]._id]
          },
          {name: 'Cycle around Cornwall',
            user: user[1]._id,
            image: 'https://images.unsplash.com/photo-1496104570434-e8719f0c1c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=944&q=80',
            description: 'Get out and explore Cornwall\'s amazing cycling routes while discovering wildlife, heritage and parts of Cornwall you never knew existed. ',
            category: 'Cycling Trips',
            location: 'Newquay',
            gems: [gems[8]._id, gems[9]._id, gems[21]._id]
          },
          {name: 'Road Trip discovering Spain',
            user: user[2]._id,
            image: 'https://images.unsplash.com/photo-1529225596519-1262d0bfc242?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            description: 'Pick up a hire car and drive east along the coast so that you can discover Spain.',
            category: 'Road Trips',
            location: 'Nerja',
            gems: [gems[10]._id, gems[11]._id,gems[16]._id],
            comments: {
              user: user[3]._id,
              content: 'Thanks for sharing this tour with us!'
            }
          },
          {name: 'Camping in Switzerland',
            user: user[3]._id,
            image: 'https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            description: 'Camping in Switzerland is a fantastic activity, providing hours of enjoyment and a welcome opportunity to connect with loved ones, as well as nature',
            category: 'Camping Trips',
            location: 'Geneva',
            gems: [gems[12]._id, gems[13]._id]
          },
          {name: 'Pub Crawl in the Midlands',
            user: user[0]._id,
            image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
            description: 'Start a tour taking in several pubs or drinking places in the beautiful city of Birmingham',
            category: 'Pubs Crawl',
            location: 'Birmingham',
            gems: [gems[14]._id, gems[15]._id, gems[22]._id]
          },
          {name: 'Discover Napoli',
            user: user[3]._id,
            image: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=999&q=80',
            description: 'The Province of Naples is a magical place where colors, flavors, culture and history are intertwined in a charming mix of knowledge, joy and fun.',
            category: 'Weekend Trips',
            location: 'Napoli',
            gems: [gems[18]._id, gems[19]._id, gems[23]._id],
            comments: {
              user: user[2]._id,
              content: 'This tour looks great!'
            }
          },
          {name: 'Visit Nepal',
            user: user[1]._id,
            image: 'https://images.unsplash.com/photo-1544735716-87fa59a45b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            description: 'Nepal, the land of Himalayas presents a wide range of travel options with its excellent natural beauty, massive mountains, breathtaking adventurous activities and more. Among all, trekking in Nepal is one of the most popular travel preferences among travelers all around the world',
            category: 'Weekend Trips',
            location: 'Nepal',
            gems: [gems[28]._id, gems[29]._id, gems[30]._id],
            comments: {
              user: user[0]._id,
              content: 'Can\'t wait to go to Nepal next year.'
            }
          }
          )
        })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
