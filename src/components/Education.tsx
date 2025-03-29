import { data } from "./data";

export default function Education() {
    return (
        <div className="col-twelve about-content padding-top-3">
            <br />
            <h3>{data.educationData.educationTitle}</h3>
            <ul className="info-list">
                {data.educationData.education.map((education, index) => (
                    <li key={index}>
                        <strong className="degree">{education.degree}</strong>
                        <span className="info">{education.institution} ({education.year})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
