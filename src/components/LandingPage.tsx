import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, RefreshCw, Sparkles, Heart } from "lucide-react";
import { useState, useEffect } from "react";

// ─── Countdown Timer ─────────────────────────────────────────────────────────
const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s <= 1 ? 24 * 60 * 60 : s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2">
      {[h, m, s].map((unit, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="bg-[#7D1F3B] text-white rounded-lg px-3 py-2 text-center min-w-[52px]">
            <span className="text-2xl md:text-3xl font-black tabular-nums leading-none">{unit}</span>
            <p className="text-[9px] uppercase tracking-widest opacity-70 mt-0.5">
              {i === 0 ? "horas" : i === 1 ? "min" : "seg"}
            </p>
          </div>
          {i < 2 && <span className="text-[#7D1F3B] font-black text-2xl">:</span>}
        </div>
      ))}
    </div>
  );
};

// ─── Hero Image ───────────────────────────────────────────────────────────────
const HeroImage = () => (
  <img
    src="/despierta72h-banner.jpg.png"
    alt="Despierta 72H"
    className="w-full h-full object-cover"
  />
);

// ─── CTA Button ───────────────────────────────────────────────────────────────
const CTAButton = ({
  label = "Quiero empezar ahora",
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
          🔥 Precio de lanzamiento disponible por tiempo limitado —{" "}
          <span className="underline font-bold">$29.990 CLP</span>
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
            Despierta 72H
          </motion.p>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2rem] md:text-[3.2rem] font-black tracking-tight text-slate-900 leading-[1.1] mb-5"
          >
            Funcionar no es lo mismo<br className="hidden md:block" /> que estar bien.<br />
            <span className="text-[#7D1F3B]">
              Y tú lo sabes.
            </span>
          </motion.h1>

          {/* AGITACIÓN */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Sientes que algo tiene que cambiar.<br />
            Pero no tienes energía ni para decidir qué.
          </motion.p>

          {/* PROMESA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#7D1F3B]/5 border border-[#7D1F3B]/20 rounded-2xl p-5 md:p-6 mb-8 text-left max-w-2xl mx-auto"
          >
            <p className="text-[#7D1F3B] text-xs font-black uppercase tracking-widest mb-2">
              La promesa
            </p>
            <p className="text-slate-800 text-base md:text-lg font-semibold leading-relaxed">
              En 3 días vas a entender qué te está pasando por dentro. Te vas a llevar{" "}
              <strong>herramientas concretas para empezar a observarte distinto y responder de otra manera.</strong>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col items-center gap-3 mb-10"
          >
            <CTAButton label="Quiero empezar ahora" size="lg" />
            <p className="text-sm text-slate-500">
              $29.990 CLP · Acceso inmediato · Garantía 7 días
            </p>
          </motion.div>

          {/* IMAGEN HERO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="overflow-hidden rounded-[24px] shadow-2xl border border-slate-100"
          >
            <div className="relative aspect-[16/9]">
              <HeroImage />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </header>

      {/* ── PRUEBA SOCIAL ── */}
      <section className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Lo que sienten quienes ya lo hicieron
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                quote:
                  "Por primera vez en meses, sentí que podía respirar distinto. Entendí cosas de mí misma que no sabía nombrar.",
                name: "Camila R.",
              },
              {
                quote:
                  "No esperaba tanto en 3 días. Me fui con herramientas reales, no solo con reflexiones.",
                name: "Paola L.",
              },
              {
                quote:
                  "Me ayudó a entender por qué seguía reaccionando igual aunque no quería. Eso no tiene precio.",
                name: "Gabriela A.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-left"
              >
                <p className="text-slate-700 text-sm leading-relaxed mb-3 italic">
                  "{t.quote}"
                </p>
                <p className="text-[#7D1F3B] text-xs font-black uppercase tracking-widest">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGITACIÓN DEL PROBLEMA ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-xs font-black text-[#7D1F3B] uppercase tracking-widest mb-4">
            ¿Te suena familiar?
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-8">
            Sabes que algo no está bien.<br />Pero no sabes cómo explicarlo.
          </h2>
          <div className="space-y-3 text-left max-w-md mx-auto">
            {[
              "Tu cabeza sigue activa aunque intentes descansar.",
              "Reaccionas de formas que no quieres. Te das cuenta cuando ya es tarde.",
              "No puedes explicar por qué estás tan cansada si no hiciste nada extraordinario.",
              "Llevas tiempo diciéndote que cuando pase esto, vas a parar. Y ese momento nunca llega.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-rose-50 rounded-xl px-4 py-3 border border-rose-100"
              >
                <span className="text-[#7D1F3B] font-black mt-0.5 shrink-0">✗</span>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BASE METODOLÓGICA ── */}
      <section className="py-10 bg-[#7D1F3B]/5 border-y border-[#7D1F3B]/10">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-xs font-black text-[#7D1F3B] uppercase tracking-widest mb-4">
            La base detrás de esto
          </p>
          <p className="text-slate-800 text-base md:text-lg font-semibold leading-relaxed mb-3">
            Un método de observación consciente basado en principios de neurociencia.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            Tu cerebro automatiza lo que repites. Por eso no puedes salir sola de esto
            solo con fuerza de voluntad. En 3 días vas a entender el mecanismo y vas
            a tener herramientas concretas para interrumpirlo.
          </p>
        </div>
      </section>

      {/* ── QUÉ ES DESPIERTA 72H ── */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xs font-black text-[#e8a0b0] uppercase tracking-widest mb-4">
            La solución
          </p>
          {/* CAMBIO: "para entenderte y gestionarte mejor" → "para empezar a observarte distinto" */}
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Una experiencia guiada de 3 días<br />
            para empezar a observarte distinto.
          </h2>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            No es terapia. No es meditación. Es un método de observación consciente basado en principios de neurociencia, traducido en microintervenciones que puedes hacer en tu día a día.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              {
                icon: <Sparkles className="w-5 h-5" />,
                day: "Día 1",
                title: "Tu cabeza baja el ruido",
                desc: "Primera microintervención: Haces pausas conscientes para observar qué está procesando tu cerebro sin que te des cuenta. Interrumpes el modo automático.",
              },
              {
                icon: <RefreshCw className="w-5 h-5" />,
                day: "Día 2",
                title: "Interrumpes el automático",
                desc: "Segunda microintervención: Observas en qué momentos reaccionas en automático y qué lo dispara. Lo que ves, ya no te controla igual.",
              },
              {
                icon: <Heart className="w-5 h-5" />,
                day: "Día 3",
                title: "Entiendes qué hay detrás",
                desc: "Tercera microintervención: Identificas la necesidad real detrás de cada reacción. Cuando la ves, se abre la posibilidad de elegir distinto.",
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
                    {card.day}
                  </span>
                </div>
                <h4 className="text-white font-black text-lg leading-tight mb-2">
                  {card.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-xs font-black text-[#7D1F3B] uppercase tracking-widest mb-4">
            Menos de 30 min al día
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-10">
            Tres momentos simples.<br />Sin clases en vivo. A tu ritmo.
          </h2>
          <div className="space-y-5 text-left">
            {[
              {
                emoji: "🎧",
                cuando: "Mañana",
                title: "Escuchas",
                desc: "Un audio guía de menos de 5 minutos para enfocar tu observación del día.",
              },
              {
                emoji: "👁",
                cuando: "Durante el día",
                title: "Observas",
                desc: "En pequeños momentos cotidianos, empiezas a notar cómo reaccionas y piensas. No tienes que hacer nada especial. Solo prestar atención.",
              },
              {
                emoji: "✍️",
                cuando: "Noche",
                title: "Escribes",
                desc: "Con el apoyo de una guía, registras lo que observaste. Ahí es donde ocurre la toma de conciencia real.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <div className="text-3xl shrink-0">{step.emoji}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#7D1F3B] font-black text-base">
                      {step.title}
                    </span>
                    <span className="text-slate-400 text-xs">— {step.cuando}</span>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
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

            {/* CREDENCIAL EXACTA — antes del relato */}
            <div className="bg-[#7D1F3B]/5 border border-[#7D1F3B]/15 rounded-xl px-5 py-4 mb-6 text-center">
              <p className="text-[#7D1F3B] text-sm font-semibold leading-relaxed">
                Certificada en Coaching Basado en Neurociencias por el
                NeuroLeadership Institute (acreditado ICF). Más de 20 años
                liderando operaciones comerciales en retail y servicios.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight text-center mb-6">
              Hola, soy Solange Henríquez.
            </h2>
            <div className="text-[15px] md:text-base text-slate-700 leading-[1.9] space-y-4">
              <p>
                Durante mucho tiempo viví funcionando sin detenerme realmente.
                Resolviendo. Respondiendo. Sosteniendo todo.
              </p>
              <p>
                Hasta que entendí que el cansancio muchas veces no aparece como
                una crisis. Aparece como vivir con la cabeza ocupada, seguir
                funcionando cuando ya no tienes energía. Sin saber explicar por qué.
              </p>
              <p>
                Ese proceso me llevó a certificarme en Coaching Basado en
                Neurociencias, para entender por qué vivimos tanto tiempo en
                automático sin darnos cuenta, y qué podemos hacer para interrumpirlo.
              </p>
              <p className="font-semibold text-slate-900">
                Despierta 72H nace desde ahí. No para exigirte más. Para que por
                fin entiendas qué te está pasando y tengas herramientas reales
                para empezar a gestionarlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BONUS ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="rounded-[1.8rem] bg-[#17132A] p-6 md:p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
            <p className="text-[#e8a0b0] text-xs font-black uppercase tracking-widest mb-4">
              Incluido sin costo extra
            </p>
            <img
              src="/bonus-portada.jpg.png"
              alt="Guía bonus Despierta 72H"
              className="w-full max-h-[300px] object-cover object-top rounded-2xl shadow-lg mb-6"
            />
            <h3 className="text-2xl md:text-3xl font-black leading-tight text-white mb-3">
              Guía descargable: Reconoce tus reacciones automáticas
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
              Una herramienta práctica para seguir usando el método después de los
              3 días. Cuando ves tus patrones antes, puedes empezar a reaccionar distinto.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>✓ Reaccionas y te das cuenta después</p>
              <p>✓ Tu cabeza no logra desconectarse</p>
              <p>✓ Sigues funcionando aunque estés agotada</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── URGENCIA + COUNTDOWN ── */}
      <section className="py-14 bg-[#7D1F3B]/5 border-y border-[#7D1F3B]/10">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-xs font-black text-[#7D1F3B] uppercase tracking-widest mb-3">
            Precio de lanzamiento
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
            Esta oferta termina en:
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-6">
            Cada semana que pasa sin entenderlo, el patrón se refuerza. Tu cerebro
            automatiza lo que repite. Salir sola se vuelve más difícil. Después
            de este período, el precio sube a $49.990 CLP.
          </p>
          <CountdownTimer />
          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton label="Acceder al precio de lanzamiento" size="lg" />
            <p className="text-sm text-slate-500">
              $29.990 CLP · Acceso por 1 año · Garantía 7 días
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
                a: "Necesitas menos de 30 minutos al día, en 3 momentos pequeños. El automático también se ve como no tener tiempo para parar. Eso es exactamente lo que vamos a trabajar.",
              },
              {
                q: '"¿Y si me cuesta empezar?"',
                a: "Está bien. Muchas veces el primer paso es simplemente darte cuenta de que llevas demasiado tiempo sin detenerte. No tienes que llegar lista.",
              },
              {
                q: '"¿Qué pasa si me olvido durante el día?"',
                a: "También es parte del proceso. Cuando te acuerdes, simplemente vuelves. No hay nada que hacer perfecto aquí.",
              },
              {
                q: '"¿Esto es como terapia?"',
                a: "No. Es un método de observación consciente basado en principios de neurociencia, traducido en microintervenciones concretas. No estás aquí para ser arreglada. Estás aquí para entenderte mejor y empezar a responder distinto.",
              },
              {
                q: '"Ya intenté meditación, apps, vacaciones... y volví igual."',
                a: "Porque ninguna de esas cosas trabaja el mecanismo. El problema no es que no tengas voluntad. Es que tu cerebro automatizó ese patrón. Despierta 72H trabaja exactamente eso: entender el mecanismo para poder interrumpirlo.",
              },
              {
                q: '"¿Y si tengo dudas mientras lo hago?"',
                a: "Tendrás canales de contacto disponibles durante todo el proceso. No estás sola.",
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
            Garantía de 7 días sin preguntas
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Si en los primeros 7 días sientes que esto no era para ti, te devolvemos
            el 100% de tu dinero. Sin formularios. Sin excusas.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            El mejor momento para empezar<br />era hace un mes.
          </h2>
          <p className="text-xl text-[#7D1F3B] font-bold mb-4">
            El segundo mejor momento es ahora.
          </p>
          <p className="text-slate-500 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Cada día que pasa funcionando así, el patrón se hace más automático.
            Tú puedes ser la primera en entender qué te está pasando y hacer algo distinto.
          </p>
          <div className="flex flex-col items-center gap-3 mb-6">
            <CTAButton label="Quiero empezar hoy" size="lg" />
            <p className="text-sm text-slate-500">
              $29.990 CLP · Acceso inmediato · Garantía 7 días
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
            Despierta 72H
          </p>
          <p className="text-slate-400 text-[10px] font-medium tracking-widest uppercase">
            © 2026
          </p>
        </div>
      </footer>

    </div>
  );
}
