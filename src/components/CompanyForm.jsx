import { useState } from "react";

function CompanyForm({ dodajKompaniju }) {
    const [naziv, setNaziv] = useState("");
    const [oblast, setOblast] = useState("");
    const [grad, setGrad] = useState("");
    const [brojZaposlenih, setBrojZaposlenih] = useState("");
    const [opis, setOpis] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const novaKompanija = {
            id: Date.now(),
            naziv: naziv,
            oblast: oblast,
            grad: grad,
            brojZaposlenih: brojZaposlenih,
            opis: opis
        };

        dodajKompaniju(novaKompanija);

        setNaziv("");
        setOblast("");
        setGrad("");
        setBrojZaposlenih("");
        setOpis("");
    }

    return (
        <form className="company-form" onSubmit={handleSubmit}>
            <h2>Dodaj novu kompaniju</h2>

            <input
                type="text"
                placeholder="Naziv kompanije"
                value={naziv}
                onChange={(event) => setNaziv(event.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Oblast"
                value={oblast}
                onChange={(event) => setOblast(event.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Grad"
                value={grad}
                onChange={(event) => setGrad(event.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Broj zaposlenih"
                value={brojZaposlenih}
                onChange={(event) => setBrojZaposlenih(event.target.value)}
                required
            />

            <textarea
                placeholder="Opis kompanije"
                value={opis}
                onChange={(event) => setOpis(event.target.value)}
                required
            ></textarea>

            <button type="submit">Dodaj kompaniju</button>
        </form>
    );
}

export default CompanyForm;