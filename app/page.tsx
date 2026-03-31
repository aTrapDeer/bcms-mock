import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services", emphasized: true },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  {
    value: "250+",
    label: "Projects Delivered",
    copy:
      "Excellence in luxury residential and high-stakes commercial infrastructure.",
  },
  {
    value: "$2B+",
    label: "Capital Managed",
    copy:
      "Fiscal responsibility paired with uncompromising material quality.",
  },
  {
    value: "30yrs",
    label: "Industry Leadership",
    copy:
      "Three decades of architectural precision and project integrity.",
  },
];

const projects = [
  {
    type: "Commercial Architecture",
    title: "The Meridian Plaza",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkNkj_1qVWb4_onj5xMVtTJeK3FfDZThxJS6zCnE1X152OyzyadcXK6lltt_GSk2RpnKmqPWljD4k9slz4KONhpPw5UPHpReTvXcT4kXYl8iBA6EojpWcDHtwUK6dzR_uwpNUGi0L2cVMVt7gC_-nf8m8bl50RWmpVyQQBhlR2bKNPMddgeheEu-v6n12kprP92mBD6zERtkDXaMUpPtGE47TmEXadVYVTpjIvUveCE5sIyWszyUV4zd2COORtGLcaCPrEq-zmm3DI",
    alt: "Low angle view of a glass and steel skyscraper reflecting the sky.",
  },
  {
    type: "Luxury Residential",
    title: "Observatory House",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYeiE0lJiJsiPODskP9u2geu2tYY8nC5O6epQvzMgAykC8BvUr-ecXvauim5M3Zs0SjWeEnQdHFTfUvhCMM25Ourxrb7bmmD6lqRQn6hB20UD9t5-D-7SRuA0s1oTror0B188Yh1simbHhOowaBXHIaVEW8uKAEyceQvwFvoNLYWncZQ1dI2t4YLxANVcZILPBVG-8dwwQTcXDmA1DVgw7SkEClm0nk9-JG2Ul1TGvWbCvUD8Eu9Bur_avOoXSfi5dvM3_Af7_nfrB",
    alt: "Minimalist luxury villa with concrete walls and large glass panels.",
  },
];

const services = [
  {
    number: "01",
    title: "Project Management",
    copy:
      "Comprehensive oversight from pre-construction through project closeout. We manage complex schedules and budgets with surgical precision.",
  },
  {
    number: "02",
    title: "Structural Integrity",
    copy:
      "Engineering-focused management that ensures the architectural intent is matched by superior structural performance and longevity.",
  },
  {
    number: "03",
    title: "Resource Logistics",
    copy:
      "Strategic procurement and deployment of premium materials and elite workforce to maintain the highest standards of craftsmanship.",
  },
  {
    number: "04",
    title: "Financial Control",
    copy:
      "Rigorous cost estimation and ongoing audit processes to protect investment capital while delivering uncompromised quality.",
  },
];

const footerLinks = ["Privacy Policy", "Terms of Service", "LinkedIn", "Instagram"];

