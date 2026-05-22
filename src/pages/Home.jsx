import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
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
    const [sortiranje, setSortiranje] = useState("default");
    const [odabraniSportas, setOdabraniSportas] = useState(sportasi[0]);
    const [favoriti, setFavoriti] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(function () {
        const sacuvaniFavoriti = JSON.parse(localStorage.getItem("favoriti")) || [];
        const sacuvanaTema = localStorage.getItem("tema");

        setFavoriti(sacuvaniFavoriti);

        if (sacuvanaTema === "dark") {
            setDarkMode(true);
        }
    }, []);

    useEffect(function () {
        localStorage.setItem("favoriti", JSON.stringify(favoriti));
    }, [favoriti]);

    useEffect(function () {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("tema", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("tema", "light");
        }
    }, [darkMode]);

    function prikaziDetalje(sportas) {
        setOdabraniSportas(sportas);

        setTimeout(function () {
            document.getElementById("detalji")?.scrollIntoView({
                behavior: "smooth"
            });
        }, 100);
    }

    function toggleFavorit(id) {
        if (favoriti.includes(id)) {
            setFavoriti(favoriti.filter(function (favoritId) {
                return favoritId !== id;
            }));
        } else {
            setFavoriti([...favoriti, id]);
        }
    }

    function prikaziRandomSportasa() {
        const randomIndex = Math.floor(Math.random() * sportasi.length);
        prikaziDetalje(sportasi[randomIndex]);
    }

    function resetujFiltere() {
        setPretraga("");
        setFilterSport("Svi");
        setSortiranje("default");
    }

    let filtriraniSportasi = sportasi.filter(function (sportas) {
        const odgovaraPretrazi = sportas.ime
            .toLowerCase()
            .includes(pretraga.toLowerCase());

        const odgovaraSportu =
            filterSport === "Svi" || sportas.sport === filterSport;

        return odgovaraPretrazi && odgovaraSportu;
    });

    if (sortiranje === "imeAZ") {
        filtriraniSportasi = [...filtriraniSportasi].sort(function (a, b) {
            return a.ime.localeCompare(b.ime);
        });
    }

    if (sortiranje === "imeZA") {
        filtriraniSportasi = [...filtriraniSportasi].sort(function (a, b) {
            return b.ime.localeCompare(a.ime);
        });
    }

    if (sortiranje === "stariji") {
        filtriraniSportasi = [...filtriraniSportasi].sort(function (a, b) {
            return a.godina - b.godina;
        });
    }

    if (sortiranje === "mladji") {
        filtriraniSportasi = [...filtriraniSportasi].sort(function (a, b) {
            return b.godina - a.godina;
        });
    }

    const sportovi = [...new Set(sportasi.map(function (sportas) {
        return sportas.sport;
    }))];

    const favoritiSportasi = sportasi.filter(function (sportas) {
        return favoriti.includes(sportas.id);
    });

    return (
        <>
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                brojFavorita={favoriti.length}
            />

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <span className="hero-label">React mini aplikacija</span>

                        <h1>SportBase React</h1>

                        <p>
                            Interaktivna baza poznatih sportaša napravljena pomoću React-a,
                            komponenti, props-a, state-a, filtera i localStorage-a.
                        </p>

                        <div className="hero-actions">
                            <a href="#sportasi" className="primary-btn">
                                Pogledaj sportaše
                            </a>

                            <button onClick={prikaziRandomSportasa} className="secondary-btn">
                                Random sportaš
                            </button>
                        </div>
                    </div>

                    <div className="hero-preview">
                        <img src={odabraniSportas.slika} alt={odabraniSportas.ime} />

                        <div>
                            <span>{odabraniSportas.sport}</span>
                            <h3>{odabraniSportas.ime}</h3>
                            <p>{odabraniSportas.drzava}</p>
                        </div>
                    </div>
                </section>

                <section className="container stats-grid">
                    <div className="stat-card">
                        <h2>{sportasi.length}</h2>
                        <p>Sportaša</p>
                    </div>

                    <div className="stat-card">
                        <h2>{sportovi.length}</h2>
                        <p>Sporta</p>
                    </div>

                    <div className="stat-card">
                        <h2>{favoriti.length}</h2>
                        <p>Favorita</p>
                    </div>

                    <div className="stat-card">
                        <h2>{filtriraniSportasi.length}</h2>
                        <p>Rezultata</p>
                    </div>
                </section>

                <section id="sportasi" className="container">
                    <div className="section-heading">
                        <span>Pregled baze</span>
                        <h2>Lista sportaša</h2>
                        <p>
                            Pretraži, filtriraj i sortiraj sportaše. Klikom na karticu možeš
                            vidjeti detaljniji prikaz.
                        </p>
                    </div>

                    <div className="control-panel">
                        <input
                            type="text"
                            placeholder="Pretraži po imenu..."
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

                        <select
                            value={sortiranje}
                            onChange={(event) => setSortiranje(event.target.value)}
                        >
                            <option value="default">Sortiranje</option>
                            <option value="imeAZ">Ime A-Z</option>
                            <option value="imeZA">Ime Z-A</option>
                            <option value="stariji">Stariji prvo</option>
                            <option value="mladji">Mlađi prvo</option>
                        </select>

                        <button onClick={resetujFiltere}>
                            Reset
                        </button>
                    </div>

                    <div className="results-info">
                        <p>Prikazano sportaša: {filtriraniSportasi.length}</p>
                    </div>

                    <div className="cards">
                        {filtriraniSportasi.length > 0 ? (
                            filtriraniSportasi.map(function (sportas) {
                                return (
                                    <Card
                                        key={sportas.id}
                                        sportas={sportas}
                                        prikaziDetalje={prikaziDetalje}
                                        toggleFavorit={toggleFavorit}
                                        jeFavorit={favoriti.includes(sportas.id)}
                                    />
                                );
                            })
                        ) : (
                            <div className="empty-state">
                                <h3>Nema rezultata</h3>
                                <p>Pokušaj promijeniti pretragu ili filter.</p>
                            </div>
                        )}
                    </div>
                </section>

                <section id="detalji" className="container details-section">
                    <div className="details-image">
                        <img src={odabraniSportas.slika} alt={odabraniSportas.ime} />
                    </div>

                    <div className="details-content">
                        <span>{odabraniSportas.sport}</span>
                        <h2>{odabraniSportas.ime}</h2>
                        <p>{odabraniSportas.opis}</p>

                        <div className="details-grid">
                            <div>
                                <small>Država</small>
                                <strong>{odabraniSportas.drzava}</strong>
                            </div>

                            <div>
                                <small>Godina rođenja</small>
                                <strong>{odabraniSportas.godina}</strong>
                            </div>

                            <div>
                                <small>Najveći uspjeh</small>
                                <strong>{odabraniSportas.uspjeh}</strong>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container favorites-section">
                    <div className="section-heading">
                        <span>Moja lista</span>
                        <h2>Favoriti</h2>
                        <p>Sportaši koje označiš kao favorite ostaju zapamćeni i nakon refresha.</p>
                    </div>

                    {favoritiSportasi.length > 0 ? (
                        <div className="favorite-list">
                            {favoritiSportasi.map(function (sportas) {
                                return (
                                    <div className="favorite-item" key={sportas.id}>
                                        <img src={sportas.slika} alt={sportas.ime} />

                                        <div>
                                            <h3>{sportas.ime}</h3>
                                            <p>{sportas.sport} | {sportas.drzava}</p>
                                        </div>

                                        <button onClick={() => toggleFavorit(sportas.id)}>
                                            Ukloni
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="empty-box">
                            <p>Nema dodanih favorita.</p>
                        </div>
                    )}
                </section>

                <section className="container project-section">
                    <div>
                        <span>O projektu</span>
                        <h2>Šta aplikacija pokazuje?</h2>
                        <p>
                            Projekat koristi React komponente, props, useState, useEffect,
                            localStorage, renderiranje liste, search, filtere, sortiranje i
                            responsive CSS layout.
                        </p>
                    </div>

                    <ul>
                        <li>React komponente</li>
                        <li>Props i state</li>
                        <li>Search i filteri</li>
                        <li>Favoriti</li>
                        <li>Dark mode</li>
                        <li>Responsive dizajn</li>
                    </ul>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Home;