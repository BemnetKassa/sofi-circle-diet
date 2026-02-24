"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Trophy, Star, ArrowRight } from "lucide-react"

export default function TransformationsPage() {
  const transformations = [
    {
      id: 1,
      image: "/pictures/transformations/2on1.jpg",
      name: "Life-Changing Journey",
      story: "Lost more than 10kg of fat in 12 weeks and became healthier and more handsome. His confidence has skyrocketed through disciplined nutrition and training.",
      tags: ["Fat Loss", "Confidence Boost"],
      duration: "10kg Lost"
    },
    {
      id: 2,
      beforeImage: "/pictures/transformations/before.jpg",
      afterImage: "/pictures/transformations/after.jpg",
      name: "Incredible Transformation",
      story: "A journey of discipline and balanced eating led to this incredible physique transformation. It's not just about looking good, but feeling powerful.",
      tags: ["Fat Loss", "Strength"],
      duration: "16 Weeks"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 pb-5 sm:pb-10 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm font-semibold">
              Real Results
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Real People, <span className="text-primary">Real Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              See what's possible with the right plan and dedication. These are genuine transformations from our community members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 px-6 pb-22">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                {/* Image Container */}
                <div className="relative h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40" />
                  
                  {item.beforeImage && item.afterImage ? (
                    <div className="absolute inset-0 flex h-full w-full">
                       <div className="relative w-1/2 h-full border-r border-white/20">
                          <div className="absolute top-2 left-2 z-20 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">BEFORE</div>
                          <Image
                            src={item.beforeImage}
                            alt={`${item.name} before`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                       </div>
                       <div className="relative w-1/2 h-full">
                          <div className="absolute top-2 right-2 z-20 bg-primary/80 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">AFTER</div>
                          <Image
                            src={item.afterImage}
                            alt={`${item.name} after`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                       </div>
                    </div>
                  ) : item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.name} transformation`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : null}
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5 border border-border">
                    <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20 -mt-12 bg-card/10 backdrop-blur-md rounded-t-3xl border-t border-white/10 dark:border-white/5">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    {item.name}
                    <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.story}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5">
              Client Feedback
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What They Say <span className="text-secondary">About Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Direct feedback from our community members who are actively using our meal plans.
            </p>
          </motion.div>

          <div className="relative w-full overflow-hidden py-5">
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 60, 
                ease: "linear", 
                repeat: Infinity 
              }}
            >
              {[
                {
                  name: "Abel",
                  text: "የ የመን ማር ኪሎ የስቀንሳል ብለውኝ ሞከሬ አልተሳካልኘም ተስፋ ቆርጬ ነበር meal plan ረድቷኛል በጣም",
                  initial: "A"
                },
                {
                  name: "ሆርሜላ",
                  text: "meal planun መጠቀም ከ ጀመርኩ ቡሃላ በ 23 ቀን ወስጥ 7ኪሎ ቀንሻለሁ አመሰግናለሁ",
                  initial: "H"
                },
                {
                  name: "ናርዶስ",
                  text: "የምግብ እቅድ ኪሎ አና ጡንቻ እንድጀምር ረድቷኛል አመሰግናለሁ",
                  initial: "N"
                },
                {
                  name: "አዲስ",
                  text: "ለ ባለቤቴ ነበር የ ወሰድኩት በጣም አሪፍ ነበር የእያንድ ምግብና አሰራር ልኬት ጥሩ ስለነበር ጨጓራውን ምያመው ነገር እራሱ ጠፍቷል።",
                  initial: "A"
                },
                {
                  name: "ነጃት",
                  text: "መጠቀም ጀምሬያለሁ በ ሁለት ሳምት ውስጥ 4 ኪሎ ቀንሻለሁ",
                  initial: "N"
                },
                {
                  name: "ናትናኤል",
                  text: "እየተጠቀምኩበት ነው በዚህ ሳምንት ነው የ ጀመርኩት 2ኪሎ ቀንሻለሁ ስፖርቱንም በደምብ እየሰራው ።",
                  initial: "N"
                },
                {
                  name: "ጳዉሎስ",
                  text: "አዎ ተጠቅሜበት አሪፍ ነው በደንብ ለውጦኛል",
                  initial: "P"
                },
                {
                  name: "አዜብ",
                  text: "ተጠቅሜበታለሁ ለውጥ አምጥቻለሁ thanks sofi",
                  initial: "A"
                },
                {
                  name: "ሰለሞን",
                  text: "አሪፍ ነበር በ 2 ወር እስከ 9 ኪሎ ቀንሻለሁ የ ምግብ ፍላጓቴም አሪፍ ላይ ነው የ ምፈልገውን ምግብ እየተመገብኩ ኪሎ መቀነስ ችያለሁ",
                  initial: "S"
                },
                {
                  name: "ብሩሃኑ",
                  text: "በጣም አሪፍ ነበር ተጠቅሜበታለሁ በ 15 ቀን 5 ኪሎ ቀንሻለሁ እስፖርቱንም ምግቡንም በደንብ እየተጠቀምኩበት ነው ስጀምር 92 ኪሎ ነበርኩ አሁን 86 ኪሎ ሆኛለሁ",
                  initial: "B"
                }
              ].concat([
                {
                  name: "Abel",
                  text: "የ የመን ማር ኪሎ የስቀንሳል ብለውኝ ሞከሬ አልተሳካልኘም ተስፋ ቆርጬ ነበር meal plan ረድቷኛል በጣም",
                  initial: "A"
                },
                {
                  name: "ሆርሜላ",
                  text: "meal planun መጠቀም ከ ጀመርኩ ቡሃላ በ 23 ቀን ወስጥ 7ኪሎ ቀንሻለሁ አመሰግናለሁ",
                  initial: "H"
                },
                {
                  name: "ናርዶስ",
                  text: "የምግብ እቅድ ኪሎ አና ጡንቻ እንድጀምር ረድቷኛል አመሰግናለሁ",
                  initial: "N"
                },
                {
                  name: "አዲስ",
                  text: "ለ ባለቤቴ ነበር የ ወሰድኩት በጣም አሪፍ ነበር የእያንድ ምግብና አሰራር ልኬት ጥሩ ስለነበር ጨጓራውን ምያመው ነገር እራሱ ጠፍቷል።",
                  initial: "A"
                },
                {
                  name: "ነጃት",
                  text: "መጠቀም ጀምሬያለሁ በ ሁለት ሳምት ውስጥ 4 ኪሎ ቀንሻለሁ",
                  initial: "N"
                },
                {
                  name: "ናትናኤል",
                  text: "እየተጠቀምኩበት ነው በዚህ ሳምንት ነው የ ጀመርኩት 2ኪሎ ቀንሻለሁ ስፖርቱንም በደምብ እየሰራው ።",
                  initial: "N"
                },
                {
                  name: "ጳዉሎስ",
                  text: "አዎ ተጠቅሜበት አሪፍ ነው በደንብ ለውጦኛል",
                  initial: "P"
                },
                {
                  name: "አዜብ",
                  text: "ተጠቅሜበታለሁ ለውጥ አምጥቻለሁ thanks sofi",
                  initial: "A"
                },
                {
                  name: "ሰለሞን",
                  text: "አሪፍ ነበር በ 2 ወር እስከ 9 ኪሎ ቀንሻለሁ የ ምግብ ፍላጓቴም አሪፍ ላይ ነው የ ምፈልገውን ምግብ እየተመገብኩ ኪሎ መቀነስ ችያለሁ",
                  initial: "S"
                },
                {
                  name: "ብሩሃኑ",
                  text: "በጣም አሪፍ ነበር ተጠቅሜበታለሁ በ 15 ቀን 5 ኪሎ ቀንሻለሁ እስፖርቱንም ምግቡንም በደንብ እየተጠቀምኩበት ነው ስጀምር 92 ኪሎ ነበርኩ አሁን 86 ኪሎ ሆኛለሁ",
                  initial: "B"
                }
              ]).map((client, i) => (
                <div
                  key={i}
                  className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow relative w-[350px] shrink-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold shrink-0">
                      {client.initial}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{client.name}</h4>
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">"{client.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-16 text-center flex flex-col items-center gap-4">
            <p className="text-xl font-medium text-muted-foreground">And so many others have already started their journey...</p> 
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/nutritionPlan">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full font-bold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/30 transition-all group">
                  Join the Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
