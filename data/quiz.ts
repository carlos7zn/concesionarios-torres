export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'gti',
    question: '¿Qué significan las siglas GTI en el Golf GTI?',
    options: [
      'Gran Turismo Injection',
      'Grand Touring International',
      'Gasolina Turbo Inyección',
      'Gran Tracción Integral',
    ],
    correctIndex: 0,
    explanation: 'La "I" es de inyección (injection en inglés).',
  },
  {
    id: 'etiqueta0',
    question: '¿Qué etiqueta ambiental de la DGT llevan los coches eléctricos puros?',
    options: ['Etiqueta 0', 'ECO', 'B', 'C'],
    correctIndex: 0,
    explanation: 'La etiqueta 0 es la de cero emisiones.',
  },
  {
    id: 'abs',
    question: '¿Qué es el ABS?',
    options: [
      'Un sistema antibloqueo de frenos',
      'Un tipo de suspensión',
      'Un control de velocidad de crucero',
      'Un sistema de aire acondicionado',
    ],
    correctIndex: 0,
    explanation: 'Evita que las ruedas se bloqueen al frenar a fondo.',
  },
  {
    id: 'itv',
    question: '¿A los cuántos años debe pasar un turismo nuevo su primera ITV en España?',
    options: ['4 años', '2 años', '6 años', '10 años'],
    correctIndex: 0,
    explanation: 'La primera revisión es a los 4 años.',
  },
  {
    id: 'carnet',
    question: '¿Cuántos puntos tiene el carné de un conductor novel al obtenerlo?',
    options: ['8', '12', '15', '20'],
    correctIndex: 0,
    explanation: 'Parte de 8 puntos y sube a 12 tras 3 años sin sanciones.',
  },
  {
    id: 'modelt',
    question: '¿Qué modelo popularizó la producción en cadena de montaje a principios del siglo XX?',
    options: ['Ford Model T', 'Volkswagen Escarabajo', 'Mini Clásico', 'Citroën 2CV'],
    correctIndex: 0,
    explanation: 'Ford lo fabricó en cadena de montaje y lo hizo accesible.',
  },
  {
    id: 'phev',
    question: '¿Qué significa PHEV?',
    options: [
      'Híbrido enchufable',
      'Híbrido ligero de 48V',
      'Eléctrico de rango extendido',
      'Pila de hidrógeno',
    ],
    correctIndex: 0,
    explanation: 'PHEV son las siglas de Plug-in Hybrid Electric Vehicle.',
  },
  {
    id: 'formentor',
    question: '¿De dónde viene el nombre del CUPRA Formentor?',
    options: [
      'Del Cap de Formentor, en Mallorca',
      'De un circuito de carreras',
      'Del fundador de la marca',
      'De un pueblo de Cataluña',
    ],
    correctIndex: 0,
    explanation: 'Toma el nombre del cabo mallorquín.',
  },
  {
    id: 'dsg',
    question: '¿Qué es un cambio DSG?',
    options: [
      'Una caja de doble embrague',
      'Un freno regenerativo',
      'Un sistema de tracción total',
      'Un turbo de geometría variable',
    ],
    correctIndex: 0,
    explanation: 'Es la caja automática de doble embrague del grupo Volkswagen.',
  },
  {
    id: 'benz',
    question: '¿Qué país vio nacer en 1886 el primer automóvil con motor de gasolina patentado, de Karl Benz?',
    options: ['Alemania', 'Francia', 'Estados Unidos', 'Italia'],
    correctIndex: 0,
    explanation: 'El Benz Patent-Motorwagen se patentó en 1886.',
  },
]

export function getRandomQuestions(count: number = 8): QuizQuestion[] {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5)
  const selected = shuffled.slice(0, count)
  
  return selected.map(q => {
    // Shuffle options
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5)
    // Find the new index of the correct answer
    const correctText = q.options[q.correctIndex]
    const newCorrectIndex = shuffledOptions.findIndex(opt => opt === correctText)
    
    return {
      ...q,
      options: shuffledOptions,
      correctIndex: newCorrectIndex
    }
  })
}