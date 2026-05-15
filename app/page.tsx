"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  Gift
} from "lucide-react"

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
function FloatingSparkle({ delay = 0, x = 0, y = 0 }: { delay?: number; x?: number; y?: number }) {
  return (
    <motion.div
      className="absolute text-primary/30"
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
    { href: "#pricing", label: "Pricing" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
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
              className="rounded-full"
            />
            <span className="font-serif text-xl font-bold text-foreground hidden sm:block">
              Princess Parlor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Book Appointment
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  Book Appointment
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      {/* Background decorations */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating sparkles */}
      <FloatingSparkle delay={0} x={10} y={20} />
      <FloatingSparkle delay={0.5} x={85} y={15} />
      <FloatingSparkle delay={1} x={20} y={70} />
      <FloatingSparkle delay={1.5} x={75} y={60} />
      <FloatingSparkle delay={2} x={50} y={30} />

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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            <span className="text-primary">Princess Parlor</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-normal">Kids Hair Salon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Beautiful styles for your little princess. Where creativity meets care, 
            and every child leaves feeling like royalty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/25"
            >
              <Crown className="mr-2 w-5 h-5" />
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg border-primary/30 hover:bg-primary/5"
            >
              <Heart className="mr-2 w-5 h-5" />
              View Services
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
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-photo.jpg"
                alt="Happy child at Princess Parlor"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:pl-8">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Where Little Ones <span className="text-primary">Shine Bright</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Princess Parlor, we believe every child deserves to feel like royalty. 
              Our kid-friendly salon creates a magical experience where your little ones 
              can relax, have fun, and leave with stunning hairstyles they&apos;ll love.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our professional stylists specialize in children&apos;s hair care, from gentle 
              treatments to creative braids and protective styles. We focus on building 
              confidence and making every visit a positive, memorable experience.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Heart, label: "Kid-Friendly" },
                { icon: Star, label: "Expert Stylists" },
                { icon: Sparkles, label: "Creative Styles" },
                { icon: Crown, label: "Royal Treatment" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
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
      title: "Braids",
      description: "Beautiful cornrows, box braids, twists and creative braiding styles for all hair types."
    },
    {
      icon: Wind,
      title: "Wash & Blow",
      description: "Gentle cleansing and blow-dry services using kid-safe, nourishing products."
    },
    {
      icon: Heart,
      title: "Hair Treatments",
      description: "Deep conditioning, detangling, and moisturizing treatments for healthy hair."
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
    <section id="services" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(244,114,182,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            What We <span className="text-primary">Offer</span>
          </motion.h2>
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
              <Card className="bg-card border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
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
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary font-medium text-sm uppercase tracking-wider">
            Pricing
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Our <span className="text-primary">Packages</span>
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
              <Card className={`relative h-full transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? "border-primary shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50"
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
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
                    className={`w-full rounded-full ${
                      pkg.popular 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                  >
                    Book Now
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
    { src: "/images/gallery-4.jpg", alt: "Cornrow pattern with beaded accent and yellow bow", span: "col-span-2 row-span-1" }
  ]

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Work
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Style <span className="text-primary">Gallery</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Browse our collection of beautiful hairstyles created with love for our little princesses
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
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.span}`}
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
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.span variants={fadeInUp} className="text-primary font-medium text-sm uppercase tracking-wider">
              Contact Us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              Get In <span className="text-primary">Touch</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
              <Card className="bg-card border-border/50 h-full">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="rounded-xl" />
                      <Input placeholder="Last Name" className="rounded-xl" />
                    </div>
                    <Input type="email" placeholder="Email Address" className="rounded-xl" />
                    <Input type="tel" placeholder="Phone Number" className="rounded-xl" />
                    <Textarea placeholder="Your Message" rows={4} className="rounded-xl" />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
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

              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
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

              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">Will be disclosed soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 overflow-hidden">
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
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
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
                <h3 className="font-serif text-xl font-bold">Princess Parlor</h3>
                <p className="text-background/60 text-sm">Kids Hair Salon</p>
              </div>
            </div>
            <p className="text-background/70 max-w-md">
              Where every child leaves feeling like royalty. Professional hair styling 
              in a fun, kid-friendly environment.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Pricing", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-background/70 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Princess Parlor Kids Hair Salon. All rights reserved.
          </p>
        </div>
      </div>
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
      <PricingSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
