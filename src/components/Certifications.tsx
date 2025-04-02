import { data } from "./data";

export default function Certifications() {
    return (
        <div className="col-twelve about-content padding-bottom-3">
            <br/>
            <h3>{data.certificationsData.certificationsTitle}</h3>
            <ul className="info-list">
                {data.certificationsData.certifications.map((certification, index) => (
                    <li key={index}>
                        <span>{certification}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
