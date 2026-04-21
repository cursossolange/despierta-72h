import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, ChevronRight, Volume2, Clock, Zap, ArrowLeft, CheckCircle2, Info } from "lucide-react";

export default function ProductArea() {
  const [activeTab, setActiveTab] = useState<string>("day0");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const content = {
    day0: {
      title: "Día 0: La Entrada",
      subtitle: "Preparando el contenedor",
      duration: "6:45",
      script: `
        [0:00] Bienvenida. Tono pausado, contenido.
        "Hola. Si estás escuchando esto, es porque has decidido que 72 horas son suficientes para decir 'basta' al modo automático. No vamos a cambiar tu vida hoy, vamos a cambiar cómo logras sentirte presente."
        
        [1:30] El Diagnóstico.
        "Quiero que cierres los ojos un segundo. Siente el peso de tus hombros. Siente la velocidad de tus pensamientos. Eso que sientes es el ruido de fondo. El objetivo de hoy no es quitarlo, es reconocer que está ahí."
        
        [3:00] Instrucciones de Preparación.
        "Para mañana, solo necesito una cosa: elige un objeto pequeño que lleves siempre contigo. Un anillo, una pulsera, incluso una piedra en el bolsillo. Será nuestro primer ancla."
        
        [5:00] Cierre.
        "Mañana empezamos a bajar el volumen. Descansa."
      `,
      actions: ["Elegir un objeto ancla", "Escuchar el audio de preparación"]
    },
    day1: {
      title: "Día 1: Bajar el Ruido",
      subtitle: "Identificando fugas",
      duration: "11:20",
      script: `
        [0:00] Inicio directo.
        "Día 1. Hoy el objetivo es uno: detectar dónde se te escapa la presencia. El piloto automático se alimenta de la distracción."
        
        [4:00] La Acción Concreta.
        "Cada vez que toques tu objeto ancla hoy, vas a hacer una respiración profunda y vas a nombrar tres cosas que veas en este preciso momento. Tres colores, tres texturas. Eso es todo."
        
        [8:00] El Trigger de Interrupción.
        "Si sientes que el estrés sube, vas a decirte internamente: 'Estoy aquí'. No es un mantra, es un hecho biológico."
      `,
      actions: ["Práctica del objeto ancla (3 veces)", "Nombrar 3 elementos presentes"]
    },
    day2: {
      title: "Día 2: Interrumpir el Automático",
      subtitle: "El quiebre del patrón",
      duration: "10:15",
      script: `
        [0:00] Tono más firme.
        "Hoy vamos a provocar el quiebre. El automático odia la novedad. Vamos a hacer algo que tu cerebro no espera."
        
        [3:00] Micro-intervención 1.
        "Cambia algo de tu rutina física. Si desayunas sentada, hazlo de pie. Si caminas por una ruta, toma otra. Observa la resistencia de tu mente."
        
        [7:00] Micro-intervención 2.
        "En tu próxima conversación, espera 2 segundos antes de responder. Siente ese espacio. Ahí es donde recuperas el control."
      `,
      actions: ["Cambiar una rutina física", "Pausa de 2 segundos en conversaciones"]
    },
    day3: {
      title: "Día 3: Reconectar",
      subtitle: "Habitar el presente",
      duration: "12:30",
      script: `
        [0:00] Tono cálido, expansivo.
        "Llegamos. 72 horas después. ¿Notas la diferencia en el aire? No es el mundo el que ha cambiado, eres tú."
        
        [5:00] Ejercicio Guiado Final.
        "Siente tus pies. Siente tu respiración. Ahora, mira a tu alrededor y agradece una sola cosa que sea real en este momento. No una idea, algo físico."
        
        [10:00] Cierre y Futuro.
        "El piloto automático volverá, es su trabajo. Pero ahora tienes las herramientas para apagarlo cuando quieras. Bienvenido de vuelta a sentirte presente."
      `,
      actions: ["Ejercicio de gratitud física", "Compromiso de presencia"]
    },
    system: {
      title: "Sistema de Interrupción",
      subtitle: "Herramientas de emergencia",
      duration: "Varios",
      script: `
        Audios de 1-2 minutos para momentos críticos:
        
        SOS Sobrecarga: "Para. Siente tus pies. Respira. Estás a salvo en este momento."
        SOS Automático: "Nombra 5 cosas rojas a tu alrededor. Ahora. Vuelve."
        SOS Cansancio: "No es falta de sueño, es falta de presencia. Cierra los ojos 30 segundos."
      `,
      actions: ["Guardar audios SOS en favoritos", "Usar cuando el ruido suba"]
    }
  };

  const current = content[activeTab as keyof typeof content];

  return (
    <div className="min-h-screen bg-neutral-soft font-sans flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-80 bg-white border-r border-slate-200 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white font-bold">D</div>
          <h1 className="font-bold text-xl tracking-tight">Despierta 72H</h1>
        </div>

        <nav className="space-y-2 flex-1">
          {Object.entries(content).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${
                activeTab === key 
                  ? "bg-brand text-white shadow-lg shadow-brand/20" 
                  : "hover:bg-brand-light text-slate-600"
              }`}
            >
              <div className="flex flex-col">
                <span className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${activeTab === key ? "text-white/70" : "text-brand"}`}>
                  {key === 'system' ? 'Extra' : key.toUpperCase()}
                </span>
                <span className="font-semibold text-sm">{item.title}</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === key ? "translate-x-1" : "group-hover:translate-x-1"}`} />
            </button>
          ))}
        </nav>

        <div className="p-4 bg-brand-light rounded-2xl border border-brand/10">
          <div className="flex items-center gap-2 text-brand font-bold text-xs mb-2">
            <Info className="w-4 h-4" />
            <span>TIP DE HOY</span>
          </div>
          <p className="text-xs text-brand/80 leading-relaxed">
            La presencia no es un estado permanente, es un músculo que entrenas cada vez que "vuelves".
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">{current.title}</h2>
              <p className="text-xl text-slate-500 font-light">{current.subtitle}</p>
            </div>

            {/* Audio Player Mock */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center shrink-0">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="text-xs font-bold text-brand uppercase tracking-widest">Audio Guía</span>
                      <h3 className="text-lg font-bold">{current.title}</h3>
                    </div>
                    <span className="text-sm font-mono text-slate-400">{current.duration}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand"
                      initial={{ width: "0%" }}
                      animate={{ width: isPlaying ? "100%" : "0%" }}
                      transition={{ duration: isPlaying ? 100 : 0, ease: "linear" }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-mono">
                    <span>0:00</span>
                    <span>{current.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Script / Notes */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl p-8 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-brand" />
                    Guion del Audio
                  </h4>
                  <div className="prose prose-slate max-w-none">
                    {current.script.split('\n').map((line, i) => (
                      <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4">
                        {line.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-6">
                <div className="bg-brand text-white rounded-2xl p-8 shadow-xl shadow-brand/20">
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Micro-acciones
                  </h4>
                  <ul className="space-y-4">
                    {current.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 shrink-0 text-white/50" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4 text-sm">Recursos IA</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Este contenido está optimizado para ser procesado por ElevenLabs (Voz: "Serene") y generado como PDF minimalista en Canva.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
