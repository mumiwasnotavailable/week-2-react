function Card({ kompanija }) {
    return (
        <div className="card">
            <h2>{kompanija.naziv}</h2>

            <p>
                <strong>Oblast:</strong> {kompanija.oblast}
            </p>

            <p>
                <strong>Grad:</strong> {kompanija.grad}
            </p>

            <p>
                <strong>Broj zaposlenih:</strong> {kompanija.brojZaposlenih}
            </p>

            <p>{kompanija.opis}</p>
        </div>
    );
}

export default Card;