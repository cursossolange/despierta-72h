import { motion } from "motion/react";
import { Check, ArrowRight, Play, Volume2, Brain, Zap, Clock, ShieldCheck, RefreshCw, Sparkles, Trophy, Heart } from "lucide-react";
// import { GoogleGenAI } from "@google/genai";
import { useState, useEffect } from "react";

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const AIGeneratedEmotionalImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(FALLBACK_IMAGE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fallback high-quality image that matches the "introspective/mirror" aesthetic
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80";

  const generateImage = async (forceReset = false) => {
    try {
      setLoading(true);
      setError(false);

      // 1. Check if we have a cached image
      const cachedImage = localStorage.getItem('last_generated_emotional_image_v3');
      if (cachedImage && !forceReset) {
        setImageUrl(cachedImage);
        setLoading(false);
        return;
      }

      //const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: 'A cinematic and deeply introspective portrait of a woman, captured in a moment of profound stillness and self-reflection. She is looking into a circular mirror, her expression transitioning from exhaustion to a glimmer of presence and self-recognition. Soft, natural morning light filters through a window, highlighting the texture of her hair and the depth in her eyes. Minimalist, modern interior with a warm, calming atmosphere. High quality photography, muted natural colors, shallow depth of field, conveying the concept of "Despierta 72H" (Awaken 72H) - a pause to tune back in.',
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
          },
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          const fullImageUrl = `data:image/png;base64,${base64EncodeString}`;
          setImageUrl(fullImageUrl);
          // 2. Cache it to avoid repeated quota usage
          localStorage.setItem('last_generated_emotional_image_v3', fullImageUrl);
          break;
        }
      }
    } catch (err: any) {
      const errorString = err?.toString() || "";
      const errorMessage = err?.message || "";
      const errorCode = err?.error?.code || err?.code;
      const errorStatus = err?.error?.status || err?.status;
      
      const isQuotaError = 
        errorCode === 429 ||
        errorStatus === "RESOURCE_EXHAUSTED" ||
        errorString.includes("429") || 
        errorMessage.includes("429") || 
        errorString.includes("RESOURCE_EXHAUSTED") ||
        errorMessage.includes("RESOURCE_EXHAUSTED") ||
        errorString.includes("quota") ||
        errorMessage.includes("quota");

      if (isQuotaError) {
        // Silently fallback without alarming error logs
        setImageUrl(FALLBACK_IMAGE);
      } else {
        console.warn("Image generation failed, using fallback:", errorMessage || errorString);
        setImageUrl(FALLBACK_IMAGE);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateImage();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="w-8 h-8 text-violet-200 animate-spin" />
          <span className="text-xs text-slate-400 font-medium tracking-widest uppercase italic">Conectando con tu calma...</span>
        </div>
      </div>
    );
  }

  return (
 
<img
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
  alt="Retrato introspectivo"
  className="w-full h-full object-cover"
/>
  );
};

const Isotype = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`${className} -rotate-[20deg]`} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
    {/* Circle with a more visible intentional gap, rotated for asymmetry */}
    <path d="M 67.5 19.7 A 35 35 0 1 1 32.5 19.7" />
  </svg>
);

const Logo = ({ className }: { className?: string }) => (
  <div className={`flex flex-col items-center text-center ${className}`}>
    <div className="bg-gradient-to-b from-[#1E202E] to-[#3B344D] p-7 rounded-2xl flex flex-col items-center border border-white/5 shadow-xl">
      <div className="relative w-[72px] h-[72px] mb-4">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-[20deg]" fill="none" stroke="#C4B5FD" strokeWidth="6" strokeLinecap="round">
          <path d="M 67.5 19.7 A 35 35 0 1 1 32.5 19.7" />
        </svg>
      </div>
      <span className="text-xs font-medium tracking-[0.4em] uppercase text-white">
        Despierta 72H
      </span>
    </div>
  </div>
);

interface LandingPageProps {
  onPurchase: () => void;
}

