import React from "react";

function About(){
    return (
        <>
            <div className="about p-6 my-[65px] flex justify-around items-center">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/013/517/650/large_2x/cooperation-in-action-group-of-young-modern-people-in-smart-casual-wear-working-together-while-sitting-in-the-office-photo.jpg"
                    alt="image"
                    width="500"
                    className="rounded-xl"
                />

                <div className="right flex flex-col gap-10">
                    <h1 className="text-4xl font-bold max-w-3xl">React development is carried out by passionate developers</h1>
                    <p className="max-w-3xl text-lg text-gray-700">React is a JavaScript library for building dynamic and interactive user interfaces, primarily for single-page applications. It uses a declarative, component-based approach, enabling developers to efficiently manage complex UIs with reusable components.</p>
                    <p className="max-w-3xl text-lg text-gray-700">React is a JavaScript library for building fast, interactive user interfaces using a component-based approach and Virtual DOM.






</p>
                </div>
            </div>
        </>
    )
}
export default About;