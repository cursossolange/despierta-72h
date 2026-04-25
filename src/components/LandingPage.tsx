export default function LandingPage() {
  const onPurchase = () => {
    alert("Aquí después conectamos el botón de pago.");
  };

  return (
    <div style={{ minHeight: "100vh", background: "white", fontFamily: "Arial, sans-serif", color: "#0f172a" }}>
      
      <header style={{ padding: "40px 24px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <div style={{ display: "inline-block", background: "linear-gradient(#1E202E, #3B344D)", padding: "14px", borderRadius: "16px", marginBottom: "28px" }}>
            <div style={{ color: "#C4B5FD", fontSize: "34px", lineHeight: "1" }}>◜</div>
            <div style={{ color: "white", fontSize: "9px", letterSpacing: "4px", fontWeight: "bold" }}>
              DESPIERTA 72H
            </div>
          </div>

          <h1 style={{ 
            fontSize: "clamp(34px, 6vw, 58px)", 
            lineHeight: "1.05", 
            fontWeight: 900, 
            textTransform: "uppercase",
            maxWidth: "760px",
            margin: "0 auto 22px"
          }}>
            ESTÁS FUNCIONANDO…<br />
            PERO HACE RATO QUE ALGO NO SE SIENTE IGUAL
          </h1>

          <p style={{ 
            fontSize: "clamp(17px, 2vw, 21px)", 
            lineHeight: "1.6", 
            maxWidth: "680px", 
            margin: "0 auto 14px",
            color: "#334155",
            fontWeight: 500
          }}>
            Una experiencia guiada de 72 horas para bajar el ruido, interrumpir el automático y volver a sentirte presente.
          </p>

          <p style={{ 
            fontSize: "16px", 
            color: "#475569", 
            fontStyle: "italic", 
            fontWeight: 600,
            marginBottom: "32px"
          }}>
            Solo un espacio breve para reconectar contigo.
          </p>

          <div style={{ 
            maxWidth: "520px", 
            margin: "0 auto 34px", 
            borderRadius: "18px", 
            overflow: "hidden",
            boxShadow: "0 20px 45px rgba(15,23,42,0.18)"
          }}>
            <img
              src="https://images.unsplash.com/photo-1516589174184-c68d8e5f1bd4?auto=format&fit=crop&q=80&w=1920"
              alt="Mujer en pausa introspectiva"
              style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
            />
          </div>

          <button
            onClick={onPurchase}
            style={{
              background: "#7C3AED",
              color: "white",
              border: "none",
              padding: "18px 34px",
              borderRadius: "14px",
              fontWeight: 800,
              fontSize: "15px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 14px 28px rgba(124,58,237,0.28)"
            }}
          >
            Acceder ahora →
          </button>

          <p style={{ marginTop: "14px", fontSize: "12px", color: "#64748b", fontWeight: 600 }}>
            $29.990 CLP · Garantía de 7 días
          </p>

        </div>
      </header>

      <section style={{ background: "#F5F3FF", padding: "42px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
            ¿Te ha pasado esto?
          </h2>

          <div style={{ color: "#334155", fontWeight: 700, fontStyle: "italic", lineHeight: "1.9", fontSize: "18px" }}>
            <p>Te levantas y empiezas el día sin mucho ánimo</p>
            <p>Cumples con todo, pero algo no se siente igual</p>
            <p>Te cuesta parar, incluso cuando estás cansada</p>
            <p>Sientes que estás, pero no del todo presente</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "46px 24px", background: "white" }}>
        <div style={{
          maxWidth: "760px",
          margin: "0 auto",
          background: "#1e293b",
          color: "white",
          borderRadius: "28px",
          padding: "34px",
          boxShadow: "0 18px 36px rgba(15,23,42,0.18)"
        }}>
          <h2 style={{ fontSize: "30px", marginBottom: "14px", fontWeight: 900 }}>
            En solo 72 horas…
          </h2>
          <p style={{ fontSize: "20px", lineHeight: "1.5", color: "#cbd5e1" }}>
            Empiezas a salir del automático y a volver a sentirte presente.
          </p>
          <p style={{ marginTop: "12px", color: "#c4b5fd", fontStyle: "italic" }}>
            A tu ritmo. Sin exigencias.
          </p>
        </div>
      </section>
<section style={{ padding: "42px 24px", background: "#F5F3FF" }}>
  <div style={{ maxWidth: "1000px", margin: "0 auto", background: "white", borderRadius: "32px", padding: "36px", border: "1px solid #ede9fe" }}>
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h2 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "10px" }}>
        No necesitas más esfuerzo.<br />Necesitas parar.
      </h2>
      <p style={{ color: "#6d28d9", fontWeight: 900, letterSpacing: "2px", fontSize: "13px", textTransform: "uppercase" }}>
        Lo que empieza a moverse en ti
      </p>
    </div>

    <div style={{ display: "grid", gap: "18px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
      <div style={{ background: "#faf5ff", padding: "24px", borderRadius: "24px", border: "1px solid #ede9fe" }}>
        <p style={{ color: "#8b5cf6", fontWeight: 900, fontSize: "13px", letterSpacing: "2px" }}>DÍA 1</p>
        <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Bajas el ruido</h3>
        <p style={{ lineHeight: "1.6", color: "#334155" }}>
          Tu mente se desacelera y aparece espacio para observar lo que te pasa.
        </p>
      </div>

      <div style={{ background: "#faf5ff", padding: "24px", borderRadius: "24px", border: "1px solid #ede9fe" }}>
        <p style={{ color: "#8b5cf6", fontWeight: 900, fontSize: "13px", letterSpacing: "2px" }}>DÍA 2</p>
        <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Interrumpes patrones</h3>
        <p style={{ lineHeight: "1.6", color: "#334155" }}>
          Te das cuenta de tus reacciones automáticas antes de que ocurran.
        </p>
      </div>

      <div style={{ background: "#faf5ff", padding: "24px", borderRadius: "24px", border: "1px solid #ede9fe" }}>
        <p style={{ color: "#8b5cf6", fontWeight: 900, fontSize: "13px", letterSpacing: "2px" }}>DÍA 3</p>
        <h3 style={{ fontSize: "24px", fontWeight: 900 }}>Vuelves a estar presente</h3>
        <p style={{ lineHeight: "1.6", color: "#334155" }}>
          Momentos de conexión real contigo, sin exigencia de tener todo claro.
        </p>
      </div>
    </div>
  </div>
</section>
   <section style={{ padding: "60px 24px", background: "white" }}>
  <div style={{ 
    maxWidth: "800px", 
    margin: "0 auto", 
    background: "#f8fafc", 
    borderRadius: "28px", 
    padding: "40px", 
    border: "1px solid #e2e8f0" 
  }}>

    <p style={{ 
      textAlign: "center", 
      fontWeight: 900, 
      letterSpacing: "2px", 
      fontSize: "14px", 
      marginBottom: "30px" 
    }}>
      ESTO ES LO QUE EMPIEZA A CAMBIAR
    </p>

    {/* ANTES */}
    <div style={{ marginBottom: "30px" }}>
      <p style={{ fontWeight: 900, color: "#7c3aed", marginBottom: "10px" }}>
        Antes
      </p>

      <ul style={{ lineHeight: "1.9", color: "#334155", fontWeight: 600 }}>
        <li>Sigues en automático</li>
        <li>Te cuesta parar</li>
        <li>Estás, pero no presente</li>
      </ul>
    </div>

    {/* LÍNEA */}
    <div style={{ height: "1px", background: "#e2e8f0", margin: "30px 0" }} />

    {/* DESPUÉS */}
    <div>
      <p style={{ fontWeight: 900, color: "#7c3aed", marginBottom: "10px" }}>
        Después
      </p>

      <ul style={{ lineHeight: "1.9", color: "#0f172a", fontWeight: 700 }}>
        <li>Sientes menos ruido y más claridad</li>
        <li>Consciencia antes de reaccionar</li>
        <li>Más presente, sin exigencia</li>
      </ul>
    </div>

  </div>
</section> 
      <section style={{ padding: "70px 24px", background: "#0f172a", color: "white", textAlign: "center" }}>
  <div style={{ maxWidth: "700px", margin: "0 auto" }}>

    <h2 style={{ fontSize: "36px", fontWeight: 900, marginBottom: "14px" }}>
      No necesitas tener todo claro.
    </h2>

    <p style={{ fontSize: "20px", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "24px" }}>
      Solo necesitas salir del automático lo suficiente como para volver a sentirte.
    </p>

    <p style={{ fontSize: "14px", letterSpacing: "2px", color: "#a78bfa", fontWeight: 800, marginBottom: "26px" }}>
      EXPERIENCIA GUIADA · 72 HORAS · A TU RITMO
    </p>

    <div style={{ fontSize: "42px", fontWeight: 900, marginBottom: "26px" }}>
      $29.990 CLP
    </div>

    <button
     onClick={() => window.location.href = "https://tupagodeejemplo.com"}
      style={{
        background: "#7c3aed",
        color: "white",
        border: "none",
        padding: "20px 40px",
        borderRadius: "16px",
        fontWeight: 900,
        fontSize: "16px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        cursor: "pointer",
        boxShadow: "0 20px 40px rgba(124,58,237,0.4)"
      }}
    >
      Salir del modo automático →
    </button>

    <p style={{ marginTop: "18px", fontSize: "13px", color: "#94a3b8" }}>
      Acceso inmediato · Sin sesiones en vivo · Garantía 7 días
    </p>

  </div>
</section>
      <section style={{ padding: "50px 24px", background: "#F5F3FF" }}>
  <div style={{ maxWidth: "760px", margin: "0 auto", background: "white", borderRadius: "28px", padding: "36px", textAlign: "center", border: "1px solid #ede9fe" }}>
    <p style={{ fontSize: "12px", letterSpacing: "4px", fontWeight: 900, marginBottom: "20px" }}>
      SOBRE ESTA EXPERIENCIA
    </p>

    <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "18px" }}>
      Soy Solange Henríquez.
    </h2>

    <p style={{ fontSize: "20px", lineHeight: "1.5", fontWeight: 700 }}>
      Más de <span style={{ color: "#7c3aed" }}>20 años</span> acompañando procesos de transformación organizacional y personal, desde la toma de decisiones, el comportamiento humano y el neurocoaching.
    </p>

    <p style={{ marginTop: "18px", fontStyle: "italic", color: "#64748b" }}>
      Este proceso también lo he vivido yo. Despierta 72H nace de lo real.
    </p>
  </div>
</section>

<section style={{ padding: "60px 24px", background: "white" }}>
  <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: "32px", fontWeight: 900, marginBottom: "10px" }}>
      ¿CÓMO FUNCIONA ESTA EXPERIENCIA?
    </h2>

    <p style={{ fontSize: "20px", fontWeight: 700, marginBottom: "34px" }}>
      Un proceso simple, guiado y a tu ritmo.
    </p>

    <div style={{ textAlign: "left", fontSize: "18px", fontWeight: 700, lineHeight: "1.8" }}>
      <p>✓ Audios breves (8–10 min) que puedes escuchar cuando quieras</p>
      <p>✓ Ejercicios simples para ordenar lo que sientes, sin exigencia</p>
      <p>✓ Una guía que te acompaña de forma cercana</p>
      <p>✓ Un cierre que te deja con más claridad, no más dudas</p>
    </div>

    <p style={{ marginTop: "34px", fontSize: "20px", fontWeight: 900 }}>
      Puedes hacerlo en menos de 30 minutos al día, a tu ritmo.
    </p>
  </div>
</section>

<section style={{ padding: "50px 24px", background: "#F5F3FF" }}>
  <div style={{ maxWidth: "760px", margin: "0 auto", background: "white", borderRadius: "28px", padding: "36px", textAlign: "center", border: "1px solid #ede9fe" }}>
    <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "20px" }}>
      No necesitas hacerlo perfecto
    </h2>

    <p style={{ fontSize: "20px", marginBottom: "8px" }}>
      Puedes hacerlo a tu ritmo.
    </p>

    <p style={{ fontSize: "16px", fontWeight: 700, color: "#475569" }}>
      Sin horarios, sin presión.
    </p>

    <div style={{ height: "1px", background: "#e2e8f0", margin: "28px 0" }} />

    <p style={{ fontSize: "18px", fontWeight: 900, color: "#7c3aed" }}>
      Si en 7 días no es para ti, devolución completa.
    </p>
  </div>
