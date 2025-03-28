import { data } from "./data"

export default function Profile() {
    return (
        <div className="col-twelve tab-full profile">
            <div>
                <br/>
                <h3>{data.profileData.profileTitle}</h3>
                <p>{data.profileData.profileDescription}</p>
            </div>
        </div>
    );
}