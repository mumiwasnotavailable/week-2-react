function Card({ sportas, prikaziDetalje }) {
    return (
        <div className="card">
            <img src={sportas.slika} alt={sportas.ime} />

            <div className="card-content">
                <span className="badge">{sportas.sport}</span>

                <h2>{sportas.ime}</h2>

                <p>
                    <strong>Država:</strong> {sportas.drzava}
                </p>

                <p>
                    <strong>Godina rođenja:</strong> {sportas.godina}
                </p>

                <button onClick={() => prikaziDetalje(sportas)}>
                    Prikaži detalje
                </button>
            </div>
        </div>
    );
}

export default Card;