import React from "react";

export default function LandingPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#ffffff",
        color: "#111111",
        lineHeight: 1.5,
      }}
    >
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#f5f5f5",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          Despierta en 72 horas
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 30px",
          }}
        >
          No estás mal… pero tampoco estás bien.
          <br />
          Algo ya no se siente igual, y no sabes bien cómo explicarlo.
        </p>

        <button
          style={{
            padding: "14px 28px",
            fontSize: "16px",
            background: "#111111",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Empezar ahora
        </button>
      </section>

      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "30px",
          }}
        >
          Qué vas a lograr
        </h2>

        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
          }}
        >
          <p>✔ Bajar el ruido mental</p>
          <p>✔ Entender qué te está pasando</p>
          <p>✔ Salir del piloto automático</p>
          <p>✔ Volver a sentir claridad</p>
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#111111",
          color: "#ffffff",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Esto no es teoría
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 30px",
          }}
        >
          Es una experiencia corta, directa y diseñada para que vuelvas a ti.
        </p>

        <button
          style={{
            padding: "14px 28px",
            fontSize: "16px",
            background: "#ffffff",
            color: "#111111",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Salir del modo automático
        </button>
      </section>
    </main>
  );
}
