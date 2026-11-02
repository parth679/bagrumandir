import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { ArchitecturalParallax } from '../components/mandir/ArchitecturalParallax';
import { SITE_CONFIG } from '../config/siteConfig';
import { Compass, Layers, ShieldCheck, Heart, Camera } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useT } from '../i18n/useTranslation';

export const AboutPage: React.FC = () => {
  const { language } = useApp();
  const t = useT();

  const floorLevels = [
    {
      level: language === 'HI' ? 'भूतल' : language === 'GU' ? 'ભોંયતળિયું' : 'Ground Floor',
      title: language === 'HI' ? 'स्वागत कक्ष, सभा स्थल एवं प्रार्थना गलियारा' : language === 'GU' ? 'સ્વાગત કક્ષ, સભા મંડપ અને પ્રાર્થના માર્ગ' : 'Reception, Assembly Sabha & Prayer Corridors',
      desc: language === 'HI' ? 'मुख्य स्वागत कार्यालय, चेक-इन डेस्क, जूता स्टैंड रहित स्वच्छ परिसर और खुला आंगन।' : language === 'GU' ? 'મુખ્ય સ્વાગત કચેરી, ચેક-ઇન ડેસ્ક, સ્વચ્છ પરિસર અને ખુલ્લું આંગણું.' : 'Main reception desk, checked-in yatri assistance, courtyard walkways, and open access.'
    },
    {
      level: language === 'HI' ? 'प्रथम तल' : language === 'GU' ? 'પ્રથમ માળ' : 'First Floor',
      title: language === 'HI' ? 'यात्री निवास कक्ष एवं आंतरिक आंगन' : language === 'GU' ? 'યાત્રી નિવાસ ઓરડા અને આંતરિક આંગણું' : 'Yatri Nivas Pilgrim Rooms & Central Atrium',
      desc: language === 'HI' ? 'वातानुकूलित मानक कमरे, संलग्न गीज़र युक्त शौचालय और प्राकृतिक प्रकाश।' : language === 'GU' ? 'વાતાનુકૂલિત સ્ટાન્ડર્ડ ઓરડા, સંલગ્ન ગીઝર સહિત બાથરૂમ અને કુદરતી અજવાળું.' : 'Air-conditioned rooms with attached geyser washrooms and natural skylight atrium views.'
    },
    {
      level: language === 'HI' ? 'द्वितीय तल' : language === 'GU' ? 'દ્વિતીય માળ' : 'Second Floor',
      title: language === 'HI' ? 'विशाल परिवार कक्ष एवं समूह सदन' : language === 'GU' ? 'મોટા પારિવારિક ઓરડા અને સમૂહ સદન' : 'Larger Family Rooms & Pilgrim Group Halls',
      desc: language === 'HI' ? '५–६ बिस्तरों वाले विशाल परिवार कक्ष और तीर्थ संघों के लिए शांत वातावरण।' : language === 'GU' ? '૫–૬ પથારીવાળા વિશાળ પરિવાર ઓરડા અને યાત્રા સંઘો માટે શાંત વાતાવરણ.' : 'Spacious multi-bed rooms designed for pilgrim families and touring devotional sanghs.'
    },
    {
      level: language === 'HI' ? 'तृतीय तल' : language === 'GU' ? 'તૃતીય માળ' : 'Third Floor & Terrace',
      title: language === 'HI' ? 'छत (टेरेस) एवं ५ विशेष कक्ष' : language === 'GU' ? 'અગાસી (ટેરેસ) અને ૫ વિશેષ ઓરડા' : 'Open Terrace & 5 Upper Rooms',
      desc: language === 'HI' ? 'चार स्तरों की इस इमारत के तीसरे तल पर खुली छत (टेरेस) और ५ सुसज्जित कमरे स्थित हैं।' : language === 'GU' ? 'ચાર સ્તરની આ ઇમારતના ત્રીજા માળે ખુલ્લી અગાસી અને ૫ સુસજ્જ ઓરડા આવેલા છે.' : 'The third level features an expansive open terrace with panoramic campus views and five well-maintained guest rooms.'
    }
  ];

  return (
    <PageTransition className="relative z-10 pt-24 pb-16 space-y-16">
      {/* Page Title Header */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706] mb-3">
            <Compass className="w-4 h-4" />
            <span>{t.about.sectionLabel}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-['Cinzel',serif] font-bold tracking-tight text-[var(--text-primary)]">
            {t.about.livingHeritage}
          </h1>
          <p className="font-['Noto_Serif_Devanagari',serif] text-lg sm:text-xl text-[#D97706] font-medium mt-2">
            {t.hero.subName} — {language === 'HI' ? 'जयपुर (बगरू)' : language === 'GU' ? 'જયપુર (બગરૂ)' : 'Jaipur (Bagru)'}
          </p>
          <p className="text-[var(--text-muted)] text-base sm:text-lg mt-4 leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* 2.5D Parallax Architectural Section */}
      <ArchitecturalParallax />

      {/* 4-Floor Architectural Layout Details */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div
          className="p-8 sm:p-12 rounded-3xl border shadow-xl transition-colors"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-gold)',
            boxShadow: 'var(--shadow-card)',
            color: 'var(--text-primary)',
          }}
        >
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-2">
              <Layers className="w-4 h-4" />
              <span>{t.about.architectureLabel}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
              {t.about.crafted}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
              {t.about.craftedDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {floorLevels.map((lvl, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border transition-all"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#D97706] font-bold mb-2">
                  Level {idx + 1} • {lvl.level}
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">
                  {lvl.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {lvl.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D97706]" />
              <span className="font-devanagari tracking-normal">{SITE_CONFIG.affiliationDevanagari}</span>
              <span>({SITE_CONFIG.affiliationEnglish})</span>
            </div>
            <span className="font-semibold text-[#D97706]">Jaipur (Bagru), Rajasthan</span>
          </div>
        </div>
      </section>

      {/* Authentic Bagru Architectural Showcase */}
      <section className="px-4 max-w-7xl mx-auto text-left">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-2">
            <Camera className="w-4 h-4" />
            <span>
              {language === 'HI'
                ? 'मंदिर दर्शन दीर्घा'
                : language === 'GU'
                ? 'મંદિર દર્શન ગેલેરી'
                : 'Temple Architectural Gallery'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-['Cinzel',serif] font-bold text-[var(--text-primary)]">
            {language === 'HI'
              ? 'पाषाण शिल्पकला एवं पावन परिसर'
              : language === 'GU'
              ? 'પાષાણ શિલ્પકળા અને પવિત્ર પરિસર'
              : 'Sacred Stone Art & Temple Campus'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              src: '/assets/images/mandir/bagru_shikhara_carvings.jpg',
              title: language === 'HI' ? 'शिखर एवं सूक्ष्म नक्काशी' : language === 'GU' ? 'શિખર અને બારીક નકશીકામ' : 'Nagara Shikhara Carvings',
            },
            {
              src: '/assets/images/mandir/bagru_sanctum_pillars.jpg',
              title: language === 'HI' ? 'गर्भगृह एवं स्तम्भ श्रृंखला' : language === 'GU' ? 'ગર્ભગૃહ અને સ્તંભ શ્રેણી' : 'Sanctum Pillar Arcade',
            },
            {
              src: '/assets/images/mandir/bagru_parikrama_corridor.jpg',
              title: language === 'HI' ? 'परिक्रमा पथ' : language === 'GU' ? 'પ્રદક્ષિણા પથ' : 'Devotional Parikrama Walkway',
            },
            {
              src: '/assets/images/mandir/bagru_sabha_mandap.jpg',
              title: language === 'HI' ? 'सभा मण्डप' : language === 'GU' ? 'સભા મંડપ' : 'Assembly Sabha Mandap',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border shadow-lg aspect-[16/10] transition-all"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3.5">
                <span className="text-xs font-semibold text-white drop-shadow-sm">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

