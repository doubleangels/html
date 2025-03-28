import { data } from "./data";

export default function Skills() {
    return (
        <div className="col-twelve tab-full">
            <br />
            <h3>{data.skillsData.skillsTitle}</h3>
            <p>{data.skillsData.skillsDescription}</p>
            <ul className="skill-bars">
            {data.skillsData.skills.map((skill) => (
                <li key={skill.text}>
                <div className={`progress percent${skill.percent}`}>
                    <span>{`${skill.percent}%`}</span>
                </div>
                <strong className="resize-strong">{skill.text}</strong>
                </li>
            ))}
            </ul>
        </div>
    );
}