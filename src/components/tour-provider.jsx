/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const STEPS = {
  1: 'Please select any \n atom to start the tour',
  2: 'Select again the atom\n to see the next step',
  3: 'Please select a card to link the github code',
}

export const TourProviderContext = createContext()

export const TourProvider = ({ children }) => {
  if (!children) {
    throw new Error('TourProvider requires a "children" prop')
  }

  const [tourActive, setTourActive] = useState(false)
  const [step, setStep] = useState(1)
  const [tourStepText, setTourStepText] = useState(STEPS[step])
  const increaseStep = () => {
    setStep((prev) => {
      if (tourActive && STEPS[prev + 1]) {
        setTourStepText(STEPS[prev + 1])
        return prev + 1
      } else {
        setTourStepText(STEPS[1])
        return 1
      }
    })
  }
  const decreaseStep = () =>
    setStep((prev) => {
      if (tourActive && STEPS[prev - 1]) {
        setTourStepText(STEPS[prev - 1])
        return prev - 1
      } else {
        setTourStepText(STEPS[1])
        return 1
      }
    })

  const cleanTour = () => {
    setTourActive(false)
    setStep(1)
    setTourStepText(STEPS[1])
  }

  return (
    <TourProviderContext.Provider
      value={{
        tourActive,
        setTourActive,
        tourStep: step,
        increaseStep,
        decreaseStep,
        tourText: tourStepText,
        cleanTour,
      }}
    >
      {children}
    </TourProviderContext.Provider>
  )
}

export const useTour = () => {
  const tourContext = useContext(TourProviderContext)

  if (!tourContext) {
    throw new Error('useTour must be used within a TourProvider')
  }

  return tourContext
}
