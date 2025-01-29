import { useLoaderData } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";

export const PersonalPage = () => {

    const person = useLoaderData();
    console.log(person);

    return (
        <div className="row d-flex justify-content-center align-items-center my-5">
            <ProfileCard data={person.data} />
        </div>
    );
}