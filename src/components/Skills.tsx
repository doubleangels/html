import { data } from "./data";

export default function Skills() {
    return (
        <div className="col-twelve tab-full" style={{marginTop: "3rem"}}>
            <h3 className="skill-title">{data.skillsData.skillsTitle}</h3>
            <p className="lead">{data.skillsData.skillsDescription}</p>
            
            <ul className="skill-bars">
                {data.skillsData.skills.map((skill) => (
                    <li key={skill.text}>
                        <div className={`progress percent99`}>
                            <span>99%</span>
                        </div>
                        <strong className="skill-name">{skill.text}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}
