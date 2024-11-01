'use client';
import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'
import { Progress } from './progress'

type Props = {
  finished: boolean
}

const loadingTexts = [
  "Generating questions...",
  "Unleashing the power of AI...",
  "Diving deep into the ocean of questions...",
  "Creating questions...",
  "Help me please, I'm stuck in a loading screen...",
  "I'm not a robot, I'm a loading screen...",
  "Mems are loading...",
  "I'm not a loading screen, I'm a loading screen...",
  "Where is the end of this loading screen?",
  "Questions are loading...",
  "3 2 1... Loading...",
  "Loading...",
  "Mishok top :)",
  "Multisim is *#$/&@#",
]

const LoadingPage = ({finished}: Props) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const loadingGif = currentTheme === 'dark' ? '/loadingblack.gif' : '/loadingwhite.gif';

  const [progress, setProgress] = React.useState(0)
  const [loadingText, setLoadingText] = React.useState(loadingTexts[0])
  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length)
      setLoadingText(loadingTexts[randomIndex])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (finished) return 100
        if (prev === 100) {
          return 0
        }
        if (Math.random() < 0.1) {
          return prev + 2
        }
        return prev + 0.5
      })
    }, 100)
    return () => clearInterval(interval)
  }, [finished])
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[60vw] flex flex-col items-center">
      <Image
        src={loadingGif}
        width={400}
        height={400}
        alt="loading animation"
      />
      <Progress value={progress} className='w-full mt-4' />
      <h1 className='mt-2 text-xl'>{loadingText}</h1>
    </div>
  )
}

export default LoadingPage