</section>

<section style={{ padding: "50px 24px", background: "white" }}>
  <div style={{ maxWidth: "900px", margin: "0 auto", background: "#0f172a", color: "white", borderRadius: "24px", padding: "36px", textAlign: "center" }}>
    <p style={{ display: "inline-block", background: "#7c3aed", padding: "6px 22px", borderRadius: "999px", fontSize: "12px", letterSpacing: "4px", fontWeight: 900, marginBottom: "22px" }}>
      BONUS
    </p>

    <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "14px" }}>
      7 señales de que estás en automático y cómo salir de ahí
    </h2>

    <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#cbd5e1", fontStyle: "italic" }}>
      Una guía breve para reconocer cuándo estás en automático y tener un punto claro para volver a ti cuando lo necesites.
    </p>
  </div>
</section>

<section style={{ padding: "50px 24px", background: "white", textAlign: "center" }}>
  <p style={{ fontSize: "18px", marginBottom: "24px" }}>
    Esta puede ser tu primera victoria.
  </p>

  <button
    onClick={() => window.location.href = "https://tupagodeejemplo.com"}
    style={{
      background: "#7c3aed",
      color: "white",
      border: "none",
      padding: "20px 44px",
      borderRadius: "16px",
      fontWeight: 900,
      fontSize: "16px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      cursor: "pointer",
      boxShadow: "0 20px 40px rgba(124,58,237,0.35)"
    }}
  >
    Acceder ahora →
  </button>

  <p style={{ marginTop: "18px", fontSize: "13px", color: "#64748b", fontWeight: 700 }}>
    Pago seguro · Garantía total
  </p>
</section>

<footer style={{ padding: "40px 24px", textAlign: "center", background: "white", borderTop: "1px solid #f1f5f9" }}>
  <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#64748b", fontWeight: 800 }}>
    © 2026 DESPIERTA 72H
  </p>
</footer>
    </div>
  );
}
