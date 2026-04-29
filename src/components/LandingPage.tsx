type Props = {
  onPurchase?: () => void;
};

export default function LandingPage({ onPurchase }: Props) {
  const handlePurchase = () => {
    if (onPurchase) return onPurchase();
    window.location.href = "https://pay.hotmart.com/O105550362E";
  };

  return (
   <div className="bg-[#F7F3EE] text-[#1F2933] font-sans leading-relaxed">

      {/* HERO */}
     <section className="px-6 py-24 max-w-3xl mx-auto text-center">

 <p className="text-xs tracking-[0.3em] text-[#9A7B6F] mb-6">
    DESPIERTA 72H
  </p>

 <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
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
    className="bg-[#1F2933] text-white px-8 py-4 rounded-full text-lg"
  >
    Acceder ahora
  </button>

  <p className="text-sm text-[#6B7280] mt-4">
    $29.990 CLP · Garantía de 7 días
  </p>

</section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="font-bold mb-6">¿Te ha pasado esto?</h2>

        <ul className="space-y-3">
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

        <p className="mb-4">
          A tu ritmo. Sin exigencias.
        </p>

        <p>
          No necesitas hacerlo mejor.<br />
          Solo necesitas parar un momento.
        </p>
      </section>

      {/* DÍAS */}
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

      {/* SOBRE */}
      <section className="px-6 py-16 max-w-2xl mx-auto space-y-4">
        <h2 className="font-bold">Sobre esta experiencia</h2>

        <p>Soy Solange.</p>

        <p>
          Durante más de 20 años trabajé liderando equipos y procesos en contextos donde decidir bien no era opcional. Fue una etapa muy valiosa, que me dio estructura, criterio y experiencia.
        </p>

        <p>
          Pero no fue ahí donde más aprendí de verdad.
        </p>

        <p>
          Ese aprendizaje vino después, cuando me tocó vivir mis propios procesos y entender que muchas veces no se trata de resolver más rápido, sino de parar.
        </p>

        <p>
          En ese camino profundicé en neurociencia y me formé en neurocoaching, lo que me permitió entender mejor cómo funcionan nuestros patrones cuando estamos en automático o bajo exigencia.
        </p>

        <p>
          Despierta 72H nace desde ahí. No desde teoría, sino desde algo vivido y comprendido.
        </p>

        <p>
          Un espacio simple para bajar el ruido y volver a ti con más claridad.
        </p>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="px-6 py-16 max-w-2xl mx-auto space-y-4">
        <h2 className="font-bold">¿Cómo funciona esta experiencia?</h2>

        <p>
          Un proceso simple, guiado y pensado para que puedas parar sin exigencia.
        </p>

        <p className="mt-4 font-medium">Cada día tiene 3 momentos clave</p>

        <p><strong>En la mañana</strong><br />
        Escuchas un audio breve (3–5 min) que te invita a poner tu atención en situaciones específicas.</p>

        <p>No lo analizas. Solo observas.</p>

        <p><strong>Durante el día</strong><br />
        Empiezas a observar tus comportamientos frente a esas situaciones.</p>

        <p>Cuándo aparecen, qué los gatilla y cómo reaccionas.</p>

        <p><strong>En la noche</strong><br />
        Reflexionas y escribes en tu cuaderno.</p>

        <p>
          El escribir te permite ordenar lo que viviste y transformar la experiencia en aprendizaje.
        </p>

        <p className="mt-4">
          1<br />
          Detectas lo que aparece<br />
          2<br />
          Entiendes cuándo se activa<br />
          3<br />
          Y empiezas a intervenir con más consciencia
        </p>

        <p className="mt-4 font-medium">No necesitas hacerlo perfecto</p>

        <p>
          Si en 7 días no estás conforme, te hacemos devolución completa.
        </p>
      </section>

      {/* BONUS */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="font-bold mb-4">Bonus</h2>

        <p>
          7 señales de que estás en automático<br />
          y cómo salir de ahí
        </p>

        <p className="mt-4">
          Una guía breve para reconocer cuándo estás en automático y tener un punto claro para volver a ti cuando lo necesites.
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

        <p className="text-xs mt-8">
          Despierta 72H<br />
          © 2026 Despierta 72
        </p>
      </section>

    </div>
  );
}



