import { useState } from 'react';
import { Menu, X, Instagram, Mail, Phone, MapPin, PawPrint } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'hr' | 'en'>('hr');

  const translations = {
    hr: {
      brandTagline: 'Grooming Zagreb',
      nav: {
        home: 'Početna',
        about: 'O nama',
        services: 'Usluge',
        packages: 'Ponude',
        gallery: 'Galerija',
        faq: 'Česta pitanja',
        contact: 'Kontakt',
        eng: 'ENG',
        cro: 'CRO'
      },
      hero: {
        title: "Petra's Pet Salon u Zagrebu",
        welcome: 'Petra’s pet salon za pse',
        subtitle:
          'Usluge: kupanja, šišanja, izlinjavanja, raščešljavanja, higijena noktića i ušiju i dr.',
        cta: 'Rezerviraj'
      },
      services: {
        title: 'Usluge',
        intro: 'Radno vrijeme PO DOGOVORU',
        items: [
          { title: 'Kupanje', desc: 'Nježno kupanje i šamponiranje prilagođeno koži i krznu' },
          { title: 'Šišanje', desc: 'Frizure prema pasmini i vašim željama' },
          { title: 'Izlinjavanje', desc: 'Smanjenje linjanja i njega poddlake' },
          { title: 'Raščešljavanje', desc: 'Pažljivo otpetljavanje čvorića i filca' },
          { title: 'Higijena noktića', desc: 'Rezanje i uređenje noktiju' },
          { title: 'Higijena ušiju', desc: 'Čišćenje i njega ušiju' }
        ]
      },
      packages: {
        title: 'Paketi i Cijene',
        subtitle: 'Nudimo fleksibilne pakete prilagođene potrebama vašeg psa',
        cards: [
          { name: 'Osnovni paket', services: ['Kupanje', 'Rezanje noktiju'] },
          { name: 'Standardni paket', services: ['Kupanje', 'Frizura', 'Nokti'] },
          { name: 'Lux Spa', services: ['Potpuno uređivanje', 'Uklanjanje poddlake', 'Balzam za šape i nos'] },
          { name: 'Uvod za štence', services: ['Nježno uređivanje', 'Za pse mlađe od 6 mjeseci'] }
        ],
        note: 'Cijene mogu varirati ovisno o pasmini i stanju krzna'
      },
      gallery: {
        title: 'Galerija',
        subtitle: 'Sretni klijenti i prekrasne transformacije',
        share: 'Podijelite transformaciju svog ljubimca s nama na Instagramu!'
      },
      about: {
        title: 'O nama',
        subtitle: 'Petra’s Pet Salon – Zagreb',
        p1: 'Profesionalni grooming salon za pse s fokusom na sigurnost, mir i ljubav prema ljubimcima.',
        p2: 'Usluge prilagođavamo potrebama vašeg psa, od kupanja do potpunog uređivanja.',
        p3: 'Nalazimo se u Zagrebu, Puškarićeva 32/1. Dobrodošli svi psi, velike i male!'
      },
      faq: {
        title: 'Česta pitanja',
        items: [
          { q: 'Koliko traje uređivanje?', a: 'Ovisi o veličini, pasmini i stanju krzna – obično 1 do 2 sata.' },
          { q: 'Trebam li rezervirati termin?', a: 'Da, potrebno je unaprijed rezervirati kako biste osigurali termin.' },
          { q: 'Koje proizvode koristite?', a: 'Koristimo visokokvalitetne, prirodne i hipoalergene proizvode sigurnе za sve pse.' },
          { q: 'Groomate li agresivne pse?', a: 'Svaki slučaj procjenjujemo pojedinačno. Molimo vas da nas unaprijed obavijestite o ponašanju.' },
          { q: 'S kojim pasminama radite?', a: 'Radimo sa svim pasminama i veličinama, od najmanjih do najvećih.' }
        ]
      },
      newsletter: {
        title: 'Ostvarite 10% popusta na prvi dolazak!',
        subtitle: 'Pretplatite se na novosti i posebne ponude',
        namePlaceholder: 'Vaše ime',
        emailPlaceholder: 'Vaš email',
        cta: 'Pretplati se'
      },
      contact: {
        title: 'Kontaktirajte nas',
        subtitle: 'Radno vrijeme po dogovoru · Pon-Čet 8:00-20:00 · Pet 8:00-17:00 · Sub/Ned ZATVORENO',
        phone: 'Telefon',
        email: 'E-pošta',
        address: 'Adresa',
        call: 'Poziv',
        sendEmail: 'Pošalji email',
        findUs: 'Pronađite nas',
        instaCta: 'Pratite nas na Instagramu'
      },
      footer: {
        tagline: 'Profesionalno uređivanje s ljubavlju u Zagrebu',
        rights: '© 2025 Petra’s Pet Salon. Sva prava pridržana.'
      }
    },
    en: {
      brandTagline: 'Grooming Zagreb',
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        packages: 'Packages',
        gallery: 'Gallery',
        faq: 'FAQ',
        contact: 'Contact',
        eng: 'ENG',
        cro: 'CRO'
      },
      hero: {
        title: "Petra's Pet Salon in Zagreb",
        welcome: "Petra’s pet salon for dogs",
        subtitle:
          'Services: bathing, haircuts, de-shedding, de-matting, nail and ear hygiene, and more.',
        cta: 'Book Now'
      },
      services: {
        title: 'Services',
        intro: 'Hours by appointment',
        items: [
          { title: 'Bathing', desc: 'Gentle wash and coat-safe shampooing' },
          { title: 'Haircuts', desc: 'Breed-standard and custom cuts' },
          { title: 'De-shedding', desc: 'Undercoat care to reduce shedding' },
          { title: 'De-matting', desc: 'Careful removal of tangles and mats' },
          { title: 'Nail hygiene', desc: 'Nail trimming and care' },
          { title: 'Ear hygiene', desc: 'Cleaning and ear care' }
        ]
      },
      packages: {
        title: 'Packages & Pricing',
        subtitle: "We offer flexible packages to fit your dog's needs",
        cards: [
          { name: 'Basic Package', services: ['Bath', 'Nail Trim'] },
          { name: 'Standard Package', services: ['Bath', 'Haircut', 'Nails'] },
          { name: 'Luxury Spa', services: ['Full grooming', 'De-shedding', 'Paw & Nose balm'] },
          { name: 'Puppy Intro', services: ['Gentle grooming', 'For dogs under 6 months'] }
        ],
        note: 'Pricing may vary based on breed and coat condition'
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'Happy clients and beautiful transformations',
        share: "Share your pet's transformation with us on Instagram!"
      },
      about: {
        title: 'About Us',
        subtitle: 'Petra’s Pet Salon – Zagreb',
        p1: 'Professional dog grooming focused on safety, calm care, and love.',
        p2: "From a quick wash to full grooming, services are tailored to your dog's needs.",
        p3: 'Find us in Zagreb at Puškarićeva 32/1. All dogs welcome!'
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { q: 'How long does grooming take?', a: 'It depends on size, breed, and coat condition – usually 1 to 2 hours.' },
          { q: 'Do I need to make an appointment?', a: 'Yes, booking in advance is required to secure your spot.' },
          { q: 'What products do you use?', a: 'We use only high-quality, natural, and hypoallergenic products safe for all dogs.' },
          { q: 'Do you groom aggressive dogs?', a: 'We assess each case individually. Please let us know in advance if your dog has any behavioral challenges.' },
          { q: 'What breeds do you work with?', a: 'We work with all breeds and sizes, from small Chihuahuas to large breeds like German Shepherds.' }
        ]
      },
      newsletter: {
        title: 'Get 10% off your first visit!',
        subtitle: 'Subscribe to our updates and special offers',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'Your email',
        cta: 'Subscribe'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Hours by appointment · Mon–Thu 8:00–20:00 · Fri 8:00–17:00 · Sat/Sun CLOSED',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        call: 'Call',
        sendEmail: 'Send Email',
        findUs: 'Find Us',
        instaCta: 'Follow us on Instagram'
      },
      footer: {
        tagline: 'Professional grooming with love in Zagreb',
        rights: '© 2025 Petra’s Pet Salon. All rights reserved.'
      }
    }
  } as const;

  const t = translations[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <nav className="fixed top-0 left-0 right-0 bg-green-700 text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
              <div className="flex items-center space-x-2 sm:space-x-3">
              <img src="result_0.png" alt="Petra's Pet Salon logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">PETRA'S PET SALON</h1>
                  <p className="text-xs text-green-100 hidden sm:block">{t.brandTagline}</p>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-green-200 transition">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-green-200 transition">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-green-200 transition">{t.nav.services}</button>
              <button onClick={() => scrollToSection('packages')} className="hover:text-green-200 transition">{t.nav.packages}</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-green-200 transition">{t.nav.gallery}</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-green-200 transition">{t.nav.faq}</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-green-200 transition">{t.nav.contact}</button>
              <div className="flex items-center space-x-2 ml-2">
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 rounded text-sm font-semibold ${lang === 'en' ? 'bg-white text-green-800' : 'bg-green-600 text-white'} hover:bg-white hover:text-green-800 transition`}
                >
                  ENG
                </button>
                <button
                  onClick={() => setLang('hr')}
                  className={`px-2 py-1 rounded text-sm font-semibold ${lang === 'hr' ? 'bg-white text-green-800' : 'bg-green-600 text-white'} hover:bg-white hover:text-green-800 transition`}
                >
                  CRO
                </button>
              </div>
              <a href="https://www.instagram.com/petras.pet/" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-green-800 border-t border-green-600">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-green-200">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-green-200">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-green-200">{t.nav.services}</button>
              <button onClick={() => scrollToSection('packages')} className="block w-full text-left py-2 hover:text-green-200">{t.nav.packages}</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 hover:text-green-200">{t.nav.gallery}</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-green-200">{t.nav.faq}</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-green-200">{t.nav.contact}</button>
              <div className="flex items-center space-x-2 py-2">
                <button onClick={() => setLang('en')} className={`px-3 py-1 rounded text-sm font-semibold ${lang === 'en' ? 'bg-white text-green-800' : 'bg-green-600 text-white'}`}>ENG</button>
                <button onClick={() => setLang('hr')} className={`px-3 py-1 rounded text-sm font-semibold ${lang === 'hr' ? 'bg-white text-green-800' : 'bg-green-600 text-white'}`}>CRO</button>
              </div>
              <a href="https://www.instagram.com/petras.pet/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 py-2 hover:text-green-200">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16 sm:pt-20">
        <section id="home" className="relative bg-green-700 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32 relative z-10">
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-cream-100">{t.hero.title}</h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-green-100">{t.hero.welcome}</p>
                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 text-green-50">{t.hero.subtitle}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-cream-100 text-green-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-xl inline-flex items-center space-x-2 sm:space-x-3"
                >
                  <img src="paws.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t.hero.cta}</span>
                </button>
              </div>

              <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                <img
                  src="towl-removebg-preview.png"
                  alt="Doberman with a stick"
                  className="h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] object-contain select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-cream-100" style={{ clipPath: 'ellipse(80% 100% at 50% 100%)' }}></div>
        </section>

        <section id="services" className="py-12 sm:py-16 md:py-20 bg-cream-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-4">{t.services.title}</h2>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {t.services.items.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <PawPrint className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-coral-400 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-4">{t.packages.title}</h2>
              <p className="text-base sm:text-lg text-gray-700 px-4">{t.packages.subtitle}</p>
            </div>

            <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {t.packages.cards.map((card, i) => ({
                name: card.name,
                services: card.services,
                // Keep image assignments stable by index
                icon: [
                  'image:grooming.png',
                  'image:dog (1).png',
                  'image:pet.png',
                  'image:dog (2).png'
                ][i]
              })).map((pkg, idx) => (
                <div key={idx} className="bg-cream-50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-green-200">
                  <div className="mb-3 sm:mb-4 text-center">
                    {typeof pkg.icon === 'string' && pkg.icon.startsWith('image:') ? (
                      <img
                        src={`${encodeURI(pkg.icon.replace('image:', '').replace(/^\/+/, ''))}`}
                        alt={`${pkg.name} icon`}
                        className="mx-auto h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain drop-shadow-lg"
                      />
                    ) : (
                      <div className="text-3xl sm:text-4xl">{pkg.icon as string}</div>
                    )}
                  </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-3 sm:mb-4 text-center">{pkg.name}</h3>
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {pkg.services.map((service, i) => (
                      <li key={i} className="flex items-center text-sm sm:text-base text-gray-700">
                        <PawPrint className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 text-gray-600 italic">{t.packages.note}</p>
          </div>
        </section>

        <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-cream-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-4">{t.gallery.title}</h2>
              <p className="text-base sm:text-lg text-gray-700 px-4">{t.gallery.subtitle}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                'dist/slikap1.png',
                'dist/slikap2.png',
                'dist/slikap3.png',
                'dist/slikap4.png',
                'dist/slikap5.png',
                'dist/slikap6.png'
              ].map((img, idx) => (
                <div key={idx} className="aspect-square bg-gradient-to-br from-green-200 to-cream-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                  {img ? (
                    <img
                      src={`${encodeURI(img)}`}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-green-600">
                      <PawPrint className="w-24 h-24 opacity-30" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center mt-8 text-gray-600">{t.gallery.share}</p>
          </div>
        </section>

        <section id="about" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-coral-400 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 sm:mb-6">{t.about.title}</h2>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-coral-600 mb-3 sm:mb-4">{t.about.subtitle}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">{t.about.p1}</p>
                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">{t.about.p2}</p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{t.about.p3}</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Location</h4>
                      <p className="text-sm sm:text-base text-green-50">Puškarićeva 32/1</p>
                      <p className="text-sm sm:text-base text-green-50">10000 Zagreb</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Phone</h4>
                      <p className="text-sm sm:text-base text-green-50">091 595 6357</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Email</h4>
                      <p className="text-sm sm:text-base text-green-50">info@petraspet.hr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 sm:py-16 md:py-20 bg-cream-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 sm:mb-4">{t.faq.title}</h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {t.faq.items.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3">{faq.q}</h3>
                  <p className="text-sm sm:text-base text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="py-12 sm:py-16 md:py-20 bg-coral-500 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full opacity-10 transform translate-x-1/3 translate-y-1/3"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="hidden md:flex justify-start mt-6 lg:mt-10 md:self-end relative">
                <span
                  className="speech-bubble"
                  data-lang={lang}
                >
                  {lang === 'hr' ? 'Još nisi?' : 'What are you waiting?'}
                </span>
                <img
                  src="cudise1.png"
                  alt="Happy dog with sunglasses"
                  className="h-auto object-contain drop-shadow-xl max-w-[180px] lg:max-w-[280px] ml-[-12px] lg:ml-[-24px]"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{t.newsletter.title}</h2>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8">{t.newsletter.subtitle}</p>
                <form className="flex flex-col gap-3 max-w-xs mx-auto md:mx-0">
              <input
                type="text"
                placeholder={t.newsletter.namePlaceholder}
                className="h-9 px-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <input
                type="email"
                placeholder={t.newsletter.emailPlaceholder}
                className="h-9 px-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-4 h-9 rounded-full font-semibold hover:bg-green-800 transition-all transform hover:scale-105 shadow-lg text-sm"
              >
                {t.newsletter.cta}
              </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-green-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{t.contact.title}</h2>
              <p className="text-lg sm:text-xl text-green-100 px-4">{t.contact.subtitle}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
              <div className="text-center">
                <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t.contact.phone}</h3>
                <p className="text-green-100">091 595 6357</p>
                  <a
                    href="tel:0915956357"
                    className="inline-flex items-center space-x-2 bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-cream-100 transition-all transform hover:scale-105 shadow-md mt-3"
                  >
                  <span>{t.contact.call}</span>
                  </a>
              </div>
              <div className="text-center">
                <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t.contact.email}</h3>
                <p className="text-green-100">info@petraspet.hr</p>
                  <a
                    href="mailto:info@petraspet.hr?subject=Inquiry%20from%20Website"
                    className="inline-flex items-center space-x-2 bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-cream-100 transition-all transform hover:scale-105 shadow-md mt-3"
                  >
                  <span>{t.contact.sendEmail}</span>
                  </a>
              </div>
              <div className="text-center">
                <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t.contact.address}</h3>
                <p className="text-green-100">Puškarićeva 32/1</p>
                <p className="text-green-100">10000 Zagreb</p>
                  <a
                    href="https://www.google.com/maps?q=Pu%C5%A1kari%C4%87eva+32%2F1%2C+Zagreb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-cream-100 transition-all transform hover:scale-105 shadow-md mt-3"
                  >
                  <span>{t.contact.findUs}</span>
                  </a>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.instagram.com/petras.pet/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-cream-100 transition-all transform hover:scale-105 shadow-xl"
              >
                <Instagram className="w-6 h-6" />
                <span>{t.contact.instaCta}</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-green-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <PawPrint className="w-6 h-6" />
              <span className="font-bold text-xl">Petra's Pet Salon</span>
            </div>
            <p className="text-green-200">{t.footer.tagline}</p>
            <p className="text-green-300 text-sm mt-4">{t.footer.rights}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
