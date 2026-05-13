import { motion } from "motion/react";
import { Check, ArrowRight, Play, Volume2, Brain, Zap, Clock, ShieldCheck, RefreshCw, Sparkles, Trophy, Heart, Sunrise, Sun, Moon } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { useState, useEffect } from "react";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || "" });

const AIGeneratedEmotionalImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fallback high-quality image that matches the "introspective/mirror" aesthetic
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1516589174184-c68d8e5f1bd4?auto=format&fit=crop&q=80&w=1920";

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

      const response = await ai.models.generateContent({
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
     src="/cafe.png.png"
      alt="Retrato introspectivo generado por IA" 
      className="w-full h-full object-cover"
      referrerPolicy="no-referrer"
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
<h1 className="text-[1.45rem] md:text-[2.6rem] font-black tracking-tight text-slate-900 mt-0 mb-4 md:mb-6 leading-[1.08]">
 <>
  Reaccionas…
  <br />
  y después piensas:
  <br />
  <span className="italic">
    “Pucha,
    <br />
    no quería responder así otra vez.”
  </span>
</>
</h1>

            {/* 3. Bajada breve */}
<div className="max-w-2xl mx-auto mb-8 md:mb-10 px-4">
<div className="max-w-2xl mx-auto mb-8 md:mb-10 px-4 text-center">

 <p className="text-[18px] md:text-[1.4rem] text-violet-600 font-black mb-5 text-center max-w-3xl mx-auto leading-relaxed">
  Una experiencia guiada de 3 días para aprender un método simple que te ayude a interrumpir tu piloto automático.
</p>
</div>
  <p className="mt-4 text-sm md:text-base text-slate-500">
    Acceso inmediato y disponible por 1 año.
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
              <p className="text-sm text-slate-500 mb-3 text-center">
  </p>
             <a
  href="https://pay.hotmart.com/O105550362E"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-violet-600 text-white px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-violet-700 shadow-lg hover:-translate-y-0.5 transition inline-flex items-center gap-2"
>
  <span className="uppercase tracking-widest text-xs md:text-sm">Acceder ahora</span>
                 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform shrink-0" />
</a>
            <div className="flex flex-col items-center">      
        <p className="mt-3 text-sm md:text-base text-slate-600 font-medium">
          $29.990 CLP · Garantía de 7 días
        </p>
      </div>
    </div>
  </motion.div>
</div>
</header>
<section className="py-12 bg-slate-50/50">
  <div className="container mx-auto px-6">
    <div className="max-w-2xl mx-auto rounded-[2rem] bg-white border border-violet-100 p-8 md:p-12 shadow-sm flex flex-col items-center text-center">
      <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">
        Sobre esta experiencia
      </h3>

      <img
        src="/foto-solange.jpg"
        alt="Solange Henríquez"
        className="w-36 h-36 object-cover rounded-full mx-auto mb-8 shadow-md grayscale"
      />

<div className="space-y-4">
  <h2 className="text-xl md:text-2xl font-medium text-slate-700 leading-tight text-center">
    <span className="block">Bienvenida a este espacio.</span>
    <span className="block mt-1 font-semibold text-slate-900">Soy Solange.</span>
  </h2>

  <div className="text-sm md:text-[17px] text-slate-700 leading-8 font-normal space-y-4 max-w-2xl mx-auto text-left">

  <p>
    Durante más de 20 años trabajé liderando equipos y procesos.
  Fue una etapa que me enseñó mucho sobre liderazgo, gestión y método.
</p>

<p>
  Pero el aprendizaje más importante vino después:
  observar cómo muchas veces reaccionamos en automático…
  y recién después nos damos cuenta de que podríamos haberlo hecho distinto
</p>

<p className="italic text-slate-600">
  “Pucha… lo hice otra vez.”
</p>

<p>
  Esa búsqueda me llevó a profundizar en neurociencia y certificarme en neurocoaching.
</p>

<p>
  Despierta 72H nace desde ahí.
</p>

<p className="mt-6 font-medium text-slate-900">
  Una experiencia guiada de 3 días para ayudarte a interrumpir ese piloto automático
  y darte cuenta de lo que normalmente haces sin verlo.
</p>
</div>
</div>
</div>
</div>
</section>
  
  <section className="py-8 bg-violet-50/50">
  <div className="container mx-auto px-6">
    <div className="bg-white rounded-[2rem] border border-violet-100 p-6 md:p-8 shadow-sm text-center">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
          Lo que aprenderás en estos 3 días
        </h2>
</div>
  <div className="grid lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {[
     {
  day: "Día 1",
  title: "Empiezas a bajar el ruido en tu cabeza",
  sub: "Empiezas a identificar los pensamientos que más se repiten en tu cabeza y cuándo tu mente se acelera.",
 icon: <Sparkles className="w-5 h-5" />,
},
{
  day: "Día 2",
  title: "Detectas tus comportamientos automáticos",
  sub: "Observas qué situaciones activan tus reacciones y cómo respondes antes de darte cuenta.",
 icon: <RefreshCw className="w-5 h-5" />,
},
{
  day: "Día 3",
  title: "Entiendes qué hay detrás de esas reacciones",
  sub: "Empiezas a reconocer qué necesidad, emoción o tensión está guiando tus respuestas.",
  icon: <Heart className="w-5 h-5" />,
}
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

      {/* Resultado / Promesa Section - Destacado */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-slate-900 rounded-[2.5rem] py-14 md:py-20 px-8 md:px-16 max-w-4xl mx-auto shadow-2xl"
>
              <div className="absolute top-[-10%] left-[-10%] w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
           
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto text-center">

 <h3 className="text-violet-300 text-xs md:text-sm font-black uppercase tracking-[0.4em]">
  Lo que te llevas
</h3>

<h3 className="text-xl md:text-2xl font-black text-white leading-tight">
  Una metodología práctica para interrumpir reacciones automáticas.
</h3>

<p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
  Basada en observación consciente, micropausas y reconocimiento de patrones cotidianos.
</p>
</div>
</motion.div>
</div>
</section>
             
{/* Tres momentos clave */}
<div className="max-w-4xl mx-auto mb-5 md:mb-6">
  <h3 className="text-base md:text-lg font-black text-violet-600 uppercase tracking-[0.3em] text-center mb-4">
    Cada día tiene 3 momentos clave
  </h3>

  <p className="text-sm md:text-base text-slate-600 text-center leading-relaxed max-w-2xl mx-auto">
   Durante 3 días escuchas audios breves, haces micropausas conscientes y observas cómo reaccionas en situaciones cotidianas.
Al escribir lo que observaste, empiezas a reconocer patrones automáticos con más claridad.
  </p>
</div>
      <section className="pt-0 pb-6 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="p-6 md:p-8 rounded-[2rem] bg-violet-50/50 border border-violet-100 relative overflow-hidden">
              <ShieldCheck className="absolute top-3 right-3 w-8 h-8 text-violet-700 opacity-5" />
              
              <div className="space-y-4 text-sm md:text-base text-slate-800 font-medium">
                <div className="pt-4 border-t border-violet-100 mt-4">
                  <p className="text-xs md:text-sm text-violet-700 font-bold">Si en 7 días sientes que esto no era para ti, te devolvemos el 100%.</p>
                </div>
              </div>
            </div>

           <div className="max-w-xl mx-auto my-12 bg-white border border-violet-100 rounded-[2rem] p-6 shadow-xl shadow-violet-100/40">
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">

    {/* Mockup visual */}
    <div className="w-full md:w-[420px] flex-shrink-0">
      <div className="rounded-[1.8rem] bg-[#17132A] p-6 shadow-xl text-white text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
<img
  src="/bonus-portada.jpg.png"
  alt="Guía bonus Despierta 72H"
  className="w-full max-h-[320px] object-cover object-top rounded-2xl shadow-lg mb-6"
/>

<div className="space-y-4">
  <div>
    <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300 font-bold mb-3">
      Bonus incluido
    </p>

    <h3 className="text-2xl font-black leading-tight">
      Guía para detectar conductas automáticas
    </h3>
  </div>

  <p className="text-sm text-slate-300 leading-relaxed">
    Una guía práctica para ayudarte a reconocer señales cotidianas de que estás funcionando en automático.
  </p>

  <div className="space-y-2 text-sm text-slate-300">
    <p>✓ Reaccionas y te das cuenta después</p>
    <p>✓ Tu cabeza no logra desconectarse</p>
    <p>✓ Sigues funcionando aunque estés cansada</p>
  </div>
</div>
      </div>
    </div>

    </div>
</div>

{/* Objeciones / dudas */}
  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
    Si estás pensando esto…
  </h3>

  <div className="space-y-6">
    <div>
      <p className="text-base md:text-lg font-bold text-slate-900 mb-1">
        “Me gustaría hacerlo… pero no tengo tiempo.”
      </p>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
        Muchas veces, el automático también se ve así: seguir funcionando sin encontrar un momento para parar.
      </p>
    </div>

    <div>
      <p className="text-base md:text-lg font-bold text-slate-900 mb-1">
       “¿Y si no logro observar mucho?”
      </p>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
        No necesitas hacerlo perfecto. La práctica es empezar a notar pequeños momentos que normalmente pasan en automático.
      </p>
    </div>

    <div>
      <p className="text-base md:text-lg font-bold text-slate-900 mb-1">
        “¿Y si me olvido durante el día?”
      </p>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
        Es parte del proceso. Darte cuenta también es una forma de salir del automático.
      </p>
    </div>

    <div>
      <p className="text-base md:text-lg font-bold text-slate-900 mb-1">
       “¿Y si necesito más tiempo?”
      </p>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
        Puedes repetir los ejercicios las veces que necesites. La idea no es avanzar rápido, sino empezar a observar distinto.
      </p>
    </div>
  </div>
</div>
<div className="pt-2 flex flex-col items-center">
  <p className="mb-3 text-xs md:text-sm text-slate-900 font-medium text-center">
    Y muchas veces, parar ya es empezar a salir del automático.
  </p>

  <a
    href="https://pay.hotmart.com/O105550362E"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-violet-600 text-white px-7 md:px-9 py-3 md:py-4 rounded-xl font-bold text-base hover:bg-violet-700 transition-all duration-300 flex items-center gap-2"
  >
    <span className="uppercase tracking-widest text-xs md:text-sm">
      Acceder ahora
    </span>
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform shrink-0" />
  </a>

  <p className="mt-4 text-[9px] md:text-[10px] text-slate-600 font-semibold tracking-wide">
    Pago seguro · Acceso inmediato
  </p>
  <p className="mt-4 text-xs md:text-sm text-slate-500 text-center leading-relaxed">
  Si tienes dudas sobre si esta experiencia es para ti, puedes escribirme directamente.
</p>

<p className="mt-2 text-sm font-semibold text-slate-700">
  +56 9 90991901
</p>
</div>
          </div>
</section>

<footer className="py-6 border-t border-slate-100 text-center bg-white">
  <div className="container mx-auto px-6">
    <Logo className="opacity-20 grayscale scale-40 mb-2" />
    <p className="text-slate-600 text-[8px] font-bold tracking-widest uppercase">
      © 2026 Despierta 72H
    </p>
  </div>
 
</footer>
</div>
);
}

