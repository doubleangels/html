import { data } from "./data";

export default function Education() {
    return (
        <div className="col-twelve tab-full">
            <br />
            <h3>{data.educationData.educationTitle}</h3>
            {data.educationData.education.map((education, index) => (
                <p key={index}>
                    <strong>{education.degree}</strong> - {education.institution} ({education.year})
                </p>
            ))}
        </div>
    );
}
