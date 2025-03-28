import { data } from "./data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <small>© {data.introData.name} {currentYear}.</small>
            </div>
        </footer>
    );
}