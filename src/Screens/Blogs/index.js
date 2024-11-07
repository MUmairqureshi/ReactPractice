import React, { useEffect, useState } from "react";
import "./style.css";
import UserLayout from "../../Component/UserLayout";

function Blogs() {
  const [hide, setHide] = useState(false);
  const [about, setAbout] = useState();
  const showData = () => {
    setHide(!hide);
  };
  const [formDatas, setFormData] = useState({});
  const [book, setBook] = useState({});
  const formTitle = (event) => {
    const { name, value } = event.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
    
  };

  const formImage = (event) => {
    const file = event.target.files[0];
    const name = event.target.name;
    setFormData((data) => ({
      ...data,
      [name]: file,
    }));
  };
  
  const addList = async (event) => {
    event.preventDefault();
    const formInfo = new FormData();
    for (const key in formDatas) {
      formInfo.append(key, formDatas[key]);
    }
    
    const listing = await fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/admin/ads_add_update",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${"682|eakCN606svjsNmSnk01RB4EEbm7hpEXqOpbZj0115641c096"}`,
        },

        body: formInfo,
      }
    );

    const booklist = await listing.json();
    setBook(booklist);
  };
  console.log("book", book?.msg);
  // console.log("hide", hide);
  return (
    <UserLayout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <button onClick={showData}>Click</button>
              <p> {hide == true ? "Developer Data" : ""} </p>
              <p> Lorem Ipsum </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* <form onSubmit={addList}> */}
              <input
                type="text"
                value={formDatas?.ad_title}
                name="ad_title"
                onChange={formTitle}
              />
              <input type="file" name="ad_image" onChange={formImage} />
              <button type="btn" onClick={addList}>
                Submit
              </button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
}
export default Blogs;
