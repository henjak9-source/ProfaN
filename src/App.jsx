import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Music,
  ShoppingBag,
  CalendarDays,
  Images,
  BookOpen,
  Mail,
  Menu,
  X,
  Flame,
  Skull,
  Disc3,
  MapPin,
} from "lucide-react";

export default function ProfanWebsite() {
  const [open, setOpen] = useState(false);

  // BYTT UT HER: legg inn egne bilder/logoer når du har filene klare.
  const bandName = "ProfaN";
  const contactEmail = "henjak9@gmail.com";
  const heroImage =
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=80";
  const logoImage = ""; // Eksempel: "/images/profan-logo.png"

  const nav = [
    "Historie",
    "Utgivelser",
    "Merch",
    "Bilder",
    "Konserter",
    "Kontakt",
  ];

  const releases = [
    {
      title: "Mørke",
      year: "2026",
      type: "Album",
      desc:
        "Et iskaldt og kompromissløst black metal-album med mørke riff, rå vokal og en atmosfære hentet fra tåkelagte norske skoger.",
    },
    {
      title: "Kirker i Brann",
      year: "2026",
      type: "Single",
      desc:
        "En brutal og stemningsfull låt med flammer, aske, kulde og klassisk norsk undergrunnspreg.",
    },
    {
      title: "Blodets Bånd",
      year: "2026",
      type: "Single",
      desc:
        "Mørk, melodisk og intens. En låt bygget på dyster energi, tunge temaer og ekte black metal-stemning.",
    },
  ];

  const merch = [
    {
      name: "ProfaN Hoodie",
      price: "399,-",
      text: "Sort hoodie med hvit ProfaN-logo. Kan leveres med trykk på bryst, rygg eller arm.",
    },
    {
      name: "Logo Button",
      price: "5,-",
      text: "1 toms button med ProfaN-logo i rå svartmetal-stil.",
    },
    {
      name: "Klistremerke",
      price: "10,-",
      text: "Kraftig sticker med tydelig kontrast, perfekt til kasse, gitarcase eller merchbord.",
    },
    {
      name: "CD: Mørke",
      price: "149,-",
      text: "Fysisk CD med mørkt coverdesign, trykk på disc og ekte undergrunnsfølelse.",
    },
  ];

  const concerts = [
    {
      date: "Dato kommer",
      place: "Fredrikstad",
      venue: "TBA",
      note: "Første ProfaN-kveld annonseres snart.",
    },
    {
      date: "Dato kommer",
      place: "Oslo",
      venue: "TBA",
      note: "Undergrunnskonsert i ekte norsk black metal-stil.",
    },
  ];

  const gallery = [
    "Bandfoto",
    "Logoer",
    "Coverart",
    "Studio",
    "Live",
    "Merch",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-serif selection:bg-red-900 selection:text-white">
      <Atmosphere />

      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a
            href="#top"
            className="text-xl font-black uppercase tracking-[0.35em] md:text-2xl"
          >
            {bandName}
          </a>

          <button
            className="rounded-xl border border-zinc-800 p-2 text-zinc-300 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Åpne meny"
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className="hidden gap-6 text-sm uppercase tracking-widest text-zinc-300 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="transition hover:text-red-500"
              >
                {n}
              </a>
            ))}
          </nav>
        </div>

        {open && (
          <nav className="grid gap-3 px-4 pb-4 text-sm uppercase tracking-widest text-zinc-300 md:hidden">
            {nav.map((n) => (
              <a
                key={n}
                onClick={() => setOpen(false)}
                href={`#${n.toLowerCase()}`}
                className="rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-3 transition hover:text-red-500"
              >
                {n}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section
          className="flex min-h-[88vh] items-center border-b border-zinc-900 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.97)), url(${heroImage})`,
          }}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 lg:grid-cols-[1.1fr_.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.45em] text-red-500">
                True Norwegian Black Metal
              </p>
              <h1 className="text-6xl font-black uppercase leading-none tracking-tighter drop-shadow-2xl md:text-8xl lg:text-9xl">
                {bandName}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-300">
                Offisiell nettside for {bandName}. Her finner du bandets historie,
                utgivelser, merch, bilder, nyheter og kommende konsertdatoer.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
                Rå norsk svartmetal, kald atmosfære og mørk undergrunnsånd —
                skapt for dem som fortsatt kjenner kraften i ekte, kompromissløs musikk.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="#utgivelser">Hør musikken</ButtonLink>
                <ButtonLink href="#merch" dark>
                  Se merch
                </ButtonLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="rounded-[2rem] border border-zinc-800 bg-black/65 p-8 shadow-2xl"
            >
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-950">
                {logoImage ? (
                  <img
                    src={logoImage}
                    alt="ProfaN logo"
                    className="max-h-full max-w-full object-contain p-8"
                  />
                ) : (
                  <div className="px-8 text-center">
                    <Skull className="mx-auto mb-5 h-14 w-14 text-red-900" />
                    <div className="text-5xl font-black uppercase tracking-[0.25em] md:text-7xl">
                      {bandName}
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
                      Sett inn logoen her
                    </p>
                  </div>
                )}
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Denne boksen kan byttes med original ProfaN-logo, bandfoto eller albumcover.
              </p>
            </motion.div>
          </div>
        </section>

        <Section id="historie" icon={<BookOpen />} title="Bandets historie">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <Kicker>Opprinnelse</Kicker>
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-widest">
                Fra mørke riff til norsk undergrunn
              </h3>
              <p className="leading-relaxed text-zinc-300">
                {bandName} ble formet som et mørkt norsk svartmetal-prosjekt med
                røtter i rå energi, kalde gitarer og en kompromissløs
                undergrunnsidentitet. Bandets uttrykk henter inspirasjon fra
                tåkelagte skoger, nordisk mørke, brennende symbolikk og den harde
                90-tallsånden som gjorde norsk black metal beryktet.
              </p>
            </Card>
            <Card>
              <Kicker>Uttrykk</Kicker>
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-widest">
                Iskald lyd og mørk visuell stil
              </h3>
              <p className="leading-relaxed text-zinc-300">
                Musikken kombinerer primitive rytmer, mørk vokal, skjærende riff
                og atmosfæriske partier. Visuelt bruker {bandName} kraftige
                kontraster, svart/hvitt, logoarbeid, skog, tåke, aske og symboler
                som bygger videre på en ekte norsk svartmetal-estetikk.
              </p>
            </Card>
          </div>
        </Section>

        <Section id="utgivelser" icon={<Music />} title="Utgivelser">
          <div className="grid gap-6 md:grid-cols-3">
            {releases.map((r) => (
              <Card key={r.title}>
                <Disc3 className="mb-5 h-10 w-10 text-red-800" />
                <p className="text-sm uppercase tracking-widest text-red-500">
                  {r.type} • {r.year}
                </p>
                <h3 className="mb-4 mt-3 text-3xl font-black">{r.title}</h3>
                <p className="leading-relaxed text-zinc-400">{r.desc}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="merch" icon={<ShoppingBag />} title="Merch">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {merch.map((m) => (
              <Card key={m.name}>
                <div className="mb-5 flex h-40 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950">
                  <ShoppingBag className="h-12 w-12 text-zinc-700" />
                </div>
                <h3 className="text-xl font-bold uppercase">{m.name}</h3>
                <p className="mt-2 text-2xl font-black text-red-500">{m.price}</p>
                <p className="mt-3 text-zinc-400">{m.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="bilder" icon={<Images />} title="Bilder">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <div
                key={g}
                className="group flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/70 shadow-xl transition hover:border-red-950"
              >
                <div className="text-center">
                  <Images className="mx-auto h-12 w-12 text-zinc-700 transition group-hover:text-red-800" />
                  <p className="mt-4 uppercase tracking-widest text-zinc-400">{g}</p>
                  <p className="mt-2 text-xs text-zinc-600">Sett inn bilde</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="konserter" icon={<CalendarDays />} title="Konsertdatoer">
          <div className="grid gap-4">
            {concerts.map((c, index) => (
              <Card key={index}>
                <div className="grid items-center gap-4 md:grid-cols-[180px_1fr_1fr]">
                  <p className="font-bold uppercase tracking-widest text-red-500">
                    {c.date}
                  </p>
                  <div>
                    <h3 className="text-2xl font-black uppercase">{c.place}</h3>
                    <p className="flex items-center gap-2 text-zinc-500">
                      <MapPin className="h-4 w-4" /> {c.venue}
                    </p>
                  </div>
                  <p className="text-zinc-400">{c.note}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="kontakt" icon={<Mail />} title="Kontakt / Booking">
          <Card>
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <Kicker>Booking • Presse • Merch</Kicker>
                <h3 className="mb-4 text-3xl font-black uppercase">
                  Kontakt {bandName}
                </h3>
                <p className="leading-relaxed text-zinc-300">
                  For booking, presse, samarbeid, merch eller spørsmål om
                  utgivelser kan du ta kontakt direkte på e-post.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
                <p className="text-xs uppercase tracking-widest text-zinc-500">E-post</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-2 block text-xl text-zinc-100 transition hover:text-red-500"
                >
                  {contactEmail}
                </a>
                <p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">Band</p>
                <p className="mt-2 text-xl">{bandName}</p>
              </div>
            </div>
          </Card>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-zinc-900 py-10 text-center text-xs uppercase tracking-[0.3em] text-zinc-600">
        © 2026 {bandName} — True Norwegian Black Metal
      </footer>
    </div>
  );
}

function Atmosphere() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(120,120,120,0.18),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,1))]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] bg-[repeating-linear-gradient(0deg,#fff_0px,#fff_1px,transparent_1px,transparent_4px)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(127,29,29,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_20%)]" />
    </>
  );
}

function Section({ id, icon, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 flex items-center gap-4">
        <div className="rounded-2xl border border-red-900 bg-red-950/40 p-3 text-red-500">
          {icon}
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-[2rem] border border-zinc-800 bg-black/55 p-6 shadow-2xl backdrop-blur-sm transition hover:border-zinc-700">
      {children}
    </div>
  );
}

function ButtonLink({ href, children, dark = false }) {
  return (
    <a
      href={href}
      className={`rounded-2xl border px-6 py-3 text-sm uppercase tracking-widest shadow-xl transition ${
        dark
          ? "border-zinc-700 bg-zinc-900 hover:bg-zinc-800"
          : "border-red-800 bg-red-950 hover:bg-red-900"
      }`}
    >
      {children}
    </a>
  );
}

function Kicker({ children }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-red-500">
      <Flame className="h-4 w-4" /> {children}
    </p>
  );
}
