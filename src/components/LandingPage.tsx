import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Calendar, Clock } from "lucide-react";

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

interface LandingPageProps {
  onPurchase: () => void;
}

export default function LandingPage({ onPurchase }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans leading-normal" style={{ color: '#1F1F1F' }}>

      {/* ── BARRA ── */}
      <div className="bg-[#7D1F3B] text-white text-center py-2.5 px-4">
        <p className="text-xs md:text-sm font-semibold tracking-wide">
          ✦ Primera edición · Inicio 4 de agosto · Cupos limitados
        </p>
      </div>

      {/* ── HERO ── */}
      <header className="bg-white pt-12 pb-0">
        <div className="container mx-auto px-6 max-w-4xl text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#7D1F3B] tracking-[0.4em] text-2xl md:text-3xl font-black uppercase mb-6"
          >
            Despierta
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2.2rem] md:text-[3.5rem] font-black tracking-tight leading-[1.1] mb-3"
            style={{ color: '#1F1F1F' }}
          >
            Llevas años resolviendo todo.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[1.6rem] md:text-[2.4rem] font-black tracking-tight leading-[1.1] mb-6 text-[#7D1F3B]"
          >
            Y estás cansada.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl font-black leading-relaxed mb-6 max-w-2xl mx-auto"
            style={{ color: '#1F1F1F' }}
          >
            ¿Y si algunas de las cosas que haces cada día ya no fueran una elección, sino una costumbre?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
            style={{ color: '#555' }}
          >
            Identificarás los 3 comportamientos automáticos que hoy tienen el mayor costo para tu bienestar, tu energía y la vida que quieres construir.
          </motion.p>

          {/* URGENCIA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="inline-flex items-center gap-3 bg-[#7D1F3B] text-white rounded-2xl px-6 py-3 mb-6"
          >
            <Calendar className="w-5 h-5 shrink-0" />
            <div className="text-left">
              <p className="font-black text-base md:text-lg leading-none">Inicio: 4 de agosto</p>
              <p className="text-xs opacity-80 mt-0.5">Cupos limitados · Primera edición</p>
            <p className="text-xs opacity-70 mt-0.5">Sesiones grupales en vivo los martes a las 19:00 hrs (Chile)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-[#F7F7F7] rounded-2xl p-4 md:p-5 mb-8 max-w-xl mx-auto"
          >
            <p className="text-sm md:text-base font-semibold" style={{ color: '#444' }}>
              Sin reorganizar tu rutina. A tu ritmo. Con acompañamiento real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col items-center gap-3 mb-12"
          >
            <CTAButton label="Quiero reservar mi lugar" size="lg" />
            <p className="text-sm" style={{ color: '#888' }}>
              $250.000 CLP · Cupos limitados · Garantía 7 días
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="overflow-hidden rounded-[24px] shadow-xl border border-slate-100"
          >
            <div className="relative aspect-[16/9]">
              <img
                src="/banner limpio despierta.png"
                alt="Despierta"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </header>

      {/* ── COSTO DE INACCIÓN ── */}
      <section className="py-14 bg-[#7D1F3B] text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-lg md:text-2xl font-black leading-relaxed mb-3">
            Cada semana que pasa sin verlo,<br className="hidden md:block" /> el patrón se vuelve más difícil de interrumpir.
          </p>
          <p className="text-sm md:text-base opacity-80 max-w-xl mx-auto">
            Tu cerebro automatiza lo que repite. No es falta de voluntad. Es el mecanismo. Y cuanto más tiempo pasa, más profundo queda.
          </p>
        </div>
      </section>

      {/* ── AGITACIÓN ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-10" style={{ color: '#1F1F1F' }}>
            Hay comportamientos que dejamos de cuestionar hace tiempo,<br className="hidden md:block" /> pero no de sentir sus consecuencias.
          </h2>
          <div className="space-y-3 text-left max-w-lg mx-auto">
            {[
              "Te ocupas de todo y rara vez te preguntas si realmente te corresponde hacerlo.",
              "Postergas lo que necesitas porque siempre aparece algo más urgente.",
              "Reaccionas de maneras que conoces demasiado bien, aunque después te gustaría haber actuado distinto.",
              "Te has propuesto cambiar algo más de una vez, pero terminas volviendo a lo mismo.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl px-4 py-3 border border-[#F0E8EA] bg-[#FDF5F6]">
                <span className="text-[#7D1F3B] font-black mt-0.5 shrink-0">✦</span>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#444' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL GRAN RESULTADO ── */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-[#7D1F3B] text-sm font-black uppercase tracking-widest mb-3">El resultado</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: '#1F1F1F' }}>
              Tus 3 comportamientos automáticos<br className="hidden md:block" /> prioritarios a transformar
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-2" style={{ color: '#555' }}>
              Identificarás los 3 comportamientos que hoy tienen el mayor costo para tu bienestar, tu energía o la vida que quieres construir.
            </p>
            <p className="text-sm md:text-base max-w-lg mx-auto" style={{ color: '#777' }}>
              Porque no todo necesita cambiar. Aprenderás a reconocer dónde vale la pena empezar.
            </p>
          </div>

          {/* MAPA */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#7D1F3B]/20 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-[#7D1F3B] text-xs font-black uppercase tracking-widest mb-1">Además construirás tu</p>
                <p className="font-black text-lg md:text-xl" style={{ color: '#1F1F1F' }}>Mapa de Automatismos e Impactos</p>
              </div>
            </div>
            <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#555' }}>
              Una herramienta personal que transformará observaciones dispersas en una visión clara de lo que hoy está influyendo en tu vida.
            </p>
            <div className="space-y-2">
              {[
                "Los comportamientos automáticos que hoy están presentes en tu vida.",
                "El impacto que esos comportamientos tienen en tu bienestar, energía y calidad de vida.",
                "Qué comportamientos quieres seguir manteniendo.",
                "Qué comportamientos te gustaría comenzar a transformar.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#7D1F3B] shrink-0 mt-0.5">✦</span>
                  <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BASE METODOLÓGICA ── */}
      <section className="py-12 bg-[#F5F0EE] border-y border-[#E8D5DA]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="font-black text-xl md:text-2xl mb-4" style={{ color: '#1F1F1F' }}>
            Antes de cambiar algo, necesitas verlo.
          </p>
          <p className="text-sm md:text-base leading-relaxed max-w-xl mx-auto" style={{ color: '#666' }}>
            Nuestro cerebro automatiza lo que repetimos. Por eso muchos comportamientos dejan de parecernos una elección. Despierta te ayuda a hacerlos visibles a través de un <strong>Método de Observación Consciente</strong> basado en principios de neurociencia sobre atención, automatización y conciencia de la propia experiencia.
          </p>
        </div>
      </section>

      {/* ── LAS 3 SEMANAS ── */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4" style={{ color: '#1F1F1F' }}>
            Despierta no es un curso.<br />Es una experiencia de observación guiada.
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#555' }}>
            Durante 3 semanas observarás tu experiencia cotidiana con un foco distinto cada semana, acompañada durante todo el proceso.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left mb-8">
            {[
              {
                num: "01",
                semana: "Semana 1",
                title: "Bajar el ruido",
                desc: "Crearás espacio para observar con mayor claridad aquello que hoy ocupa tu atención.",
              },
              {
                num: "02",
                semana: "Semana 2",
                title: "Hacer visible lo automático",
                desc: "Identificarás comportamientos que hoy pasan desapercibidos en tu día a día.",
              },
              {
                num: "03",
                semana: "Semana 3",
                title: "Elegir",
                desc: "Reconocerás qué comportamientos quieres seguir manteniendo y cuáles te gustaría comenzar a transformar.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <p className="text-[#7D1F3B] font-black text-3xl mb-1">{card.num}</p>
                <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: '#999' }}>{card.semana}</p>
                <h4 className="font-black text-lg leading-tight mb-2" style={{ color: '#1F1F1F' }}>{card.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* TIEMPO REQUERIDO */}
          <div className="bg-white rounded-2xl p-5 border border-[#E8D5DA] flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
            <Clock className="w-8 h-8 text-[#7D1F3B] shrink-0" />
            <div className="text-left">
              <p className="font-black text-sm md:text-base mb-1" style={{ color: '#1F1F1F' }}>¿Cuánto tiempo necesitas dedicarle?</p>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                <strong>1 hora a la semana</strong> en la sesión grupal en vivo + <strong>2 horas</strong> de observación y reflexión a tu ritmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LO QUE INCLUYE ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-[#7D1F3B] text-xs font-black uppercase tracking-widest mb-8 text-center">Lo que incluye Despierta</p>
          <div className="space-y-3">
            {[
              { title: "3 sesiones grupales en vivo", benefit: "Para acompañarte paso a paso durante todo el proceso.", extra: "Martes 4, 11 y 18 de agosto · 19:00 hrs (Chile) — Si no puedes asistir, todas las sesiones quedarán grabadas." },
              { title: "Guías de observación y reflexión", benefit: "Para ayudarte a saber exactamente qué observar cada semana.", extra: "" },
              { title: "Comunidad privada de acompañamiento", benefit: "Para compartir el proceso con otras mujeres que están recorriendo el mismo camino.", extra: "" },
              { title: "Grabaciones de todas las sesiones", benefit: "Para avanzar a tu ritmo y revisar el contenido cuando lo necesites.", extra: "" },
              { title: "Mapa de Automatismos e Impactos", benefit: "Para visualizar con claridad aquello que hoy está influyendo en tu vida cotidiana.", extra: "" },
              { title: "Identificación de tus 3 comportamientos automáticos prioritarios", benefit: "Para terminar el proceso sabiendo exactamente dónde vale la pena enfocar tu energía primero.", extra: "" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl px-4 py-4 border border-slate-100">
                <span className="text-[#7D1F3B] font-black shrink-0 mt-0.5">✦</span>
                <div>
                  <p className="font-black text-sm md:text-base" style={{ color: '#1F1F1F' }}>{item.title}</p>
                  <p className="text-sm leading-relaxed mt-0.5" style={{ color: '#777' }}>{item.benefit}</p>
                  {item.extra && <p className="text-xs leading-relaxed mt-1 text-[#7D1F3B] font-semibold">{item.extra}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIÉN SOY ── */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 shadow-sm">
            <p className="text-xs font-black text-[#7D1F3B] uppercase tracking-widest mb-6 text-center">Quién está detrás de esto</p>
            <img src="/bienvenida-solange.png" alt="Solange Henríquez" className="w-full rounded-[1.5rem] mb-6" />
            <div className="bg-[#F7F7F7] rounded-xl px-5 py-4 mb-6 text-center border border-slate-100">
              <p className="text-sm font-semibold leading-relaxed" style={{ color: '#7D1F3B' }}>
                Certificada en Coaching Basado en Neurociencias por el NeuroLeadership Institute (acreditado por ICF). Más de 20 años liderando operaciones comerciales y equipos en empresas de retail y servicios.
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-center mb-6" style={{ color: '#1F1F1F' }}>Hola, soy Solange.</h2>
            <div className="text-[15px] md:text-base leading-[1.9] space-y-4" style={{ color: '#444' }}>
              <p>Durante más de 20 años lideré operaciones comerciales en una industria de alta exigencia y cambio constante.</p>
              <p>En ese camino empecé a hacerme una pregunta que todavía me acompaña:</p>
              <p className="font-semibold" style={{ color: '#1F1F1F' }}>¿Cuánto de lo que hacemos cada día es realmente una elección y cuánto es simplemente algo que aprendimos a hacer hace años?</p>
              <p>Esa inquietud me llevó a formarme en Coaching Basado en Neurociencias y a profundizar en cómo nuestro cerebro automatiza gran parte de nuestros comportamientos.</p>
              <p>Con el tiempo descubrí algo simple: muchas veces intentamos cambiar aquello que todavía no hemos aprendido a observar.</p>
              <p className="font-semibold" style={{ color: '#1F1F1F' }}>Por eso creé Despierta. No para decirte qué hacer. Sino para ayudarte a observar con mayor claridad aquello que hoy puede estar pasando desapercibido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRECIO ── */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <p className="text-[#7D1F3B] text-xs font-black uppercase tracking-widest mb-3">Primera edición</p>
          <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: '#1F1F1F' }}>Despierta · Inicio 4 de agosto</h2>
          <p className="text-5xl md:text-6xl font-black text-[#7D1F3B] mb-1">$250.000</p>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#999' }}>CLP</p>
          <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8" style={{ color: '#666' }}>
            Este es el precio de lanzamiento de la primera edición. Una vez cerrado el grupo, el valor aumentará para futuras versiones del programa.
          </p>
          <div className="flex flex-col items-center gap-3">
            <CTAButton label="Quiero reservar mi lugar" size="lg" />
            <p className="text-sm" style={{ color: '#888' }}>$250.000 CLP · Inicio 4 de agosto · Cupos limitados · Garantía 7 días</p>
          </div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ── */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10" style={{ color: '#1F1F1F' }}>Si estás pensando esto…</h2>
          <div className="space-y-4">
            {[
              {
                q: '"No tengo tiempo para esto."',
                a: "Despierta requiere 1 hora a la semana en la sesión grupal en vivo, más 2 horas de observación y reflexión a tu propio ritmo. En total, menos de 3 horas semanales — en momentos que ya estás viviendo.",
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
                q: '"¿Qué pasa si no puedo asistir a una sesión en vivo?"',
                a: "Todas las sesiones quedan grabadas. Podrás revisarlas cuando quieras y continuar el proceso sin perder el hilo de la experiencia.",
              },
              {
                q: '"¿Y si no descubro nada?"',
                a: "Muchas veces creemos que ya nos conocemos. Sin embargo, cuando observamos con intención, suelen aparecer comportamientos, reacciones y formas de actuar que llevamos años repitiendo sin cuestionar. No se trata de encontrar algo extraordinario. Se trata de ver con más claridad lo que ya está ahí.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm">
                <p className="font-black text-base md:text-lg mb-2" style={{ color: '#1F1F1F' }}>{item.q}</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#666' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GARANTÍA ── */}
      <section className="py-12 bg-[#F5F4F3] border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-10 h-10 text-[#7D1F3B]" />
          </div>
          <h3 className="text-xl md:text-2xl font-black mb-3" style={{ color: '#1F1F1F' }}>Sin riesgo.</h3>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#666' }}>
            Si durante los primeros 7 días sientes que Despierta no es para ti, te devolveremos el 100% de tu dinero. Sin formularios. Sin explicaciones.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: '#1F1F1F' }}>
            No se trata de convertirte<br />en alguien diferente.
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-6 text-[#7D1F3B]">
            Se trata de reconocer qué quieres seguir llevando contigo y qué ya no.
          </p>
          <p className="text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#666' }}>
            Despierta es una experiencia de observación guiada para ayudarte a reconocer qué comportamientos siguen aportando valor a tu vida y cuáles te gustaría comenzar a transformar.
          </p>
          <div className="flex flex-col items-center gap-3 mb-6">
            <CTAButton label="Quiero reservar mi lugar" size="lg" />
            <p className="text-sm" style={{ color: '#888' }}>$250.000 CLP · Inicio 4 de agosto · Cupos limitados · Garantía 7 días</p>
          </div>
          <div className="mt-6">
            <p className="text-sm mb-1" style={{ color: '#aaa' }}>¿Tienes dudas antes de empezar?</p>
            <a href="https://wa.me/56990991901" target="_blank" rel="noopener noreferrer" className="text-[#7D1F3B] font-bold text-sm hover:underline">
              Conversemos por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-6 border-t border-slate-100 text-center bg-white">
        <div className="container mx-auto px-6">
          <p className="text-[#7D1F3B] tracking-[0.4em] text-xs font-black uppercase opacity-40 mb-1">Despierta</p>
          <p className="text-[10px] font-medium tracking-widest uppercase" style={{ color: '#bbb' }}>© 2026</p>
        </div>
      </footer>

    </div>
  );
}
