export default function LandingPage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#ffffff", color: "#1f1f1f" }}>
      <section style={{ padding: "80px 24px", maxWidth: "980px", margin: "0 auto" }}>
        <p style={{ fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "#7A3E4D" }}>
          Experiencia guiada de 72 horas
        </p>

        <h1 style={{ fontSize: "48px", lineHeight: "1.1", margin: "20px 0" }}>
          Sal del modo automático y vuelve a escucharte.
        </h1>

        <p style={{ fontSize: "21px", lineHeight: "1.6", maxWidth: "720px", color: "#555" }}>
          Despierta 72H es una experiencia breve, íntima y guiada para detener el ruido,
          mirar lo que te está pasando y recuperar claridad sin exigirte más.
        </p>

        <a
          href="#comprar"
          style={{
            display: "inline-block",
            marginTop: "32px",
            background: "#7A3E4D",
            color: "white",
            padding: "16px 28px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Empezar ahora
        </a>
      </section>

      <section style={{ background: "#F7F2F0", padding: "70px 24px" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
            No estás mal. Pero algo ya no se siente igual.
          </h2>

          <p style={{ fontSize: "19px", lineHeight: "1.7", color: "#555", maxWidth: "760px" }}>
            A veces sigues funcionando, cumpliendo, respondiendo y avanzando.
            Pero por dentro hay cansancio, confusión o una sensación difícil de explicar.
          </p>

          <p style={{ fontSize: "19px", lineHeight: "1.7", color: "#555", maxWidth: "760px" }}>
            Esta experiencia no viene a exigirte respuestas perfectas.
            Viene a ayudarte a hacer una pausa real.
          </p>
        </div>
      </section>

      <section style={{ padding: "70px 24px", maxWidth: "980px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "32px" }}>
          Qué vivirás en 72 horas
        </h2>

        <div style={{ display: "grid", gap: "20px" }}>
          <div style={{ padding: "28px", border: "1px solid #eee", borderRadius: "20px" }}>
            <h3>Día 1 · Bajar el ruido</h3>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Una primera pausa para reconocer cómo estás y dejar de empujarte en automático.
            </p>
          </div>

          <div style={{ padding: "28px", border: "1px solid #eee", borderRadius: "20px" }}>
            <h3>Día 2 · Interrumpir el automático</h3>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Identificar patrones, respuestas repetidas y pequeñas decisiones que puedes empezar a mirar distinto.
            </p>
          </div>

          <div style={{ padding: "28px", border: "1px solid #eee", borderRadius: "20px" }}>
            <h3>Día 3 · Reconectar</h3>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Cerrar con más presencia, más claridad y una primera acción posible para volver a ti.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#1F1F1F", color: "white", padding: "70px 24px" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px" }}>
            Es para ti si...
          </h2>

          <ul style={{ fontSize: "19px", lineHeight: "1.9", paddingLeft: "22px", color: "#eee" }}>
            <li>Sientes que estás funcionando, pero desconectada.</li>
            <li>Necesitas parar sin tener que explicarlo todo.</li>
            <li>Quieres claridad, pero sin presión.</li>
            <li>Buscas una experiencia breve, simple y guiada.</li>
          </ul>
        </div>
      </section>

      <section id="comprar" style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "16px" }}>
          Despierta 72H
        </h2>

        <p style={{ fontSize: "20px", color: "#555" }}>
          Una experiencia guiada para salir del automático.
        </p>

        <p style={{ fontSize: "36px", fontWeight: "bold", margin: "30px 0" }}>
          $29.990 CLP
        </p>

        <a
          href="#"
          style={{
            display: "inline-block",
            background: "#7A3E4D",
            color: "white",
            padding: "18px 34px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          Quiero empezar ahora
        </a>

        <p style={{ marginTop: "18px", color: "#777", fontSize: "14px" }}>
          Acceso simple · A tu ritmo · Sin sesiones en vivo
        </p>
      </section>
    </main>
  );
}
