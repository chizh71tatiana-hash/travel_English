import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  MapPin,
  Globe2,
  Hotel,
  Utensils,
  ShieldAlert,
  Ticket,
  Users,
  GraduationCap,
  Clock,
  Laptop,
  Wifi,
  BadgeCheck,
  Sparkles,
  ChevronRight,
  Check,
  X,
  MessageCircle,
} from "lucide-react";

const COLORS = {
  bg: "#eaeae8",
  navy: "#0c3f9d",
  blue: "#608ac4",
  orange: "#e65806",
  peach: "#f0954d",
  red: "#a90404",
};

const Section = ({ id, title, eyebrow, children, tone = "light", className = "" }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <div className={`relative rounded-3xl border backdrop-blur-xl overflow-hidden ${
        tone === "dark" 
          ? "bg-[rgba(12,63,157,0.92)] text-white border-white/10 shadow-travel" 
          : "glass-card"
      } ${className}`}>
        <div className="pointer-events-none absolute inset-0">
          <div 
            className="absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{ background: `radial-gradient(circle, ${COLORS.orange}, transparent 60%)` }}
          />
          <div 
            className="absolute -bottom-52 -left-44 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
            style={{ background: `radial-gradient(circle, ${COLORS.blue}, transparent 60%)` }}
          />
          <div className="absolute left-1/2 top-0 h-[2px] w-[110%] -translate-x-1/2 opacity-40 runway-glow" />
        </div>

        <div className="relative p-6 sm:p-8 lg:p-10">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
              style={{
                background: tone === "dark" ? "rgba(240,149,77,0.14)" : "rgba(12,63,157,0.08)",
                color: tone === "dark" ? "#fff" : COLORS.navy,
                border: `1px solid ${tone === "dark" ? "rgba(240,149,77,0.22)" : "rgba(12,63,157,0.14)"}`
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{eyebrow}</span>
            </div>
          )}
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight" 
              style={{ color: tone === "dark" ? "#fff" : COLORS.navy }}>
            {title}
          </h2>

          <div className="mt-6 sm:mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
};

