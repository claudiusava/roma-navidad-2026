import { Day } from './types';

export const DAYS: Day[] = [
  {
    id: 'd17',
    date: '2026-12-17',
    short: 'Jue 17',
    title: 'Llegada a Roma',
    summary:
      'Aterrizáis hacia las 22:30 en Fiumicino. El objetivo es llegar a dormir sin gastar de más; el viernes empieza pronto.',
    steps: [
      {
        time: '22:30',
        title: 'Aterrizaje en Fiumicino (FCO)',
        detail:
          'Con equipaje de mano salís directos. Ignorad a quien os ofrezca taxi dentro de la terminal: son ilegales y cobran el doble.',
        kind: 'move',
      },
      {
        time: '22:50',
        title: 'Cómo llegar: elegid según el alojamiento',
        detail:
          'Opción barata: Leonardo Express a Termini, 14 € por persona (28 € los dos) y 32 min; suele haber trenes hacia las 23:23 y a veces más tarde. Comprobad los horarios de vuestra fecha en la app de Trenitalia. Ojo: el jueves el metro cierra a las 23:30, así que desde Termini hay que ir andando o en un taxi corto (10–15 €). Opción más barata todavía: bus nocturno (Cotral, SIT o TAM) por 5–7 € por persona, pero tarda alrededor de 1 h. Opción cómoda: taxi oficial blanco con tarifa fija de 55 € por coche, puerta a puerta, si el alojamiento está dentro de las Murallas Aurelianas.',
        kind: 'move',
        place: 'Fiumicino Aeroporto stazione',
      },
      {
        time: '00:00',
        title: 'Llegada y a dormir',
        detail: 'Mañana el día empieza a las 8:30. Dejad la ropa preparada.',
        kind: 'sleep',
      },
    ],
    tips: [
      'Regla rápida: si el alojamiento está a menos de 15 min andando de Termini, Leonardo Express y a pie (ahorráis unos 27 €). Si no, el taxi de 55 € compensa: el Leonardo más un taxi desde Termini sale a unos 40 € y llegáis más tarde.',
      'El billete del Leonardo se compra en la app de Trenitalia o en las máquinas de la estación del aeropuerto. Si pasáis una tarjeta contactless por el torno, es un billete por tarjeta.',
    ],
  },
  {
    id: 'd18',
    date: '2026-12-18',
    short: 'Vie 18',
    title: 'Free tour, San Pedro y Castel Sant’Angelo',
    summary:
      'Panteón por dentro antes del free tour, que va de Trevi a San Pedro. Por la tarde, la basílica y la cúpula, el atardecer desde Castel Sant’Angelo y Navona de noche.',
    route: [
      'Pantheon Roma',
      'San Luigi dei Francesi',
      'Fontana di Trevi',
      'Piazza San Pietro',
      'Cupola di San Pietro',
      "Castel Sant'Angelo",
      'Piazza Navona',
      'Armando al Pantheon',
      'Fontana di Trevi',
    ],
    travelMode: 'walking',
    steps: [
      {
        time: '08:30',
        title: 'Desayuno de barra',
        detail:
          'Cappuccino y cornetto de pie en la barra, unos 3 € (sentados cuesta el doble). Sant’Eustachio Il Caffè o Tazza d’Oro, los dos junto al Panteón.',
        kind: 'food',
        place: "Sant'Eustachio Il Caffè",
      },
      {
        time: '09:00',
        title: 'Panteón por dentro',
        detail: 'El free tour lo ve solo por fuera. Entrada con hora (unos 5 €), 30–40 minutos.',
        kind: 'visit',
        place: 'Pantheon Roma',
        ticket: 'pantheon',
      },
      {
        time: '09:45',
        title: 'Caravaggios gratis en San Luigi dei Francesi',
        detail: 'Tres Caravaggio en la última capilla a la izquierda. Echad una moneda para encender la luz.',
        kind: 'visit',
        place: 'San Luigi dei Francesi',
      },
      {
        time: '10:15',
        title: 'Hacia Trevi, al punto de encuentro',
        detail: 'Unos 10 minutos andando. Llegad 10 minutos antes.',
        kind: 'move',
      },
      {
        time: '10:30',
        title: 'Free tour: de Trevi a San Pedro',
        detail:
          'Trevi, Piazza Colonna, Templo de Adriano, Panteón, Sant’Ivo, Navona, Via dei Coronari, Castel Sant’Angelo y la Plaza de San Pedro (todo por fuera). Unas 2,5 h. Propina habitual: 10–15 € por persona.',
        kind: 'visit',
        place: 'Fontana di Trevi',
        ticket: 'freetour',
      },
      {
        time: '13:00',
        title: 'Plaza de San Pedro: árbol y belén',
        detail:
          'El tour termina aquí. Bajo la columnata suele haber una exposición gratuita de belenes de todo el mundo.',
        kind: 'xmas',
        place: 'Piazza San Pietro',
      },
      {
        time: '13:30',
        title: 'Comida en Prati',
        detail: 'Barato y bueno, a 5–10 minutos: Pastasciutta (pasta fresca, unos 8 €) o Trapizzino.',
        kind: 'food',
        place: 'Pastasciutta Roma Prati',
      },
      {
        time: '14:30',
        title: 'Basílica de San Pedro',
        detail:
          'Gratis, con control de seguridad (20–45 min de cola). Hombros y rodillas cubiertos.',
        kind: 'visit',
        place: 'Basilica di San Pietro',
      },
      {
        time: '15:15',
        title: 'Subida a la cúpula',
        detail:
          '551 escalones, o ascensor y 320. La mejor vista de Roma. Se paga allí; calculad 1 h. En invierno cierra pronto.',
        kind: 'visit',
        place: 'Cupola di San Pietro',
        ticket: 'cupula',
      },
      {
        time: '16:20',
        title: 'Castel Sant’Angelo y su terraza al atardecer',
        detail:
          'A 10 minutos por Via della Conciliazione. Subid primero a la terraza del Ángel para ver la puesta de sol (16:40) y luego recorred el interior. Abre hasta las 19:30.',
        kind: 'visit',
        place: "Castel Sant'Angelo",
        ticket: 'castel',
      },
      {
        time: '18:00',
        title: 'Navona de noche, con el mercadillo de Navidad',
        detail:
          'Por el Ponte Sant’Angelo iluminado. Puestos de dulces y belenes, con las fuentes de Bernini. Campo de’ Fiori queda a 5 minutos.',
        kind: 'xmas',
        place: 'Piazza Navona',
      },
      {
        time: '20:00',
        title: 'Cena en Armando al Pantheon',
        detail: 'Trattoria familiar desde 1961, unos 45–55 € por persona. Hay que reservar.',
        kind: 'food',
        place: 'Armando al Pantheon',
        ticket: 'armando',
      },
      {
        time: '21:45',
        title: 'Helado y Trevi de noche',
        detail:
          'Giolitti, a 3 minutos, y luego Trevi iluminada. Bajar al borde de la fuente para tirar la moneda cuesta 2 €.',
        kind: 'visit',
        place: 'Fontana di Trevi',
        ticket: 'trevi',
      },
    ],
    tips: ['Al acabar el tour ya estáis en el Vaticano: es el momento de la basílica y la cúpula.'],
  },
  {
    id: 'd19',
    date: '2026-12-19',
    short: 'Sáb 19',
    title: 'Museos Vaticanos, Plaza de España y Borghese',
    summary:
      'Capilla Sixtina a primera hora, Plaza de España de día y comida a una hora normal, Bernini en la Borghese, Popolo y el Corso con luces, y cena en Trastevere.',
    route: [
      'Musei Vaticani',
      'Piazza di Spagna',
      'Via Margutta',
      'Terrazza del Pincio',
      'Galleria Borghese',
      'Santa Maria del Popolo',
      'Via del Corso',
      'Santa Maria in Trastevere',
    ],
    travelMode: 'walking',
    steps: [
      {
        time: '07:30',
        title: 'Desayuno rápido junto a la metro Ottaviano',
        detail:
          'Cornetto y capuchino en cualquier bar de Via Ottaviano o Viale Giulio Cesare (5 min). Si queréis ir con algo en la mochila, hay supermercados Carrefour Express y Conad en la zona.',
        kind: 'food',
      },
      {
        time: '08:00',
        title: 'Museos Vaticanos y Capilla Sixtina',
        detail:
          'Primera hora = menos gente. Pío-Clementino, Galería de los Mapas, Estancias de Rafael y, al final, la Capilla Sixtina (sin fotos). Unas 3,5 h. Llevad puesta la audioguía.',
        kind: 'visit',
        place: 'Musei Vaticani',
        ticket: 'vaticano',
      },
      {
        time: '11:45',
        title: 'Metro A hasta Spagna',
        detail: 'Desde Ottaviano son 3 paradas. Si os entra hambre, un tentempié: los museos tienen cafetería.',
        kind: 'move',
      },
      {
        time: '12:15',
        title: 'Plaza de España de día',
        detail:
          'La Barcaccia de Bernini padre, la escalinata (sentarse está prohibido) y arriba la Trinità dei Monti. Por la tarde volvéis a pasar por las luces de alrededor.',
        kind: 'visit',
        place: 'Scalinata di Trinità dei Monti',
      },
      {
        time: '12:45',
        title: 'Via Margutta y Via della Croce',
        detail:
          'La calle de los artistas (donde vivía Fellini y se rodó Vacaciones en Roma) y una de las calles de tiendas y tabernas más agradables.',
        kind: 'visit',
        place: 'Via Margutta',
      },
      {
        time: '13:30',
        title: 'Comida en Antica Enoteca',
        detail:
          'Taberna con vinos desde 1842 en Via della Croce. Pasta y platos del día; unos 25–30 € por persona. Alternativa más barata: pizza al corte en la zona.',
        kind: 'food',
        place: 'Antica Enoteca Via della Croce',
      },
      {
        time: '14:30',
        title: 'Pincio y paseo por Villa Borghese',
        detail:
          'Subida por la rampa junto a la Trinità dei Monti hasta la terraza del Pincio (vista de Piazza del Popolo) y 15 minutos por el parque hasta la galería. Hay que recoger la entrada 30 min antes.',
        kind: 'visit',
        place: 'Terrazza del Pincio',
      },
      {
        time: '15:00',
        title: 'Galleria Borghese (turno de 2 h)',
        detail:
          'Bernini (Apolo y Dafne, El rapto de Proserpina, David), seis Caravaggio y la Paolina de Canova. Las mochilas van a la consigna, que es gratis.',
        kind: 'visit',
        place: 'Galleria Borghese',
        ticket: 'borghese',
      },
      {
        time: '17:15',
        title: 'Bajada a Piazza del Popolo y sus Caravaggio',
        detail:
          'Unos 20 minutos por el parque. En Santa Maria del Popolo, la Capilla Cerasi (a la izquierda del altar) tiene dos Caravaggio gratis; por la tarde suele abrir a partir de las 16:00.',
        kind: 'visit',
        place: 'Santa Maria del Popolo',
      },
      {
        time: '18:00',
        title: 'Via del Corso y Via Condotti con luces',
        detail: 'Bajáis por el Corso, con las luces de Navidad, hasta Largo Argentina (25 min).',
        kind: 'xmas',
        place: 'Via dei Condotti',
      },
      {
        time: '18:45',
        title: 'Tranvía 8 a Trastevere',
        detail: 'Desde Largo di Torre Argentina, 3 paradas hasta Belli. También se va andando cruzando la Isla Tiberina.',
        kind: 'move',
        place: 'Largo di Torre Argentina',
      },
      {
        time: '19:05',
        title: 'Santa Maria in Trastevere',
        detail: 'Mosaicos dorados del siglo XII y belén. Después, Via della Lungaretta y Vicolo del Cinque.',
        kind: 'visit',
        place: 'Santa Maria in Trastevere',
      },
      {
        time: '19:45',
        title: 'Cena en Trastevere',
        detail: 'Da Enzo al 29 (con cola) o, más barato, pizza romana en Ai Marmi. Supplì de entrante.',
        kind: 'food',
        place: 'Da Enzo al 29',
        ticket: 'enzo',
      },
      {
        time: '21:30',
        title: 'Mirador del Gianicolo (opcional)',
        detail: 'Unos 20 minutos de subida. Roma iluminada. Bajada en taxi.',
        kind: 'visit',
        place: 'Terrazza del Gianicolo',
        optional: true,
      },
    ],
    tips: [
      'Si no hay turno de Borghese a las 15:00, coged el de las 13:00 y moved la comida a después (sobre las 15:15).',
      'El "atajo" de la Sixtina a San Pedro es solo para grupos, y además la basílica ya la habéis visto el viernes.',
    ],
  },
  {
    id: 'd20',
    date: '2026-12-20',
    short: 'Dom 20',
    title: 'Roma Antigua, Aventino y Testaccio',
    summary:
      'Coliseo, Foro y Palatino por la mañana; Campidoglio, Ghetto, la Boca de la Verdad, el atardecer en el Aventino y cena en Testaccio.',
    route: [
      'Colosseo',
      'Foro Romano',
      'Piazza del Campidoglio',
      "Portico d'Ottavia",
      'Isola Tiberina',
      'Bocca della Verità',
      'Giardino degli Aranci',
      'Buco della Serratura Aventino',
    ],
    travelMode: 'walking',
    steps: [
      {
        time: '07:45',
        title: 'Desayuno en Monti',
        detail:
          'Dentro del recinto del Coliseo casi no hay comida. Un buen desayuno de barra en Monti, a 10 minutos: Panella (horno histórico en Via Merulana) o cualquier bar de Via Cavour. Comprad agua y algo de picar para el Foro.',
        kind: 'food',
        place: 'Panella Roma',
      },
      {
        time: '08:40',
        title: 'Coliseo: control de seguridad',
        detail: 'Metro B, parada Colosseo. Llegad 20 minutos antes de vuestra hora.',
        kind: 'move',
      },
      {
        time: '09:00',
        title: 'Coliseo (Full Experience)',
        detail: 'Arena y, si lo conseguís, los subterráneos. Calculad 1,5 h.',
        kind: 'visit',
        place: 'Colosseo',
        ticket: 'coliseo',
      },
      {
        time: '10:45',
        title: 'Foro Romano y Palatino',
        detail:
          'Con la misma entrada. Arco de Tito, Vía Sacra, Curia y Templo de Saturno; después, arriba al Palatino y bajada por los Jardines Farnesio. Unas 2,5 h.',
        kind: 'visit',
        place: 'Foro Romano',
      },
      {
        time: '13:30',
        title: 'Comida: La Taverna dei Fori Imperiali',
        detail:
          'Trattoria familiar en Monti, muy querida por los romanos. Unos 30–35 € por persona. Reservad. Plan B barato: Trattoria Luzzi.',
        kind: 'food',
        place: 'La Taverna dei Fori Imperiali',
        ticket: 'taverna',
      },
      {
        time: '15:00',
        title: 'Belén napolitano de los Santos Cosme y Damián',
        detail: 'Un belén del siglo XVIII en la Via dei Fori Imperiali. Pocos turistas lo conocen.',
        kind: 'xmas',
        place: 'Basilica dei Santi Cosma e Damiano',
      },
      {
        time: '15:20',
        title: 'Campidoglio y mirador del Foro',
        detail:
          'La plaza de Miguel Ángel. Por detrás, a la derecha, hay una terraza gratuita con la mejor vista del Foro. Enfrente, el Vittoriano y el árbol de Piazza Venezia.',
        kind: 'visit',
        place: 'Piazza del Campidoglio',
      },
      {
        time: '15:50',
        title: 'Ghetto judío e Isla Tiberina',
        detail:
          'Teatro de Marcelo, Portico d’Ottavia y la Fuente de las Tortugas. Una alcachofa a la judía de aperitivo. Cruzáis por el Ponte Fabricio, del año 62 a. C.',
        kind: 'visit',
        place: "Portico d'Ottavia",
      },
      {
        time: '16:15',
        title: 'Bocca della Verità',
        detail: 'Foto rápida con donativo de unos 2 €.',
        kind: 'visit',
        place: 'Bocca della Verità',
      },
      {
        time: '16:35',
        title: 'Atardecer en el Giardino degli Aranci',
        detail: 'Subida corta al Aventino. El sol se pone hacia las 16:40.',
        kind: 'visit',
        place: 'Giardino degli Aranci',
      },
      {
        time: '16:55',
        title: 'La cerradura de los Caballeros de Malta',
        detail: 'San Pedro, perfectamente enmarcado por el ojo de una cerradura. A 2 minutos.',
        kind: 'visit',
        place: 'Buco della Serratura Aventino',
      },
      {
        time: '17:30',
        title: 'Pausa en el alojamiento',
        detail: 'Ducha y descanso.',
        kind: 'free',
      },
      {
        time: '20:00',
        title: 'Cena en Testaccio',
        detail: 'Felice a Testaccio (cacio e pepe preparada en la mesa) o Flavio al Velavevodetto. Reservad.',
        kind: 'food',
        place: 'Felice a Testaccio',
        ticket: 'testaccio',
      },
    ],
    tips: [
      'El domingo los Museos Vaticanos cierran, por eso hoy toca Roma Antigua.',
      'Ángelus del Papa a las 12:00 en San Pedro: no encaja hoy y no hace falta.',
      'Tras la cena, el Coliseo iluminado desde Via dei Fori Imperiali queda de camino si volvéis andando.',
    ],
  },
  {
    id: 'd21',
    date: '2026-12-21',
    short: 'Lun 21',
    title: 'Grandes basílicas, Via Appia y cena especial',
    summary:
      'Un día más tranquilo: Santa Maria Maggiore (con la reliquia del pesebre), San Juan de Letrán, las tres iglesias superpuestas de San Clemente, catacumbas y la Via Appia al atardecer, y la cena especial.',
    route: [
      'Basilica di Santa Maria Maggiore',
      'Arcibasilica di San Giovanni in Laterano',
      'Basilica di San Clemente',
      'Trattoria Luzzi Roma',
      'Catacombe di San Callisto',
      'Via Appia Antica',
    ],
    travelMode: 'transit',
    steps: [
      {
        time: '09:00',
        title: 'Desayuno tranquilo: maritozzo en Regoli',
        detail:
          'La pastelería más querida del Esquilino: maritozzo (bollo relleno de nata), el desayuno típico romano. A 5 minutos de Santa Maria Maggiore.',
        kind: 'food',
        place: 'Pasticceria Regoli',
      },
      {
        time: '09:45',
        title: 'Santa Maria Maggiore',
        detail:
          'Una de las cuatro basílicas mayores. Bajo el altar se guarda la reliquia de la cuna de Belén: estos días es el sitio más navideño de Roma. Entrada gratis. 45 min.',
        kind: 'xmas',
        place: 'Basilica di Santa Maria Maggiore',
      },
      {
        time: '10:45',
        title: 'San Juan de Letrán y la Scala Santa',
        detail:
          'Unos 20 minutos andando por Via Merulana (o metro A, parada San Giovanni). La catedral de Roma, anterior a San Pedro. Enfrente, la Scala Santa. Gratis. 45 min.',
        kind: 'visit',
        place: 'Arcibasilica di San Giovanni in Laterano',
      },
      {
        time: '11:45',
        title: 'Basílica de San Clemente: tres iglesias en una',
        detail:
          'Basílica del siglo XII; debajo, una iglesia del siglo IV; y más abajo, un templo de Mitra y casas romanas donde aún se oye correr agua. Unos 10 € la parte subterránea. Por la mañana cierra hacia las 12:30.',
        kind: 'visit',
        place: 'Basilica di San Clemente',
      },
      {
        time: '13:00',
        title: 'Comida en Trattoria Luzzi',
        detail: 'Al lado de San Clemente. Barata, romana y con mucho ambiente.',
        kind: 'food',
        place: 'Trattoria Luzzi Roma',
      },
      {
        time: '14:15',
        title: 'Bus 118 o taxi a las catacumbas',
        detail: 'El bus 118 sale del Coliseo (unos 25 min). En taxi son 15 min y unos 15 €.',
        kind: 'move',
      },
      {
        time: '14:45',
        title: 'Catacumbas de San Calixto',
        detail:
          'Visita guiada obligatoria (unos 10 €, hay turnos en español), de unos 40 min. Kilómetros de galerías y la Cripta de los Papas. Abre de 14:00 a 17:00 por la tarde.',
        kind: 'visit',
        place: 'Catacombe di San Callisto',
      },
      {
        time: '15:45',
        title: 'Paseo por la Via Appia Antica al atardecer',
        detail:
          'La calzada romana original, con losas de hace 2.300 años, pinos y tumbas. Andad hacia el sur hasta la tumba de Cecilia Metella. El sol se pone a las 16:40.',
        kind: 'visit',
        place: 'Via Appia Antica',
      },
      {
        time: '17:15',
        title: 'Vuelta al centro y descanso',
        detail: 'Bus 118 o taxi. Un rato en el alojamiento y la maleta medio hecha.',
        kind: 'free',
      },
      {
        time: '20:00',
        title: 'Cena especial: Roscioli',
        detail:
          'La mejor carbonara de Roma para muchos, con quesos, embutidos y vinos de primera. Unos 70–90 € por persona. Reservad ya.',
        kind: 'food',
        place: 'Roscioli Salumeria con Cucina',
        ticket: 'roscioli',
      },
      {
        time: '22:00',
        title: 'La última moneda en Trevi',
        detail: 'Unos 15 minutos andando. La tradición dice que si la tiráis de espaldas, volveréis a Roma.',
        kind: 'xmas',
        place: 'Fontana di Trevi',
      },
    ],
    tips: [
      'El lunes cierran la Borghese, Castel Sant’Angelo y la mayoría de museos estatales; por eso este día va de iglesias, catacumbas y aire libre.',
      'Si os sobra energía al mediodía: los Museos Capitolinos (abren el lunes) están a 15 minutos del Coliseo.',
    ],
  },
  {
    id: 'd22',
    date: '2026-12-22',
    short: 'Mar 22',
    title: 'Vuelta a Madrid',
    summary: 'Vuelo a las 9:00 desde Fiumicino. Hay que estar en el aeropuerto hacia las 7:30.',
    steps: [
      {
        time: '05:45',
        title: 'Despertador',
        detail: 'Tarjetas de embarque descargadas en el móvil la noche anterior.',
        kind: 'sleep',
      },
      {
        time: '06:15',
        title: 'Al aeropuerto',
        detail:
          'Si estáis cerca de Termini: Leonardo Express (14 € por persona, 32 min, sale cada 15–30 min desde primera hora; el metro abre a las 5:30). Si no: taxi pedido la noche anterior por app (FreeNow o itTaxi), 55 € fijos desde dentro de las Murallas.',
        kind: 'move',
        place: 'Roma Termini',
      },
      {
        time: '07:15',
        title: 'Aeropuerto',
        detail: 'Solo con equipaje de mano: control de seguridad y directos a la puerta de embarque.',
        kind: 'move',
      },
      {
        time: '09:00',
        title: 'Vuelo a Madrid',
        detail: 'Arrivederci, Roma.',
        kind: 'move',
      },
    ],
  },
];
