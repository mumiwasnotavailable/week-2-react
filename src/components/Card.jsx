function Card({ sportas, prikaziDetalje, toggleFavorit, jeFavorit }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={sportas.slika} alt={sportas.ime} />
                <span>{sportas.sport}</span>
            </div>

            <div className="card-content">
                <h2>{sportas.ime}</h2>

                <p>
                    <strong>Država:</strong> {sportas.drzava}
                </p>

                <p>
                    <strong>Godina rođenja:</strong> {sportas.godina}
                </p>

                <div className="card-actions">
                    <button onClick={() => prikaziDetalje(sportas)}>
                        Detalji
                    </button>

                    <button
                        className={jeFavorit ? "favorite active" : "favorite"}
                        onClick={() => toggleFavorit(sportas.id)}
                    >
                        {jeFavorit ? "Favorit" : "Dodaj"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;