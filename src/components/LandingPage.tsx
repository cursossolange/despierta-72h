import { ArrowRight, CheckCircle, Clock, ShieldCheck, Heart, Sparkles } from "lucide-react";

type Props = {
  onPurchase?: () => void;
};

export default function LandingPage({ onPurchase }: Props) {
  const handlePurchase = () => {
    if (onPurchase) {
      onPurchase();
      return;
    }

    window.location.href = "https://pay.hotmart.com/O105550362E";
  };

  return (
    <div className="bg-[#F7F3EE] text-[#1F2933] font-sans">

      {/* HERO */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-[#7A5C4B] mb-5">
              Despierta 72H
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Estás funcionando… pero hace rato que vas en automático.
            </h1>

            <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-8">
              Una experiencia guiada de 72 horas para bajar el ruido, interrumpir el automático y volver a sentirte presente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={handlePurchase}
                className="bg-[#1F2933] text-white px-7 py-4 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition"
              >
                Acceder ahora <ArrowRight size={18} />
              </button>

              <p className="text-sm text-[#6B7280]">
                $29.990 CLP · Garantía de 7 días
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm">
            <div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-[#E8DDD2] to-[#C9B6A6] flex items-center justify-center text-center px-8">
              <p className="text-2xl md:text-3xl font-semibold text-[#1F2933] leading-snug">
                Solo necesitas una pausa real para empezar a volver a ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ¿Te ha pasado esto?
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Empiezas el día y sigues con lo que toca, casi sin pensarlo.",
              "Cumples con todo, pero muchas veces vas en automático.",
              "Te cuesta parar, incluso cuando tienes un momento para hacerlo.",
              "Estás presente, pero con la cabeza en otra parte.",
              "Sientes que algo ya no se siente igual, aunque no sabes bien cómo explicarlo.",
              "No estás mal… pero tampoco estás bien."
            ].map((item) => (
              <div key={item} className="border border-[#E5E0DA] rounded-2xl p-5 bg-[#FAF7F3]">
                <p className="text-[#374151] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMESA */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="mx-auto mb-5 text-[#7A5C4B]" size={34} />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            No necesitas resolver tu vida en tres días.
          </h2>

          <p className="text-lg text-[#4B5563] leading-relaxed">
            Despierta 72H no promete decisiones mágicas. Te ofrece algo más simple y más posible:
            parar, observar lo que te está pasando y empezar a salir del piloto automático con una guía clara.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-[#1F2933] text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-xs text-[#D8C4B4] mb-4">
            La experiencia
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            72 horas, 3 momentos, una pausa distinta.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-3xl p-6">
              <p className="text-sm text-[#D8C4B4] mb-3">Día 1</p>
              <h3 className="text-xl font-semibold mb-3">Detectar</h3>
              <p className="text-white/80 leading-relaxed">
                Empiezas a escuchar tu ruido interior. No lo analizas. No lo peleas. Solo comienzas a observarlo.
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-6">
              <p className="text-sm text-[#D8C4B4] mb-3">Día 2</p>
              <h3 className="text-xl font-semibold mb-3">Entender</h3>
              <p className="text-white/80 leading-relaxed">
                Pones atención a cuándo aparece ese ruido, qué lo gatilla y cómo se manifiesta en tu día.
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-6">
              <p className="text-sm text-[#D8C4B4] mb-3">Día 3</p>
              <h3 className="text-xl font-semibold mb-3">Intervenir</h3>
              <p className="text-white/80 leading-relaxed">
                Empiezas a hacer algo distinto con eso que observaste. Una primera forma de volver a estar presente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUE INCLUYE */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Qué incluye?
            </h2>

            <p className="text-lg text-[#4B5563] leading-relaxed">
              Una experiencia breve, simple y guiada para que puedas hacerla a tu ritmo, sin exigirte más.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Audios breves de 3 a 5 minutos.",
              "Ejercicios simples para observarte durante el día.",
              "Una guía escrita para registrar lo que vas descubriendo.",
              "Acceso inmediato después de la compra.",
              "Garantía de 7 días."
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <CheckCircle className="text-[#7A5C4B] mt-1" size={20} />
                <p className="text-[#374151] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIEN */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <Heart className="text-[#7A5C4B] mb-4" size={30} />
            <h2 className="text-2xl font-bold mb-5">Es para ti si…</h2>
            <ul className="space-y-3 text-[#4B5563]">
              <li>• Sientes que estás funcionando, pero desconectada de ti.</li>
              <li>• Necesitas bajar el ruido mental.</li>
              <li>• Quieres una pausa guiada, breve y concreta.</li>
              <li>• Buscas reconectar sin exigirte resolverlo todo ahora.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <ShieldCheck className="text-[#7A5C4B] mb-4" size={30} />
            <h2 className="text-2xl font-bold mb-5">No es para ti si…</h2>
            <ul className="space-y-3 text-[#4B5563]">
              <li>• Buscas terapia o acompañamiento clínico.</li>
              <li>• Quieres una solución instantánea.</li>
              <li>• No quieres detenerte a observar nada.</li>
              <li>• Necesitas un proceso largo y personalizado.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="bg-[#FAF7F3] px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-xs text-[#7A5C4B] mb-4">
            Quién guía esta experiencia
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soy Solange.
          </h2>

          <p className="text-lg text-[#4B5563] leading-relaxed mb-5">
            Soy mujer, profesional y sobre todo madre de dos hijas que son lo más importante en mi vida.
          </p>

          <p className="text-lg text-[#4B5563] leading-relaxed mb-5">
            Viví esta sensación en un momento muy complicado de mi vida, con muchas cosas cambiando, transformándose y poniendo a prueba creencias con las que había crecido.
          </p>

          <p className="text-lg text-[#4B5563] leading-relaxed">
            En ese momento lo único que quería era resolver rápido. Pero aprendí que muchas veces el proceso determina el resultado, y que para poder continuar, primero hay que parar.
          </p>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Clock className="mx-auto mb-5 text-[#7A5C4B]" size={34} />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lo que puedes empezar a notar después de 72 horas
          </h2>

          <p className="text-lg text-[#4B5563] leading-relaxed mb-10">
            Más que una gran respuesta, esta experiencia busca ayudarte a conseguir una primera victoria: darte cuenta, bajar el ruido y volver a estar un poco más contigo.
          </p>

          <div className="grid md:grid-cols-3 gap-5 text-left">
            {[
              "Mayor claridad sobre lo que te está pasando.",
              "Más conciencia de tus patrones automáticos.",
              "Una primera sensación de pausa y reconexión."
            ].map((item) => (
              <div key={item} className="bg-[#F7F3EE] rounded-2xl p-5">
                <p className="text-[#374151] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center bg-[#1F2933] text-white rounded-[2rem] p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Puedes seguir funcionando en automático… o puedes darte una pausa real.
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Empieza hoy Despierta 72H y regálate tres días para bajar el ruido y volver a escucharte.
          </p>

          <button
            onClick={handlePurchase}
            className="bg-white text-[#1F2933] px-7 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:opacity-90 transition"
          >
            Acceder ahora <ArrowRight size={18} />
          </button>

          <p className="text-sm text-white/60 mt-5">
            $29.990 CLP · Acceso inmediato · Garantía de 7 días
          </p>
        </div>
      </section>

    </div>
  );
}



