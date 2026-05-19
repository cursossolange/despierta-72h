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
     src="/despierta72h-banner.jpg.png"
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
<h1 className="text-[1.45rem] md:text-[2.6rem] font-black tracking-tight text-slate-900 mt-0 mb-4 md:mb-6 leading-[1.15]">
  <>
    Hace tiempo<br />
  vives resolviendo todo.<br />
  Y en algún momento,<br />
  olvidaste lo cansada que estabas.
     </>
</h1>

            {/* 3. Bajada breve */}
<div className="max-w-2xl mx-auto mb-8 md:mb-10 px-4">
<div className="max-w-2xl mx-auto mb-8 md:mb-10 px-4 text-center">

<p className="text-[16px] md:text-[1.12rem] text-slate-700 font-medium mb-5 text-center max-w-[860px] mx-auto leading-[1.6]">
Una experiencia guiada de 3 días para mujeres que hace tiempo sostienen demasiado.
Un espacio breve para bajar el ritmo y sentirte un poco más en calma.
</p>
</div>
  <p className="mt-4 text-sm md:text-base text-slate-500">
    Acceso inmediato y disponible por 1 año.
  </p>
</div>
            {/* Bloque de identificación del dolor */}
<div className="max-w-4xl mx-auto mt-12 mb-14 px-6">
  <div className="bg-[#F6F2FF] rounded-[32px] px-8 py-10 md:px-12 md:py-14 shadow-sm text-center">
<p className="text-xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
  Si esto se volvió normal para ti…...
</p>
  
 <div className="space-y-2 text-base md:text-lg text-slate-700 leading-relaxed">
  <p><span className="text-violet-500 mr-2">✓</span>Reaccionas y después piensas “no quería responder así”,</p>

  <p><span className="text-violet-500 mr-2">✓</span>Sientes que tu cabeza nunca descansa,</p>

  <p><span className="text-violet-500 mr-2">✓</span>Sigues funcionando aunque estás agotada,</p>

  <p><span className="text-violet-500 mr-2">✓</span>Te cuesta desconectarte incluso cuando tienes tiempo,</p>

  <p><span className="text-violet-500 mr-2">✓</span>O hace tiempo sientes que solo estás resolviendo...</p>
</div>

<p className="mt-10 text-base md:text-xl font-semibold text-slate-900 leading-relaxed">
  Quizás hace tiempo empezaste a vivir así, sin darte cuenta.
  <br /><br />
  Y aunque pares un momento, sientes que sigues funcionando igual.
</p>
    </div>
