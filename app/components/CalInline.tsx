const calLink = "ramazzini/demo-personalizada-de-ramazzini";

export function CalInline() {
  const params = new URLSearchParams({ layout: "month_view" });

  const calUrl = `https://app.cal.com/${calLink}?${params.toString()}`;

  return (
    <section className="calendar-panel" aria-labelledby="calendar-title">
      <div className="form-head">
        <span className="pill">Calendario</span>
        <h3 id="calendar-title">Agenda tu demo personalizada</h3>
        <p>
          Elige el horario que mejor se acomode a tu operación y recibe la
          confirmación en tu correo.
        </p>
      </div>
      <div className="calendar-frame">
        <iframe
          src={calUrl}
          title="Agenda tu demo personalizada de Ramazzini"
          loading="lazy"
        />
      </div>
      <noscript>
        <a
          className="button button-secondary cal-noscript"
          href={`https://app.cal.com/${calLink}`}
        >
          Abrir calendario de Ramazzini
        </a>
      </noscript>
    </section>
  );
}
