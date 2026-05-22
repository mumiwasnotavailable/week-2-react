import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const [sportasi] = useState([
        {
            id: 1,
            ime: "Cristiano Ronaldo",
            sport: "Fudbal",
            drzava: "Portugal",
            godina: 1985,
            uspjeh: "Višestruki osvajač Lige prvaka",
            slika: "/images/ronaldo.jpg",
            opis: "Cristiano Ronaldo je portugalski fudbaler poznat po disciplini, brzini, snazi i velikom broju postignutih golova."
        },
        {
            id: 2,
            ime: "Lionel Messi",
            sport: "Fudbal",
            drzava: "Argentina",
            godina: 1987,
            uspjeh: "Svjetski prvak sa Argentinom",
            slika: "/images/messi.jpg",
            opis: "Lionel Messi je argentinski fudbaler poznat po tehnici, driblingu, pregledu igre i velikoj kreativnosti."
        },
        {
            id: 3,
            ime: "Novak Đoković",
            sport: "Tenis",
            drzava: "Srbija",
            godina: 1987,
            uspjeh: "Jedan od najtrofejnijih tenisera svih vremena",
            slika: "/images/djokovic.jpg",
            opis: "Novak Đoković je profesionalni teniser poznat po mentalnoj snazi, defanzivnoj igri i velikom broju osvojenih turnira."
        },
        {
            id: 4,
            ime: "Serena Williams",
            sport: "Tenis",
            drzava: "SAD",
            godina: 1981,
            uspjeh: "Jedna od najuspješnijih teniserki svih vremena",
            slika: "/images/serena.jpg",
            opis: "Serena Williams je američka teniserka poznata po snažnoj igri, borbenosti i velikom utjecaju na ženski tenis."
        },
        {
            id: 5,
            ime: "LeBron James",
            sport: "Košarka",
            drzava: "SAD",
            godina: 1984,
            uspjeh: "Višestruki NBA prvak",
            slika: "/images/lebron.jpg",
            opis: "LeBron James je američki košarkaš poznat po fizičkoj snazi, liderstvu i dugoj uspješnoj NBA karijeri."
        },
        {
            id: 6,
            ime: "Usain Bolt",
            sport: "Atletika",
            drzava: "Jamajka",
            godina: 1986,
            uspjeh: "Svjetski rekorder na 100m i 200m",
            slika: "/images/bolt.jpg",
            opis: "Usain Bolt je bivši jamajčanski sprinter poznat kao najbrži čovjek na svijetu."
        }
    ]);

    const [pretraga, setPretraga] = useState("");
    const [filterSport, setFilterSport] = useState("Svi");
    const [odabraniSportas, setOdabraniSportas] = useState(null);

    const filtriraniSportasi = sportasi.filter(function (sportas) {
        const odgovaraPretrazi = sportas.ime
            .toLowerCase()
            .includes(pretraga.toLowerCase());

        const odgovaraSportu =
            filterSport === "Svi" || sportas.sport === filterSport;

        return odgovaraPretrazi && odgovaraSportu;
    });

    function prikaziDetalje(sportas) {
        setOdabraniSportas(sportas);
    }

    return (
        <>
            <Header />

            <main className="container">
                <section className="intro">
                    <h2>React baza sportaša</h2>
                    <p>
                        Ovo je React verzija projekta iz prethodne sedmice.
                        Aplikacija koristi komponente, props, useState, search i filtere.
                    </p>
                </section>

                <section className="filters">
                    <input
                        type="text"
                        placeholder="Pretraži sportaša..."
                        value={pretraga}
                        onChange={(event) => setPretraga(event.target.value)}
                    />

                    <select
                        value={filterSport}
                        onChange={(event) => setFilterSport(event.target.value)}
                    >
                        <option value="Svi">Svi sportovi</option>
                        <option value="Fudbal">Fudbal</option>
                        <option value="Tenis">Tenis</option>
                        <option value="Košarka">Košarka</option>
                        <option value="Atletika">Atletika</option>
                    </select>
                </section>

                <section>
                    <div className="section-header">
                        <h2 className="section-title">Lista sportaša</h2>
                        <p>Prikazano: {filtriraniSportasi.length}</p>
                    </div>

                    <div className="cards">
                        {filtriraniSportasi.map(function (sportas) {
                            return (
                                <Card
                                    key={sportas.id}
                                    sportas={sportas}
                                    prikaziDetalje={prikaziDetalje}
                                />
                            );
                        })}
                    </div>
                </section>

                {odabraniSportas && (
                    <section className="details-card">
                        <img src={odabraniSportas.slika} alt={odabraniSportas.ime} />

                        <div>
                            <span>{odabraniSportas.sport}</span>
                            <h2>{odabraniSportas.ime}</h2>
                            <p>{odabraniSportas.opis}</p>

                            <div className="details-grid">
                                <p><strong>Država:</strong> {odabraniSportas.drzava}</p>
                                <p><strong>Godina rođenja:</strong> {odabraniSportas.godina}</p>
                                <p><strong>Uspjeh:</strong> {odabraniSportas.uspjeh}</p>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </>
    );
}

export default App;