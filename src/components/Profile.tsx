import { data } from "./data"

export default function Profile() {
    return (
        <div className="col-twelve tab-full">
            <h3 className="profile-title">{data.profileData.profileTitle}</h3>
            <p className="lead profile-description">
                {data.profileData.profileDescription}
            </p>
        </div>
    );
}
