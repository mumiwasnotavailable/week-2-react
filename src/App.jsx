import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <Header />

            <main className="container">
                <section className="intro">
                    <h2>Uvod u React komponente</h2>
                    <p>
                        Ova aplikacija koristi posebne komponente za header,
                        karticu i footer. Svaka komponenta se nalazi u svom fajlu.
                    </p>
                </section>

                <section className="cards">
                    <Card />
                    <Card />
                    <Card />
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;