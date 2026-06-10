import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Sparkles, RefreshCw, Heart } from "lucide-react";

// ─── CTA Button ───────────────────────────────────────────────────────────────
const CTAButton = ({
  label = "Quiero reservar mi lugar",
  size = "lg",
}: {
  label?: string;
  size?: "sm" | "lg";
}) => (
  <a
    href="https://pay.hotmart.com/O105550362E"
    target="_blank"
    rel="noopener noreferrer"
    className={`bg-[#7D1F3B] text-white rounded-xl font-black hover:bg-[#6B1A32] shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center justify-center gap-2 ${
      size === "lg"
        ? "px-8 md:px-12 py-4 md:py-5 text-base md:text-lg"
        : "px-6 py-3 text-sm md:text-base"
    }`}
  >
    <span className="uppercase tracking-widest text-xs md:text-sm">{label}</span>
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
  </a>
);

// ─── Main Component ───────────────────────────────────────────────────────────
interface LandingPageProps {
  onPurchase: () => void;
}

export default function LandingPage({ onPurchase }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans leading-normal selection:bg-rose-50 selection:text-[#7D1F3B]">

      {/* ── BARRA URGENCIA ── */}
      <div className="bg-[#7D1F3B] text-white text-center py-2.5 px-4">
        <p className="text-xs md:text-sm font-semibold tracking-wide">
          ✦ Primera edición · Precio de lanzamiento $150.000 CLP · Cupos limitados
        </p>
      </div>

      {/* ── HERO ── */}
      <header className="bg-white pt-10 pb-0">
        <div className="container mx-auto px-6 max-w-3xl text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#7D1F3B] tracking-[0.5em] text-xs font-black uppercase mb-6"
          >
            Despierta
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2rem] md:text-[3.2rem] font-black tracking-tight text-slate-900 leading-[1.1] mb-5"
          >
            Llevas años avanzando<br className="hidden md:block" /> y resolviendo todo.<br />
            <span className="text-[#7D1F3B]">
              ¿Y si algunas de las cosas que haces cada día ya no fueran tu elección, sino una costumbre?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            A lo largo de 3 semanas harás visibles comportamientos que hoy pasan desapercibidos, para decidir cuáles quieres seguir cultivando y cuáles te gustaría empezar a transformar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#7D1F3B]/5 border border-[#7D1F3B]/20 rounded-2xl p-5 md:p-6 mb-8 text-center max-w-2xl mx-auto"
          >
            <p className="text-slate-800 text-base md:text-lg font-semibold leading-relaxed">
              Sin reorganizar tu rutina. A tu ritmo. Con acompañamiento real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col items-center gap-3 mb-10"
          >
            <CTAButton label="Quiero reservar mi lugar" size="lg" />
            <p className="text-sm text-slate-500">
              $150.000 CLP · Inicio 3 de agosto · Cupos limitados · Garantía 7 días
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="overflow-hidden rounded-[24px] shadow-2xl border border-slate-100"
          >
            <div className="relative aspect-[16/9]">
              <img
                src="/despierta72h-banner.jpg.png"
                alt="Despierta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </header>

      {/* ── AGITACIÓN ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-8">
            Hay comportamientos que dejamos de cuestionar hace tiempo,<br className="hidden md:block" /> pero no de sentir sus consecuencias.
          </h2>
          <div className="space-y-3 text-left max-w-md mx-auto">
            {[
              "Te ocupas de todo y rara vez te preguntas si realmente te corresponde hacerlo.",
              "Postergas lo que necesitas porque siempre aparece algo más urgente.",
              "Reaccionas de maneras que conoces demasiado bien, aunque después te gustaría haber actuado distinto.",
              "Te has propuesto cambiar algo más de una vez, pero terminas volviendo a lo mismo.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-rose-50 rounded-xl px-4 py-3 border border-rose-100"
              >
                <span className="text-[#7D1F3B] font-black mt-0.5 shrink-0">✦</span>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUENTE METODOLÓGICO ── */}
      <section className="py-10 bg-[#7D1F3B]/5 border-y border-[#7D1F3B]/10">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-[#7D1F3B] text-xs font-black uppercase tracking-widest mb-4">
            La base detrás de esto
          </p>
          <p className="text-slate-900 text-xl md:text-2xl font-black leading-tight mb-4">
            Antes de cambiar algo, necesitas verlo.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-3">
            Nuestro cerebro automatiza gran parte de lo que hacemos cada día para ahorrar energía. Por eso muchos comportamientos dejan de parecernos una elección y se convierten simplemente en "la forma en que hacemos las cosas".
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Despierta está construido sobre un método de observación consciente que te ayuda a bajar el ruido, dirigir tu atención hacia tu experiencia cotidiana y hacer visibles comportamientos que hoy pasan desapercibidos. Este método incorpora principios respaldados por la neurociencia sobre atención, automatización y conciencia de la propia experiencia.
          </p>
        </div>
      </section>

      {/* ── QUÉ ES DESPIERTA ── */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xs font-black text-[#e8a0b0] uppercase tracking-widest mb-4">
            La solución
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Despierta no es un curso.<br />Es una experiencia de observación guiada.
          </h2>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            Durante 3 semanas aprenderás a observar tu experiencia cotidiana desde una perspectiva diferente, para hacer visibles comportamientos que hoy pasan desapercibidos y reconocer cuáles quieres seguir cultivando y cuáles te gustaría transformar.
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Todo a través de 3 sesiones grupales de trabajo, ejercicios simples de observación y acompañamiento durante el proceso.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left mb-10">
            {[
              {
                icon: <Sparkles className="w-5 h-5" />,
                semana: "Semana 1",
                title: "Bajar el ruido",
                desc: "Antes de observar, necesitas espacio para hacerlo. Comenzarás identificando aquello que hoy ocupa tu atención: pensamientos, preocupaciones, pendientes y conversaciones internas que muchas veces funcionan en segundo plano.",
              },
              {
                icon: <RefreshCw className="w-5 h-5" />,
                semana: "Semana 2",
                title: "Observar",
                desc: "Cuando el ruido baja, empiezas a ver cosas que antes pasaban desapercibidas. Reconocerás comportamientos que aparecen de forma automática en distintos momentos de tu día a día y que rara vez te detienes a cuestionar.",
              },
              {
                icon: <Heart className="w-5 h-5" />,
                semana: "Semana 3",
                title: "Elegir",
                desc: "No todo lo automático es un problema. Algunos comportamientos te ayudan a construir la vida que quieres. Otros quizás ya no. Esta semana identificarás cuáles quieres seguir cultivando y cuáles te gustaría comenzar a transformar.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-[#7D1F3B]/30 rounded-lg text-[#e8a0b0]">
                    {card.icon}
                  </div>
                  <span className="text-[#e8a0b0] text-xs font-black uppercase tracking-widest">
                    {card.semana}
                  </span>
                </div>
                <h4 className="text-white font-black text-lg leading-tight mb-2">
                  {card.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-left mb-6">
            <p className="text-[#e8a0b0] text-xs font-black uppercase tracking-widest mb-4">
              El resultado
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed mb-4">
              Al finalizar habrás construido tu propio <strong>Mapa de Comportamientos Automáticos</strong>, identificando con mayor claridad:
            </p>
            <div className="space-y-2 text-slate-300 text-sm md:text-base">
              <p>✦ Los comportamientos que hoy están presentes en tu vida cotidiana.</p>
              <p>✦ Aquellos que quieres seguir fortaleciendo porque siguen aportando valor a tu vida.</p>
              <p>✦ Aquellos que te gustaría comenzar a transformar porque ya no están al servicio de la persona que eres hoy.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-left">
            <p className="text-[#e8a0b0] text-xs font-black uppercase tracking-widest mb-6">
              Lo que incluye Despierta
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "3 sesiones grupales en vivo",
                  benefit: "Para ayudarte a avanzar semana a semana con una guía clara y un espacio para profundizar lo que vas descubriendo.",
                },
                {
                  title: "Guías de observación y reflexión",
                  benefit: "Para saber exactamente dónde poner tu atención, sin tener que inventar el proceso por tu cuenta.",
                },
                {
                  title: "Comunidad privada de acompañamiento",
                  benefit: "Para compartir la experiencia con otras mujeres que están recorriendo el mismo camino y sentirte acompañada durante el proceso.",
                },
                {
                  title: "Acceso a las grabaciones de todas las sesiones",
                  benefit: "Para avanzar a tu ritmo y volver a los contenidos cuando lo necesites.",
                },
                {
                  title: "Tu Mapa de Comportamientos Automáticos",
                  benefit: "Para llevarte una visión clara de los comportamientos que hoy están presentes en tu vida, cuáles quieres seguir cultivando y cuáles te gustaría comenzar a transformar.",
                },
                {
                  title: "Método de Observación Consciente",
                  benefit: "Para que puedas seguir utilizándolo después de Despierta cada vez que necesites detenerte, observar y recuperar claridad.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#e8a0b0] font-black mt-0.5 shrink-0">✦</span>
                  <div>
                    <p className="text-white font-black text-sm md:text-base mb-1">{item.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── QUIÉN SOY ── */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 shadow-sm">
            <p className="text-xs font-black text-[#7D1F3B] uppercase tracking-widest mb-6 text-center">
              Quién está detrás de esto
            </p>
            <img
              src="/bienvenida-solange.png"
              alt="Solange Henríquez"
              className="w-full rounded-[1.5rem] mb-8"
            />
            <div className="bg-[#7D1F3B]/5 border border-[#7D1F3B]/15 rounded-xl px-5 py-4 mb-6 text-center">
              <p className="text-[#7D1F3B] text-sm font-semibold leading-relaxed">
                Certificada en Coaching Basado en Neurociencias por el NeuroLeadership Institute (acreditado por ICF). Más de 20 años liderando operaciones comerciales y equipos en empresas de retail y servicios.
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight text-center mb-6">
              Hola, soy Solange Henríquez.
            </h2>
            <div className="text-[15px] md:text-base text-slate-700 leading-[1.9] space-y-4">
              <p>
                Durante más de 20 años lideré operaciones comerciales en una industria de alta exigencia y cambio constante.
              </p>
              <p>
                En ese camino empecé a interesarme por una pregunta que todavía me acompaña: ¿Cuánto de lo que hacemos cada día es realmente una elección y cuánto es simplemente algo que aprendimos a hacer hace años?
              </p>
              <p>
                Esa inquietud me llevó a formarme en Coaching Basado en Neurociencias y a profundizar en cómo nuestro cerebro automatiza gran parte de nuestros comportamientos.
              </p>
              <p>
                Con el tiempo descubrí que muchas veces intentamos cambiar aquello que ni siquiera hemos aprendido a observar.
              </p>
              <p className="font-semibold text-slate-900">
                Por eso creé Despierta. No como un espacio para decirte qué hacer. Sino como una experiencia guiada para ayudarte a mirar con más claridad aquello que hoy puede estar pasando desapercibido.
              </p>
              <p>
                Porque antes de decidir qué quieres transformar, necesitas ver qué está ocurriendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRECIO ── */}
      <section className="py-14 bg-[#7D1F3B]/5 border-y border-[#7D1F3B]/10">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-xs font-black text-[#7D1F3B] uppercase tracking-widest mb-3">
            Primera edición
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
            Despierta · Inicio 3 de agosto
          </h2>
          <p className="text-4xl md:text-5xl font-black text-[#7D1F3B] mb-4">
            $150.000 CLP
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
            Este es el precio de lanzamiento de la primera edición. Una vez cerrado el grupo, el precio sube para la siguiente edición.
          </p>
          <div className="flex flex-col items-center gap-3">
            <CTAButton label="Quiero reservar mi lugar" size="lg" />
            <p className="text-sm text-slate-500">
              $150.000 CLP · Inicio 3 de agosto · Cupos limitados · Garantía 7 días
            </p>
          </div>
        </div>
      </section>

      {/* ── OBJECIONES ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-10">
            Si estás pensando esto…
          </h2>
          <div className="space-y-6">
            {[
              {
                q: '"No tengo tiempo para esto."',
                a: "Despierta no requiere reorganizar tu rutina. La observación ocurre en tu día a día, en los mismos momentos que ya estás viviendo. Lo único que cambia es la atención que les prestas.",
              },
              {
                q: '"Ya intenté cambiar cosas y siempre vuelvo al mismo lugar."',
                a: "Quizás porque la mayoría de los intentos de cambio comienzan demasiado tarde. Antes de transformar algo, necesitamos verlo con claridad. Despierta no te pide que cambies nada todavía. Te invita a observar.",
              },
              {
                q: '"¿Esto es terapia o coaching?"',
                a: "No. Es una experiencia de observación guiada basada en principios de neurociencia. No trabajamos el pasado ni buscamos resolver problemas específicos. Trabajamos la capacidad de observar tu experiencia cotidiana con mayor claridad.",
              },
              {
                q: '"¿Vale $150.000?"',
                a: "La mayoría de los cursos entregan información. Despierta está diseñado para ayudarte a reconocer comportamientos que hoy pasan desapercibidos y construir una comprensión más clara de cómo estás funcionando. Porque hay cosas que nadie puede observar por ti.",
              },
              {
                q: '"¿Qué pasa si no puedo asistir a una sesión en vivo?"',
                a: "Todas las sesiones quedan grabadas. Podrás revisarlas cuando quieras y continuar el proceso sin perder el hilo de la experiencia.",
              },
              {
                q: '"¿Y si no descubro nada?"',
                a: "Muchas veces creemos que ya nos conocemos. Sin embargo, cuando observamos con intención, suelen aparecer comportamientos, reacciones y formas de actuar que llevamos años repitiendo sin cuestionar. No se trata de encontrar algo extraordinario. Se trata de ver con más claridad lo que ya está ahí.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl p-5 md:p-6">
                <p className="text-base md:text-lg font-black text-slate-900 mb-2">
                  {item.q}
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GARANTÍA ── */}
      <section className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-10 h-10 text-[#7D1F3B]" />
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">
            Sin riesgo.
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Si en los primeros 7 días sientes que Despierta no es para ti, te devolvemos el 100% de tu dinero. Sin formularios ni explicaciones.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            No se trata de cambiar quién eres.
          </h2>
          <p className="text-xl md:text-2xl text-[#7D1F3B] font-bold mb-6">
            Se trata de ver con más claridad qué quieres seguir llevando contigo.
          </p>
          <p className="text-slate-500 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Despierta es una experiencia de observación guiada para ayudarte a reconocer qué comportamientos siguen aportando valor a tu vida y cuáles te gustaría comenzar a transformar.
          </p>
          <div className="flex flex-col items-center gap-3 mb-6">
            <CTAButton label="Quiero reservar mi lugar" size="lg" />
            <p className="text-sm text-slate-500">
              $150.000 CLP · Inicio 3 de agosto · Cupos limitados · Garantía 7 días
            </p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-slate-400 mb-1">¿Tienes dudas antes de empezar?</p>
            <a
              href="https://wa.me/56990991901"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7D1F3B] font-bold text-sm hover:underline"
            >
              Conversemos por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-6 border-t border-slate-100 text-center bg-white">
        <div className="container mx-auto px-6">
          <p className="text-[#7D1F3B] tracking-[0.4em] text-xs font-black uppercase opacity-40 mb-1">
            Despierta
          </p>
          <p className="text-slate-400 text-[10px] font-medium tracking-widest uppercase">
            © 2026
          </p>
        </div>
      </footer>

    </div>
  );
}