</div>
            {/* Principal Hero Image (Compacta) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
             className="max-w-2xl mx-auto overflow-hidden rounded-[28px] shadow-2xl border border-slate-100 mb-10 opacity-95"
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
    <div className="max-w-2xl mx-auto rounded-[2rem] bg-white border border-violet-100 p-8 md:p-12 shadow-sm">
      <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">
        Sobre esta experiencia
      </h3>

     <img
  src="/bienvenida-solange.png"
  alt="Solange Henríquez"
  className="w-full max-w-5xl mx-auto rounded-[2rem] mb-10"
/>

<div className="space-y-4">
  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight text-center">
  Hola, soy Solange Henríquez.
</h2>

 <div className="text-[15px] md:text-[16px] text-slate-700 leading-[1.9] font-normal space-y-4 max-w-2xl mx-auto text-left">

<p>
  Durante años trabajé acompañando procesos de cambio, liderazgo y conversaciones difíciles en personas que seguían funcionando normalmente… mientras por dentro estaban agotadas.
</p>

<p>
  Y también viví eso en mí.
</p>

<p>
  Durante mucho tiempo creí que no podía parar.
  Que parar era un lujo que no podía darme.
</p>

<p>
  Hasta que entendí algo importante:
  muchas veces el cansancio no aparece como una crisis.
</p>

<p>
  Aparece como vivir con la cabeza constantemente ocupada.
  Reaccionar rápido.
  Seguir funcionando incluso cuando ya no tienes energía.
  O sentir que incluso descansando… tu mente sigue funcionando.
</p>

<p>
  Ese proceso me llevó a interesarme profundamente en  neurociencia y certificarme en neurocoaching para entender mejor por qué vivimos tanto tiempo en automático sin darnos cuenta.
</p>

<p>
  Despierta 72H nace de todo ese aprendizaje para acompañar a otras mujeres que también sienten que hace demasiado tiempo sostienen todo.
</p>

<p className="font-semibold text-slate-900">
  No es otra experiencia para exigirte más.
</p>

<p className="mt-6 font-medium text-slate-900">
  Es una pausa breve y guiada para ayudarte a bajar el ritmo, bajar el ruido mental y sentir un poco más de calma en medio de la rutina.
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
         Cómo puedes empezar a sentirte en estos 3 días:
        </h2>
</div>
  <div className="grid lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {[
     {
  day: "Día 1",
  title: "Bajar el ruido mental.",
  sub: "Bajar el ritmo antes de reaccionar.",
 icon: <Sparkles className="w-5 h-5" />,
},
{
  day: "Día 2",
  title: "Reconocer algunas reacciones automáticas",
    sub: "Empiezas a notar qué cosas te sobrepasan y cómo reaccionas cuando llevas demasiado tiempo funcionando así.",
 icon: <RefreshCw className="w-5 h-5" />,
},
{
  day: "Día 3",
  title: "Entender qué te está agotando tanto por dentro",
  sub: "Empiezas a entender por qué te cuesta tanto bajar el ritmo y desconectarte de verdad.",
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

<h3 className="text-3xl md:text-5xl font-black leading-tight text-white mb-8">
  En 3 días puedes empezar a bajar el ritmo y encontrar calma mental.
</h3>

<p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
  Porque cuando bajas el ritmo,
tu mente empieza a sentirse más tranquila y menos cansada.
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
Al escribir lo que observaste, empiezas a reconocer reacciones repetitivas con más claridad.
  </p>
</div>
<section className="pt-0 pb-6 bg-white">
  <div className="container mx-auto px-6">
    <div className="max-w-xl mx-auto text-center space-y-6">
      <div className="p-6 md:p-8 rounded-[2rem] bg-violet-50/50 border border-violet-100 relative overflow-hidden">
        <ShieldCheck className="absolute top-3 right-3 w-8 h-8 text-violet-700 opacity-5" />
        <div className="space-y-4 text-sm md:text-base text-slate-800 font-medium">
          <div className="pt-4 border-t border-violet-100 mt-4">
            <p className="text-xs md:text-sm text-violet-700 font-bold">
              Si en 7 días sientes que esto no era para ti, te devolvemos el 100%.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto my-12 bg-white border border-violet-100 rounded-[2rem] p-6 shadow-xl shadow-violet-100/40">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
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
                  <p className="text-base md:text-xl uppercase tracking-[0.16em] text-violet-200 font-black mb-5 leading-snug">
                    BONUS:
<br />
<span className="normal-case tracking-normal">
  Guía descargable para reconocer reacciones automáticas.
</span>
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black leading-tight text-white">
                    Empieza a observar lo que antes pasaba desapercibido
                  </h3>
                </div>
              </div>
             <p className="text-sm md:text-base text-slate-300 leading-relaxed">
  Empiezas a notar patrones que antes pasaban desapercibidos.
  Y cuando los ves antes, puedes empezar a reaccionar distinto.
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

      <div className="pt-2 flex flex-col items-center">
        <p className="mb-3 text-xs md:text-sm text-slate-900 font-medium text-center">
          Y muchas veces, parar ya es empezar a salir del automático.
        </p>

        <a
          href="https://pay.hotmart.com/O105550362E"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-600 text-white px-7 md:px-9 py-3 md:py-4 rounded-xl font-bold text-base hover:bg-violet-700 transition-colors inline-flex items-center gap-2"
        >
          <span className="uppercase tracking-widest text-xs md:text-sm">
            Acceder ahora
          </span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform shrink-0" />
        </a>

        <p className="mt-4 text-[9px] md:text-[10px] text-slate-600 font-semibold tracking-wide">
          Pago seguro • Acceso inmediato
        </p>

        <div className="mt-4 text-center">
          <p className="text-sm text-slate-500 mb-2">
            ¿Tienes dudas antes de empezar?
          </p>

          <a
            href="https://wa.me/56990991901"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 font-semibold hover:text-violet-700 transition-colors"
          >
            Conversemos por WhatsApp
          </a>
        </div>
      </div>
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

