import { data } from "./data"

export default function Profile() {
    return (
        <div className="col-twelve tab-full">
            <ul className="info-list">
            <li>
                <h3>{data.profileData.profileTitle}</h3>
                <p>{data.profileData.profileDescription}</p>
            </li>
            <li>
                <h3>{data.certificationsData.certificationsTitle}</h3>
                {data.certificationsData.certifications.map((certification, index) => (
                <p key={index}>{certification}</p>
                ))}
            </li>
            </ul>
        </div>
    );
}