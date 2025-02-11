export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <small>© Matt VerLee {currentYear}.</small>
            </div>
        </footer>
    );
}