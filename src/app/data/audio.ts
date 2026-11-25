/**
 * Audioguías: textos pensados para leerse en voz alta (síntesis de voz del móvil).
 * Escritos para escuchar: frases cortas, siglos en letra y sin abreviaturas.
 * La clave es el `place` del paso del itinerario.
 */
export interface AudioChapter {
  title: string;
  text: string;
}

export interface AudioGuide {
  title: string;
  chapters: AudioChapter[];
}

export const AUDIO: Record<string, AudioGuide> = {
  'Pantheon Roma': {
    title: 'El Panteón',
    chapters: [
      {
        title: 'Un templo de dos mil años',
        text: 'Estáis ante el edificio de la Antigua Roma mejor conservado del mundo. En el frontón leeréis el nombre de Marco Agripa, el yerno de Augusto, pero es un pequeño engaño: Agripa construyó aquí un primer templo hacia el año 27 antes de Cristo, que se quemó. El que veis lo levantó el emperador Adriano hacia el año 125, y por modestia, o por cálculo político, dejó la inscripción original. Las dieciséis columnas del pórtico son de granito egipcio, de una sola pieza cada una, y miden casi doce metros. Se trajeron en barco desde Egipto, río Tíber arriba.',
      },
      {
        title: 'La cúpula y el óculo',
        text: 'Entrad y mirad hacia arriba. La cúpula mide cuarenta y tres metros de diámetro, exactamente lo mismo que la altura del suelo al óculo: dentro cabría una esfera perfecta. Casi dos mil años después sigue siendo la mayor cúpula de hormigón sin armar del mundo. El truco romano fue aligerar el material a medida que sube: abajo, piedra pesada; arriba, piedra pómez volcánica. Los casetones, esos cuadrados hundidos, también quitan peso. El óculo, de nueve metros, es la única fuente de luz. Cuando llueve, el agua entra, y el suelo, ligeramente abombado, la lleva hacia veintidós pequeños agujeros de desagüe. Fijaos en el círculo de luz que se mueve por las paredes: era un reloj de sol gigante.',
      },
      {
        title: 'Por qué se salvó',
        text: 'Muchos templos romanos se desmontaron para aprovechar sus piedras. El Panteón se salvó porque en el año 609 el emperador bizantino se lo regaló al papa Bonifacio cuarto, que lo convirtió en iglesia: Santa María de los Mártires. Aun así, no se libró del todo. En el siglo diecisiete, el papa Urbano octavo, de la familia Barberini, mandó fundir el bronce del techo del pórtico. Los romanos lo resumieron con una frase que todavía se repite: lo que no hicieron los bárbaros, lo hicieron los Barberini.',
      },
      {
        title: 'La tumba de Rafael',
        text: 'A la izquierda del altar está la tumba de Rafael, que murió en 1520 con solo treinta y siete años. Pidió ser enterrado aquí. Su epitafio, escrito por el poeta Pietro Bembo, dice más o menos: aquí yace Rafael; mientras vivía, la naturaleza temió ser vencida por él, y cuando murió, temió morir con él. En el Panteón también están enterrados los dos primeros reyes de la Italia unificada, Víctor Manuel segundo y Humberto primero.',
      },
    ],
  },

  'San Luigi dei Francesi': {
    title: 'San Luigi dei Francesi',
    chapters: [
      {
        title: 'Los primeros Caravaggio públicos',
        text: 'Esta es la iglesia de los franceses en Roma. En la última capilla de la izquierda, la capilla Contarelli, Caravaggio recibió su primer encargo público importante, entre 1599 y 1602. Tenía menos de treinta años y nadie lo conocía fuera de un círculo de coleccionistas. Al descubrirse estos tres cuadros sobre la vida de san Mateo, se convirtió en el pintor del que hablaba toda Roma. Echad una moneda en la máquina para encender la luz: merece la pena.',
      },
      {
        title: 'La vocación de san Mateo',
        text: 'El cuadro de la izquierda es la Vocación. Mateo era recaudador de impuestos y está contando monedas en una taberna con ropa de la época de Caravaggio, no de la de Jesús. Por la derecha entra Cristo, casi en la sombra, y señala. Fijaos en su mano: es un guiño a la mano de Adán en la Capilla Sixtina. La luz entra en diagonal siguiendo su gesto, como si la luz fuera la llamada. Hay un debate entre expertos que nunca se ha cerrado: ¿cuál es Mateo? ¿El hombre con barba que se señala a sí mismo, o el joven que sigue con la cabeza agachada sobre el dinero? Decidid vosotros.',
      },
      {
        title: 'La inspiración y el martirio',
        text: 'En el centro, san Mateo escribe su evangelio guiado por un ángel. Es la segunda versión: la primera mostraba a un Mateo con aspecto de campesino, con los pies sucios casi saliendo del cuadro, y los sacerdotes la rechazaron por poco digna. Esa primera versión acabó en un museo de Berlín y se destruyó en 1945. A la derecha, el martirio: un verdugo semidesnudo en el centro, y al fondo, a la izquierda, un hombre con barba que mira la escena con cara de preocupación. Es el autorretrato de Caravaggio.',
      },
    ],
  },

  'Fontana di Trevi': {
    title: 'La Fontana di Trevi',
    chapters: [
      {
        title: 'Un acueducto que sigue funcionando',
        text: 'El agua que veis viene del Acqua Vergine, un acueducto que inauguró Agripa en el año 19 antes de Cristo. Han pasado más de dos mil años y sigue funcionando. El nombre viene de una leyenda que tenéis en uno de los relieves de arriba: una muchacha, una virgen, enseñó a unos soldados sedientos dónde estaba el manantial. El nombre de Trevi vendría de tre vie, tres calles, porque aquí se cruzaban tres.',
      },
      {
        title: 'Un teatro de mármol',
        text: 'La fuente se terminó en 1762, tras treinta años de obras. La diseñó Nicola Salvi, que murió antes de verla acabada. No es una fuente pegada a un palacio: el palacio entero hace de telón de fondo de un teatro. En el centro, Océano, el dios de todas las aguas, sale en un carro con forma de concha tirado por dos caballos marinos. Uno está tranquilo y el otro encabritado: representan el mar en calma y el mar agitado. A los lados, la Abundancia y la Salud.',
      },
      {
        title: 'Las monedas',
        text: 'La tradición dice que hay que tirar la moneda de espaldas, con la mano derecha por encima del hombro izquierdo. Una moneda: volveréis a Roma. Dos: os enamoraréis de alguien de Roma. Tres: os casaréis. Cada año se recogen más de un millón de euros, que el ayuntamiento entrega a Cáritas para comedores sociales. Y sí, aquí se bañó Anita Ekberg en La dolce vita, de Fellini. Bañarse hoy cuesta una multa de varios cientos de euros.',
      },
    ],
  },

  'Piazza Navona': {
    title: 'Piazza Navona',
    chapters: [
      {
        title: 'Un estadio convertido en plaza',
        text: 'Fijaos en la forma de la plaza: larga, estrecha y con un extremo redondeado. No es casualidad. Debajo está el estadio que el emperador Domiciano construyó hacia el año 86 para competiciones atléticas al estilo griego. Las casas se construyeron sobre sus gradas, y por eso la plaza conserva el dibujo exacto de la pista. En la calle de detrás, en el extremo norte, todavía se ven restos del estadio bajo el nivel de la calle. Durante siglos, en verano, se tapaban los desagües y se inundaba la plaza para que los carruajes pasearan por el agua.',
      },
      {
        title: 'La Fuente de los Cuatro Ríos',
        text: 'La fuente central es de Bernini, de 1651, y se la encargó el papa Inocencio décimo, cuya familia, los Pamphili, tenía el palacio en la plaza. Cuatro gigantes representan los cuatro grandes ríos de los continentes conocidos: el Danubio por Europa, el Nilo por África, el Ganges por Asia y el Río de la Plata por América. El Nilo tiene la cabeza tapada porque entonces nadie sabía dónde nacía. Cuentan que Bernini puso así al río para que no tuviera que ver la iglesia de su rival Borromini, enfrente, y que el Río de la Plata levanta la mano por miedo a que se le caiga encima. Es una leyenda bonita pero falsa: la fachada de la iglesia se hizo después que la fuente.',
      },
      {
        title: 'La Navidad en Navona',
        text: 'Desde hace más de un siglo, en diciembre la plaza se llena de puestos de dulces, juguetes y figuras de belén. La fiesta termina el seis de enero con la Befana, una bruja buena que en Italia trae los regalos a los niños: caramelos a los buenos y carbón a los traviesos. Es el equivalente de nuestros Reyes Magos.',
      },
    ],
  },

  'Piazza San Pietro': {
    title: 'La Plaza de San Pedro',
    chapters: [
      {
        title: 'Los brazos de la Iglesia',
        text: 'Bernini diseñó esta plaza entre 1656 y 1667. Las dos columnatas curvas representan, según él mismo, los brazos maternos de la Iglesia que abrazan a los fieles. Tienen doscientas ochenta y cuatro columnas en cuatro filas y, encima, ciento cuarenta estatuas de santos. Buscad en el suelo, entre el obelisco y cada fuente, unos discos de piedra: si os ponéis encima y miráis hacia la columnata, las cuatro filas de columnas se alinean y parecen una sola.',
      },
      {
        title: 'El obelisco que vio morir a san Pedro',
        text: 'El obelisco egipcio del centro lo trajo a Roma el emperador Calígula en el año 37 para decorar su circo, que estaba justo aquí al lado. En ese circo, según la tradición, fue crucificado san Pedro. Es el único obelisco de Roma que nunca se cayó. En 1586 el papa Sixto quinto mandó moverlo a su sitio actual: hicieron falta novecientos hombres y ciento cuarenta caballos, y se exigió silencio absoluto bajo pena de muerte. Cuenta la leyenda que las cuerdas empezaron a arder por el roce y un marinero gritó: ¡agua a las cuerdas! En vez de castigarlo, lo premiaron.',
      },
      {
        title: 'El árbol y el belén',
        text: 'Desde 1982, por iniciativa de Juan Pablo segundo, cada Navidad se instalan aquí un gran árbol y un belén a tamaño casi natural. Cada año los regala una región o un país distinto. Se inauguran a primeros de diciembre y se quedan hasta el final de las fiestas.',
      },
    ],
  },

  'Basilica di San Pietro': {
    title: 'La Basílica de San Pedro',
    chapters: [
      {
        title: 'Sobre la tumba de Pedro',
        text: 'Bajo el altar mayor, muchos metros más abajo, hay una necrópolis romana donde según la tradición fue enterrado el apóstol Pedro. Sobre esa tumba, el emperador Constantino levantó una primera basílica hacia el año 324. Mil doscientos años después estaba en ruinas, y en 1506 el papa Julio segundo empezó la nueva. La obra duró ciento veinte años y pasaron por ella Bramante, Rafael, Miguel Ángel, Maderno y Bernini. Mirad el suelo de la nave central: hay marcas con la longitud de otras grandes catedrales del mundo, todas más cortas que esta.',
      },
      {
        title: 'La Piedad',
        text: 'Nada más entrar, a la derecha, está la Piedad de Miguel Ángel. La esculpió con veinticuatro años, entre 1498 y 1499. Fijaos en que la Virgen parece más joven que su hijo: Miguel Ángel explicó que la pureza la mantenía joven. También es enorme, aunque no lo parece: si se pusiera de pie, mediría más de dos metros, pero así puede sostener a un hombre adulto sin que se note el esfuerzo. Es la única obra que firmó, en la banda que cruza el pecho de María. Cuenta Vasari que lo hizo al oír a unos visitantes atribuírsela a otro escultor. Está tras un cristal desde 1972, cuando un hombre la atacó con un martillo.',
      },
      {
        title: 'El baldaquino y la cátedra',
        text: 'Sobre el altar, el baldaquino de bronce de Bernini mide casi treinta metros: tanto como un edificio de diez plantas. Las columnas retorcidas imitan las que, según la tradición, venían del templo de Salomón. Al fondo, en el ábside, la Cátedra de San Pedro, también de Bernini, con una ventana de alabastro en la que una paloma representa al Espíritu Santo. A la derecha de la nave hay una estatua de bronce de san Pedro sentado: su pie derecho está gastado por los besos y las caricias de millones de peregrinos durante siete siglos.',
      },
    ],
  },

  'Cupola di San Pietro': {
    title: 'La cúpula de San Pedro',
    chapters: [
      {
        title: 'La cúpula de Miguel Ángel',
        text: 'Miguel Ángel aceptó dirigir la obra con setenta y un años y diseñó esta cúpula, pero murió en 1564 sin verla terminada. La acabaron Giacomo della Porta y Domenico Fontana en 1590. Mide cuarenta y dos metros por dentro, un poco menos que el Panteón, en el que se inspira, pero está muchísimo más alta: la cruz de arriba está a más de ciento treinta metros del suelo.',
      },
      {
        title: 'La subida',
        text: 'Al subir, primero salís a la galería interior, a la base de la cúpula. Mirad abajo, al baldaquino, y fijaos en las letras del friso: parecen normales desde el suelo, pero miden casi dos metros. Y lo que parecen pinturas son mosaicos. Después subís entre las dos capas de la cúpula: las paredes se inclinan y el pasillo se estrecha. Es normal sentir un poco de vértigo. Ánimo, que arriba merece la pena.',
      },
      {
        title: 'La vista',
        text: 'Desde arriba veréis la plaza con su forma de cerradura: el óvalo de Bernini y el trapecio delante de la basílica. Siguiendo Via della Conciliazione llegaréis con la vista hasta Castel Sant’Angelo y el Tíber. Detrás, los jardines del Vaticano, el estado más pequeño del mundo: menos de medio kilómetro cuadrado, su propia estación de tren y su emisora de radio.',
      },
    ],
  },

  "Castel Sant'Angelo": {
    title: 'Castel Sant’Angelo',
    chapters: [
      {
        title: 'De tumba a fortaleza',
        text: 'Este cilindro enorme nació como tumba. El emperador Adriano, el mismo que construyó el Panteón, lo mandó construir para él y su familia, y se terminó en el año 139. Después se convirtió en parte de las murallas, luego en fortaleza de los papas, en cárcel y en cuartel. Un pasillo elevado, el Passetto, lo une con el Vaticano. Por él huyó el papa Clemente séptimo en 1527, cuando las tropas del emperador Carlos quinto saquearon Roma. Ese fue el famoso Saco de Roma.',
      },
      {
        title: 'El ángel',
        text: 'El nombre viene de una leyenda del año 590. Roma sufría una epidemia de peste, y el papa Gregorio Magno encabezó una procesión para pedir que terminara. Al pasar por aquí, vio sobre el mausoleo al arcángel Miguel envainando su espada: la peste había terminado. Desde entonces el ángel corona el castillo. El de bronce que veis arriba es del siglo dieciocho.',
      },
      {
        title: 'La terraza de Tosca',
        text: 'En la terraza más alta transcurre el último acto de la ópera Tosca, de Puccini: la protagonista se lanza al vacío desde aquí. Es uno de los mejores miradores de Roma, con San Pedro delante y el Tíber a vuestros pies. Al bajar, buscad los apartamentos de los papas del Renacimiento, con frescos, y las prisiones: aquí estuvo encerrado el orfebre Benvenuto Cellini, que se escapó descolgándose con sábanas.',
      },
    ],
  },

  'Musei Vaticani': {
    title: 'Museos Vaticanos y Capilla Sixtina',
    chapters: [
      {
        title: 'Cómo empezó todo',
        text: 'Los Museos Vaticanos nacieron en 1506 con una sola escultura. En enero de ese año apareció enterrado en una viña de Roma el grupo del Laocoonte, que los textos antiguos describían como la mejor escultura del mundo. El papa Julio segundo mandó a Miguel Ángel a verlo, lo compró y lo expuso en un patio de su palacio. Hoy son más de siete kilómetros de salas. No intentéis verlo todo: seguid las flechas hacia la Capilla Sixtina y parad en lo importante.',
      },
      {
        title: 'Patio de la Piña',
        text: 'La piña de bronce gigante, de cuatro metros, era una fuente romana: el agua salía por la punta de las escamas. Dante la menciona en la Divina Comedia. En el centro del patio, la Esfera dentro de la esfera, de Arnaldo Pomodoro, de 1990: una bola de bronce rota que deja ver otra dentro.',
      },
      {
        title: 'Laocoonte y el Torso del Belvedere',
        text: 'En el patio octogonal está el Laocoonte. Laocoonte era un sacerdote de Troya que advirtió a los troyanos de que no metieran el caballo de madera en la ciudad. Los dioses, que estaban con los griegos, mandaron dos serpientes marinas que lo estrangularon junto a sus hijos. Mirad la cara de dolor y los músculos en tensión: Miguel Ángel quedó fascinado. Un poco más adelante, el Torso del Belvedere, un cuerpo sin cabeza, brazos ni piernas. Miguel Ángel lo estudió tanto que los cuerpos de la Capilla Sixtina le deben mucho. Cuentan que el papa le pidió completarlo y él se negó: dijo que era perfecto así.',
      },
      {
        title: 'La Galería de los Mapas',
        text: 'Este pasillo de ciento veinte metros tiene cuarenta mapas de las regiones de Italia, pintados en 1580 por encargo del papa Gregorio decimotercero, el mismo del calendario gregoriano que usamos. Los dibujó el geógrafo Ignazio Danti. Son sorprendentemente exactos para la época. Buscad vuestra región favorita de Italia y mirad el techo dorado, uno de los más espectaculares del museo.',
      },
      {
        title: 'La escuela de Atenas',
        text: 'En las Estancias de Rafael, entrad en la Sala de la Signatura. La pared más famosa es La escuela de Atenas, pintada hacia 1510 con unos veintisiete años. Reúne a los grandes filósofos griegos bajo una arquitectura imaginaria. En el centro, Platón señala al cielo, al mundo de las ideas, y su cara es la de Leonardo da Vinci. A su lado, Aristóteles extiende la mano hacia la tierra, hacia lo que se puede observar. Sentado en primer plano, apoyado en un bloque, está Heráclito, con la cara de Miguel Ángel, que en ese momento pintaba la Sixtina al lado. Y en el extremo derecho, un joven con gorro oscuro os mira directamente: es Rafael.',
      },
      {
        title: 'La bóveda de la Sixtina',
        text: 'Ya en la Capilla Sixtina, en silencio y sin fotos. Aquí se reúnen los cardenales para elegir papa. Miguel Ángel pintó la bóveda entre 1508 y 1512, casi solo, de pie en un andamio y con la cabeza hacia atrás. No pintó tumbado, como dice el mito. En el centro, nueve escenas del Génesis. Buscad la Creación de Adán: los dedos de Dios y de Adán casi se tocan. Hay quien ve en la forma roja que envuelve a Dios el dibujo de un cerebro humano. Miguel Ángel era escultor y no quería este encargo: se nota en los cuerpos, que parecen esculturas.',
      },
      {
        title: 'El Juicio Final',
        text: 'La pared del altar la pintó Miguel Ángel más de veinte años después, entre 1536 y 1541, ya con sesenta años. Es el Juicio Final: Cristo, en el centro, levanta el brazo; a su izquierda, los condenados caen al infierno. Abajo a la derecha, el juez del infierno, Minos, tiene orejas de burro y una serpiente que le muerde. Es el retrato de Biagio da Cesena, un maestro de ceremonias del papa que criticó tantos desnudos. Cuando se quejó, el papa le contestó que sobre el infierno no tenía jurisdicción. Y en la piel que sujeta san Bartolomé, a la derecha de Cristo, la cara deformada es el autorretrato de Miguel Ángel. Tras su muerte, otro pintor cubrió los desnudos con telas, y lo apodaron el Braghettone, el de los calzones.',
      },
    ],
  },

  'Scalinata di Trinità dei Monti': {
    title: 'La Plaza de España',
    chapters: [
      {
        title: 'Por qué se llama de España',
        text: 'La plaza se llama así por el palacio que tenéis a un lado: es la Embajada de España ante la Santa Sede desde el siglo diecisiete, la embajada permanente más antigua del mundo. Durante siglos, esta zona era territorio español y quien entraba de noche sin permiso podía acabar alistado en el ejército español. La columna de la Inmaculada, junto a la embajada, también tiene que ver con España. Cada ocho de diciembre, el papa viene a rezar ante ella y los bomberos suben a dejar una corona de flores en el brazo de la Virgen.',
      },
      {
        title: 'La escalinata y la Barcaccia',
        text: 'La escalinata, de ciento treinta y cinco escalones, se construyó entre 1723 y 1725 para unir la plaza con la iglesia francesa de la Trinità dei Monti. La pagaron los franceses. Hoy está prohibido sentarse en ella. Abajo, la fuente de la Barcaccia, la barca medio hundida, es de Pietro Bernini, el padre de Gian Lorenzo, probablemente con ayuda del hijo. Recuerda una inundación del Tíber de 1598, cuando una barca quedó varada por aquí. Como aquí el agua llega con poca presión, Bernini la hundió en el suelo en lugar de hacer chorros.',
      },
      {
        title: 'Los poetas ingleses',
        text: 'La casa rosa a la derecha de la escalinata es la casa donde murió el poeta John Keats, en 1821, con veinticinco años. Hoy es un museo de los románticos ingleses. Esta zona era el barrio de los viajeros del Grand Tour: Goethe, Byron, Stendhal. En la Via dei Condotti, enfrente, sigue abierto el Antico Caffè Greco, de 1760, donde se sentaban muchos de ellos.',
      },
    ],
  },

  'Via Margutta': {
    title: 'Via Margutta',
    chapters: [
      {
        title: 'La calle de los artistas',
        text: 'Esta calle tranquila, llena de hiedra, de talleres y de galerías, es desde hace siglos la calle de los pintores en Roma. Aquí vivió Federico Fellini con la actriz Giulietta Masina, en el número 110. Y en el número 51 está el patio del apartamento de Gregory Peck en Vacaciones en Roma, la película de 1953 con Audrey Hepburn. Fijaos en la Fontana degli Artisti, con pinceles, compases y caballetes esculpidos.',
      },
    ],
  },

  'Terrazza del Pincio': {
    title: 'El Pincio y Piazza del Popolo',
    chapters: [
      {
        title: 'La puerta norte de Roma',
        text: 'La plaza que veis abajo, Piazza del Popolo, era la primera imagen de Roma para cualquiera que llegara del norte por la Via Flaminia. Por esa puerta entraron durante siglos peregrinos, reyes y viajeros, como la reina Cristina de Suecia en 1655. Las dos iglesias gemelas del fondo parecen idénticas, pero no lo son: una tiene la cúpula ovalada y la otra redonda, y el arquitecto lo disimuló con mucha habilidad.',
      },
      {
        title: 'El obelisco y el mirador',
        text: 'El obelisco del centro es egipcio, del faraón Ramsés segundo, de hace más de tres mil años. Augusto lo trajo a Roma en el año 10 antes de Cristo para el Circo Máximo. La terraza del Pincio la diseñó el arquitecto Valadier a principios del siglo diecinueve, en la época de Napoleón. Al frente, en el horizonte, la cúpula de San Pedro: el romano de toda la vida dice que desde aquí está la mejor puesta de sol de la ciudad.',
      },
    ],
  },

  'Galleria Borghese': {
    title: 'Galleria Borghese',
    chapters: [
      {
        title: 'El cardenal coleccionista',
        text: 'Esta villa la mandó construir hacia 1613 el cardenal Scipione Borghese, sobrino del papa Pablo quinto. No era una vivienda, sino un lugar para fiestas y para enseñar su colección. Era un coleccionista sin escrúpulos: llegó a encarcelar a un pintor para quedarse con sus cuadros y mandó sacar de noche un Rafael de una iglesia de Perugia. Pero también descubrió y protegió a un escultor de veinte años: Gian Lorenzo Bernini. El Estado italiano compró la villa y su colección en 1902.',
      },
      {
        title: 'Paulina Bonaparte',
        text: 'En la segunda sala, la hermana de Napoleón, Paulina, casada con un príncipe Borghese, posa como Venus vencedora, con la manzana en la mano. La esculpió Antonio Canova entre 1805 y 1808. Mirad el colchón: parece que se hunde bajo su peso. El marido la tenía tan escondida que casi nadie la veía, y cuando se mostraba, era de noche y a la luz de las velas, sobre una base que giraba. Cuentan que a alguien que le preguntó cómo había sido capaz de posar desnuda, Paulina le contestó: no pasé frío, la sala tenía calefacción.',
      },
      {
        title: 'El David de Bernini',
        text: 'Comparad este David con el de Miguel Ángel en Florencia. Miguel Ángel lo esculpió antes de la pelea, tranquilo. Bernini lo congela en el momento exacto de lanzar la piedra: retorcido y mordiéndose el labio por el esfuerzo. La escultura sale hacia vosotros, y al rodearla parece que vais a recibir el golpe. La cara es la del propio Bernini, con veinticinco años. Se cuenta que un cardenal le sujetaba el espejo mientras trabajaba: ese cardenal sería luego el papa Urbano octavo.',
      },
      {
        title: 'Apolo y Dafne',
        text: 'Es la obra maestra de la galería, terminada en 1625. Cuenta un mito de Ovidio: Cupido hirió a Apolo con una flecha de oro, que enamora, y a la ninfa Dafne con una de plomo, que hace rechazar el amor. Apolo la persigue y, cuando está a punto de alcanzarla, ella pide ayuda a su padre, un dios río, que la convierte en laurel. Rodead la escultura despacio: según el ángulo, veréis la carrera o la transformación. De los dedos de Dafne salen hojas tan finas que la luz las atraviesa, y la corteza ya le sube por las piernas. Desde entonces, el laurel es el símbolo de Apolo y de los vencedores.',
      },
      {
        title: 'El rapto de Proserpina',
        text: 'Bernini la esculpió con solo veintitrés años. Plutón, el dios del inframundo, rapta a Proserpina para llevársela a su reino; a sus pies, el perro de tres cabezas, Cerbero. Fijaos en la mano de Plutón hundiéndose en el muslo de ella. Es de mármol, pero parece carne. Y mirad las lágrimas en las mejillas de Proserpina. El mito explicaba las estaciones: cuando ella está bajo tierra con Plutón, su madre, la diosa de las cosechas, está triste y es invierno.',
      },
      {
        title: 'La sala de Caravaggio',
        text: 'La galería tiene seis Caravaggio. El Baco enfermo, de piel verdosa, es un autorretrato de cuando el pintor salía de una enfermedad. El Muchacho con cesta de frutas es de cuando era un joven recién llegado a Roma. Y el más impresionante: David con la cabeza de Goliat. La cabeza cortada que sujeta David es el autorretrato de Caravaggio. Lo pintó al final de su vida, condenado a muerte por haber matado a un hombre en una pelea, y se cree que lo envió al cardenal Borghese pidiendo el perdón del papa. El perdón llegó, pero Caravaggio murió en 1610, de camino a Roma.',
      },
    ],
  },

  'Santa Maria del Popolo': {
    title: 'Santa Maria del Popolo',
    chapters: [
      {
        title: 'Una iglesia contra un fantasma',
        text: 'Cuenta la leyenda que aquí estaba enterrado Nerón y que su fantasma, desde un nogal, aterrorizaba a los vecinos. En 1099 el papa Pascual segundo mandó cortar el árbol y construir una capilla en su lugar. Esa capilla se convirtió en esta iglesia, una pequeña joya llena de arte: Rafael, Bernini, Pinturicchio y Caravaggio.',
      },
      {
        title: 'Los dos Caravaggio',
        text: 'En la capilla Cerasi, a la izquierda del altar mayor, hay dos Caravaggio de 1601, uno frente al otro. A la izquierda, la Conversión de san Pablo: Pablo ha caído del caballo, ciego por la luz divina, con los brazos abiertos. El caballo ocupa medio cuadro, y cuentan que un sacerdote le preguntó a Caravaggio si el caballo era Dios. Enfrente, la Crucifixión de san Pedro: tres hombres levantan la cruz con esfuerzo, como obreros cualquiera, y uno de ellos nos enseña los pies sucios. Pedro pidió ser crucificado boca abajo porque no se sentía digno de morir como Cristo.',
      },
      {
        title: 'La capilla Chigi',
        text: 'La segunda capilla de la izquierda la diseñó Rafael para el banquero Agostino Chigi, el hombre más rico de su tiempo. Más de un siglo después, Bernini añadió dos estatuas: Daniel con el león y el profeta Habacuc con el ángel. Si habéis leído Ángeles y demonios, de Dan Brown, esta capilla os sonará: es el escenario de la primera pista.',
      },
    ],
  },

  'Via dei Condotti': {
    title: 'Via dei Condotti y Via del Corso',
    chapters: [
      {
        title: 'Calles con historia',
        text: 'Via dei Condotti debe su nombre a las conducciones del acueducto del Acqua Vergine, el mismo que alimenta la Fontana di Trevi, que pasaban por debajo. Hoy es la calle del lujo, y en Navidad, una de las mejor iluminadas. La Via del Corso, larga y recta, es la antigua Via Flaminia, y su nombre viene de las carreras de caballos sin jinete que se hacían en Carnaval, desde Piazza del Popolo hasta Piazza Venezia. Se dejaron de celebrar a finales del siglo diecinueve, tras varios accidentes.',
      },
    ],
  },

  'Largo di Torre Argentina': {
    title: 'Largo di Torre Argentina',
    chapters: [
      {
        title: 'Donde mataron a Julio César',
        text: 'Asomaos a la barandilla. Esas ruinas, varios metros por debajo de la calle, son cuatro templos de la época de la República, los más antiguos con más de dos mil trescientos años. Detrás estaba la Curia de Pompeyo, donde se reunía el Senado el quince de marzo del año 44 antes de Cristo, los idus de marzo. Allí, Julio César recibió veintitrés puñaladas de un grupo de senadores. Hoy las ruinas son además un refugio de gatos: unos voluntarios cuidan de decenas de ellos, y los veréis tomando el sol entre las columnas.',
      },
    ],
  },

  'Santa Maria in Trastevere': {
    title: 'Santa Maria in Trastevere',
    chapters: [
      {
        title: 'El barrio al otro lado del río',
        text: 'Trastevere significa al otro lado del Tíber. Fue durante siglos el barrio de los pescadores, los artesanos y los extranjeros, con un carácter tan fuerte que sus vecinos se llamaban a sí mismos noantri, nosotros los otros. Hoy es el barrio más pintoresco de Roma, con calles empedradas, hiedra y ropa tendida.',
      },
      {
        title: 'Una de las iglesias más antiguas',
        text: 'Esta fue una de las primeras iglesias de Roma dedicadas a la Virgen, fundada en el siglo tercero o cuarto. La actual es del siglo doce. Entrad para ver los mosaicos dorados del ábside: Cristo y María sentados juntos en el mismo trono, algo muy poco habitual. Debajo, las escenas de la vida de la Virgen son del artista Pietro Cavallini, hacia 1290. Las columnas de la nave, todas distintas, se trajeron de edificios romanos antiguos.',
      },
      {
        title: 'Una leyenda de Navidad',
        text: 'Según una leyenda, en el año 38 antes de Cristo brotó aquí un manantial de aceite que fluyó durante un día entero hasta el Tíber. Se interpretó como el anuncio del nacimiento de un salvador. Por eso la iglesia se construyó en este lugar, y todavía hoy una inscripción junto al altar marca el punto: fons olei, la fuente del aceite.',
      },
    ],
  },

  'Terrazza del Gianicolo': {
    title: 'El Gianicolo',
    chapters: [
      {
        title: 'El mirador de los romanos',
        text: 'El Gianicolo no es una de las siete colinas clásicas de Roma, pero sí su mejor balcón. Toma el nombre de Jano, el dios de las dos caras, que da nombre al mes de enero. Aquí se luchó en 1849 por la República Romana, con Garibaldi al frente: por eso veréis su estatua ecuestre y bustos de sus soldados por todo el paseo. Desde 1847, cada día a las doce en punto se dispara un cañonazo desde aquí para que las iglesias de Roma pongan en hora sus campanas.',
      },
    ],
  },

  Colosseo: {
    title: 'El Coliseo',
    chapters: [
      {
        title: 'Un regalo al pueblo',
        text: 'Aquí había un lago artificial del palacio de Nerón, la Domus Aurea, el emperador más odiado de Roma. Cuando murió, el nuevo emperador, Vespasiano, lo secó y construyó en su lugar un anfiteatro para el pueblo: un gesto de propaganda brillante. Las obras empezaron hacia el año 72, pagadas en parte con el botín del saqueo del templo de Jerusalén, y su hijo Tito lo inauguró en el año 80 con cien días de juegos. Su nombre real era Anfiteatro Flavio. Lo de Coliseo viene de la estatua colosal de Nerón, de más de treinta metros, que seguía en pie junto a él.',
      },
      {
        title: 'Cómo funcionaba',
        text: 'Cabían entre cincuenta y setenta mil personas, y se podía vaciar en pocos minutos gracias a ochenta entradas numeradas. Vuestra entrada tenía el número de arco y de sector, como hoy en un estadio. Cuanto más arriba, más humilde era el público: abajo, los senadores; arriba del todo, las mujeres y los esclavos. Un toldo gigante, el velario, protegía del sol, y lo manejaban marineros de la flota imperial. El programa empezaba por la mañana con cacerías de animales, al mediodía las ejecuciones y por la tarde los gladiadores.',
      },
      {
        title: 'La arena y los subterráneos',
        text: 'Arena significa arena: el suelo era de madera cubierto de arena, que absorbía la sangre. Debajo estaban los subterráneos, el hipogeo, un laberinto de pasillos y jaulas en dos niveles. Con ascensores de cuerdas y poleas movidos por esclavos, los animales y los decorados aparecían por trampillas en medio de la arena, como por arte de magia. Y en contra de lo que dicen las películas, la mayoría de combates de gladiadores no terminaba en muerte: un gladiador bien entrenado costaba mucho dinero.',
      },
      {
        title: 'Después de los juegos',
        text: 'Los últimos espectáculos se celebraron en el siglo sexto. Luego, terremotos, sobre todo uno de 1349, derribaron parte de la fachada sur. Durante siglos, el Coliseo fue una cantera: sus piedras sirvieron para construir palacios, iglesias e incluso parte de San Pedro. Los agujeros que veis en los muros son de cuando se arrancaron las grapas de hierro que unían los bloques, para fundirlas. En 1749 el papa lo consagró a los mártires cristianos, y eso lo salvó. Cada Viernes Santo, el papa reza aquí el Vía Crucis.',
      },
    ],
  },

  'Foro Romano': {
    title: 'El Foro Romano y el Palatino',
    chapters: [
      {
        title: 'El centro del mundo',
        text: 'Este valle era un pantano entre colinas. Hacia el siglo sexto antes de Cristo, los romanos lo drenaron con la Cloaca Máxima, una alcantarilla que, por cierto, todavía funciona. Durante mil años, aquí estuvo el corazón de Roma: templos, tribunales, el Senado, mercados y discursos. Imaginadlo todo de mármol blanco, con estatuas pintadas de colores y lleno de gente. Lo que queda son los huesos de esa ciudad.',
      },
      {
        title: 'El Arco de Tito y la Vía Sacra',
        text: 'El arco de la entrada celebra la victoria de Tito en Judea y el saqueo de Jerusalén en el año 70. Mirad el relieve de dentro: los soldados se llevan el gran candelabro de siete brazos del templo, la menorá. Durante siglos, los judíos de Roma evitaron pasar bajo este arco. La calle empedrada es la Vía Sacra, por donde desfilaban los generales victoriosos en sus triunfos. Cuentan que un esclavo iba detrás del general repitiéndole al oído: recuerda que eres mortal.',
      },
      {
        title: 'Las vestales',
        text: 'El pequeño templo redondo era el de Vesta, la diosa del hogar. Dentro ardía un fuego sagrado que no podía apagarse nunca, porque eso traería desgracias a Roma. Lo cuidaban seis sacerdotisas, las vestales, elegidas de niñas, que servían treinta años y debían permanecer vírgenes. Tenían privilegios enormes, pero si rompían el voto las enterraban vivas. Al lado, en la Casa de las Vestales, el patio con estanques y las estatuas de las jefas de la orden.',
      },
      {
        title: 'Julio César y el Senado',
        text: 'Buscad un pequeño montículo bajo un tejadillo: es el altar del templo del Divino Julio. Aquí se incineró el cuerpo de Julio César en el año 44 antes de Cristo, y todavía hoy la gente deja flores. El edificio de ladrillo, alto y austero, es la Curia, la sede del Senado. Su puerta es una copia: las puertas de bronce originales se llevaron en el siglo diecisiete a San Juan de Letrán, y las veréis el lunes. Al fondo, las ocho columnas del templo de Saturno, que guardaba el tesoro del Estado. En diciembre se celebraban las Saturnales, con banquetes y regalos: muchas costumbres de la Navidad vienen de aquí.',
      },
      {
        title: 'El Palatino, la colina de los emperadores',
        text: 'Según la leyenda, Rómulo fundó Roma en esta colina en el año 753 antes de Cristo, y en una cueva de su ladera la loba amamantó a los gemelos. Aquí vivieron Augusto y casi todos los emperadores, y del nombre Palatino viene nuestra palabra palacio. El enorme palacio de Domiciano tenía hasta un estadio privado, que veréis desde arriba. Asomaos al lado sur: abajo, el Circo Máximo, donde las carreras de carros reunían a más de doscientos mil espectadores. Al bajar, los Jardines Farnesio, del siglo dieciséis, tienen la mejor vista del Foro.',
      },
    ],
  },

  'Basilica dei Santi Cosma e Damiano': {
    title: 'Santos Cosme y Damián',
    chapters: [
      {
        title: 'Un templo romano convertido en iglesia',
        text: 'En el año 527, el papa Félix cuarto convirtió en iglesia una sala del antiguo Foro de la Paz y dedicó la iglesia a dos médicos sirios, los santos Cosme y Damián, que curaban sin cobrar. En el ábside, un mosaico del siglo sexto muestra a Cristo bajando entre nubes rojizas sobre un fondo azul. Es uno de los mosaicos más hermosos de Roma.',
      },
      {
        title: 'El belén napolitano',
        text: 'En una sala junto al claustro hay un gran belén napolitano del siglo dieciocho, con cientos de figuras: pastores, mercaderes, músicos, animales, posadas y hasta ruinas romanas. En los belenes napolitanos, el nacimiento se mezcla con la vida diaria de la ciudad. Fijaos en los detalles de la ropa y de la comida en miniatura.',
      },
    ],
  },

  'Piazza del Campidoglio': {
    title: 'El Campidoglio',
    chapters: [
      {
        title: 'La colina sagrada',
        text: 'El Capitolio era la colina más sagrada de Roma: aquí estaba el gran templo de Júpiter, adonde subían los generales al final de sus triunfos. De su nombre viene la palabra capital, y el Capitolio de Washington. Hoy es la sede del Ayuntamiento de Roma, en el palacio del fondo.',
      },
      {
        title: 'La plaza de Miguel Ángel',
        text: 'En 1536, el emperador Carlos quinto iba a visitar Roma, y el papa Pablo tercero quería que viera un Capitolio digno. Se lo encargó a Miguel Ángel, que diseñó esta plaza: la escalinata en rampa, la cordonata, los palacios enfrentados y el dibujo del suelo, una estrella de doce puntas dentro de un óvalo, que no se terminó hasta 1940. En el centro, Marco Aurelio a caballo. El original, de bronce, está dentro del museo. Es la única estatua ecuestre de bronce de la Antigüedad que se conserva entera, y se salvó porque en la Edad Media creían que representaba a Constantino, el primer emperador cristiano.',
      },
      {
        title: 'Los Museos Capitolinos y el Vittoriano',
        text: 'Los dos palacios laterales forman los Museos Capitolinos, el museo público más antiguo del mundo, de 1471. Ahí está la Loba Capitolina. Si os asomáis por la derecha del palacio del fondo, veréis el Foro entero desde arriba. Y enfrente, el enorme monumento blanco a Víctor Manuel segundo, el primer rey de Italia, el Vittoriano. Los romanos lo apodan la máquina de escribir o la tarta de bodas. Guarda la tumba del soldado desconocido.',
      },
    ],
  },

  "Portico d'Ottavia": {
    title: 'El Ghetto judío y la Isla Tiberina',
    chapters: [
      {
        title: 'La comunidad judía más antigua de Europa',
        text: 'Hay judíos en Roma desde el siglo segundo antes de Cristo, antes incluso que cristianos. En 1555, el papa Pablo cuarto los obligó a vivir encerrados en este barrio, junto al río y con frecuencia inundado, con puertas que se cerraban por la noche. El gueto existió hasta 1870. El dieciséis de octubre de 1943, los nazis deportaron a más de mil judíos de Roma; solo volvieron dieciséis. Mirad al suelo: las placas de latón con nombres, las piedras de tropiezo, recuerdan a los vecinos deportados desde cada casa.',
      },
      {
        title: 'El Pórtico de Octavia y el Teatro de Marcelo',
        text: 'Las columnas y el frontón que veis son lo que queda del pórtico que Augusto dedicó a su hermana Octavia. En la Edad Media aquí estaba el mercado de pescado, y una lápida todavía dice que la cabeza de los peces más largos que la lápida debía entregarse a los magistrados de la ciudad. Al lado, el Teatro de Marcelo, también de Augusto, fue el modelo del Coliseo. Encima se construyó un palacio en el Renacimiento, y hoy sigue habiendo gente que vive en pisos sobre un teatro romano.',
      },
      {
        title: 'La Isla Tiberina',
        text: 'La isla tiene forma de barco, y los romanos la revistieron de mármol para que lo pareciera aún más. En el año 291 antes de Cristo, durante una epidemia, se construyó aquí un templo a Esculapio, el dios de la medicina. Dos mil trescientos años después, en la isla sigue habiendo un hospital. Cruzáis por el Ponte Fabricio, del año 62 antes de Cristo: el puente romano más antiguo de Roma que sigue en uso tal cual.',
      },
    ],
  },

  'Bocca della Verità': {
    title: 'La Boca de la Verdad',
    chapters: [
      {
        title: 'Un desagüe con leyenda',
        text: 'Este disco de mármol de casi dos metros representa a un dios del río o del mar, probablemente Océano. Seguramente era una tapa de alcantarilla del siglo primero. En la Edad Media nació la leyenda: si un mentiroso metía la mano en la boca, se la cortaba. Se dice que se usaba para comprobar la fidelidad de las esposas. Se hizo famosa en Vacaciones en Roma, cuando Gregory Peck finge que le ha mordido la mano y Audrey Hepburn se asusta de verdad: no estaba en el guion.',
      },
      {
        title: 'Santa María in Cosmedin',
        text: 'La iglesia, con su bonito campanario románico, era la de la comunidad griega de Roma. Dentro se guarda una curiosa reliquia: el cráneo de san Valentín, coronado de flores. Enfrente, en la plaza, hay dos templos romanos muy bien conservados: el redondo, dedicado a Hércules, es el edificio de mármol más antiguo que se conserva en Roma.',
      },
    ],
  },

  'Giardino degli Aranci': {
    title: 'El Aventino y el Jardín de los Naranjos',
    chapters: [
      {
        title: 'Los naranjos de santo Domingo',
        text: 'El Aventino es la colina más tranquila y elegante de Roma. Este jardín se abrió en 1932 sobre una antigua fortaleza de la familia Savelli. Los naranjos recuerdan una historia con acento español: santo Domingo de Guzmán, nacido en Caleruega, en Burgos, fundador de los dominicos, vivió en el convento de al lado y, según la tradición, plantó allí el primer naranjo de Italia hacia 1220, traído de España. Por una mirilla de la iglesia de Santa Sabina todavía se ve un naranjo, que dicen que es descendiente del suyo.',
      },
      {
        title: 'Santa Sabina',
        text: 'Si está abierta, asomaos a la basílica de Santa Sabina, del siglo quinto, con su luz blanca y sus columnas antiguas. Su puerta de madera de ciprés tiene más de mil quinientos años, y en uno de sus paneles está una de las representaciones más antiguas que se conocen de la crucifixión.',
      },
    ],
  },

  'Buco della Serratura Aventino': {
    title: 'La cerradura de los Caballeros de Malta',
    chapters: [
      {
        title: 'Tres estados en una mirada',
        text: 'Esta plaza, con sus obeliscos y trofeos, es la única obra de arquitectura del grabador Giovanni Battista Piranesi, de 1765. Detrás del portón verde está la sede de la Orden de Malta, una orden de caballeros nacida en las cruzadas que tiene un estatus casi de Estado soberano. Mirad por el ojo de la cerradura: al final de un pasillo de setos, la cúpula de San Pedro aparece perfectamente enmarcada. Se dice que es el único punto del mundo desde el que, en una sola mirada, se ven tres estados: la Orden de Malta, Italia y el Vaticano.',
      },
    ],
  },

  'Basilica di Santa Maria Maggiore': {
    title: 'Santa Maria Maggiore',
    chapters: [
      {
        title: 'La nieve de agosto',
        text: 'Es una de las cuatro basílicas mayores de Roma. Cuenta la leyenda que la noche del cinco de agosto del año 358 nevó en esta colina, en pleno verano, y que la Virgen había indicado en sueños al papa que construyera una iglesia donde cayera la nieve. Todavía hoy, cada cinco de agosto, se lanzan pétalos blancos desde el techo. La basílica actual es del siglo quinto, y sus mosaicos de la nave son de esa época: tienen más de mil quinientos años.',
      },
      {
        title: 'El oro de América y los reyes de España',
        text: 'Mirad el techo de casetones dorados. Según la tradición, se doró con el primer oro llegado de América, regalo de los Reyes Católicos, Isabel y Fernando. La relación con España sigue: el rey de España es, por tradición, protocanónigo honorario de esta basílica, y en el pórtico hay una estatua de Felipe cuarto.',
      },
      {
        title: 'La cuna de Belén',
        text: 'Bajad a la cripta, bajo el altar mayor. En un relicario de plata y cristal se guardan unos trozos de madera que, según la tradición, pertenecen a la cuna, al pesebre de Belén. Por eso en Navidad esta basílica es especialmente importante. A la derecha del altar, una losa sencilla en el suelo indica la tumba de Bernini, el escultor que transformó Roma. Y aquí está enterrado también el papa Francisco, que murió en 2025 y quiso descansar en esta basílica, a la que venía a rezar antes y después de cada viaje.',
      },
    ],
  },

  'Arcibasilica di San Giovanni in Laterano': {
    title: 'San Juan de Letrán y la Scala Santa',
    chapters: [
      {
        title: 'La madre de todas las iglesias',
        text: 'Mucha gente cree que la catedral de Roma es San Pedro, pero no: es esta. San Juan de Letrán es la catedral del obispo de Roma, el papa, y en la fachada se lee que es la madre y cabeza de todas las iglesias de la ciudad y del mundo. La fundó el emperador Constantino hacia el año 324, en unos terrenos de la familia de los Laterani, y durante mil años los papas vivieron en el palacio de al lado. Fijaos en las puertas de bronce de la entrada principal: son las de la Curia del Foro Romano, el edificio del Senado que visitasteis ayer.',
      },
      {
        title: 'El interior de Borromini',
        text: 'Por dentro, la basílica la remodeló Francesco Borromini hacia 1650, el gran rival de Bernini. En los nichos de la nave, doce estatuas gigantes de los apóstoles. Sobre el altar mayor, un baldaquino gótico guarda, según la tradición, reliquias de las cabezas de san Pedro y san Pablo. Fuera, en la plaza, el obelisco más alto de Roma: egipcio, de más de tres mil cuatrocientos años, y de más de treinta metros.',
      },
      {
        title: 'La Scala Santa',
        text: 'En el edificio de enfrente está la Scala Santa, veintiocho escalones que, según la tradición, venían del palacio de Poncio Pilato en Jerusalén y que Jesús habría subido el día de su juicio. Los habría traído santa Elena, la madre de Constantino. Solo se pueden subir de rodillas, y veréis peregrinos haciéndolo. Si no queréis subir de rodillas, hay escaleras laterales normales.',
      },
    ],
  },

  'Basilica di San Clemente': {
    title: 'La Basílica de San Clemente',
    chapters: [
      {
        title: 'Tres épocas, una encima de otra',
        text: 'San Clemente es como un libro de historia en vertical. Arriba, la basílica que veis es del año 1108. Debajo está una iglesia del siglo cuarto. Y más abajo todavía, edificios romanos del siglo primero, entre ellos un templo del dios Mitra. Lo descubrió en 1857 un fraile dominico irlandés, el padre Mullooly; los dominicos irlandeses cuidan la basílica desde el siglo diecisiete.',
      },
      {
        title: 'La basílica de arriba',
        text: 'Mirad el mosaico dorado del ábside: una cruz de la que brota una enorme vid que se extiende por todo el fondo, llena de pájaros, animales y figuritas. Simboliza la Iglesia como árbol de la vida. El coro de mármol del centro se trajo de la iglesia de abajo. Aquí está enterrado san Cirilo, que inventó con su hermano Metodio el alfabeto de los pueblos eslavos; por eso veréis placas en búlgaro, ruso o eslovaco.',
      },
      {
        title: 'La iglesia de abajo y el templo de Mitra',
        text: 'Bajad a la iglesia del siglo cuarto. Buscad un fresco del siglo once con una escena de unos criados arrastrando una columna. En él aparece una de las frases más antiguas que se conocen escritas en italiano, no en latín, y es un insulto: un noble ordena a sus siervos que tiren con fuerza, llamándolos hijos de… mejor no traducirlo. Más abajo, los edificios romanos y el mitreo, una sala abovedada donde los seguidores de Mitra celebraban banquetes en bancos de piedra. Escuchad: por todas partes se oye correr el agua de un manantial subterráneo que sigue fluyendo hacia la antigua red de alcantarillado.',
      },
    ],
  },

  'Catacombe di San Callisto': {
    title: 'Las catacumbas de San Calixto',
    chapters: [
      {
        title: 'Cementerios, no escondites',
        text: 'La ley romana prohibía enterrar a los muertos dentro de la ciudad, por eso todos los cementerios estaban a lo largo de las calzadas, fuera de las murallas. Los cristianos, que no incineraban a sus muertos, excavaron galerías en la toba volcánica, una piedra blanda que se endurece al contacto con el aire. Contra lo que se suele creer, las catacumbas no eran escondites para huir de las persecuciones: eran cementerios. Estas tomaron el nombre del diácono Calixto, que las administró a principios del siglo tercero y luego llegó a ser papa.',
      },
      {
        title: 'La cripta de los papas y santa Cecilia',
        text: 'Las galerías suman unos veinte kilómetros, en cuatro niveles, y aquí se enterró a decenas de miles de personas. La Cripta de los Papas guardaba las tumbas de nueve papas del siglo tercero: aún se leen sus nombres en griego. Al lado, la cripta de santa Cecilia, patrona de la música. La estatua es una copia de la de Stefano Maderno, que la esculpió tal y como dicen que encontraron su cuerpo en 1599: tumbada de lado, con la cara girada. Fijaos en los símbolos de las paredes: el pez, el buen pastor, el ancla o la paloma. Eran la forma discreta de decir soy cristiano.',
      },
    ],
  },

  'Via Appia Antica': {
    title: 'La Via Appia Antica',
    chapters: [
      {
        title: 'La reina de las calzadas',
        text: 'La Via Appia se empezó en el año 312 antes de Cristo, por orden del censor Apio Claudio, y llegó a unir Roma con Brindisi, en el talón de la bota de Italia, de donde salían los barcos hacia Grecia y Oriente. Los romanos la llamaban la reina de las calzadas. Las grandes losas de basalto que pisáis son en muchos tramos las originales, con las marcas de las ruedas de los carros. Desde 2024 es Patrimonio de la Humanidad.',
      },
      {
        title: 'Espartaco y Quo Vadis',
        text: 'Como no se podía enterrar dentro de la ciudad, la Appia se llenó de tumbas y mausoleos de familias ricas que querían que los viajeros los recordaran. En el año 71 antes de Cristo, tras la rebelión de Espartaco, seis mil esclavos fueron crucificados a lo largo de esta calzada, entre Capua y Roma. Más cerca de la ciudad, la pequeña iglesia de Domine Quo Vadis recuerda la leyenda de san Pedro, que huía de Roma, se encontró con Cristo y le preguntó: Señor, ¿adónde vas? Cristo respondió que a Roma, a ser crucificado de nuevo, y Pedro volvió para morir mártir.',
      },
      {
        title: 'La tumba de Cecilia Metella',
        text: 'El gran cilindro de piedra es la tumba de Cecilia Metella, una noble romana, de hacia el año 30 antes de Cristo. En la Edad Media, la familia Caetani la convirtió en torre de un castillo para cobrar peaje a quien pasara por la calzada: por eso tiene almenas. Es un buen punto para dar la vuelta, viendo cómo cae el sol entre los pinos.',
      },
    ],
  },
};