export default function LandingPage({ onPurchase }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-violet-100 selection:text-violet-900 leading-normal">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-8 pb-6 md:pt-10 md:pb-8 bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Logo area */}
            <div className="flex flex-col items-center mb-6 md:mb-8">
              <div className="bg-gradient-to-b from-[#1E202E] to-[#3B344D] p-2.5 md:p-3 rounded-xl flex flex-col items-center border border-white/5 shadow-lg">
                <div className="relative w-7 h-7 md:w-8 md:h-8 mb-1">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-[20deg]" fill="none" stroke="#C4B5FD" strokeWidth="6" strokeLinecap="round">
                    <path d="M 67.5 19.7 A 35 35 0 1 1 32.5 19.7" />
                  </svg>
                </div>
                <span className="text-[8px] md:text-[9px] font-bold text-white tracking-[0.4em] uppercase">
                  Despierta 72H
                </span>
              </div>
            </div>

            {/* 1. Título principal (grande pero ajustado) */}
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mt-0 mb-4 md:mb-6 leading-tight max-w-2xl mx-auto uppercase">
              <span className="md:hidden">
                ESTÁS FUNCIONANDO…<br />
                PERO HACE RATO<br />
                QUE ALGO NO SE<br />
                SIENTE IGUAL
              </span>
              <span className="hidden md:inline">
                ESTÁS FUNCIONANDO…<br />
                PERO HACE RATO QUE ALGO NO SE SIENTE IGUAL
              </span>
            </h1>

            {/* 2. Subtítulo (más liviano) */}
            <p className="text-base md:text-lg text-slate-700 font-medium max-w-xl mx-auto mb-4 md:mb-5 leading-relaxed px-4 md:px-0">
              Una experiencia guiada de 72 horas para bajar el ruido, interrumpir el automático y volver a sentirte presente.
            </p>

            {/* 3. Bajada breve */}
            <div className="max-w-xl mx-auto mb-6 md:mb-8">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold italic">
                Solo un espacio breve para reconectar contigo.
              </p>
            </div>

            {/* Principal Hero Image (Compacta) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="max-w-md mx-auto overflow-hidden rounded-xl shadow-lg border border-slate-50 mb-8 opacity-90"
            >
              <div className="relative aspect-[16/9]">
                <AIGeneratedEmotionalImage />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Principal CTA Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={onPurchase}
                className="bg-violet-600 text-white px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-violet-700 shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-3 group"
              >
                <span className="uppercase tracking-widest text-xs md:text-sm">Acceder ahora</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </button>
              <p className="mt-3 text-[9px] md:text-[10px] text-slate-500 font-semibold tracking-wide">
                $29.990 CLP · Garantía de 7 días
              </p>
            </div>
          </motion.div>
        </div>
      </header>
      
      {/* ¿Te ha pasado esto? Section (Compacta) */}
      <section className="py-8 bg-violet-50/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-base md:text-lg font-black text-slate-900 mb-3 uppercase tracking-[0.1em]">¿Te ha pasado esto?</h2>
          <div className="max-w-2xl mx-auto space-y-1.5 text-slate-700 font-semibold italic">
            <p className="text-sm md:text-base">Te levantas y empiezas el día sin mucho ánimo</p>
            <p className="text-sm md:text-base">Cumples con todo, pero algo no se siente igual</p>
            <p className="text-sm md:text-base">Te cuesta parar, incluso cuando estás cansada</p>
            <p className="text-sm md:text-base">Sientes que estás, pero no del todo presente</p>
          </div>
        </div>
      </section>

      {/* Emotional Bridge Section (Compacta) */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto rounded-2xl bg-slate-800/95 p-6 md:p-8 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight tracking-tight">
                En solo 72 horas…
              </h2>
              <div className="text-sm md:text-lg text-slate-300 space-y-2 leading-snug">
                <p>Empiezas a salir del automático y a volver a sentirte presente.</p>
                <p className="italic text-violet-300 font-light text-xs md:text-sm">A tu ritmo. Sin exigencias.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neuro Section (Benefits) - Más Compacta */}
      <section className="py-8 bg-violet-50/50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[2rem] border border-violet-100 p-6 md:p-8 shadow-sm text-center">
            <div className="max-w-2xl mx-auto mb-6 text-center">
              <h2 className="text-lg md:text-2xl font-black text-slate-900 leading-tight">
                No necesitas más esfuerzo.<br />Necesitas parar.
              </h2>
            </div>

            <h3 className="text-[11px] md:text-[13px] font-black text-violet-700 uppercase tracking-[0.2em] mb-6 inline-block border-b-2 border-violet-100 pb-1">
              Lo que empieza a moverse en ti
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { day: "Día 1", title: "Bajas el ruido", sub: "Tu mente se desacelera y aparece espacio para observar lo que te pasa.", icon: <Sparkles className="w-5 h-5 text-violet-600" /> },
                { day: "Día 2", title: "Interrumpes patrones", sub: "Te das cuenta de tus reacciones automáticas antes de que ocurran.", icon: <RefreshCw className="w-5 h-5 text-violet-600" /> },
                { day: "Día 3", title: "Vuelves a estar presente", sub: "Momentos de conexión real contigo, sin exigencia de tener todo claro.", icon: <Heart className="w-5 h-5 text-violet-600" /> }
              ].map((card, i) => (
                <div key={i} className="bg-violet-50/10 p-4 md:p-5 rounded-2xl border border-violet-100 shadow-[0_1px_4px_rgba(139,92,246,0.05)] text-left flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1 bg-white rounded-md shadow-sm border border-violet-50">{card.icon}</div>
                    <span className="text-[16px] font-black text-violet-500 uppercase tracking-widest leading-none">{card.day}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-slate-900 mb-3 leading-tight font-sans">
                    {card.title}
                  </h4>
                  <p className="text-slate-700 text-[13px] leading-relaxed font-medium">
                    {card.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Antes / Después Section - Compacto */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-50/80 rounded-[2rem] border border-slate-100 py-8 md:py-10 px-6 md:px-12 max-w-3xl mx-auto shadow-sm">
            <p className="text-xs md:text-sm font-black text-slate-900 text-center uppercase tracking-[0.2em] mb-6">
              Esto es lo que empieza a cambiar
            </p>
            <div className="max-w-lg mx-auto space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-black text-violet-700 uppercase tracking-[0.3em] flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-violet-700/20" /> Antes
                </h3>
                <ul className="space-y-1.5">
                  {["Sigues en automático", "Te cuesta parar", "Estás, pero no presente"].map((text, i) => (
                    <li key={i} className="flex gap-2.5 text-slate-700 font-semibold text-sm">
                      <div className="w-1.5 h-0.5 bg-slate-300 mt-2 shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative py-1">
                <div className="h-px w-full bg-slate-200" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-2 rounded-full border border-slate-200 text-slate-400">
                  <RefreshCw className="w-2.5 h-2.5" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-black text-violet-700 uppercase tracking-[0.3em] flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-violet-700" /> Después
                </h3>
                <ul className="space-y-2">
                  {["Sientes menos ruido y más claridad", "Consciencia antes de reaccionar", "Más presente, sin exigencia"].map((text, i) => (
                    <li key={i} className="flex gap-2.5 text-slate-900 font-semibold text-sm">
                      <div className="w-4.5 h-4.5 rounded bg-violet-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section - Compacto */}
      <section className="py-8 bg-violet-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto rounded-[2rem] bg-white border border-violet-100 p-6 md:p-8 shadow-sm flex flex-col items-center text-center">
            <h3 className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] mb-4">Sobre esta experiencia</h3>
            <div className="space-y-3 max-w-lg">
              <p className="text-base md:text-lg font-black text-slate-900">Soy Solange Henríquez.</p>
              <div className="text-sm md:text-base text-slate-800 leading-snug font-semibold">
                <p>Más de <span className="text-violet-700 font-black">20 años</span> acompañando procesos de transformación organizacional y personal, desde la toma de decisiones, el comportamiento humano y el neurocoaching.</p>
                <p className="italic text-slate-500 font-medium text-xs mt-2">Este proceso también lo he vivido yo. Despierta 72H nace de lo real.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona esta experiencia? */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-lg md:text-xl font-black text-slate-900 mb-1 uppercase tracking-wider">
              ¿Cómo funciona esta experiencia?
            </h2>
            <p className="text-sm md:text-base text-slate-700 font-semibold mb-8">Un proceso simple, guiado y a tu ritmo.</p>
            
            <div className="text-left space-y-4 mb-8">
              {[
                "Audios breves (8–10 min) que puedes escuchar cuando quieras",
                "Ejercicios simples para ordenar lo que sientes, sin exigencia",
                "Una guía que te acompaña de forma cercana (no te deja sola pensando)",
                "Un cierre que te deja con más claridad, no más dudas"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm md:text-base text-slate-800 font-semibold border-b border-slate-50 pb-2 last:border-0">
                  <Check className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-sm md:text-base text-slate-900 font-black">
                Puedes hacerlo en menos de 30 minutos al día, a tu ritmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section (Assurance + Bonus) - Compacto */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="p-6 md:p-10 rounded-[2rem] bg-violet-50/50 border border-violet-100 relative overflow-hidden">
              <ShieldCheck className="absolute top-3 right-3 w-8 h-8 text-violet-700 opacity-5" />
              <h2 className="text-base md:text-lg font-black text-slate-900 mb-4">No necesitas hacerlo perfecto</h2>
              <div className="space-y-4 text-sm md:text-base text-slate-800 font-medium">
                <div className="space-y-0.5">
                  <p>Puedes hacerlo a tu ritmo.</p>
                  <p className="text-slate-600 font-semibold text-xs">Sin horarios, sin presión.</p>
                </div>
                <div className="pt-4 border-t border-violet-100 mt-4">
                  <p className="text-xs md:text-sm text-violet-700 font-bold">Si en 7 días no es para ti, devolución completa.</p>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6 rounded-2xl bg-slate-900 text-white relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-md">Bonus</div>
              <h3 className="text-base md:text-lg font-black mb-2">
                7 señales de que estás en automático <span className="text-violet-400 block md:inline">y cómo salir de ahí</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-300 italic leading-relaxed">
                Una guía breve para reconocer cuándo estás en automático y tener un punto claro para volver a ti cuando lo necesites.
              </p>
            </div>
            
            <div className="pt-2 flex flex-col items-center">
              <p className="mb-3 text-xs md:text-sm text-slate-900 font-medium text-center">Esta puede ser tu primera victoria.</p>
              <button
                onClick={onPurchase}
                className="bg-violet-600 text-white px-7 md:px-9 py-3 md:py-4 rounded-xl font-bold text-base hover:bg-violet-700 shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3 group"
              >
                <span className="uppercase tracking-widest text-xs md:text-sm">Acceder ahora</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </button>
              <p className="mt-4 text-[9px] md:text-[10px] text-slate-600 font-semibold tracking-wide">Pago seguro · Garantía total</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 border-t border-slate-100 text-center bg-white">
        <div className="container mx-auto px-6">
          <Logo className="opacity-20 grayscale scale-40 mb-2" />
          <p className="text-slate-600 text-[8px] font-bold tracking-widest uppercase">© 2026 Despierta 72H</p>
        </div>
      </footer>
    </div>
  );
}
