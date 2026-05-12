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
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mt-0 mb-4 md:mb-6 leading-tight">
  <span>
    Una experiencia guiada para bajar el ruido mental y observar cómo reaccionas en
  </span>
  <br />
  <span className="block text-3xl md:text-5xl mt-2 uppercase tracking-tight font-black">
    piloto automático
  </span>
</h1>


            {/* 3. Bajada breve */}
<div className="max-w-2xl mx-auto mb-8 md:mb-10 px-4">
  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
    Muchas veces pensamos que el cansancio viene de todo lo que hacemos día a día…
    <br />
    pero el mayor desgaste viene de vivir en piloto automático.
  </p>

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
            
             <p className="mt-3 text-sm md:text-base text-slate-600 font-medium">
                $29.990 CLP · Garantía de 7 días
              </p>
              <a
  href="https://wa.me/56990991901?text=Hola%2C%20vi%20lo%20de%20las%2072%20horas%20y%20me%20hizo%20sentido.%20Quiero%20m%C3%A1s%20informaci%C3%B3n."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 text-sm text-slate-500 hover:text-slate-700 transition"
>
 ¿Quieres confirmar si esto es para ti? Escríbeme aquí
</a>
            </div>
          </motion.div>
        </div>
      </header>
       {/* Authority Section - Compacto */}
      <section className="py-12 bg-slate-50/50">
        <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto rounded-[2rem] bg-white border border-violet-100 p-8 md:p-12 shadow-sm flex flex-col items-center text-center">
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Sobre esta experiencia</h3>
<img src="/foto-solange.jpg" alt="Solange Henríquez" className="w-36 h-36 object-cover rounded-full mx-auto mb-8 shadow-md grayscale" />
            <div className="space-y-4">
             <h2 className="text-xl md:text-2xl font-medium text-slate-700 leading-tight text-center">
  <span className="block">Bienvenida a este espacio.</span>
  <span className="block mt-1 font-semibold text-slate-900">Soy Solange.</span>
</h2>
             <div className="text-sm md:text-[17px] text-slate-700 leading-8 font-normal space-y-5 max-w-3xl mx-auto">
                Durante más de 20 años trabajé liderando equipos y procesos en contextos donde decidir bien no era opcional. Fue una etapa muy valiosa, que me dio estructura, criterio y experiencia.

Pero no fue ahí donde más aprendí de verdad.

Ese aprendizaje vino después, cuando me tocó observar mis propios patrones y entender que muchas veces no necesitamos reaccionar más rápido, sino darnos un momento para observar.

En ese camino profundicé en neurociencia y me formé en neurocoaching, lo que me permitió entender mejor cómo funcionan nuestros patrones cuando vivimos en automático.

Despierta 72H nace desde ahí. No desde teoría, sino desde algo vivido y observado.

Un espacio simple para parar, observar y elegir con más conciencia.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Te ha pasado esto? Section (Compacta) */}
      <section className="py-8 bg-violet-50/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-base md:text-lg font-black text-slate-900 mb-3 uppercase tracking-[0.1em]">¿Te ha pasado esto?</h2>
          <div className="max-w-2xl mx-auto space-y-1.5 text-slate-700 font-semibold italic">
           <p className="text-sm md:text-base">Respondes algo… y después te preguntas por qué reaccionaste así.</p>
<p className="text-sm md:text-base">Hay conversaciones que terminas teniendo igual, aunque prometiste hacerlo distinto.</p>
<p className="text-sm md:text-base">A veces haces las cosas tan en automático que ni te das cuenta cómo llegaste ahí.</p>
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
             <h2 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight tracking-tight">
  Experiencia guiada de 3 días para:
</h2>

