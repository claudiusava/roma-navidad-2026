export interface GuideSection {
  title: string;
  icon: string;
  items: string[];
}

export const GUIDE: GuideSection[] = [
  {
    title: 'Navidad en Roma',
    icon: '🎄',
    items: [
      'Mercadillo de Navidad de Piazza Navona: abre de principios de diciembre al 6 de enero (día de la Befana). Hay dulces, belenes y una noria pequeña.',
      'Árboles de Navidad grandes: Plaza de San Pedro, Piazza Venezia y Plaza de España.',
      'Belenes que merecen la pena: Plaza de San Pedro y la exposición gratuita "100 Presepi" bajo la columnata; el belén napolitano del siglo XVIII de los Santos Cosme y Damián; Santa Maria in Aracoeli, con el Santo Bambino; y Santa Maria in Trastevere.',
      'Las luces más bonitas están en Via del Corso, Via Condotti, Via del Tritone y Via dei Coronari.',
      'Santa Maria Maggiore guarda la reliquia de la cuna de Belén: en Navidad es una visita muy especial.',
      'Dulces típicos: panettone, pandoro, torrone y, en Nápoles, struffoli.',
    ],
  },
  {
    title: 'Moverse',
    icon: '🚇',
    items: [
      'Metro, bus y tranvía: pagáis pasando la tarjeta contactless o el móvil por el torno o la máquina (cada uno con su propia tarjeta). El billete sencillo (BIT, unos 1,50 €) dura 100 min, y el gasto diario tiene un tope, así que no compensa sacar abono.',
      'Metro A (naranja): Termini, Barberini (Trevi), Spagna, Flaminio (Popolo), Ottaviano (Vaticano). Metro B (azul): Termini, Colosseo, Circo Massimo, Piramide (Testaccio).',
      'En el centro histórico, andando es lo más rápido: no hay metro entre Navona, el Panteón y Trevi.',
      'Taxi: solo los blancos con el escudo de "Roma Capitale". Apps: FreeNow o itTaxi. De Fiumicino al centro (dentro de las Murallas Aurelianas) hay tarifa fija de 55 € por coche.',
      'Carteristas: sobre todo en el bus 64 y el 40 (Termini–Vaticano), en la metro A y en Trevi. Mochila delante y móvil en el bolsillo de dentro.',
    ],
  },
  {
    title: 'Clima y ropa',
    icon: '🧥',
    items: [
      'Diciembre: 4–14 °C y lluvia posible. Ropa por capas, chubasquero ligero y paraguas plegable.',
      'Atardece hacia las 16:40: aprovechad la luz por la mañana y dejad la tarde para luces, barrios e iglesias.',
      'Zapatillas cómodas y ya usadas: haréis 20.000–30.000 pasos al día sobre adoquines.',
      'Vaticano y basílicas: hombros y rodillas cubiertos. Un pañuelo grande en la mochila soluciona.',
    ],
  },
  {
    title: 'Comer como un romano',
    icon: '🍝',
    items: [
      'Los cuatro platos de pasta romana: carbonara, cacio e pepe, amatriciana y gricia. Probadlos todos.',
      'El café en la barra cuesta un 50 % menos que sentados. Se pide "un caffè" (es un espresso).',
      'El "coperto" (1–3 € por persona) es legal y normal. La propina no es obligatoria; redondear está bien.',
      'Horarios: se come de 13:00 a 14:30 y se cena desde las 19:30–20:00.',
      'Mala señal: carta con fotos en varios idiomas o un camarero en la puerta llamándoos.',
      'Agua gratis: las fuentecillas "nasoni" son potables. Llevad una botella reutilizable.',
    ],
  },
  {
    title: 'Práctico',
    icon: '🧾',
    items: [
      'Tasa turística: unos 6–10 € por persona y noche según la categoría del alojamiento. Se paga allí, a menudo en efectivo.',
      'Llevad DNI siempre: entradas nominativas (Coliseo, Pompeya) y el registro en el alojamiento.',
      'Tarjeta Sanitaria Europea en el móvil o la cartera. Emergencias: 112.',
      'Sin roaming extra: la tarifa española funciona igual en Italia (UE).',
      'Timos típicos: pulseras "regaladas", rosas, fotos con gladiadores (luego cobran) y gente con carpetas pidiendo firmas.',
      'Domingo a las 12:00, Ángelus del Papa en la Plaza de San Pedro (unos 15 min). Solo si os pilla de paso.',
    ],
  },
];

export const PHRASES: { es: string; it: string }[] = [
  { es: 'Buenos días / Buenas tardes', it: 'Buongiorno / Buonasera' },
  { es: 'Gracias / Por favor', it: 'Grazie / Per favore' },
  { es: 'Perdone', it: 'Scusi' },
  { es: 'Una mesa para dos', it: 'Un tavolo per due' },
  { es: 'Tengo una reserva a nombre de…', it: 'Ho una prenotazione a nome di…' },
  { es: 'La cuenta, por favor', it: 'Il conto, per favore' },
  { es: '¿Puedo pagar con tarjeta?', it: 'Posso pagare con carta?' },
  { es: 'Agua sin gas / con gas', it: 'Acqua naturale / frizzante' },
  { es: 'Un café / un capuchino', it: 'Un caffè / un cappuccino' },
  { es: 'Vino de la casa, una jarra', it: 'Vino della casa, una caraffa' },
  { es: '¿Cuánto cuesta?', it: 'Quanto costa?' },
  { es: '¿Dónde está…?', it: 'Dov’è…?' },
  { es: 'Para llevar', it: 'Da portare via' },
  { es: '¡Qué bueno!', it: 'Buonissimo!' },
];

export interface BudgetLine {
  id: string;
  label: string;
  perPerson: number;
}

/** Estimación por persona, editable en la app. */
export const BUDGET_DEFAULTS: BudgetLine[] = [
  { id: 'vaticano', label: 'Museos Vaticanos', perPerson: 25 },
  { id: 'coliseo', label: 'Coliseo Full Experience', perPerson: 24 },
  { id: 'borghese', label: 'Galleria Borghese', perPerson: 18 },
  { id: 'pantheon', label: 'Panteón', perPerson: 5 },
  { id: 'cupula', label: 'Cúpula de San Pedro', perPerson: 15 },
  { id: 'castel', label: 'Castel Sant’Angelo', perPerson: 16 },
  { id: 'trevi', label: 'Trevi (borde de la fuente)', perPerson: 2 },
  { id: 'freetour', label: 'Propina del free tour', perPerson: 12 },
  { id: 'sanclemente', label: 'San Clemente (subterráneo)', perPerson: 10 },
  { id: 'catacumbas', label: 'Catacumbas de San Calixto', perPerson: 10 },
  { id: 'taxis', label: 'Aeropuerto ida y vuelta (taxi o tren)', perPerson: 40 },
  { id: 'transporte', label: 'Metro, bus y algún taxi', perPerson: 20 },
  { id: 'comida', label: 'Comidas y cafés (4 días × ≈ 55 €)', perPerson: 220 },
  { id: 'especial', label: 'Extra de la cena especial (Roscioli)', perPerson: 45 },
  { id: 'tasa', label: 'Tasa turística (4 noches)', perPerson: 30 },
];
