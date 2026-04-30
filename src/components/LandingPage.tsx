export default function LandingPage() {
  const handlePurchase = () => {
    window.location.href = "https://pay.hotmart.com/O105550362E";
  };

  return (
    <div className="min-h-screen bg-white text-[#1F2933] font-sans leading-relaxed">
      {/* HERO */}
      <section className="px-6 pt-20 pb-14">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs tracking-[0.3em] text-[#9A7B6F]">
            DESPIERTA 72H
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            ESTÁS FUNCIONANDO…<br />
            PERO HACE RATO<br />
            QUE VAS EN<br />
            AUTOMÁTICO
          </h1>

          <p className="text-base text-[#4B5563]">
            Un espacio breve para reconectar contigo.
          </p>

          <button
            onClick={handlePurchase}
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] transition text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg"
          >
            Acceder ahora
          </button>

          <p className="text-sm text-[#6B7280]">
            $29.990 CLP · Garantía de 7 días
          </p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 bg-[#FAF7FF]">
        <div className="max-w-3xl mx-auto bg-white border border-[#E9DFFF] rounded-3xl p-10 md:p-12 text-left shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            ¿Te ha pasado esto?
          </h2>

          <ul className="space-y-4 text-[#4B5563] text-base">
            <li>Empiezas el día y sigues con lo que toca, casi sin pensarlo</li>
            <li>Cumples con todo, pero muchas veces vas en automático</li>
            <li>Te cuesta parar, incluso cuando tienes un momento para hacerlo</li>
            <li>Estás presente, pero con la cabeza en otra parte</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

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
   <section className="px-6 py-20 max-w-5xl mx-auto">
   <div className="bg-white rounded-3xl p-10">
      <h2 className="text-2xl font-semibold text-center mb-8">
  No necesitas hacerlo mejor.<br />
  Solo necesitas parar un momento.
</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 shadow-sm text-left transition hover:shadow-md hover:-translate-y-1">
    <p className="text-sm text-[#9A7C6A] mb-2">Día 1</p>
    <h3 className="font-semibold mb-2">Bajas el ruido</h3>
    <p className="text-sm text-gray-600">
      Tu mente se desacelera y aparece espacio para observar lo que te pasa.
    </p>
  </div>

 <div className="bg-white rounded-2xl p-6 shadow-sm text-left transition hover:shadow-md hover:-translate-y-1">
    <p className="text-sm text-[#7A5C4B] mb-2">Día 2</p>
    <h3 className="font-semibold mb-2">Te das cuenta del automático</h3>
    <p className="text-sm text-gray-600">
      Empiezas a reconocer tus reacciones antes de que ocurran y aparece un espacio para parar.
    </p>
  </div>

<div className="bg-white rounded-2xl p-6 shadow-sm text-left transition hover:shadow-md hover:-translate-y-1">
    <p className="text-sm text-[#7A5C4B] mb-2">Día 3</p>
    <h3 className="font-semibold mb-2">Identificas desde dónde estás actuando</h3>
    <p className="text-sm text-gray-600">
      Reconoces las emociones que están guiando tus respuestas, sin necesidad de cambiarlas.
    </p>
  </div>
</div>
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
         className="bg-gradient-to-r from-[#C4B5FD] to-[#8B5CF6] hover:from-[#A78BFA] hover:to-[#7C3AED] transition text-white px-8 py-4 rounded-full text-lg shadow-lg"
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



