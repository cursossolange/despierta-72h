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

    </div>
  );
}
