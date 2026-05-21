import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import CompanyForm from "./components/CompanyForm";
import "./App.css";

function App() {
    const [kompanije, setKompanije] = useState([
        {
            id: 1,
            naziv: "IDK Studio",
            oblast: "IT",
            grad: "Bihać",
            brojZaposlenih: 25,
            opis: "Kompanija koja se bavi razvojem digitalnih rješenja, web stranica i aplikacija."
        },
        {
            id: 2,
            naziv: "Tech Solutions",
            oblast: "IT",
            grad: "Sarajevo",
            brojZaposlenih: 40,
            opis: "Firma fokusirana na razvoj softverskih rješenja za klijente."
        },
        {
            id: 3,
            naziv: "Marketing Plus",
            oblast: "Marketing",
            grad: "Tuzla",
            brojZaposlenih: 18,
            opis: "Agencija za digitalni marketing i oglašavanje."
        }
    ]);

    function dodajKompaniju(novaKompanija) {
        setKompanije([...kompanije, novaKompanija]);
    }

    return (
        <>
            <Header />

            <main className="container">
                <section className="intro">
                    <h2>React props i state</h2>
                    <p>
                        Ova aplikacija prikazuje listu kompanija kroz React komponente.
                        Podaci se šalju kroz props, a lista kompanija se čuva pomoću useState.
                    </p>
                </section>

                <CompanyForm dodajKompaniju={dodajKompaniju} />

                <section>
                    <h2 className="section-title">Lista kompanija</h2>

                    <div className="cards">
                        {kompanije.map(function (kompanija) {
                            return (
                                <Card
                                    key={kompanija.id}
                                    kompanija={kompanija}
                                />
                            );
                        })}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;