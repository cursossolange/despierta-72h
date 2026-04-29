type Props = {
  onPurchase?: () => void;
};

export default function LandingPage({ onPurchase }: Props) {
  const handlePurchase = () => {
    if (onPurchase) return onPurchase();
    window.location.href = "https://pay.hotmart.com/O105550362E";
  };

  return (
    <div className="bg-white text-black font-sans">

      {/* HERO */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <p className="text-sm tracking-widest mb-6">Despierta 72H</p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          ESTÁS FUNCIONANDO…<br />
          PERO HACE RATO<br />
          QUE VAS EN<br />
          AUTOMÁTICO
        </h1>

        <p className="mb-6">
          Un espacio breve para reconectar contigo.
        </p>

        <p className="text-sm text-gray-500 mb-10">
          Retrato introspectivo generado por IA
        </p>

        <button
          onClick={handlePurchase}
          className="bg-black text-white px-6 py-3 rounded-full mb-2"
        >
          Acceder ahora
        </button>

        <p className="text-sm text-gray-500">
          $29.990 CLP · Garantía de 7 días
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="font-bold mb-6">¿Te ha pasado esto?</h2>

        <ul className="space-y-4">
          <li>Empiezas el día y sigues con lo que toca, casi sin pensarlo</li>
          <li>Cumples con todo, pero muchas veces vas en automático</li>
          <li>Te cuesta parar, incluso cuando tienes un momento para hacerlo</li>
          <li>Estás presente, pero con la cabeza en otra parte</li>
        </ul>
      </section>

      {/* PROMESA */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="font-bold mb-4">En solo 72 horas…</h2>

        <p className="mb-4">
          Empiezas a salir del automático y a volver a sentirte presente.
        </p>

        <p className="mb-4">A tu ritmo. Sin exigencias.</p>

        <p>
          No necesitas hacerlo mejor.<br />
          Solo necesitas parar un momento.
        </p>
      </section>

      {/* DIAS */}
      <section className="px-6 py-16 max-w-2xl mx-auto space-y-10">
        <div>
          <p className="font-bold">Día 1</p>
          <p>Bajas el ruido</p>
          <p>Tu mente se desacelera y aparece espacio para observar lo que te pasa.</p>
        </div>

        <div>
          <p className="font-bold">Día 2</p>
          <p>Te das cuenta del automático</p>
          <p>Empiezas a reconocer tus reacciones antes de que ocurran y aparece un espacio para parar.</p>
        </div>

        <div>
          <p className="font-bold">Día 3</p>
          <p>Identificas desde dónde estás actuando</p>
          <p>Reconoces las emociones que están guiando tus respuestas, sin necesidad de cambiarlas.</p>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="font-bold mb-4">Lo que te llevas</h2>

        <p>
          Reconoces cuando estás en automático y puedes parar para elegir distinto.
        </p>
      </section>

      {/* SOBRE TI */}
      <section className="px-6 py-16 max-w-2xl mx-auto space-y-4">
        <h2 className="font-bold">Sobre esta experiencia</h2>

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
          En ese camino profundicé en neurociencia y me formé en neurocoaching.
        </p>

        <p>
          Despierta 72H nace desde ahí. No desde teoría, sino desde algo vivido y comprendido.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-16 max-w-2xl mx-auto space-y-4">
        <h2 className="font-bold">¿Cómo funciona esta experiencia?</h2>

        <p>
          Cada día tiene 3 momentos clave
        </p>

        <p><strong>En la mañana:</strong> escuchas un audio breve (3–5 min)</p>
        <p><strong>Durante el día:</strong> observas tus comportamientos</p>
        <p><strong>En la noche:</strong> reflexionas y escribes</p>

        <p className="mt-4">
          1. Detectas lo que aparece<br />
          2. Entiendes cuándo se activa<br />
          3. Empiezas a intervenir con más consciencia
        </p>
      </section>

      {/* GARANTIA */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <p>
          Si en 7 días no estás conforme, te hacemos devolución completa.
        </p>
      </section>

      {/* BONUS */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="font-bold mb-4">Bonus</h2>

        <p>
          7 señales de que estás en automático y cómo salir de ahí.
        </p>

        <p className="mt-4">
          Y muchas veces, parar ya es suficiente para empezar.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-16 text-center">
        <button
          onClick={handlePurchase}
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Acceder ahora
        </button>

        <p className="text-sm mt-3">
          Pago seguro · Garantía total
        </p>

        <p className="text-xs mt-6">
          Despierta 72H © 2026
        </p>
      </section>

    </div>
  );
}



