import { Day } from './types';

export const DAYS: Day[] = [
  {
    id: 'd17',
    date: '2026-12-17',
    short: 'Jue 17',
    title: 'Llegada a Roma',
    summary: 'Aterrizáis sobre las 23:00 en Fiumicino. Lo único importante: llegar rápido a dormir.',
    steps: [
      {
        time: '23:00',
        title: 'Aterrizaje en Fiumicino (FCO)',
        detail:
          'Con equipaje de mano salís directos. Ignorad a quien os ofrezca taxi dentro de la terminal: son ilegales y cobran el doble.',
        kind: 'move',
        place: 'Aeroporto di Roma-Fiumicino',
      },
      {
        time: '23:20',
        title: 'Taxi oficial al alojamiento',
        detail:
          'Taxi blanco con el escudo "Roma Capitale", en la parada oficial de la salida. Tarifa fija 55 € por coche (no por persona) si el alojamiento está dentro de las Murallas Aurelianas. Si está fuera, va con taxímetro: unos 60–75 €. A esta hora es lo más eficiente: el último Leonardo Express sale hacia las 23:23 y no os da tiempo.',
        kind: 'move',
      },
      {
        time: '00:15',
        title: 'Llegada y a dormir',
        detail: 'Mañana empieza a las 7:30. Dejad la ropa preparada.',
        kind: 'sleep',
      },
    ],
    tips: [
      'Alternativa barata: bus nocturno (SIT, Terravision o Cotral) a Termini, unos 7–8 € por persona, y luego taxi o a pie. Para dos personas a medianoche apenas compensa.',
      'Si el alojamiento queda fuera de las Murallas, pedid el taxi con app (FreeNow o itTaxi) para ver el precio estimado.',
    ],
  },
  {
    id: 'd18',
    date: '2026-12-18',
    short: 'Vie 18',
    title: 'Centro histórico y Galería Borghese',
    summary:
      'Trevi sin gente al amanecer, Panteón, free tour a las 10:30, Bernini en la Borghese y la Roma navideña de noche.',
    route: [
      'Fontana di Trevi',
      'Pantheon Roma',
      'San Luigi dei Francesi',
      'Piazza Navona',
      'Galleria Borghese',
      'Terrazza del Pincio',
      'Piazza di Spagna',
      'Fontana di Trevi',
    ],
    travelMode: 'walking',
    steps: [
      {
        time: '07:45',
        title: 'Fontana di Trevi casi vacía',
        detail:
          'A esta hora no hay casi nadie y se hacen las mejores fotos. Verla desde la plaza es gratis; el pago de 2 € es solo para bajar al borde de la fuente y empieza más tarde. Volvéis de noche para verla iluminada.',
        kind: 'visit',
        place: 'Fontana di Trevi',
      },
      {
        time: '08:15',
        title: 'Desayuno de barra',
        detail:
          'Cappuccino y cornetto de pie en la barra, unos 3 € (sentados cuesta el doble). Sant’Eustachio Il Caffè o La Casa del Caffè Tazza d’Oro, los dos junto al Panteón.',
        kind: 'food',
        place: "Sant'Eustachio Il Caffè",
      },
      {
        time: '09:00',
        title: 'Panteón por dentro',
        detail:
          'Entrada con hora (unos 5 €). 30–40 minutos. Mirad el óculo de 9 m y la tumba de Rafael. El free tour normalmente no entra.',
        kind: 'visit',
        place: 'Pantheon Roma',
        ticket: 'pantheon',
      },
      {
        time: '09:45',
        title: 'Caravaggios gratis en San Luigi dei Francesi',
        detail:
          'Tres Caravaggio de la vida de San Mateo en la última capilla a la izquierda. Echad una moneda para encender la luz. Entrada gratuita.',
        kind: 'visit',
        place: 'San Luigi dei Francesi',
      },
      {
        time: '10:30',
        title: 'Free tour (ya reservado)',
        detail:
          'Unas 2–2,5 h. Llegad 10 minutos antes al punto de encuentro (apuntadlo en Entradas). Propina habitual: 10–15 € por persona si os gusta. Si la ruta del tour repite algo de esta mañana, aprovechad para hacer las preguntas.',
        kind: 'visit',
        ticket: 'freetour',
      },
      {
        time: '13:00',
        title: 'Comida rápida y buena',
        detail:
          'Pizza al corte de Antico Forno Roscioli o Forno Campo de’ Fiori, unos 8–10 € por persona. Rápido, porque a las 14:30 hay que estar en la Borghese.',
        kind: 'food',
        place: 'Antico Forno Roscioli',
      },
      {
        time: '13:40',
        title: 'Piazza Navona y su mercadillo de Navidad',
        detail:
          'Puestos de dulces, belenes y la Befana; las Fuentes de Bernini en el centro. Si el free tour ya pasó por aquí, id directos al taxi.',
        kind: 'xmas',
        place: 'Piazza Navona',
      },
      {
        time: '14:10',
        title: 'Taxi a la Galleria Borghese',
        detail:
          '10–15 minutos, unos 12–15 €. Hay que recoger las entradas al menos 30 minutos antes de vuestra hora.',
        kind: 'move',
        place: 'Galleria Borghese',
      },
      {
        time: '15:00',
        title: 'Galleria Borghese (turno de 2 h)',
        detail:
          'Lo mejor de Bernini: Apolo y Dafne, El rapto de Proserpina y David. También seis Caravaggio y la Paolina de Canova. Los bolsos y mochilas van obligatoriamente a la consigna, que es gratis. Si vais justos de tiempo, empezad por la planta baja.',
        kind: 'visit',
        place: 'Galleria Borghese',
        ticket: 'borghese',
      },
      {
        time: '17:00',
        title: 'Paseo por Villa Borghese hasta el Pincio',
        detail:
          'Unos 15 minutos andando. Ya es de noche (atardece hacia las 16:40): vista de Piazza del Popolo iluminada desde la terraza.',
        kind: 'visit',
        place: 'Terrazza del Pincio',
      },
      {
        time: '17:40',
        title: 'Piazza del Popolo, Via del Corso y Via Condotti',
        detail:
          'Las calles con las luces de Navidad más bonitas. Via Condotti desemboca en la Plaza de España.',
        kind: 'xmas',
        place: 'Via dei Condotti',
      },
      {
        time: '18:15',
        title: 'Plaza de España y Trinità dei Monti',
        detail:
          'Subid la escalinata para ver la vista (no os podéis sentar en ella: hay multa). En diciembre suele haber árbol y belén.',
        kind: 'xmas',
        place: 'Scalinata di Trinità dei Monti',
      },
      {
        time: '19:00',
        title: 'Trevi de noche',
        detail:
          'Iluminada es otra cosa. Si queréis tirar la moneda desde el borde, pagáis los 2 € (pago con tarjeta en la entrada).',
        kind: 'visit',
        place: 'Fontana di Trevi',
        ticket: 'trevi',
      },
      {
        time: '20:00',
        title: 'Cena en Armando al Pantheon',
        detail:
          'Trattoria familiar desde 1961, gama media (unos 45–55 € por persona). Imprescindible reservar con semanas de antelación.',
        kind: 'food',
        place: 'Armando al Pantheon',
        ticket: 'armando',
      },
      {
        time: '21:45',
        title: 'Helado y Panteón de noche',
        detail: 'Giolitti está a 3 minutos y cierra tarde. Piazza della Rotonda de noche es preciosa.',
        kind: 'food',
        place: 'Giolitti Roma',
      },
    ],
    tips: [
      'Si el free tour resulta ser de Roma Antigua (Coliseo/Foro), avisa y cambio los días.',
      'Nada de comer en terrazas con fotos en la carta junto a los monumentos: caro y malo.',
    ],
  },
  {
    id: 'd19',
    date: '2026-12-19',
    short: 'Sáb 19',
    title: 'Vaticano, Castel Sant’Angelo y Trastevere',
    summary:
      'Museos Vaticanos a primera hora, San Pedro y su cúpula, el atardecer desde Castel Sant’Angelo y cena en Trastevere.',
    route: [
      'Musei Vaticani',
      'Piazza San Pietro',
      'Cupola di San Pietro',
      "Castel Sant'Angelo",
      "Ponte Sant'Angelo",
      'Piazza Navona',
      "Campo de' Fiori",
      'Ponte Sisto',
      'Santa Maria in Trastevere',
    ],
    travelMode: 'walking',
    steps: [
      {
        time: '07:20',
        title: 'Metro A hasta Ottaviano o Cipro',
        detail:
          'Pagáis pasando la tarjeta contactless por el torno. Desde Ottaviano hay unos 10 minutos andando hasta la entrada de los Museos.',
        kind: 'move',
        place: 'Musei Vaticani',
      },
      {
        time: '08:00',
        title: 'Museos Vaticanos y Capilla Sixtina',
        detail:
          'Primera hora = menos gente. Orden recomendado: Museo Pío-Clementino (Laocoonte, Torso del Belvedere), Galería de los Mapas, Estancias de Rafael (La escuela de Atenas) y, al final, la Capilla Sixtina (en silencio y sin fotos). Calculad unas 3,5 h. Hombros y rodillas cubiertos: aquí y en San Pedro lo exigen.',
        kind: 'visit',
        place: 'Musei Vaticani',
        ticket: 'vaticano',
      },
      {
        time: '11:45',
        title: 'Plaza de San Pedro: árbol y belén',
        detail:
          'El gran árbol y el belén de la plaza se inauguran a primeros de diciembre. Bajo la columnata suele haber una exposición gratuita de belenes de todo el mundo.',
        kind: 'xmas',
        place: 'Piazza San Pietro',
      },
      {
        time: '12:00',
        title: 'Basílica de San Pedro',
        detail:
          'Gratis, pero hay control de seguridad (cola de 20–60 min un sábado). La Piedad de Miguel Ángel está a la derecha nada más entrar; el baldaquino es de Bernini.',
        kind: 'visit',
        place: "Basilica di San Pietro",
      },
      {
        time: '12:45',
        title: 'Subida a la cúpula',
        detail:
          '551 escalones a pie, o ascensor y luego 320 escalones (los últimos son estrechos e inclinados). La mejor vista de Roma. Se paga allí mismo; calculad 1 h.',
        kind: 'visit',
        place: 'Cupola di San Pietro',
        ticket: 'cupula',
      },
      {
        time: '14:00',
        title: 'Comida en Prati',
        detail:
          'Barato y bueno: Pastasciutta (pasta fresca para llevar, unos 8 €) o Trapizzino. Si os sobra tiempo, Bonci Pizzarium (la pizza al corte más famosa, junto a la metro Cipro).',
        kind: 'food',
        place: 'Pastasciutta Roma Prati',
      },
      {
        time: '15:00',
        title: 'Castel Sant’Angelo',
        detail:
          'Mausoleo de Adriano convertido en fortaleza papal. Subid a la terraza del Ángel para ver el atardecer (16:40) sobre San Pedro y el Tíber. Calculad 1,5 h.',
        kind: 'visit',
        place: "Castel Sant'Angelo",
        ticket: 'castel',
      },
      {
        time: '16:45',
        title: 'Ponte Sant’Angelo y Via dei Coronari',
        detail:
          'El puente de los ángeles de Bernini y una calle de anticuarios que en Navidad se llena de luces.',
        kind: 'xmas',
        place: "Ponte Sant'Angelo",
      },
      {
        time: '17:15',
        title: 'Navona de noche y Campo de’ Fiori',
        detail:
          'El mercadillo de Navidad iluminado. Luego Campo de’ Fiori y Piazza Farnese, y cruzáis el Ponte Sisto hacia Trastevere.',
        kind: 'xmas',
        place: 'Piazza Navona',
      },
      {
        time: '18:15',
        title: 'Trastevere: Santa Maria in Trastevere',
        detail:
          'Mosaicos dorados del siglo XII y belén en Navidad. Después, a perderse por Via della Lungaretta y Vicolo del Cinque.',
        kind: 'visit',
        place: 'Santa Maria in Trastevere',
      },
      {
        time: '19:30',
        title: 'Cena en Trastevere',
        detail:
          'Da Enzo al 29 (la trattoria romana de manual, con cola) o, más barato, pizza romana fina en Ai Marmi (Panattoni). Supplì de Supplì Roma como entrante callejero.',
        kind: 'food',
        place: 'Da Enzo al 29',
        ticket: 'enzo',
      },
      {
        time: '21:30',
        title: 'Mirador del Gianicolo (opcional)',
        detail: 'Unos 20 minutos de subida a pie. Roma iluminada a vuestros pies. Bajada en taxi.',
        kind: 'visit',
        place: 'Terrazza del Gianicolo',
        optional: true,
      },
    ],
    tips: [
      'En los Museos Vaticanos no contéis con el "atajo" de la Sixtina a San Pedro: es para grupos guiados y a menudo está cerrado.',
      'El sábado el Ghetto judío tiene muchos restaurantes cerrados hasta la noche (Shabat): por eso va el domingo.',
    ],
  },
  {
    id: 'd20',
    date: '2026-12-20',
    short: 'Dom 20',
    title: 'Roma Antigua, Aventino y Testaccio',
    summary:
      'Coliseo, Foro Romano y Palatino por la mañana; Campidoglio, Ghetto, la Boca de la Verdad, el atardecer en el Aventino y cena en Testaccio.',
    route: [
      'Colosseo',
      'Foro Romano',
      'Palatino',
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
        time: '08:30',
        title: 'Coliseo: control de seguridad',
        detail: 'Metro B, parada Colosseo. Llegad 20–30 min antes de vuestra hora.',
        kind: 'move',
        place: 'Colosseo',
      },
      {
        time: '09:00',
        title: 'Coliseo (Full Experience)',
        detail:
          'Con la Full Experience entráis a la arena y, si lo conseguís, a los subterráneos, por donde salían fieras y gladiadores. Si solo encontráis la entrada normal, también merece mucho la pena. 1,5 h.',
        kind: 'visit',
        place: 'Colosseo',
        ticket: 'coliseo',
      },
      {
        time: '10:45',
        title: 'Foro Romano y Palatino',
        detail:
          'Con la misma entrada. Recorrido: Arco de Tito, Vía Sacra, Curia, Templo de Saturno; después subís al Palatino (Domus Flavia, Estadio) y bajáis por los Jardines Farnesio, con vista sobre el Foro. Casi no hay comida dentro: llevad agua y algo de picar. 2,5–3 h.',
        kind: 'visit',
        place: 'Foro Romano',
      },
      {
        time: '13:45',
        title: 'Comida en Monti o junto al Coliseo',
        detail:
          'Trattoria Luzzi: romana, barata y con mucho ambiente. Alternativa: la pizza de Li Rioni.',
        kind: 'food',
        place: 'Trattoria Luzzi Roma',
      },
      {
        time: '15:00',
        title: 'Belén napolitano de los Santos Cosme y Damián',
        detail:
          'Un belén napolitano enorme del siglo XVIII, en la Via dei Fori Imperiali, junto al Foro. Pocos turistas lo conocen.',
        kind: 'xmas',
        place: 'Basilica dei Santi Cosma e Damiano',
      },
      {
        time: '15:20',
        title: 'Campidoglio y mirador del Foro',
        detail:
          'La plaza diseñada por Miguel Ángel. Por detrás, a la derecha, hay una terraza gratis con la mejor vista del Foro. Al lado, Santa Maria in Aracoeli (122 escalones) guarda el Santo Bambino, muy venerado en Navidad. El Vittoriano, en Piazza Venezia, con su árbol de Navidad, queda enfrente.',
        kind: 'visit',
        place: 'Piazza del Campidoglio',
      },
      {
        time: '15:50',
        title: 'Ghetto judío e Isla Tiberina',
        detail:
          'Teatro de Marcelo, Portico d’Ottavia y la Fuente de las Tortugas. Probad una alcachofa a la judía (carciofo alla giudia) de aperitivo. Cruzáis la Isla Tiberina por el puente romano más antiguo que sigue en uso.',
        kind: 'visit',
        place: "Portico d'Ottavia",
      },
      {
        time: '16:15',
        title: 'Bocca della Verità',
        detail: 'Cola corta a última hora. Foto rápida con donativo de unos 2 €.',
        kind: 'visit',
        place: 'Bocca della Verità',
      },
      {
        time: '16:35',
        title: 'Atardecer en el Giardino degli Aranci',
        detail: 'Subida corta al Aventino. El sol se pone hacia las 16:40 detrás de la cúpula de San Pedro.',
        kind: 'visit',
        place: 'Giardino degli Aranci',
      },
      {
        time: '16:55',
        title: 'La cerradura de los Caballeros de Malta',
        detail: 'Por el ojo de la cerradura se ve la cúpula de San Pedro perfectamente enmarcada. A 2 minutos del jardín.',
        kind: 'visit',
        place: 'Buco della Serratura Aventino',
      },
      {
        time: '17:30',
        title: 'Pausa en el alojamiento o luces del centro',
        detail:
          'Ducha y descanso, que llevaréis muchos pasos. Mañana se madruga mucho si vais a Pompeya.',
        kind: 'free',
      },
      {
        time: '20:00',
        title: 'Cena en Testaccio',
        detail:
          'El barrio de la cocina romana de verdad. Felice a Testaccio (cacio e pepe preparada en la mesa) o Flavio al Velavevodetto. Reservad los dos.',
        kind: 'food',
        place: 'Felice a Testaccio',
        ticket: 'testaccio',
      },
    ],
    tips: [
      'El domingo los Museos Vaticanos cierran, por eso hoy toca Roma Antigua (abre todos los días).',
      'A las 12:00 el Papa reza el Ángelus desde la ventana en la Plaza de San Pedro (unos 15 min). No encaja en el plan de hoy y no hace falta.',
      'Si os sobra energía después de cenar: Coliseo iluminado de noche desde Via dei Fori Imperiali.',
    ],
  },
  {
    id: 'd21',
    date: '2026-12-21',
    short: 'Lun 21',
    title: 'Excursión: Pompeya y pizza en Nápoles',
    summary:
      'Tren de alta velocidad (1h10) a Nápoles, Pompeya por la mañana y por la tarde pizza napolitana y la calle de los belenes. De vuelta a cenar en Roma.',
    route: ['Roma Termini', 'Napoli Centrale', 'Pompei Scavi', 'Napoli Centrale', 'Roma Termini'],
    travelMode: 'transit',
    steps: [
      {
        time: '06:45',
        title: 'Roma Termini',
        detail:
          'Frecciarossa (Trenitalia) o Italo hacia las 7:00–7:30 hasta Napoli Centrale. Comprad ya: los billetes baratos (desde 10–20 €) se acaban y en taquilla cuestan unos 45 €.',
        kind: 'move',
        place: 'Roma Termini',
        ticket: 'trenes',
      },
      {
        time: '08:40',
        title: 'Circumvesuviana a Pompei Scavi',
        detail:
          'En Napoli Garibaldi (bajo la estación Centrale), línea dirección Sorrento. Bajad en "Pompei Scavi – Villa dei Misteri" (unos 36 min, unos 3–4 €; el billete se compra en la taquilla). Trenes viejos y llenos: mochila delante.',
        kind: 'move',
        place: 'Napoli Garibaldi Circumvesuviana',
      },
      {
        time: '09:30',
        title: 'Pompeya (unas 4 h)',
        detail:
          'Entrada nominativa: llevad el DNI. Ruta: Foro, Termas Estabianas, Lupanar, Casa del Fauno, Casa de los Vettii, Anfiteatro y Gran Palestra. Terminad en la Villa de los Misterios, junto a la estación. Calzado cómodo (el empedrado es durísimo), agua y bocadillo.',
        kind: 'visit',
        place: 'Pompei Scavi',
        ticket: 'pompeya',
      },
      {
        time: '14:00',
        title: 'Vuelta a Nápoles en Circumvesuviana',
        detail: 'Hasta Napoli Garibaldi, unos 40 minutos.',
        kind: 'move',
      },
      {
        time: '15:00',
        title: 'Pizza napolitana',
        detail:
          'L’Antica Pizzeria da Michele (solo margherita y marinara, unos 6 €; coged número y esperad) o Sorbillo, en Via dei Tribunali. La mejor pizza del viaje.',
        kind: 'food',
        place: "L'Antica Pizzeria da Michele",
      },
      {
        time: '16:00',
        title: 'San Gregorio Armeno, la calle de los belenes',
        detail:
          'En diciembre es un espectáculo: artesanos de figuritas de belén en una calle estrecha, más Spaccanapoli y Via dei Tribunali. Un sfogliatella de postre.',
        kind: 'xmas',
        place: 'Via San Gregorio Armeno',
      },
      {
        time: '17:45',
        title: 'Tren de vuelta a Roma',
        detail: 'Llegada hacia las 19:00. Reservad este tren con margen.',
        kind: 'move',
        place: 'Napoli Centrale',
      },
      {
        time: '20:00',
        title: 'Última cena y maleta',
        detail:
          'Algo cerca del alojamiento o una última vuelta por Trevi o Navona. Dejad la maleta hecha y el taxi pedido.',
        kind: 'food',
      },
      {
        time: '22:30',
        title: 'A dormir',
        detail: 'Despertador hacia las 5:45.',
        kind: 'sleep',
      },
    ],
    tips: [
      '¿Merece la pena? Sí: Pompeya es única en el mundo y con tren rápido se hace bien en un día. El precio: es un día largo y cuesta unos 70–90 € por persona entre trenes y entrada.',
      'En invierno Pompeya abre de 9:00 a 17:00 y la última entrada es a las 15:30.',
    ],
    planB: {
      title: 'Plan B: un día más en Roma',
      steps: [
        {
          time: '09:00',
          title: 'Basílica de San Clemente',
          detail:
            'Tres iglesias, una encima de otra: la basílica del siglo XII, una iglesia del siglo IV y debajo un templo de Mitra. Muy sorprendente; unos 10 €.',
          kind: 'visit',
          place: 'Basilica di San Clemente',
        },
        {
          time: '10:30',
          title: 'San Juan de Letrán y la Scala Santa',
          detail: 'La catedral de Roma, anterior a San Pedro.',
          kind: 'visit',
          place: 'Arcibasilica di San Giovanni in Laterano',
        },
        {
          time: '12:00',
          title: 'Catacumbas de San Calixto y Via Appia Antica',
          detail:
            'Bus 118 o taxi. Visita guiada obligatoria (unos 10 €). Después, un paseo por la Via Appia, la calzada romana original entre pinos.',
          kind: 'visit',
          place: 'Catacombe di San Callisto',
        },
        {
          time: '15:30',
          title: 'Mercato di Testaccio y Piramide',
          detail:
            'Bocadillos de Mordi e Vai, la Pirámide Cestia y el Cementerio Acatólico (cierra hacia las 17:00).',
          kind: 'food',
          place: 'Mercato di Testaccio',
        },
        {
          time: '17:00',
          title: 'Santa Maria Maggiore',
          detail: 'Una de las grandes basílicas, con reliquias del pesebre. Muy navideña.',
          kind: 'xmas',
          place: 'Basilica di Santa Maria Maggiore',
        },
      ],
    },
  },
  {
    id: 'd22',
    date: '2026-12-22',
    short: 'Mar 22',
    title: 'Vuelta a Madrid',
    summary: 'Vuelo a las 9:00 desde Fiumicino. Hay que estar en el aeropuerto a las 7:30.',
    steps: [
      {
        time: '05:45',
        title: 'Despertador',
        detail: 'Tarjetas de embarque descargadas en el móvil la noche anterior.',
        kind: 'sleep',
      },
      {
        time: '06:30',
        title: 'Taxi a Fiumicino',
        detail:
          'Pedido la noche anterior por app (FreeNow o itTaxi). 55 € fijos desde dentro de las Murallas. A esa hora se tarda 30–35 min. Alternativa si estáis cerca de Termini: Leonardo Express (14 € por persona, 32 min, sale cada 15–30 min desde las 5:35 más o menos).',
        kind: 'move',
        place: 'Aeroporto di Roma-Fiumicino',
      },
      {
        time: '07:15',
        title: 'Aeropuerto',
        detail: 'Solo equipaje de mano: control de seguridad y a la puerta de embarque.',
        kind: 'move',
      },
      {
        time: '09:00',
        title: 'Vuelo a Madrid',
        detail: 'Arrivederci, Roma. Y echad una moneda en la Fontana di Trevi para volver.',
        kind: 'move',
      },
    ],
  },
];
