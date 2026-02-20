import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 relative overflow-hidden">
      {/* Footer decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto grid md:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-4 col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-bold text-2xl">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">S</div>
                  Sofi Circle Diet
              </div>
              <p className="text-slate-400 max-w-sm">
                  Empowering you to live a healthier life through personalized nutrition plans designed specifically for your body and lifestyle.
              </p>
          </div>
          
          <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                  <li><Link href="/home" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                  <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                  <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
          </div>
          
          <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-3">
                  <li>support@soficirclediet.com</li>
                  <li>ADDIS ABABA, ETHIOPIA</li>
                  <li className="flex gap-4 mt-4">
                      {/* Social icons placeholder */}
                      <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
                  </li>
              </ul>
          </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Sofi Circle Diet. All rights reserved.</p>
      </div>
    </footer>
  )
}
