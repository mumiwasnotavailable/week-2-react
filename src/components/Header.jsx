function Header({ darkMode, setDarkMode, brojFavorita }) {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                SportBase
            </div>

            <div className="nav-links">
                <a href="#sportasi">Sportaši</a>
                <a href="#detalji">Detalji</a>
                <a href="#favoriti">Favoriti ({brojFavorita})</a>

                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light mode" : "Dark mode"}
                </button>
            </div>
        </nav>
    );
}

export default Header;