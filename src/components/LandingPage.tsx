import React from "react";

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#ffffff", color: "#111", lineHeight: "1.5" }}>
      
      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#f7f7f7" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Despierta en 72 horas
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto 30px" }}>
          No estás mal… pero tampoco estás bien.  
          Algo ya no se siente igual, y no sabes bien cómo explicarlo.
        </p>
        <button style={{
          padding: "15px 30px",
          fontSize: "16px",
          backgroundColor: "#111",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px"
        }}>
          Empezar ahora
        </button>
      </section>

      {/* BENEFICIOS */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "40px" }}>
          Qué vas a lograr
        </h2>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p>✔ Bajar el ruido mental</p>
          <p>✔ Entender qué te está pasando</p>
          <p>✔ Salir del piloto automático</p>
          <p>✔ Volver a sentir claridad</p>
        </div>
      </section>

      {/* CIERRE */}
      <section style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#111", color: "#fff" }}>
        <h2 style={{ marginBottom: "20px" }}>
          Esto no es teoría
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
          Es una experiencia corta, directa y diseñada para que vuelvas a ti.
        </p>
        <button style={{
          padding: "15px 30px",
          fontSize: "16px",
          backgroundColor: "#fff",
          color: "#111",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px"
        }}>
          Salir del modo automático
        </button>
      </section>

    </div>
  );
}
