import React, { useEffect, useState } from "react";
import "./style.css";
import Basic from "../../Component/Basic";
import UserLayout from "../../Component/UserLayout";

function Shop() {
  const [credit, showCredit] = useState([]);
  const baseURL = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const [details, setDetails] = useState({});
  const [story, setStory] = useState({});

  const promo = async (event) => {
    event.preventDefault();
    const code = await fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/admin/ads_add_update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const active = await code.json();
    setStory(active.json);
  };

  const textTitle = (event) => {
    const [name, value] = event.target;
    setDetails((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const addImg = (event) => {
    const file = event.target.file[0];
    const name = event.target.name;
    setDetails((data) => ({
      ...data,
      [name]: file,
    }));
  };

  const purchased = async () => {
    const buylist = await fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_listing",
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const ammount = await buylist.json();
    showCredit(ammount?.data);
  };

  const [crowd, setCrowd] = useState();

  const crowdList = () => {
    setCrowd("Develop New");
  };

  useEffect(() => {
    purchased();
  }, []);

  console.log("credit", credit);
  // const ammount = await buylist?.json();

  return (
    <UserLayout>
      <Basic />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {credit?.map((data) => (
                <div>
                  <img src={baseURL + data?.image} />
                  <p>{data?.name}</p>
                  <p>{data?.genre?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button onClick={crowdList}>Click Me</button>
              <p>{crowd}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={promo}>
                <input
                  type="text"
                  value={details?.ad_title}
                  name="ad_title"
                  onChange={textTitle}
                />
                <input type="file" name="ad_image" onChange={addImg} />
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
}
export default Shop;
