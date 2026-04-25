type LandingPageProps = {
  onPurchase: () => void;
};

export default function LandingPage({ onPurchase }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-[#F7F2EC] text-[#251F1C]">
      <section className="px-6 py-20 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#8A5A44]">
          Despierta 72H
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          ESTÁS FUNCIONANDO… <br />
          PERO HACE RATO QUE ALGO NO SE SIENTE IGUAL
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#5D514B]">
          Una experiencia guiada de 72 horas para bajar el ruido, interrumpir el
          automático y volver a sentirte presente.
        </p>

        <p className="mt-4 text-[#5D514B]">
          Solo un espacio breve para reconectar contigo.
        </p>

        <div className="mx-auto mt-10 flex h-72 max-w-3xl items-center justify-center rounded-3xl bg-[#E7D8CC] text-[#8A5A44]">
          Retrato introspectivo generado por IA
        </div>

        <button
          onClick={onPurchase}
          className="mt-10 rounded-full bg-[#251F1C] px-8 py-4 text-white transition hover:opacity-90"
        >
          Acceder ahora
        </button>

        <p className="mt-4 text-sm text-[#6B5E57]">
          $29.990 CLP · Garantía de 7 días
        </p>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">¿Te ha pasado esto?</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Te levantas y empiezas el día sin mucho ánimo",
              "Cumples con todo, pero algo no se siente igual",
              "Te cuesta parar, incluso cuando estás cansada",
              "Sientes que estás, pero no del todo presente",
            ].map((text) => (
              <div key={text} className="rounded-2xl bg-[#F7F2EC] p-6 text-[#251F1C]">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">En solo 72 horas…</h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5D514B]">
          Empiezas a salir del automático y a volver a sentirte presente.
        </p>

        <p className="mt-3 text-[#5D514B]">A tu ritmo. Sin exigencias.</p>

        <h3 className="mt-12 text-4xl font-semibold">
          No necesitas más esfuerzo.
          <br />
          Necesitas parar.
        </h3>
      </section>

      <section className="bg-[#251F1C] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">
            Lo que empieza a moverse en ti
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                day: "Día 1",
                title: "Bajas el ruido",
                text: "Tu mente se desacelera y aparece espacio para observar lo que te pasa.",
              },
              {
                day: "Día 2",
                title: "Interrumpes patrones",
                text: "Te das cuenta de tus reacciones automáticas antes de que ocurran.",
              },
              {
                day: "Día 3",
                title: "Vuelves a estar presente",
                text: "Momentos de conexión real contigo, sin exigencia de tener todo claro.",
              },
            ].map((item) => (
              <div key={item.day} className="rounded-3xl bg-white/10 p-6">
                <p className="text-sm text-[#D8BFAF]">{item.day}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold">
            Esto es lo que empieza a cambiar
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-[#F7F2EC] p-8">
              <h3 className="text-xl font-semibold">Antes</h3>
              <ul className="mt-5 space-y-3 text-[#5D514B]">
                <li>Sigues en automático</li>
                <li>Te cuesta parar</li>
                <li>Estás, pero no presente</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-[#251F1C] p-8 text-white">
              <h3 className="text-xl font-semibold">Después</h3>
              <ul className="mt-5 space-y-3 text-white/75">
                <li>Sientes menos ruido y más claridad</li>
                <li>Consciencia antes de reaccionar</li>
                <li>Más presente, sin exigencia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10">
          <h2 className="text-3xl font-semibold">Sobre esta experiencia</h2>

          <p className="mt-6 text-lg leading-relaxed text-[#5D514B]">
            Soy Solange Henríquez.
          </p>

          <p className="mt-4 leading-relaxed text-[#5D514B]">
            Más de 20 años acompañando procesos de transformación organizacional
            y personal, desde la toma de decisiones, el comportamiento humano y
            el neurocoaching.
          </p>

          <p className="mt-4 leading-relaxed text-[#5D514B]">
            Este proceso también lo he vivido yo. Despierta 72H nace de lo real.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">
            ¿Cómo funciona esta experiencia?
          </h2>

          <p className="mt-4 text-[#5D514B]">
            Un proceso simple, guiado y a tu ritmo.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Audios breves (8–10 min) que puedes escuchar cuando quieras",
              "Ejercicios simples para ordenar lo que sientes, sin exigencia",
              "Una guía que te acompaña de forma cercana",
              "Un cierre que te deja con más claridad, no más dudas",
            ].map((text) => (
              <div key={text} className="rounded-2xl bg-[#F7F2EC] p-6 text-[#251F1C]">
                {text}
              </div>
            ))}
          </div>

          <p className="mt-8 text-[#5D514B]">
            Puedes hacerlo en menos de 30 minutos al día, a tu ritmo.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">No necesitas hacerlo perfecto</h2>
        <p className="mt-4 text-[#5D514B]">Puedes hacerlo a tu ritmo.</p>
        <p className="mt-2 text-[#5D514B]">Sin horarios, sin presión.</p>

        <p className="mt-6 font-medium text-[#251F1C]">
          Si en 7 días no es para ti, devolución completa.
        </p>
      </section>

      <section className="bg-[#E7D8CC] px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8A5A44]">
            Bonus
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            7 señales de que estás en automático y cómo salir de ahí
          </h2>

          <p className="mt-5 leading-relaxed text-[#5D514B]">
            Una guía breve para reconocer cuándo estás en automático y tener un
            punto claro para volver a ti cuando lo necesites.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">
          Esta puede ser tu primera victoria.
        </h2>

        <button
          onClick={onPurchase}
          className="mt-10 rounded-full bg-[#251F1C] px-8 py-4 text-white transition hover:opacity-90"
        >
          Acceder ahora
        </button>

        <p className="mt-4 text-sm text-[#6B5E57]">
          Pago seguro · Garantía total
        </p>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-[#6B5E57]">
        Despierta 72H
      </footer>
    </main>
  );
}
