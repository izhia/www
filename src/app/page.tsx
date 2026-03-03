"use client";

import { Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Custom TikTok Icon
function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

// Custom Spotify Icon
function SpotifyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

// Social links data
const socialLinksData = [
  { icon: "instagram", href: "https://instagram.com/dancehalldutchie", label: "Instagram" },
  { icon: "spotify", href: "https://open.spotify.com/artist/39LW3IyhjUGG8HaGnJGewP", label: "Spotify" },
  { icon: "youtube", href: "https://www.youtube.com/@i_izhia", label: "YouTube" },
  { icon: "tiktok", href: "https://tiktok.com/@i.izhia", label: "TikTok" },
  { icon: "facebook", href: "https://facebook.com/iyobel.izhia", label: "Facebook" },
];

// Icon component
function SocialIcon({ type, size = 24 }: { type: string; size?: number }) {
  switch (type) {
    case "instagram":
      return <Instagram size={size} />;
    case "spotify":
      return <SpotifyIcon />;
    case "youtube":
      return <Youtube size={size} />;
    case "tiktok":
      return <TikTokIcon />;
    case "facebook":
      return <Facebook size={size} />;
    default:
      return null;
  }
}

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "MUZIEK", href: "#muziek" },
  { label: "VIDEO", href: "#video" },
  { label: "OVER", href: "#over" },
  { label: "CONTACT", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e31221]" suppressHydrationWarning>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/img/hero.jpg"
            alt="I.IZHIA live at Nobel Awards Finals 2021"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#e31221]/80" />

        {/* Logo */}
        <div className="relative z-10 flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <Image
              src="/img/logo.png"
              alt="I.IZHIA Logo"
              width={400}
              height={160}
              className="mx-auto w-[280px] md:w-[400px] h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 bg-[#1a1a1a]/95 backdrop-blur-sm py-4 border-t-2 border-[#e31221]">
          <ul className="flex justify-center items-center gap-6 md:gap-12 flex-wrap px-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white text-sm md:text-base font-medium tracking-wider hover:text-[#e31221] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Bar */}
        <div className="relative z-10 bg-[#2a2a2a] py-3 border-b border-[#e31221]/30">
          <div className="flex justify-center items-center gap-6">
            {socialLinksData.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#e31221] transition-colors duration-300"
                aria-label={social.label}
              >
                <SocialIcon type={social.icon} size={28} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="muziek" className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-4xl md:text-5xl text-center text-white mb-12">
            <span className="text-[#e31221]">M</span>UZIEK
          </h2>

          {/* Spotify Playlist Embed */}
          <div className="w-full rounded-lg overflow-hidden shadow-2xl border border-[#e31221]/20">
            <iframe
              src="https://open.spotify.com/embed/playlist/1ewjatjOOSrM28AkPOHZkh?utm_source=generator&theme=0"
              width="100%"
              height="452"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
              title="I.IZHIA Spotify Playlist"
            />
          </div>

          {/* More Music Button */}
          <div className="mt-8 text-center">
            <Link
              href="https://open.spotify.com/artist/39LW3IyhjUGG8HaGnJGewP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e31221] hover:bg-[#c20e1a] text-white px-8 py-3 rounded-sm text-sm tracking-widest font-medium transition-all duration-300"
            >
              MEER MUZIEK
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-4xl md:text-5xl text-center text-white mb-12">
            <span className="text-[#e31221]">V</span>IDEO
          </h2>

          {/* YouTube Video Embed */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-[#e31221]/20">
            <iframe
              src="https://www.youtube.com/embed/qOoaVPyar8A"
              title="I.IZHIA Music Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* More Videos Button */}
          <div className="mt-8 text-center">
            <Link
              href="https://www.youtube.com/@i_izhia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e31221] hover:bg-[#c20e1a] text-white px-8 py-3 rounded-sm text-sm tracking-widest font-medium transition-all duration-300"
            >
              MEER VIDEOS
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="over" className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl md:text-5xl text-center text-white mb-12">
            <span className="text-[#e31221]">O</span>VER
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6 text-white/90 font-normal leading-relaxed text-sm md:text-base">
              <p>
                I.IZHIA is een Nederlandstalige artiest die zijn eigen geluid bouwt vanuit reggae en dancehall, met duidelijke invloeden uit rap en hiphop. Al op jonge leeftijd werd hij geraakt door reggae/dancehall, een muzikale basis die hij later verder ontwikkelde tot een stijl waarin ritme, melodie en flow samenkomen. Vanuit die oorsprong groeide hij uit tot een performer en maker die bewust kiest voor een sound waarin zijn roots, persoonlijkheid en artistieke visie samenkomen.
              </p>
              <p>
                Wat I.IZHIA onderscheidt, is de manier waarop hij de energie van dancehall combineert met de directheid en cadans van rap en hiphop. Zijn muziek is dansbaar, persoonlijk en uitgesproken, maar blijft altijd geworteld in de cultuur en beleving van reggae/dancehall. Die artistieke richting werd verder verdiept door zijn studie van de muziek en cultuur in Jamaica, en krijgt vorm in een eigen Nederlandstalige benadering die zowel authentiek als eigentijds klinkt.
              </p>
              <p>
                Op het podium vertaalt I.IZHIA die sound naar energieke liveshows waarin performance, beleving en ritme centraal staan. Daarbij werkt hij nauw samen met HurraKane, zijn vaste bandlid, die met zijn beatbox een essentieel onderdeel vormt van de liveshow en een unieke extra dimensie toevoegt aan het geheel. Samen brengen zij een act waarin reggae/dancehall en de invloeden van rap en hiphop samenkomen in een krachtige, onderscheidende live-ervaring.
              </p>
              <p>
                Foto door Ron van Rutten.
              </p>
            </div>

            {/* About Image */}
            <div
              className="relative w-full min-h-[320px] md:min-h-0 md:h-full overflow-hidden border border-white/10 shadow-2xl"
              style={{
                clipPath:
                  "polygon(18px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 18px), calc(100% - 18px) 100%, 18px 100%, 0 calc(100% - 18px), 0 18px)",
              }}
            >
              <Image
                src="/img/about.jpg"
                alt="I.IZHIA persfoto door Ron van Rutten"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-4xl md:text-5xl text-white mb-12">
            <span className="text-[#e31221]">C</span>ONTACT
          </h2>

          {/* Social Icons Large */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-12 flex-wrap">
            {socialLinksData.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#e31221]/10 hover:bg-[#e31221] flex items-center justify-center text-white transition-all duration-300 border border-[#e31221]/30 hover:border-[#e31221]"
                aria-label={social.label}
              >
                <SocialIcon type={social.icon} size={28} />
              </Link>
            ))}
          </div>

          {/* Email */}
          <div className="text-white">
            <p className="text-lg tracking-wide mb-2">Of stuur een email:</p>
            <Link
              href="mailto:IZHIA.MUSIC@GMAIL.COM"
              className="text-xl md:text-2xl font-medium tracking-wider text-[#e31221] hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              IZHIA.MUSIC@GMAIL.COM
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-8 px-4 border-t border-[#e31221]/20">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/img/logo.png"
            alt="I.IZHIA"
            width={150}
            height={60}
            className="mx-auto mb-6"
          />
          <div className="flex justify-center items-center gap-4 mb-6">
            {socialLinksData.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#e31221] transition-colors duration-300"
                aria-label={social.label}
              >
                <SocialIcon type={social.icon} />
              </Link>
            ))}
          </div>
          <p className="text-white/40 text-sm tracking-wide">
            &copy; 2026. I.IZHIA. IZHIA ARTS. JUICED UNICORN. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </main>
  );
}
