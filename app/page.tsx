import Image from 'next/image'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ProjectSection } from '@/components/ProjectSection'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Noah Lim',
  description: "Noah Lim's Portfolio",
  icons: {
    icon: "https://fontawesome.com/icons/hand-wave?f=classic&s=solid&pc=%23ffdd00",
    apple: "https://fontawesome.com/icons/hand-wave?f=classic&s=solid&pc=%23ffdd00"
  }
}

export default function Home() {
  return (
      <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
         <HeroSection />
         <AboutSection />
         <ProjectSection />
      </main>
  )
}
