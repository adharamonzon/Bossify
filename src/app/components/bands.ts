const bands = [
  {
    id: 1,
    name: 'The Rolling Stones',
    description: 'Banda británica de rock, originaria en Londres. Fueron los rivales históricos de The Beatles. Esta banda se formo en abril de 1962. Están considerados como una de las más grandes e influyentes bandas de toda la historia del rock, siendo una de las agrupaciones que sentó las bases del rock contemporáneo. Destacan por ser un grupo de extraordinaria longevidad, iniciaron su primera gira en 1964, En 2016 seguían grabando álbumes de estudio y ofreciento conciertos en directo.',
    bandMembers: [' Mick Jagger', 'Brian Jones', 'Keith Richards', 'Bill Wyman', 'Charlie Watts'],
    image: '../../.././assets/images/rolling-stones.jpg',
  },
  {
    id: 2,
    name: 'Led Zeppelin',
    description: 'Esta banda surgió a finales de los años 60 en el Reino Unido, la influencia del grupo Led Zeppelin es incalculable en la historia del rock. Su música trasciende cualquier etiqueta, incorporando a su base hard rock y a sus textos de influencia mística o mitológica heterogéneos sonidos que tanto se inspiraron en el blues como en el folk británico o en el funk. El cuarteto, representado por Peter Grant, debutó en directo en el mes de septiembre de 1968, cuando actuaron, por obligaciones contractuales previas, en la ciudad danesa de Copenhague. Han logrado vender más de 300 millones de copias alrededor del mundo',
    bandMembers: ['Robert Plant', 'Jimmy Page', 'John Paul Jones', 'John Bonham'],
    image: '../../.././assets/images/led-zeppelin.jpg',
  },
  {
    id: 3,
    name: 'Queen',
    description:
      'Banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa. El grupo gozó de un gran éxito en el Reino Unido con álbumes como Sheer Heart Attack (1974) y A Night at the Opera (1975). Este último llamó la atención internacionalmente, en especial por el sencillo "Bohemian Rhapsody", y colocó a Queen en un primer plano de la escena musical. Tuvieron una significativa repercusión en Estados Unidos a finales de los años 1970, ya con un numeroso repertorio de éxitos.5 A nivel artístico, se ha destacado su diversidad musical, sus arreglos en múltiples capas y sus armonías vocales. Es considerada una banda de gran influencia en el desarrollo del hard rock y el heavy metal, incorporando elementos del glam rock, rock progresivo, folk, ópera, blues y pop. Fue una de las primeras agrupaciones musicales en hacer de sus conciertos espectáculos muy vistosos mediante el uso de bombas de humo, flashpots o innovadores sistemas de luces móviles, además de promover la participación del público en los mismos, contribuyendo así al auge del arena rock.',
    bandMembers: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
    image: '../../.././assets/images/queen.jpg',
  },
  {
    id: 4,
    name: 'Pink Floyd',
    description: 'banda de rock británica, fundada en Londres en 1965. Es considerada un icono cultural del siglo xx y una de las bandas más influyentes y aclamadas en la historia de la música, que obtuvo gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico con el paso del tiempo. Es conocida por sus canciones de alto contenido filosófico, la experimentación sónica, las innovadoras portadas de sus discos y sus elaborados espectáculos en vivo. Sus ventas sobrepasan los 300 millones de álbumes vendidos en todo el mundo. Pink Floyd comenzó con un gran éxito en la escena underground londinense a finales de los años sesenta, con Syd Barrett como principal compositor. La salida de Barrett convirtió a Waters en el principal escritor de la banda mientras que Gilmour y Wright tomaron el protagonismo en la composición musical. El grupo grabó durante esta época muchos álbumes que se convirtieron en enormes éxitos comerciales, como The Dark Side of the Moon (1973), Wish You Were Here (1975), Animals (1977) y The Wall (1979)',
    bandMembers: ['Syd Barrett', 'Bob Klose', 'Roger Waters', 'Rick Wright', 'Nick Mason'],
    image: '../../.././assets/images/pink_floyd.jpg',
  },
  {
    id: 5,
    name: 'Deep Purple',
    description:
      'banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath. Su música ha incorporado elementos del rock progresivo, rock sinfónico, rock psicodélico, blues rock y de la música clásica y Britpop. Deep Purple ha vendido más de 120 millones de discos en todo el mundo. La banda permaneció inactiva desde julio de 1976 hasta su reunión, en abril de 1984.  La "Mark II", formada por Ian Gillan (voz), Ritchie Blackmore (guitarra), Jon Lord (teclados), Ian Paice (batería) y Roger Glover (bajo), es considerada la alineación más exitosa, y la que mayores ventas ha cosechado, la cual se mantuvo en activo desde 1969 a 1973, de 1984 a 1989, y nuevamente de 1992 a 1993, cuando la relación entre Blackmore y el resto de los músicos se volvió insostenible.El grupo fue considerado "la banda más ruidosa del planeta"​ por el libro Guinness de los récords en la edición de 1974 debido al concierto que realizaron en el Rainbow Theatre de Londres, el 30 de junio de 1972, en el cual se midieron 117 decibelios. En 2013 una encuesta realizada por la emisora de radio británica Planet Rock situó a Deep Purple en el 5º lugar de las "bandas más influyentes de la historia".',
    bandMembers: ['Ian Paice', 'Roger Glover', 'Ian Gillan', 'Steve Morse', 'Don Airey'],
    image: '../../.././assets/images/deep-purple.jpg',
  },
  {
    id: 6,
    name: 'AC/DC',
    description:
      'AC/DC es un grupo de hard rock australiano formado en 1973 en Sídney, Australia, por los hermanos escoceses Malcolm y Angus Young. Sus álbumes se han vendido en un total estimado de 200 millones de copias,  embarcándose en giras multitudinarias por todo el mundo, y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.​ Mucho de ello se debe al extravagante estilo de su guitarrista principal y símbolo visual, Angus Young, quien asume el rol de agitador musical durante los conciertos, gracias a sus dinámicos y adrenalínicos despliegues escénicos uniformado de colegial callejero.​ Al comienzo, los circuitos de pubs australianos fueron testigo de los primeros meses de vida del proyecto, tiempos por los cuales sufrieron diversos cambios en su alineación. En 1976 incursionaron por primera vez fuera de las fronteras australianas con High Voltage y Dirty Deeds Done Dirt Cheap, discos minimalistas de básico rock, que ofrecían un contrapunto sonoro a las ampulosidades y la fastuosidad de las bandas que triunfaron en el mercado de la época. Ese mismo año se trasladaron al Reino Unido, de donde procedían los Young. Desembarcaron en pleno auge del punk rock, lo que contribuyó a que en poco tiempo obtuvieron una enorme aceptación del público, ocupando inmediatamente los primeros puestos en ventas. Con cuatro décadas de trayectoria, la banda ha superado los cambios en la alineación, la pérdida de históricos miembros, la controversia sobre su imagen y letras, y el constante cambio de las tendencias musicales, para convertirse en la actualidad en una de las bandas más importantes e influyentes de la historia, y con mayor capacidad de convocatoria. Hasta la fecha son una de las bandas más taquilleras de todos los tiempos.',
    bandMembers: ['Dave Evans', 'Malcolm Young', 'Angus Young', 'Colin Burgess', 'Larry Van Kriedt'],
    image: '../../.././assets/images/acdc.jpg',
  },
  {
    id: 7,
    name: 'The Ramones',
    description: 'Ramones fue una banda de punk formada en Forest Hills, Estados Unidos en 1974 y disuelta en 1996. Pioneros y líderes del naciente punk,cimentaron las bases de este género musical con composiciones simples, minimalistas, repetitivas y letras muy simples o incluso sin sentido, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado de los años 1970. Con sus largos solos de guitarra, las complejas canciones de rock progresivo y sus enigmáticas letras. Su sonido se caracteriza por ser rápido y directo, con influencias del rockabilly de los años 1950. Ramones lideró la primera ola del punk en Nueva York. publicaron 14 discos de estudio y varias recopilaciones y discos en directo, haciendo un total de 21 álbumes y un total de 212 canciones. A pesar de su fama actual, el grupo solo consiguió dos discos de oro gracias al recopilatorio Ramonesmania (1988) y su álbum debut en 2014, y únicamente dos de sus álbumes consiguieron sobrepasar el top 50 en el Billboard estadounidense',
    bandMembers: ['Joey Ramone', 'Johnny Ramone', 'Dee Dee Ramone ', 'Tommy Ramone', 'Larry Van Kriedt'],
    image: '../../.././assets/images/ramones.jpg',
  },
];

export default bands;
