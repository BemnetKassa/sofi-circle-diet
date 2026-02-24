"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface StorySlide {
  id: number
  image: string
  images?: string[]
  subtitle: string
  title: string
  description: string[]
  layout: "image-left" | "image-right" | "image-center"
  extraBadge?: string
}

const slideData: StorySlide[] = [
  {
    id: 1,
    image: "/pictures/youngSofi.JPG",
    images: ["/pictures/youngSofi.JPG", "/pictures/youngSofi2.JPG"],
    subtitle: "The Beginning",
    title: "Where It All Started",
    description: [
      "It wasn't always about trophies or stages. My journey began over 10 years ago in a small local gym here in Ethiopia. I was just a young kid with a dream and a lot to learn.",
      "I spent 5 years dedicated to learning the science of professional competition—not just lifting weights, but understanding anatomy, nutrition, and discipline. Those early years taught me that consistency is the only magic pill."
    ],
    layout: "image-left"
  },
  {
    id: 2,
    image: "/pictures/localCompete.JPG",
    subtitle: "Rising Up",
    title: "From Local Stages...",
    description: [
      "The road wasn't easy. I faced countless ups and downs—injuries, doubts, and the immense pressure of competition. But I kept showing up.",
      "Competing in local areas was where I forged my character. Every loss was a lesson, and every win was a stepping stone. I learned that true strength is built in the moments heavily challenges you."
    ],
    layout: "image-right"
  },
  {
    id: 3,
    image: "/pictures/bronz.JPG",
    images: ["/pictures/bronz.JPG", "/pictures/compiting.PNG"],
    subtitle: "International Level",
    title: "...To the World Stage",
    description: [
      "My dedication took me beyond our borders. Representing my country on international stages, like in South Africa, was a dream come true.",
      "Standing on that podium and bringing home the Bronze medal was proof that with enough heart and hard work, any goal is achievable. It wasn't just my victory; it was for everyone who believed in me."
    ],
    layout: "image-left",
    extraBadge: "South Africa, International Stage" 
  },
  {
    id: 4,
    image: "/pictures/medal.JPG",
    subtitle: "A Legacy",
    title: "A Legacy of Dedication",
    description: [
      "These medals are symbols of years of sacrifice, discipline, and unwavering consistency. This is the experience I bring to Sofi Circle Diet—to help you achieve your own victories."
    ],
    layout: "image-center"
  }
]

function ImageCarousel({ images, interval = 1000, alt }: { images: string[], interval?: number, alt: string }) {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
      }, interval)
      return () => clearInterval(timer)
    }, [images.length, interval])
  
    return (
      <div className="relative w-full h-full">
        <AnimatePresence mode="popLayout">
           <motion.div
             key={index}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.5 }}
             className="absolute inset-0"
           >
             <Image
               src={images[index]}
               alt={alt}
               fill
               className="object-cover"
             />
           </motion.div>
        </AnimatePresence>
      </div>
    )
}

export function StorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    let nextIndex = currentIndex + newDirection
    if (nextIndex < 0) nextIndex = slideData.length - 1
    if (nextIndex >= slideData.length) nextIndex = 0
    setCurrentIndex(nextIndex)
  }

  const currentSlide = slideData[currentIndex]

  return (
    <div className="relative w-full overflow-hidden bg-card/50 rounded-[3rem] border border-border/50 shadow-xl p-8 md:p-12 min-h-[700px] flex flex-col justify-center">
      <div className="absolute top-4 right-8 flex gap-2 z-20">
         {slideData.map((_, idx) => (
             <div 
                key={idx} 
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'}`}
             />
         ))}
      </div>

      <div className="relative h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="w-full"
          >
            {/* Template for Image Center (Legacy) */}
            {currentSlide.layout === "image-center" && (
                <div className="flex flex-col items-center text-center space-y-8">
                     <span className="text-secondary font-bold tracking-wider uppercase">{currentSlide.subtitle}</span>
                     <h3 className="text-3xl md:text-5xl font-bold">{currentSlide.title}</h3>
                     <div className="max-w-3xl mx-auto space-y-4">
                        {currentSlide.description.map((p, i) => (
                            <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                        ))}
                     </div>
                     <div className="relative h-[300px] md:h-[400px] w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-background mt-8">
                        {currentSlide.images ? (
                            <ImageCarousel images={currentSlide.images} alt={currentSlide.title} />
                        ) : (
                            <Image 
                                src={currentSlide.image} 
                                alt={currentSlide.title} 
                                fill 
                                className="object-cover" 
                            />
                        )}
                     </div>
                </div>
            )}

            {/* Template for Image Left/Right */}
            {currentSlide.layout !== "image-center" && (
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${currentSlide.layout === "image-right" ? "" : ""}`}>
                    {/* Image Side */}
                    <div className={`relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl ${currentSlide.layout === "image-right" ? "lg:order-2" : "lg:order-1"}`}>
                         {currentSlide.images ? (
                            <ImageCarousel images={currentSlide.images} alt={currentSlide.title} />
                         ) : (
                             <Image 
                                src={currentSlide.image} 
                                alt={currentSlide.title} 
                                fill 
                                className="object-cover" 
                            />
                         )}
                         {currentSlide.extraBadge && (
                             <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold border border-white/20">
                                {currentSlide.extraBadge}
                            </div>
                         )}
                    </div>

                    {/* Text Side */}
                    <div className={`space-y-6 ${currentSlide.layout === "image-right" ? "lg:order-1" : "lg:order-2"}`}>
                        <span className="text-primary font-bold tracking-wider uppercase block">{currentSlide.subtitle}</span>
                        <h3 className="text-3xl md:text-4xl font-bold">{currentSlide.title}</h3>
                        <div className="space-y-4">
                            {currentSlide.description.map((p, i) => (
                                <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-20">
        <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg h-12 w-12 opacity-70 hover:opacity-100"
            onClick={() => paginate(-1)}
        >
            <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-20">
        <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg h-12 w-12 opacity-70 hover:opacity-100"
            onClick={() => paginate(1)}
        >
            <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

    </div>
  )
}
