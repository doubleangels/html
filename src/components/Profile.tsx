import { data } from "./data"

export default function Profile() {
    return (
        <div className="col-twelve tab-full">
            <h1 className="profile-description">
                {data.profileData.profileDescription}
            </h1>
        </div>
    );
}
