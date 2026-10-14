'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, XCircle, Award, RotateCcw, Car, MessageSquare } from 'lucide-react'
import { quizQuestions, QuizQuestion, getRandomQuestions } from '@/data/quiz'

export default function QuizPage() {
  const [gameQuestions, setGameQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState<{ questionId: string; userAnswer: number; correct: boolean }[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const questions = getRandomQuestions(8)
    setGameQuestions(questions)
    setCurrentIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setFinished(false)
    setAnswers([])
  }, [])

  const currentQuestion = gameQuestions[currentIndex]
  const progress = ((currentIndex + 1) / gameQuestions.length) * 100

  const handleAnswer = useCallback((index: number) => {
    if (selectedAnswer !== null || !currentQuestion) return
    
    const correct = index === currentQuestion.correctIndex
    setSelectedAnswer(index)
    setShowExplanation(true)
    
    if (correct) setScore(prev => prev + 1)
    
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      userAnswer: index,
      correct
    }])
  }, [selectedAnswer, currentQuestion])

  const handleNext = useCallback(() => {
    if (currentIndex < gameQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setFinished(true)
    }
  }, [currentIndex, gameQuestions.length])

  const handleRestart = useCallback(() => {
    const questions = getRandomQuestions(8)
    setGameQuestions(questions)
    setCurrentIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setFinished(false)
    setAnswers([])
  }, [])

  const getResultTitle = () => {
    if (score <= 3) return 'Novato al volante'
    if (score <= 6) return 'Conductor experto'
    return 'Piloto de pruebas'
  }

  const getResultDescription = () => {
    if (score <= 3) return '¡Sigue aprendiendo! Cada kilómetro te hace mejor conductor.'
    if (score <= 6) return '¡Buen conocimiento! Dominas lo esencial de la cultura del motor.'
    return '¡Impresionante! Nivel de piloto de pruebas. El asfalto te respeta.'
  }

  const whatsappMessage = `🏎️ *Quiz Concesionarios Torres*\n\nHe completado el quiz de cultura del motor:\n🎯 Puntuación: ${score}/8\n🏆 ${getResultTitle()}\n\n${getResultDescription()}\n\n¿Quieres probar suerte? https://concesionarios-torres-pi.vercel.app/quiz`

  if (!currentQuestion && !finished) return null

  const transition = prefersReducedMotion 
    ? { duration: 0 } 
    : { duration: 0.3, ease: 'easeOut' as const }

  return (
    <div className="min-h-screen bg-dark-950 text-white pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3 tracking-tight">
            Quiz de Cultura del Motor
          </h1>
          <p className="text-gray-400 text-lg">
            Demuestra lo que sabes sobre coches, normas y tecnología automotriz
          </p>
        </motion.div>

        {!finished ? (
          <>
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full h-2 bg-dark-800 rounded-full overflow-hidden mb-8"
            >
              <motion.div
                key={currentIndex}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="h-full bg-brand-red rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between text-sm text-gray-500 mb-8"
            >
              <span>Pregunta {currentIndex + 1} de {gameQuestions.length}</span>
              <span>Acertadas: {score}</span>
            </motion.div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={transition}
                className="bg-dark-900 border border-dark-800 rounded-2xl p-6 md:p-8 shadow-xl"
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-8 text-center leading-snug">
                  {currentQuestion.question}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === currentQuestion.correctIndex
                    const showResult = showExplanation
                    
                    let bgClass = 'bg-dark-800 border-dark-700 hover:border-brand-red/50'
                    let textClass = 'text-white'
                    let icon = null
                    
                    if (showResult) {
                      if (isCorrect) {
                        bgClass = 'bg-emerald-900/30 border-emerald-500'
                        textClass = 'text-emerald-300'
                        icon = <CheckCircle className="w-5 h-5 text-emerald-400" />
                      } else if (isSelected) {
                        bgClass = 'bg-red-900/30 border-red-500'
                        textClass = 'text-red-300'
                        icon = <XCircle className="w-5 h-5 text-red-400" />
                      } else {
                        bgClass = 'bg-dark-800 border-dark-700 opacity-60'
                        textClass = 'text-gray-500'
                      }
                    } else if (isSelected) {
                      bgClass = 'bg-brand-red/20 border-brand-red'
                      textClass = 'text-brand-red'
                    }

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        whileTap={{ scale: 0.98 }}
                        className={`${bgClass} border-2 rounded-xl p-5 text-left transition-all ${transition.duration === 0 ? '' : 'duration-200'} flex items-center space-x-3 min-h-[80px] ${selectedAnswer !== null && !isSelected ? 'cursor-not-allowed' : ''}`}
                      >
                        <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-current text-lg font-bold">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className={`${textClass} text-base leading-relaxed flex-1`}>{option}</span>
                        {showResult && (isCorrect || isSelected) && icon}
                      </motion.button>
                    )
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 p-4 bg-dark-800/50 border border-dark-700 rounded-xl flex items-start space-x-3"
                    >
                      <span className="text-brand-red font-bold text-lg flex-shrink-0 mt-0.5">💡</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{currentQuestion.explanation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Next Button */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.button
                      key="next"
                      onClick={handleNext}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-8 py-3 bg-brand-red hover:bg-brand-redHover text-white font-medium rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-brand-red/20"
                    >
                      <span>{currentIndex < gameQuestions.length - 1 ? 'Siguiente pregunta' : 'Ver resultado'}</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          /* Results Screen */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-900 border border-dark-800 rounded-2xl p-6 md:p-8 shadow-xl text-center"
          >
            <div className="mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-red/20 mb-6"
              >
                <Award className="w-12 h-12 text-brand-red" />
              </motion.div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-2">
                {getResultTitle()}
              </h2>
              <p className="text-gray-400 text-lg mb-6">{getResultDescription()}</p>
              
              <div className="inline-flex items-center space-x-2 bg-dark-800 border border-dark-700 px-6 py-3 rounded-full">
                <span className="text-3xl font-display font-bold text-brand-red tabular-nums">{score}</span>
                <span className="text-gray-500">/ 8</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-8">
              {score <= 3 ? '¡No te preocupes, cada experto empezó siendo novato!' : 
               score <= 6 ? '¡Buen nivel! Sigue así y serás un piloto de pruebas.' : 
               '¡Nivel élite! Conoces el motor como la palma de tu mano.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleRestart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto py-3 px-6 bg-dark-800 border border-dark-700 hover:border-brand-red/50 hover:bg-dark-700 text-white font-medium rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Repetir quiz</span>
              </motion.button>

              <motion.a
                href="/vehiculos"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto py-3 px-6 bg-brand-red hover:bg-brand-redHover text-white font-medium rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-brand-red/20"
              >
                <Car className="w-5 h-5" />
                <span>Ver vehículos</span>
              </motion.a>

              <motion.a
                href={`https://wa.me/34986000000?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/30"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Pedir prueba de conducción</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}