export default function Home() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-0 bg-white/80 shadow-[0_40px_60px_rgba(27,28,28,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-5 md:px-8 md:py-6">
          <a
            href="#top"
            className="text-2xl font-black tracking-tighter text-primary uppercase"
          >
            BCMS
          </a>
          <div className="hidden gap-12 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.emphasized
                    ? "text-sm font-bold tracking-tight text-primary uppercase transition-colors duration-300"
                    : "text-sm font-medium tracking-tight text-secondary uppercase transition-colors duration-300 hover:text-primary"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary px-4 py-3 text-xs font-bold tracking-[0.2em] text-on-primary uppercase transition-opacity hover:opacity-90 md:px-6 md:text-sm"
          >
            Get a Quote
          </a>
        </div>
      </nav>

      <main id="top" className="bg-surface text-on-surface">
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNWlmQ3kQTRdjUBq-1oJm5NyGsqNqsGMoR8VSAQYmbJvVk47nrK9EqYoHUe264bNYcPbq9Sf3NbmQ_iatVbCFX-2SOeIOghkzNtonMPWrszTdjLUfCxqr4a6CDfQgUpJelQ1ONyCFlgZ8bipzNMsvBvZidHa3KRwAwpP6jqUMWQIDXjhfgBMDz84kgBD9YBpWTOnx-Crf_4vQrVB0BXq3qwyTPXtSzSoKCaPV-PlFcY7LehbUpmxvmSueijbSnBQxf7Btu9ZG3v4vh"
            alt="Modern architectural construction site with steel beams and crane against a dramatic twilight sky."
            fill
            preload
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 w-full px-6 pt-24 md:px-24">
            <div className="max-w-5xl">
              <span className="mb-8 inline-block bg-primary px-4 py-1 text-xs font-bold tracking-[0.2em] text-on-primary uppercase">
                Established 1994
              </span>
              <h1 className="text-5xl font-black leading-[0.9] tracking-tighter text-white uppercase sm:text-6xl md:text-8xl xl:text-9xl">
                Precision in
                <br />
                Construction
                <br />
                Management
              </h1>
              <div className="mt-12 flex flex-col items-start gap-6 md:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-14 items-center bg-white px-8 text-sm font-bold tracking-[0.2em] text-black uppercase transition-colors hover:bg-neutral-100 md:px-10"
                >
                  Start Your Project
                </a>
                <a
                  href="#projects"
                  className="group flex items-center gap-4 py-4 text-white/70 transition-colors hover:text-white"
                >
                  <span className="border-b border-white/30 text-sm font-bold tracking-[0.2em] uppercase transition-colors group-hover:border-white">
                    View Our Portfolio
                  </span>
                  <span aria-hidden="true" className="text-xl">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 right-12 z-10 hidden text-right text-white/40 lg:block">
            <p className="select-none text-8xl leading-none font-black opacity-20">
              01
            </p>
            <p className="text-xs font-medium tracking-[0.3em] uppercase">
              Architectural Excellence
            </p>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-20 md:px-24 md:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h2 className="mb-4 text-5xl font-black tracking-tighter">
                  {stat.value}
                </h2>
                <p className="text-sm font-medium tracking-[0.2em] text-secondary uppercase">
                  {stat.label}
                </p>
                <p className="mt-4 max-w-xs leading-relaxed text-secondary">
                  {stat.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="flex scroll-mt-28 flex-col">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-[70vh] min-h-[640px] w-full items-end overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="relative z-10 flex w-full items-end justify-between gap-8 p-8 md:p-16 xl:p-24">
                <div>
                  <span className="mb-4 block text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
                    {project.type}
                  </span>
                  <h2 className="text-4xl font-bold tracking-tighter text-white uppercase md:text-6xl xl:text-7xl">
                    {project.title}
                  </h2>
                </div>
                <div className="hidden md:block">
                  <a
                    href="#contact"
                    className="inline-flex border border-white/30 px-8 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase transition-all hover:bg-white hover:text-black"
                  >
                    Explore Case Study
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          id="services"
          className="scroll-mt-28 bg-surface-container-lowest px-6 py-24 md:px-24 md:py-32"
        >
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-20 grid grid-cols-1 gap-8 md:mb-24 lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <div className="min-w-0 lg:col-span-7 xl:col-span-8">
                <span className="mb-4 block text-xs font-bold tracking-[0.3em] text-secondary uppercase">
                  Our Expertise
                </span>
                <h2 className="max-w-full text-5xl font-black leading-[0.9] tracking-tighter uppercase md:text-6xl lg:text-7xl">
                  Architectural
                  <br />
                  Execution
                </h2>
              </div>
              <div className="min-w-0 lg:col-span-5 lg:pt-10 xl:col-span-4 xl:pt-12">
                <p className="w-full max-w-prose text-lg leading-relaxed text-secondary lg:max-w-md lg:text-xl">
                  We transform visionary designs into structural reality through
                  rigorous management and technical mastery.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-24 gap-y-8 border-t border-black/5 pt-12 md:grid-cols-2 md:pt-16">
              {services.map((service) => (
                <div key={service.number} className="py-6 md:py-8">
                  <h3 className="mb-4 flex items-center gap-4 text-xl font-bold tracking-[0.15em] uppercase">
                    <span className="font-black text-black/20">{service.number}</span>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-secondary">{service.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-[#1A1A1A] px-6 py-24 text-white md:px-24 md:py-32"
        >
          <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter uppercase md:text-7xl xl:text-8xl">
                Built for the
                <br />
                Extraordinary
              </h2>
              <p className="max-w-lg text-lg leading-relaxed text-neutral-400 md:text-xl">
                Ready to initiate your next landmark project? Our consultants are
                prepared to provide architectural precision from day zero.
              </p>
            </div>
            <div id="contact" className="flex w-full flex-col items-start gap-6 md:w-auto md:items-center">
              <a
                href="mailto:contact@bcms.com"
                className="inline-flex w-full items-center justify-center bg-white px-10 py-5 text-sm font-bold tracking-[0.2em] text-black uppercase transition-colors hover:bg-neutral-200 md:w-auto md:px-12 md:py-6 md:text-base"
              >
                Request a Proposal
              </a>
              <a
                href="mailto:contact@bcms.com"
                className="border-b border-white/20 text-sm font-bold tracking-[0.2em] uppercase transition-all hover:border-white"
              >
                Direct Inquiry
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-start justify-between gap-8 bg-neutral-100 px-6 py-12 md:flex-row md:items-center md:px-12 md:py-16">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold tracking-tighter text-primary uppercase">
            BCMS
          </div>
          <p className="text-xs font-medium tracking-[0.2em] text-secondary uppercase">
            © 2024 Braun Construction Management Services. Architectural
            Precision.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-12">
          {footerLinks.map((label) => (
            <a
              key={label}
              href="#"
              className="text-xs font-medium tracking-[0.2em] text-secondary uppercase transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
