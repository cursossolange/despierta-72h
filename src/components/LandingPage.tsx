import { ArrowRight } from "lucide-react";

type Props = {
  onPurchase: () => void;
};

export default function LandingPage({ onPurchase }: Props) {
  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* HERO */}
      <section className="text-center px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          ESTÁS FUNCIONANDO…<br />
          PERO HACE RATO QUE VAS EN AUTOMÁTICO
        </h1>

        <p className="text-base md:text-lg text-slate-600 mb-8">
          Una experiencia guiada de 72 horas para bajar el ruido, interrumpir el automático
          y volver a sentirte presente.
        </p>

        <button
          onClick={onPurchase}
          className="bg-black text-white px-8 py-4 rounded-full text-sm tracking-wide uppercase flex items-center gap-2 mx-auto"
        >
          Acceder ahora <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-xs text-slate-400 mt-4">
          $29.990 CLP · Garantía de 7 días
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="bg-slate-50 px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="mb-3">Empiezas el día y sigues con lo que toca, casi sin pensarlo</p>
          <p className="mb-3">Cumples con todo, pero vas en automático</p>
          <p className="mb-3">Te cuesta parar, incluso cuando puedes</p>
          <p>Estás presente, pero con la cabeza en otra parte</p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">
            En solo 72 horas…
          </h2>

          <p className="mb-3">Empiezas a salir del automático</p>
          <p className="mb-3">Observas tus patrones sin juicio</p>
          <p className="mb-3">Recuperas claridad mental</p>
          <p>Vuelves a sentirte presente</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center px-6 py-16 bg-black text-white">
        <h3 className="text-xl mb-6">
          No necesitas más tiempo. Necesitas parar.
        </h3>

        <button
          onClick={onPurchase}
          className="bg-white text-black px-8 py-4 rounded-full text-sm tracking-wide uppercase flex items-center gap-2 mx-auto"
        >
          Salir del automático <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-xs text-slate-400">
        © 2026 Despierta 72H
      </footer>

    </div>
  );
}
