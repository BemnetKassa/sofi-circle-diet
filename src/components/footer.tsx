import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-10 px-6 relative overflow-hidden border-t border-white/5">
      {/* Footer background effects */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-secondary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2"></div>

      <div className="container mx-auto grid md:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-4 col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 text-white font-black text-2xl tracking-tight">
                  <div className="w-10 h-10 bg-linear-to-br from-primary to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">S</div>
                  <span>Sofi Circle <span className="text-primary">Diet</span></span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed text-lg">
                  Empowering you to live a healthier life through personalized nutrition plans designed specifically for your body and lifestyle in Ethiopia.
              </p>
              <div className="flex gap-4 pt-2">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all cursor-pointer flex items-center justify-center border border-white/5 hover:scale-110 duration-300">
                          <Icon className="w-5 h-5" />
                      </div>
                  ))}
              </div>
          </div>
          
          <div>
              <h4 className="text-white font-bold mb-2 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                  {[
                      { l: "Home", h: "/home" },
                      { l: "Blog", h: "/blog" },
                      { l: "About", h: "/about" },
                      { l: "How It Works", h: "/how-it-works" },                      { l: "Who It's For", h: "/who-it-is-for" },                      { l: "Nutrition Plans", h: "/nutritionPlan" },
                      { l: "Contact", h: "/contact" }
                  ].map((link, i) => (
                    <li key={i}>
                        <Link href={link.h} className="hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                            {link.l}
                        </Link>
                    </li>
                  ))}
              </ul>
          </div>
          
          <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
              <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span className="text-gray-400">sofonias.neb0940@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span className="text-gray-400">Bole Road, Friendship Building<br/>Addis Ababa, Ethiopia</span>
                  </li>
              </ul>
          </div>
      </div>
      
      <div className="container mx-auto mt-6 pt-8 border-t border-white/5 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Sofi Circle Diet. All rights reserved.</p>
        <div className="flex gap-6">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
