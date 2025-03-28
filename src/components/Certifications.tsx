import { data } from "./data";

export default function Certifications() {
    return (
        <div>
            <br/>
            <h3>{data.certificationsData.certificationsTitle}</h3>
            {data.certificationsData.certifications.map((certification, index) => (
                <p key={index}>{certification}</p>
            ))}
        </div>
    );
}
