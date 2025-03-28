import { data } from "./data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="row">
                <div className="col-twelve">
                    <div className="copyright">
                        <span>© {currentYear} {data.introData.name}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
