"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FloatingCartoon, SectionCartoons } from "@/components/cartoon-decorations"
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook,
  Sparkles,
  Star,
  Heart,
  Scissors,
  Wind,
  Crown,
  Flower2,
  Gift,
  MessageCircle,
  Shield,
  Smile,
  Palette
} from "lucide-react"

const WHATSAPP_URL = "https://wa.me/27735368005"

const serviceColors = [
  "bg-magic-pink/15 text-magic-pink border-magic-pink/30",
  "bg-magic-purple/15 text-magic-purple border-magic-purple/30",
  "bg-magic-blue/15 text-magic-blue border-magic-blue/30",
  "bg-magic-yellow/20 text-amber-700 border-magic-yellow/50",
  "bg-magic-mint/20 text-emerald-700 border-magic-mint/40",
  "bg-magic-coral/15 text-orange-600 border-magic-coral/30",
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

// Sparkle component for decorative effect
function FloatingSparkle({ delay = 0, x = 0, y = 0, color = "text-magic-pink" }: { delay?: number; x?: number; y?: number; color?: string }) {
  return (
    <motion.div
      className={`absolute ${color}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay
      }}
    >
      <Sparkles className="w-4 h-4" />
    </motion.div>
  )
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-magic-pink/10 border-b border-magic-pink/15"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Princess Parlor"
              width={60}
              height={60}
              className="rounded-full ring-4 ring-magic-pink/40 ring-offset-2"
            />
            <span className="font-display text-xl font-semibold text-gradient-magic hidden sm:block">
              Princess Parlor 👑
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-magic-purple font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-6 shadow-lg shadow-[#25D366]/30">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 h-4" />
                Book on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-candy pattern-dots pattern-stars">
      <SectionCartoons variant="hero" />
      {/* Background decorations */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-16 left-8 w-80 h-80 bg-magic-pink/25 rounded-full blur-3xl" />
        <motion.div className="absolute top-32 right-12 w-72 h-72 bg-magic-yellow/30 rounded-full blur-3xl" />
        <motion.div className="absolute bottom-24 left-1/4 w-96 h-96 bg-magic-blue/20 rounded-full blur-3xl" />
        <motion.div className="absolute bottom-10 right-8 w-64 h-64 bg-magic-purple/25 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating sparkles */}
      <FloatingSparkle delay={0} x={10} y={20} color="text-magic-pink" />
      <FloatingSparkle delay={0.5} x={85} y={15} color="text-magic-yellow" />
      <FloatingSparkle delay={1} x={20} y={70} color="text-magic-blue" />
      <FloatingSparkle delay={1.5} x={75} y={60} color="text-magic-purple" />
      <FloatingSparkle delay={2} x={50} y={30} color="text-magic-coral" />

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/images/logo.png"
              alt="Princess Parlor Kids Hair Salon"
              width={200}
              height={200}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 bg-white/80 border-2 border-magic-pink/30 rounded-full px-5 py-2 mb-6 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-magic-yellow" />
            <span className="text-sm font-semibold text-magic-purple">Welcome to the Magic ✨</span>
            <Sparkles className="w-4 h-4 text-magic-pink" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Making Haircuts{" "}
            <span className="text-gradient-magic">Fun &amp; Stress-Free</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/75 mb-10 max-w-2xl mx-auto font-medium"
          >
            A premium, safe, and playful kids hair salon in Lambton. Because your little ones deserve a royal experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-[#25D366]/35"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Book via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-2 border-magic-purple/40 bg-white/80 hover:bg-magic-purple/10 text-magic-purple font-semibold"
            >
              <a href="#gallery">
                <Star className="mr-2 w-5 h-5" />
                View Gallery
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-magic-pink/40 rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-3 bg-magic-pink rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-section-sunshine relative overflow-hidden">
      <SectionCartoons variant="about" />
      <motion.div className="absolute top-0 right-0 w-96 h-96 bg-magic-yellow/25 rounded-full blur-3xl -translate-y-1/2" />
      <motion.div className="absolute bottom-0 left-0 w-72 h-72 bg-magic-mint/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
            <motion.div variants={fadeInUp} className="relative">
            <motion.div
              className="absolute -top-4 -left-4 z-10 bg-magic-yellow text-amber-900 font-display font-semibold px-4 py-2 rounded-2xl shadow-lg rotate-[-6deg] animate-wiggle"
            >
              So much fun! 🎀
            </motion.div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-magic-pink/30">
              <Image
                src="/images/about-photo.jpg"
                alt="Happy child at Princess Parlor"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:pl-8">
            <span className="inline-block bg-magic-purple/15 text-magic-purple font-semibold text-sm uppercase tracking-wider px-4 py-1 rounded-full">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              A Space Designed <span className="text-gradient-magic">Just For Kids</span>
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-6">
              We know haircuts can be scary for little ones. That&apos;s why we&apos;ve created a magical environment where kids feel safe, entertained, and happy — from our colorful play area to our gentle stylists.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed mb-8">
              Every detail is crafted for your peace of mind, so your little royals can relax, play, and leave with hairstyles they absolutely love.
            </p>

            <div className="space-y-4">
              {[
                { icon: Shield, label: "Clean & Sanitized Environment", color: "bg-magic-mint/20 text-emerald-700 border-magic-mint/40" },
                { icon: Heart, label: "Gentle, Patient Stylists", color: "bg-magic-pink/15 text-magic-pink border-magic-pink/30" },
                { icon: Smile, label: "Fun Play Area While Waiting", color: "bg-magic-yellow/25 text-amber-800 border-magic-yellow/50" }
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border-2 ${item.color} bg-white/70`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Braiding & Cornrows",
      description: "Beautiful, neat, and gentle protective styles for all hair types."
    },
    {
      icon: Wind,
      title: "Wash & Blowdry",
      description: "Tear-free washing with premium, kid-safe products and a gentle blowdry finish."
    },
    {
      icon: Palette,
      title: "Accessories Setup",
      description: "Colorful beads, ribbons, and clips to complete the royal look."
    },
    {
      icon: Crown,
      title: "Kids Styling",
      description: "Fun and trendy styles perfect for school, play dates, and everyday adventures."
    },
    {
      icon: Flower2,
      title: "Protective Styles",
      description: "Low-maintenance styles that protect and promote healthy hair growth."
    },
    {
      icon: Gift,
      title: "Special Occasions",
      description: "Stunning styles for birthdays, parties, weddings, and photo shoots."
    }
  ]

  return (
    <section id="services" className="py-24 bg-section-candy pattern-dots relative overflow-hidden">
      <SectionCartoons variant="services" />
      <motion.div className="absolute top-10 left-0 w-64 h-64 bg-magic-blue/20 rounded-full blur-3xl" />
      <motion.div className="absolute bottom-10 right-0 w-80 h-80 bg-magic-pink/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block bg-magic-pink/15 text-magic-pink font-semibold text-sm uppercase tracking-wider px-4 py-1 rounded-full">
            Our Services
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Expert Styling, <span className="text-gradient-magic">Big Smiles</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            Expert styling tailored for children&apos;s delicate hair in a fun, colorful environment.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={scaleIn}>
              <Card className={`card-rainbow bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group h-full rounded-3xl`}>
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-4 ${serviceColors[i % serviceColors.length]}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      step: "1",
      title: "Book Appointment",
      description: "Message us on WhatsApp to secure your preferred slot easily.",
      icon: MessageCircle,
      color: "from-magic-pink to-magic-purple",
    },
    {
      step: "2",
      title: "Arrive & Play",
      description: "Come in and let your child enjoy our clean, safe play area.",
      icon: Smile,
      color: "from-magic-yellow to-magic-coral",
    },
    {
      step: "3",
      title: "Royal Treatment",
      description: "Our gentle stylists work their magic while your child relaxes.",
      icon: Crown,
      color: "from-magic-blue to-magic-mint",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-section-sunshine relative overflow-hidden">
      <SectionCartoons variant="how-it-works" />
      <motion.div className="absolute -left-20 top-1/2 w-72 h-72 bg-magic-purple/15 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block bg-magic-blue/15 text-sky-700 font-semibold text-sm uppercase tracking-wider px-4 py-1 rounded-full">
            How It Works
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Three Simple <span className="text-gradient-magic">Steps</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-foreground/70 mt-4 max-w-xl mx-auto text-lg">
            A stress-free salon experience from booking to beautiful hair.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {steps.map((item, i) => (
            <motion.div key={i} variants={scaleIn}>
              <Card className="bg-white/90 border-2 border-white shadow-xl rounded-3xl h-full overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <span className="inline-block font-display text-5xl font-bold text-magic-pink/30 mb-2">{item.step}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// CTA Banner
function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-magic-pink via-magic-purple to-magic-blue" />
      <motion.div className="absolute inset-0 pattern-dots opacity-30" />
      <FloatingCartoon type="star" className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block opacity-90" delay={0} size="md" wiggle />
      <FloatingCartoon type="balloon" className="absolute right-8 top-1/4 hidden lg:block opacity-90" delay={0.5} size="sm" />
      <FloatingCartoon type="crown" className="absolute right-12 bottom-1/4 hidden md:block opacity-90" delay={0.3} size="sm" />
      <motion.div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Sparkles className="w-10 h-10 text-magic-yellow mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Ready for a Stress-Free Haircut?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join the many parents who trust Princess Parlor for their children&apos;s hair. Book your visit today!
          </p>
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-10 py-6 text-lg shadow-xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 w-5 h-5" />
              Book Now on WhatsApp
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Pricing Section
function PricingSection() {
  const packages = [
    {
      name: "Basic Braids",
      price: "Price Coming Soon",
      features: ["Simple cornrows", "Basic twists", "Ponytail styles", "Gentle detangling"]
    },
    {
      name: "Wash & Style",
      price: "Price Coming Soon",
      features: ["Shampoo & condition", "Blow dry", "Simple styling", "Hair treatment"],
      popular: true
    },
    {
      name: "Special Event",
      price: "Price Coming Soon",
      features: ["Custom design", "Hair accessories", "Long-lasting style", "Photo-ready finish"]
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-white/60 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block bg-magic-yellow/30 text-amber-800 font-semibold text-sm uppercase tracking-wider px-4 py-1 rounded-full">
            Pricing
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Our <span className="text-gradient-magic">Packages</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {packages.map((pkg, i) => (
            <motion.div key={i} variants={scaleIn}>
              <Card className={`relative h-full transition-all duration-300 hover:shadow-xl rounded-3xl ${
                pkg.popular 
                  ? "card-rainbow scale-105 shadow-xl" 
                  : "border-2 border-magic-pink/20 bg-white"
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-magic-pink to-magic-purple text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-primary text-lg font-medium mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center justify-center gap-2 text-muted-foreground">
                        <Star className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-full font-semibold ${
                      pkg.popular
                        ? "bg-[#25D366] hover:bg-[#20bd5a] text-white"
                        : "bg-magic-purple hover:bg-magic-purple/90 text-white"
                    }`}
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const galleryImages = [
    { src: "/images/gallery-1.jpg", alt: "Happy child with beaded braids at Princess Parlor", span: "col-span-2 row-span-2" },
    { src: "/images/gallery-2.jpg", alt: "Cornrow braids with yellow bow", span: "col-span-1 row-span-1" },
    { src: "/images/gallery-3.jpg", alt: "French braids with pink bow", span: "col-span-1 row-span-1" },
    { src: "/images/gallery-4.jpg", alt: "Cornrow pattern with beaded accent and yellow bow", span: "col-span-2 row-span-2" },
    {src: "/images/gallery-5.jpeg", alt: "Happy child with beaded braids at Princess Parlor", span: "col-span-3 row-span-3" },
    {src: "/images/gallery-6.jpeg", alt: "Playground", span: "col-span-4 row-span-4" },
    {src: "/images/gallery-7.jpeg", alt: "Playground", span: "col-span-5 row-span-5" },
    {src: "/images/gallery-8.jpeg", alt: "Playground", span: "col-span-6 row-span-6" },
    {src: "/images/gallery-9.jpeg", alt: "Happy child in Playground", span: "col-span-7 row-span-7" },
    {src: "/images/gallery-10.jpeg", alt: "Happy child in Playground", span: "col-span-8 row-span-8" },
    {src: "/images/gallery-11.jpeg", alt: "Playground", span: "col-span-9 row-span-9" },
  ]

  return (
    <section id="gallery" className="py-24 bg-section-candy relative overflow-hidden">
      <SectionCartoons variant="gallery" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block bg-magic-coral/15 text-orange-600 font-semibold text-sm uppercase tracking-wider px-4 py-1 rounded-full">
            Happy Smiles
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Little <span className="text-gradient-magic">Royals</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            Take a peek at some of our little royals and their stunning transformations.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ring-4 ring-white shadow-xl hover:ring-magic-pink/50 transition-all ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-section-sunshine relative overflow-hidden">
      <SectionCartoons variant="contact" />
      <motion.div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.span variants={fadeInUp} className="inline-block bg-magic-mint/20 text-emerald-700 font-semibold text-sm uppercase tracking-wider px-4 py-1 rounded-full">
              Contact Us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Get In <span className="text-gradient-magic">Touch</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-2 border-magic-pink/20 shadow-xl rounded-3xl h-full">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="rounded-xl" />
                      <Input placeholder="Last Name" className="rounded-xl" />
                    </div>
                    <Input type="email" placeholder="Email Address" className="rounded-xl" />
                    <Input type="tel" placeholder="Phone Number" className="rounded-xl" />
                    <Textarea placeholder="Your Message" rows={4} className="rounded-xl" />
                    <Button asChild className="w-full bg-magic-purple hover:bg-magic-purple/90 text-white rounded-full font-semibold">
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 w-4 h-4" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="bg-white border-2 border-magic-blue/20 rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-magic-blue/15 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Address</h4>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=54+Chapman+Road,+Lambton,+South+Africa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        54 Chapman Road, Lambton
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-magic-pink/20 rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-magic-pink/15 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-magic-pink" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <a
                        href="tel:+27648474813"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        064 847 4813
                      </a>
                      <a
                        href="tel:+27735368005"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        073 536 8005
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-magic-yellow/40 rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-magic-yellow/25 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">Will be disclosed soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-magic-purple/20 rounded-2xl shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14315.305897336862!2d28.17118719081025!3d-26.23482726902436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9510ed5e3c8069%3A0xa796167d1406db89!2s54%20Chapman%20Rd%2C%20Klippoortjie%2C%20Germiston%2C%201401!5e0!3m2!1sen!2sza!4v1778836030106!5m2!1sen!2sza"
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Princess Parlor on Google Maps"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-magic-purple via-magic-pink to-magic-coral text-white py-16 overflow-hidden">
      <SectionCartoons variant="footer" />
      <motion.div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Princess Parlor"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-display text-xl font-bold">Princess Parlor</h3>
                <p className="text-white/80 text-sm">Kids Hair Salon</p>
              </div>
            </div>
            <p className="text-white/85 max-w-md">
              Where every child leaves feeling like royalty. Professional hair styling 
              in a fun, kid-friendly environment.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Pricing", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-magic-yellow transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Princess Parlor Kids Hair Salon. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

// Main Page Component
export default function PrincessParlorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <HowItWorksSection />
      <CtaBanner />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
