import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { MentorCard } from "./MentorCard";

const Mentors = () => {
    const mentors = useLoaderData();

    if (!mentors) {
        return (
            <p>Sorry The server is Down</p>
        )
    }

    console.log(mentors);


    return (
        <>
            <section className="gradient">
                <section className=" text-center py-5">
                    <div className="container">
                        <h1 className="display-4 fw-bold text-primary">Meet Our Mentors</h1>
                        <p className="text-muted">Expert guidance at your fingertips</p>
                    </div>
                </section>

                <section className="mentors-section py-5">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            {/* <ul> */}

                            {mentors.data.map((curElem) => {
                                return (<MentorCard key={curElem._id} data={curElem}></MentorCard>);
                            })
                            }

                            {/* </ul> */}


                        </div>
                    </div>
                </section>
            </section>

            {/* <Footer /> */}
        </>
    );
};

export default Mentors;


