import React, { useState } from "react";
import UserLayout from "../../Component/UserLayout";
import "./style.css";


function Help() {
const [text, setText] = useState(false);
const [information, setInformation] = useState([]); 
const resume = () => {
  setText(!text);
};

const baseURL="https://custom.mystagingserver.site/Tim-WDLLC/public/";

const helplist = async() => {
    const info = await fetch(
        "https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_listing", 
        {
            method : "GET",
            header : {
                "Content-type" : "application.json",
            },
        }
    );

const infoList = await info.json();
    setInformation(infoList?.data);
};


return (
    <div>
        <section>
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <button onClick={resume}>click</button>
                <p>{ text == true ? "find" : " "}</p>
            </div>
            <div className="col-lg-6">
                {information?.map((data) => (
                    <div>
                        <p>{data?.name}</p> 
                        <img src = {baseURL + data?.image} />
                    </div>
                )            
            )}
            </div>
            </div>
        </div>
        </section>
    </div>
);
}
export default Help;
