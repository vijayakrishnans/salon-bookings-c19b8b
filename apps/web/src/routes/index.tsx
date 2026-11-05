import { createFileRoute } from '@tanstack/react-router'
import {
  Scissors,
  Palette,
  Sparkles,
  Droplets,
  Sun,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react'
import { SALON_NAME, SALON_TAGLINE, SALON_DESCRIPTION } from '../lib/site'

export const Route = createFileRoute('/')({ component: App })

const services = [
  {
    icon: <Scissors className="w-8 h-8 text-amber-500" />,
    title: 'Haircut & Styling',
    description:
      'Precision cuts and custom styling for every hair type. Includes consultation, wash, cut, and blow-dry.',
    price: '$65+',
    highlights: ['Consultation included', 'Blow-dry finish', 'Style advice'],
  },
  {
    icon: <Palette className="w-8 h-8 text-amber-500" />,
    title: 'Hair Color',
    description:
      'Full color, highlights, balayage, and gloss treatments using premium, damage-minimizing formulas.',
    price: '$95+',
    highlights: ['Full or partial options', 'Root touch-ups', 'Gloss finish'],
  },
  {
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    title: 'Deep Conditioning',
    description:
      'Restorative treatments that nourish and repair damaged hair. Leave your appointment with silky, revived locks.',
    price: '$45+',
    highlights: ['Olaplex available', 'Keratin options', 'Scalp massage'],
  },
  {
    icon: <Droplets className="w-8 h-8 text-amber-500" />,
    title: 'Blowout & Finish',
    description:
      'Professional blow-dry styling for any occasion. Smooth, voluminous, or curled — your choice.',
    price: '$50+',
    highlights: ['Heat protectant', 'Long-lasting hold', 'Custom finish'],
  },
  {
    icon: <Sun className="w-8 h-8 text-amber-500" />,
    title: 'Highlights & Balayage',
    description:
      'Sun-kissed dimension and hand-painted color for a natural, grow-out-friendly look.',
    price: '$130+',
    highlights: ['Hand-painted technique', 'Low maintenance', 'Sun-kissed look'],
  },
  {
    icon: <Star className="w-8 h-8 text-amber-500" />,
    title: 'Special Occasion',
    description:
      'Bridal, prom, and event styling. Includes trial session and on-location availability.',
    price: '$120+',
    highlights: ['Trial session', 'On-location option', 'Group booking'],
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The best haircut I have ever had. My stylist listened to exactly what I wanted and delivered perfectly.',
    rating: 5,
  },
  {
    name: 'James K.',
    text: 'Amazing color work. The balayage looks so natural and has grown out beautifully over the months.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Such a relaxing atmosphere and professional team. I leave feeling like a new person every time.',
    rating: 5,
  },
]

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-stone-100" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-amber-100/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-6">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Premium Salon Since 2020</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-tight">
              {SALON_NAME}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-stone-600 leading-relaxed max-w-lg">
              {SALON_TAGLINE}
            </p>
            <p className="mt-4 text-base text-stone-500 leading-relaxed max-w-xl">
              {SALON_DESCRIPTION}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors shadow-sm"
              >
                View Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-stone-200 hover:border-amber-300 text-stone-700 font-semibold rounded-full transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* biome-ignore lint/correctness/useUniqueElementIds: static section anchor for hash navigation */}
      <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Expert care for every look
            </h2>
            <p className="mt-4 text-stone-500 max-w-xl mx-auto">
              From a quick trim to a complete transformation, our skilled stylists
              deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-stone-200 rounded-2xl p-6 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                  {service.icon}
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-stone-900">
                    {service.title}
                  </h3>
                  <span className="text-amber-600 font-bold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-stone-500"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              What our clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={`star-${testimonial.name}-${i}`}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-stone-600 leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-semibold text-stone-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      {/* biome-ignore lint/correctness/useUniqueElementIds: static section anchor for hash navigation */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-6">
            Ready for your next look?
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto mb-10">
            Book your appointment today and experience the difference premium care
            makes. Walk-ins welcome, but appointments are recommended.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="px-10 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors shadow-sm"
            >
              Book an Appointment
            </a>
            <p className="text-stone-400 text-sm">
              Or call us at (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-stone-800">{SALON_NAME}</span>
          </div>
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} {SALON_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
