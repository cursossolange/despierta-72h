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
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.25em] text-[#7A5C4B] mb-4">
          DESPIERTA 72H
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          ESTÁS FUNCIONANDO…<br />
          PERO HACE RATO<br />
          QUE VAS EN<br />
          AUTOMÁTICO
        </h1>

        <p className="text-lg text-[#4B5563] mb-6">
          Un espacio breve para reconectar contigo.
        </p>

        <p className="text-sm text-[#9CA3AF] mb-10">
          Retrato introspectivo generado por IA
        </p>

        <button
          onClick={handlePurchase}
          className="bg-[#1F2933] text-white px-6 py-4 rounded-full font-semibold"
        >
          Acceder ahora
        </button>

        <p className="text-sm text-[#6B7280] mt-3">
          $29.990 CLP · Garantía de 7 días
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            ¿Te ha pasado esto?
          </h2>

          <ul className="space-y-4 text-[#374151]">
            <li>Empiezas el día y sigues con lo que toca, casi sin pensarlo</li>
            <li>Cumples con todo, pero muchas veces vas en automático</li>
            <li>Te cuesta parar, incluso cuando tienes un momento para hacerlo</li>
            <li>Estás presente, pero con la cabeza en otra parte</li>
          </ul>
        </div>
      </section>

      {/* PROMESA */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          En solo 72 horas…
        </h2>

        <p className="text-[#4B5563] mb-4">
          Empiezas a salir del automático y a volver a sentirte presente.
        </p>

        <p className="text-[#6B7280]">
          A tu ritmo. Sin exigencias.
        </p>

        <p className="mt-6 text-[#1F2933] font-medium">
          No necesitas hacerlo mejor.<br />
          Solo necesitas parar un momento.
        </p>
      </section>

      {/* 3 DÍAS */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h3 className="font-bold mb-2">Día 1</h3>
            <p className="font-medium mb-1">Bajas el ruido</p>
            <p className="text-[#4B5563]">
              Tu mente se desacelera y aparece espacio para observar lo que te pasa.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Día 2</h3>
            <p className="font-medium mb-1">Te das cuenta del automático</p>
            <p className="text-[#4B5563]">
              Empiezas a reconocer tus reacciones antes de que ocurran y aparece un espacio para parar.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Día 3</h3>
            <p className="font-medium mb-1">Identificas desde dónde estás actuando</p>
            <p className="text-[#4B5563]">
              Reconoces las emociones que están guiando tus respuestas, sin necesidad de cambiarlas.
            </p>
          </div>

        </div>
      </section>

      {/* RESULTADO */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Lo que te llevas
        </h2>

        <p className="text-[#4B5563]">
          Reconoces cuando estás en automático y puedes parar para elegir distinto.
        </p>
      </section>

      {/* SOBRE TI */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl font-bold">
            Sobre esta experiencia
          </h2>

          <p>Soy Solange.</p>

          <p>
            Durante más de 20 años trabajé liderando equipos y procesos en contextos donde decidir bien no era opcional.
          </p>

          <p>
            Pero no fue ahí donde más aprendí de verdad.
          </p>

          <p>
            Ese aprendizaje vino después, cuando me tocó vivir mis propios procesos y entender que muchas veces no se trata de resolver más rápido, sino de parar.
          </p>

          <p>
            Despierta 72H nace desde ahí. No desde teoría, sino desde algo vivido y comprendido.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-16 max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">
          ¿Cómo funciona esta experiencia?
        </h2>

        <p>
          Cada día tiene 3 momentos clave:
        </p>

        <ul className="space-y-4 text-[#4B5563]">
          <li><strong>En la mañana:</strong> escuchas un audio breve (3–5 min)</li>
          <li><strong>Durante el día:</strong> observas tus comportamientos</li>
          <li><strong>En la noche:</strong> escribes y reflexionas</li>
        </ul>

        <p className="mt-6">
          1. Detectas lo que aparece<br />
          2. Entiendes cuándo se activa<br />
          3. Empiezas a intervenir con más consciencia
        </p>
      </section>

      {/* GARANTÍA */}
      <section className="bg-white px-6 py-16 text-center">
        <p className="text-[#4B5563]">
          Si en 7 días no estás conforme, te hacemos devolución completa.
        </p>
      </section>

      {/* BONUS */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Bonus
        </h2>

        <p className="text-[#4B5563]">
          7 señales de que estás en automático y cómo salir de ahí.
        </p>

        <p className="mt-4 text-[#6B7280]">
          Y muchas veces, parar ya es suficiente para empezar.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center">
        <button
          onClick={handlePurchase}
          className="bg-[#1F2933] text-white px-6 py-4 rounded-full font-semibold"
        >
          Acceder ahora
        </button>

        <p className="text-sm text-[#6B7280] mt-4">
          Pago seguro · Garantía total
        </p>

        <p className="text-xs text-[#9CA3AF] mt-8">
          Despierta 72H © 2026
        </p>
      </section>

    </div>
  );
}



