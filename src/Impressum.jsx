import React from "react";
import "./Impressum.css";
import TeamBild from "./TeamBild.jpg";

function Impressum() {
  return (
    <div>
      <div className="Impressum">
        <h1>Impressum</h1>
      </div>

      <div className="Img">
        <img src={TeamBild} alt="Teamfoto" />
      </div>

      <div className="Inhalt">
        <p>
          Verantwortlich für den Inhalt dieser Webseite gemäß § 5 TMG: Zoo
          Mustermann GmbH Musterstraße 123 12345 Musterstadt Telefon:
          0123-456789 E-Mail: info@zoomustermann.de Vertretungsberechtigte
          Geschäftsführer: Max Mustermann, Anna Mustermann Registergericht:
          Amtsgericht Musterstadt Registernummer: HRB 12345
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          DE 123 456 789 Verantwortlicher im Sinne des § 55 Abs. 2 RStV: Max
          Mustermann Musterstraße 123 12345 Musterstadt Haftungshinweis: Trotz
          sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für
          die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
          ausschließlich deren Betreiber verantwortlich. Copyright: Alle Texte,
          Bilder und andere auf der Webseite veröffentlichten Informationen
          unterliegen dem Copyright der Zoo Mustermann GmbH, sofern nicht anders
          gekennzeichnet. Eine Vervielfältigung oder Verwendung der Inhalte ist
          ohne ausdrückliche Zustimmung der Zoo Zürich GmbH nicht gestattet.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