<div className="text-sm md:text-lg text-slate-300 space-y-3 leading-snug">
  <p>· Observar cosas que normalmente haces en automático.</p>
  <p>· Reconocer patrones que aparecen una y otra vez en tu día a día.</p>
  <p>· Entender mejor por qué reaccionas como reaccionas.</p>
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
    <h2 className="text-lg md:text-2xl font-bold text-slate-900 leading-tight">
      Cuando aparece consciencia,
      <br />
      aparece elección.
    </h2>

    <p className="text-sm md:text-base text-slate-600 italic mt-3">
      Y eso cambia resultados.
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {[
      {
        day: "Día 1",
        title: "Bajas el ruido",
        sub: "Tu mente se desacelera y aparece espacio para observar lo que te pasa.",
        icon: <Sparkles className="w-5 h-5" />
      },
      {
        day: "Día 2",
        title: "Te das cuenta del automático",
        sub: "Empiezas a reconocer tus reacciones antes de que ocurran y aparece un espacio para parar.",
        icon: <RefreshCw className="w-5 h-5" />
      },
      {
        day: "Día 3",
        title: "Identificas desde dónde estás actuando",
        sub: "Reconoces las emociones que están guiando tus respuestas, sin necesidad de cambiarlas.",
        icon: <Heart className="w-5 h-5" />
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
  className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-[2.5rem] py-12 md:py-16 px-8 md:px-16 max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
>
              <div className="absolute top-[-10%] left-[-10%] w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
           
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto text-center">
              <h3 className="text-violet-100 text-xs md:text-sm font-black uppercase tracking-[0.4em]">
                Lo que te llevas
              </h3>
              <p className="text-2xl md:text-4xl font-black text-white leading-tight md:leading-tight max-w-2xl mx-auto">
                Reconoces cuándo estás en automático y aparece un espacio para elegir distinto.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

           {/* ¿Cómo funciona esta experiencia? */}
      <section className="pt-4 pb-8 md:pt-8 md:pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">
              ¿Cómo funciona esta experiencia?
            </h2>
          
          </div>

          {/* Tres momentos clave */}
          <div className="max-w-4xl mx-auto mb-5 md:mb-6">
            <h3 className="text-base md:text-lg font-black text-violet-600 uppercase tracking-[0.3em] text-center mb-10">
              Cada día tiene 3 momentos clave
            </h3>
            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {[
                { 
                  time: "ESCUCHAS", 
                  desc: "Escuchas un audio breve (3–5 min) que te invita a poner tu atención en situaciones específicas.", 
                  sub: "No lo analizas. Solo observas.",
                  icon: <Sunrise className="w-5 h-5 text-amber-500" />
                },
                { 
                  time: "OBSERVAS",
                  desc: "Empiezas a observar tus comportamientos frente a esas situaciones.", 
                  sub: "Cuándo aparecen, qué los gatilla y cómo reaccionas.",
                  icon: <Sun className="w-5 h-5 text-orange-500" />
                },
                { 
                  time: "REFLEXIONAS",
                  desc: "Reflexionas y escribes en tu cuaderno.", 
                  sub: "El escribir te permite ordenar lo que viviste y transformar la experiencia en aprendizaje.",
                  icon: <Moon className="w-5 h-5 text-slate-400" />
                }
              ].map((moment, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-sm group-hover:bg-slate-100 transition-colors">
                    {moment.icon}
                  </div>
                  <h4 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-wide">{moment.time}</h4>
                  <p className="text-sm text-slate-800 font-semibold leading-relaxed mb-2">{moment.desc}</p>
                  <p className="text-[11px] text-slate-500 italic font-medium">{moment.sub}</p>
                </div>
              ))}
            </div>
          </div>

          
    



          {/* Footer del bloque */}
        </div>
      </section>

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

            <div className="p-5 md:p-6 rounded-2xl bg-[#17132A] text-white relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-md">Bonus</div>
              <h3 className="text-base md:text-lg font-black mb-2">
                7 señales de que estás en automático
              </h3>
              <p className="text-xs md:text-sm text-slate-300 italic leading-relaxed">
                Una guía breve para ayudarte a reconocerlo en tu día a día.
              </p>
            </div>
            
            <div className="pt-2 flex flex-col items-center">
              <p className="mb-3 text-xs md:text-sm text-slate-900 font-medium text-center">Y muchas veces, parar ya es suficiente para empezar.</p>
             <a
  href="https://pay.hotmart.com/O105550362E"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-violet-600 text-white px-7 md:px-9 py-3 md:py-4 rounded-xl font-bold text-base hover:bg-violet-700 shadow-xl hover:-translate-y-0.5 transition inline-flex items-center gap-2"
>
  <span className="uppercase tracking-widest text-xs md:text-sm">Acceder ahora</span>
  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform shrink-0" />
</a>
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