const Chip = ({ icon: Icon, children, tone = "light", className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold backdrop-blur-md ${className} ${
      tone === "dark" 
        ? "border-white/10 bg-white/5 text-white" 
        : "border-black/5 bg-white/60 text-travel-navy"
    }`}>
      {Icon && <Icon className="h-4 w-4" />}
      <span>{children}</span>
    </div>
  );
};

const Card = ({ icon: Icon, title, children, accent = "orange", className = "" }) => {
  const accentColor = COLORS[accent];
  
  return (
    <div className={`group relative h-full rounded-3xl border border-black/5 bg-white/70 p-6 shadow-travel-glow backdrop-blur-xl hover:shadow-travel transition-shadow duration-300 ${className}`}>
      <div 
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at 20% 0%, ${accentColor}22, transparent 60%)`,
        }}
      />
      
      <div className="relative">
        <div className="flex items-start gap-4">
          <div 
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
            style={{ background: `${accentColor}14`, border: `1px solid ${accentColor}26` }}
          >
            {Icon && <Icon className="h-6 w-6" style={{ color: accentColor }} />}
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-extrabold" style={{ color: COLORS.navy }}>
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramItem = ({ number, title, description, icon: Icon }) => {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ background: "rgba(240,149,77,0.14)", border: "1px solid rgba(240,149,77,0.25)" }}
        >
          {Icon && <Icon className="h-6 w-6" style={{ color: COLORS.peach }} />}
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span 
              className="inline-flex items-center justify-center h-8 w-8 rounded-full text-xs font-extrabold"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              {number}
            </span>
            <h3 className="text-lg font-extrabold text-white">{title}</h3>
          </div>
          
          <p className="text-sm leading-relaxed text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function EnglishTravelCourse() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const program = useMemo(() => [
    {
      number: "1",
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском. 👉 Уверенность уже в первые часы за границей.",
      icon: Plane,
    },
    {
      number: "2",
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi‑Fi. 👉 Практика вежливых фраз и повседневной лексики.",
      icon: Hotel,
    },
    {
      number: "3",
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые. 👉 Развитие гастрономического словаря и уверенности в общении.",
      icon: Utensils,
    },
    {
      number: "4",
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку. 👉 Понимание устной речи и произношения в реальных ситуациях.",
      icon: MapPin,
    },
    {
      number: "5",
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском. 👉 Важные фразы, которые могут спасти отпуск.",
      icon: ShieldAlert,
    },
    {
      number: "6-8",
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки. 👉 Погружение в культурный контекст через язык.",
      icon: Ticket,
    },
    {
      number: "9",
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или подростками за границей. 👉 Игровая практика диалогов и неформального общения.",
      icon: Users,
    },
    {
      number: "10",
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском. 👉 Развитие связной речи и творческого самовыражения.",
      icon: GraduationCap,
    },
  ], []);

  const navItems = [
    { label: "О курсе", href: "#about" },
    { label: "Для кого", href: "#for-whom" },
    { label: "Программа", href: "#program" },
    { label: "Почему мы", href: "#why-us" },
    { label: "Расписание", href: "#schedule" },
    { label: "Стоимость", href: "#pricing" },
  ];

  return (
    <div className="min-h-screen" style={{ background: COLORS.bg, color: "#101828" }}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1200px circle at 15% 10%, ${COLORS.blue}22, transparent 60%),
              radial-gradient(900px circle at 85% 20%, ${COLORS.peach}28, transparent 60%),
              radial-gradient(1000px circle at 50% 95%, ${COLORS.navy}1a, transparent 60%)
            `,
          }}
        />
        <div className="absolute left-0 top-1/4 right-0 h-[1px] opacity-20 runway-glow" />
        <div className="absolute left-0 top-1/2 right-0 h-[1px] opacity-20 runway-glow" />
        <div className="absolute left-0 top-3/4 right-0 h-[1px] opacity-20 runway-glow" />
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'border-b border-black/10 bg-[rgba(234,234,232,0.95)] backdrop-blur-xl shadow-lg' 
          : 'border-b border-transparent bg-[rgba(234,234,232,0.85)] backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="h-10 w-10 rounded-2xl gradient-blue flex items-center justify-center shadow-travel-orange">
                  <Globe2 className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -inset-1 rounded-2xl opacity-40 blur bg-gradient-to-r from-orange-500 to-blue-500" />
              </div>
              <div>
                <div className="font-extrabold text-sm text-travel-navy">Английский для путешествий</div>
                <div className="text-xs text-gray-600">Интерактивный курс для детей</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:text-travel-navy hover:bg-white/70 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#enroll"
                className="ml-2 px-5 py-2.5 rounded-2xl text-sm font-extrabold text-white shadow-travel-orange gradient-orange hover:shadow-lg transition-shadow"
              >
                Записаться
              </a>
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl border border-black/10 bg-white/60"
              aria-label="Меню"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl">
              <div className="py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-travel-blue/10 rounded-lg"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#enroll"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 mx-4 py-3 rounded-2xl text-center font-extrabold text-white gradient-orange shadow-travel-orange"
                >
                  Записаться на курс
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8">
        <motion.section 
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] glass-card p-8 sm:p-12 mb-12"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-25 blur-3xl"
              style={{ background: `radial-gradient(circle, ${COLORS.orange}, transparent 60%)` }} 
            />
            <div className="absolute -bottom-48 -right-44 h-[30rem] w-[30rem] rounded-full opacity-25 blur-3xl"
              style={{ background: `radial-gradient(circle, ${COLORS.navy}, transparent 60%)` }}
            />
          </div>

          <div className="relative">
            <div className="flex flex-wrap gap-3 mb-6">
              <Chip icon={Plane}>Тематический курс</Chip>
              <Chip icon={BadgeCheck}>Уровень A2-B1</Chip>
              <Chip icon={Users}>Группы до 6 детей</Chip>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                style={{ color: COLORS.navy }}>
              Курс <span className="text-travel-orange">«Английский для путешествий»</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl">
              Мечтаете, чтобы ваш ребёнок свободно общался за границей — от заказа кофе до поиска чемодана? 
              Этот курс научит реальному разговорному английскому для отпусков, поездок и будущих путешествий!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#enroll"
                className="inline-flex items-center justify-center gap-3 rounded-3xl px-8 py-4 text-lg font-extrabold text-white shadow-travel-orange gradient-orange hover:shadow-xl transition-all"
              >
                Записаться на курс
                <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center rounded-3xl border-2 border-travel-blue px-8 py-4 text-lg font-extrabold text-travel-navy hover:bg-travel-blue/10 transition-colors"
              >
                Смотреть программу
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card rounded-2xl p-4">
                <div className="text-xs font-bold text-gray-500 mb-1">Фокус курса</div>
                <div className="font-extrabold text-travel-navy">Живая речь в путешествиях</div>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <div className="text-xs font-bold text-gray-500 mb-1">Формат занятий</div>
                <div className="font-extrabold text-travel-navy">Ролевые игры • Квесты • Диалоги</div>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <div className="text-xs font-bold text-gray-500 mb-1">Результат</div>
                <div className="font-extrabold text-travel-navy">Уверенность + готовые фразы</div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="space-y-8">
          <Section 
            id="about" 
            title="О курсе" 
            eyebrow="Путешествия + английский = уверенность"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card 
                icon={Globe2} 
                title="Реальные ситуации" 
                accent="blue"
              >
                Тренируем именно то, что случается в поездках: аэропорт, отель, кафе, улица, экскурсии.
              </Card>
              
              <Card 
                icon={Sparkles} 
                title="Интерактив" 
                accent="orange"
              >
                Ролевые диалоги, аудиоситуации, мини‑квесты — ребёнок не «зубрит», а говорит.
              </Card>
              
              <Card 
                icon={BadgeCheck} 
                title="Прогресс за курс" 
                accent="navy"
              >
                Ребёнок выходит на уровень <span className="font-bold">A2–B1</span> (Pre‑Intermediate).
              </Card>
            </div>
          </Section>

          <Section 
            id="for-whom" 
            title="📌 Для кого курс" 
            eyebrow="2 возрастные группы"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-3xl p-6">
                <div className="text-xs font-bold text-gray-500 mb-1">Первая группа</div>
                <h3 className="text-2xl font-extrabold text-travel-navy mb-3">4–5 класс</h3>
                <p className="text-gray-700">
                  Мягкий вход в разговорную практику: простые диалоги, много повторений и игр.
                </p>
                <div className="mt-4">
                  <Chip>Игровой формат</Chip>
                  <Chip>Повторение</Chip>
                  <Chip>Простая лексика</Chip>
                </div>
              </div>
              
              <div className="glass-card rounded-3xl p-6">
                <div className="text-xs font-bold text-gray-500 mb-1">Вторая группа</div>
                <h3 className="text-2xl font-extrabold text-travel-navy mb-3">6–8 класс</h3>
                <p className="text-gray-700">
                  Больше самостоятельных высказываний, ситуаций «как в жизни» и уверенной речи.
                </p>
                <div className="mt-4">
                  <Chip>Сложные диалоги</Chip>
                  <Chip>Реальные ситуации</Chip>
                  <Chip>Самостоятельная речь</Chip>
                </div>
              </div>
            </div>
          </Section>

          <Section 
            id="program" 
            title="📚 Программа курса" 
            eyebrow="10 модулей — от аэропорта до диплома"
            tone="dark"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {program.map((item) => (
                <ProgramItem key={item.number} {...item} />
              ))}
            </div>
          </Section>

          <Section 
            id="why-us" 
            title="✨ Почему этот курс особенный?" 
            eyebrow="Без скучной грамматики"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card icon={BadgeCheck} title="Живая речь" accent="orange">
                Акцент на практическую, разговорную речь — чтобы ребёнок мог говорить сразу.
              </Card>
              <Card icon={Plane} title="Ситуации путешественника" accent="blue">
                Все темы — из реальной жизни: аэропорт, отель, еда, помощь, экскурсии.
              </Card>
              <Card icon={Sparkles} title="Интерактивные задания" accent="peach">
                Ролевые игры, аудиоситуации, мини‑квесты — учимся через действие.
              </Card>
              <Card icon={GraduationCap} title="Уровень A2–B1" accent="navy">
                За курс ребёнок укрепляет базу и выходит на уверенное общение.
              </Card>
            </div>
          </Section>

          <Section 
            id="requirements" 
            title="💻 Что потребуется" 
            eyebrow="Технические требования"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card icon={Laptop} title="Компьютер / ноутбук" accent="navy">
                Стационарный компьютер или ноутбук с наушниками и микрофоном.
              </Card>
              <Card icon={Wifi} title="Стабильный интернет" accent="blue">
                Чтобы занятия проходили без зависаний и потери звука.
              </Card>
              <Card icon={Globe2} title="Zoom" accent="orange">
                Занимаемся онлайн в Zoom — удобно из любой точки.
              </Card>
            </div>
          </Section>

          <Section 
            id="schedule" 
            title="🕒 Расписание" 
            eyebrow="Московское время"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-3xl p-6">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-semibold">Четверг</span>
                </div>
                <div className="text-3xl font-extrabold text-travel-navy mb-3">15:00 (МСК)</div>
                <div className="inline-flex rounded-2xl px-4 py-2 text-sm font-extrabold"
                  style={{ 
                    background: `${COLORS.orange}14`, 
                    border: `1px solid ${COLORS.orange}26`, 
                    color: COLORS.orange 
                  }}
                >
                  Группа 4–5 класс
                </div>
              </div>
              
              <div className="glass-card rounded-3xl p-6">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-semibold">Пятница</span>
                </div>
                <div className="text-3xl font-extrabold text-travel-navy mb-3">15:30 (МСК)</div>
                <div className="inline-flex rounded-2xl px-4 py-2 text-sm font-extrabold"
                  style={{ 
                    background: `${COLORS.blue}18`, 
                    border: `1px solid ${COLORS.blue}2a`, 
                    color: COLORS.navy 
                  }}
                >
                  Группа 6–8 класс
                </div>
              </div>
            </div>
          </Section>

          <Section 
            id="pricing" 
            title="💳 Стоимость" 
            eyebrow="Выберите удобный формат"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative overflow-hidden glass-card rounded-3xl p-6">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-25 blur-3xl"
                  style={{ background: `radial-gradient(circle, ${COLORS.orange}, transparent 60%)` }}
                />
                <div className="relative">
                  <div className="text-sm font-bold text-gray-500">Полный курс</div>
                  <div className="text-4xl font-extrabold text-travel-navy my-2">12 000 ₽</div>
                  <div className="text-gray-600 mb-4">10 занятий</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Цельная программа от начала до конца</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Практика говорения на каждом занятии</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Мини‑группа до 6 детей</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative overflow-hidden glass-card rounded-3xl p-6">
                <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full opacity-25 blur-3xl"
                  style={{ background: `radial-gradient(circle, ${COLORS.blue}, transparent 60%)` }}
                />
                <div className="relative">
                  <div className="text-sm font-bold text-gray-500">Абонемент</div>
                  <div className="text-4xl font-extrabold text-travel-navy my-2">1 300 ₽</div>
                  <div className="text-gray-600 mb-4">за занятие</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Гибко: оплата по урокам</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Подходит для знакомства с курсом</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Zoom + материалы включены</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          <Section 
            id="enroll" 
            title="📢 Набор открыт!" 
            eyebrow="Места ограничены"
            tone="dark"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-white/85">
                  Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
                  Места ограничены!
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/85">
                  👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит
                  по‑английски без страха!
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Chip tone="dark" icon={Users}>До 6 учеников</Chip>
                  <Chip tone="dark" icon={Sparkles}>Интерактив</Chip>
                  <Chip tone="dark" icon={BadgeCheck}>A2–B1</Chip>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-extrabold text-white mb-3">Как записаться</div>
                <ol className="space-y-2 text-sm text-white/80 pl-5">
                  <li className="list-decimal">Нажмите кнопку ниже</li>
                  <li className="list-decimal">Напишите: возраст/класс ребёнка</li>
                  <li className="list-decimal">Я отвечу и предложу место в группе</li>
                </ol>
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/10 p-4 text-xs text-white/80">
                  <strong>Вставьте сюда:</strong> ссылку на WhatsApp/Telegram или форму записи.
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="block w-full rounded-[1.75rem] px-6 py-5 text-center text-lg font-extrabold text-white shadow-[0_22px_70px_rgba(230,88,6,0.45)] gradient-orange hover:shadow-2xl transition-all"
              >
                Записаться на курс
              </a>
              <p className="mt-3 text-center text-xs text-white/70">
                Нажмите кнопку и напишите сообщение — я быстро отвечу.
              </p>
            </div>
          </Section>
        </div>

        <footer className="mt-12 pb-6 text-center text-xs text-gray-500">
          <div className="mx-auto max-w-3xl">
            <span className="font-semibold text-travel-navy">Репетитор английского</span> • Онлайн занятия •
            <span className="mx-2">Zoom</span> •
            <span className="ml-2">© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/5 bg-[rgba(234,234,232,0.92)] backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-extrabold text-travel-navy">
              Английский для путешествий
            </div>
            <div className="truncate text-xs text-gray-600">Набор открыт • группы до 6 детей</div>
          </div>
          <a
            href="#enroll"
            className="shrink-0 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-extrabold text-white shadow-travel-orange gradient-orange hover:shadow-lg transition-shadow"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </div>
  );
}