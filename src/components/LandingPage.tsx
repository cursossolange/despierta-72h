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

      {/* PROMESA */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
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
                Empiezas a reconocer tus reacciones antes de que ocurran.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm text-left transition hover:shadow-md hover:-translate-y-1">
              <p className="text-sm text-[#7A5C4B] mb-2">Día 3</p>
              <h3 className="font-semibold mb-2">Identificas desde dónde actúas</h3>
              <p className="text-sm text-gray-600">
                Reconoces las emociones que están guiando tus respuestas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="font-bold mb-4">Lo que te llevas</h2>
        <p>
          Reconoces cuando estás en automático y puedes parar para elegir distinto.
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
      </section>

    </div>
  );
}
