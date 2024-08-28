/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

export const TourProviderContext = createContext()

export const TourProvider = ({ children }) => {
  if (!children) {
    throw new Error('TourProvider requires a "children" prop')
  }

  const [tourActive, setTourActive] = useState(false)
  const [step, setStep] = useState(0)
  const increaseStep = () => setStep((prev) => tourActive && prev + 1)
  const decreaseStep = () => setStep((prev) => tourActive && prev - 1)

  return (
    <TourProviderContext.Provider
      value={{
        tourActive,
        setTourActive,
        tourStep: step,
        increaseStep,
        decreaseStep,
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
