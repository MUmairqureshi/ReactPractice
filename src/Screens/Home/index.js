import React, { useEffect, useState } from "react";
import "./style.css";
import UserLayout from "../../Component/UserLayout";
import Basic from "../../Component/Basic";

function Home(props) {
  const [showfun, setShowfun] = useState("safa");
  const [credit, setCredit] = useState(false);
  const [manas, setMana] = useState([]);
  const baseURL = "https://custom.mystagingserver.site/Tim-WDLLC/public/";
  const [formField, setFormField] = useState({}); 
  const [add, setAdd]= useState({});
  
  const dataTitle = (event) => {
    const {name , value} = event.target;
      setFormField((data) => ({
        ...data,
        [name]: value,
      })
    );
  };

 const dataImg = (event) => {
     const file = event.target.file[0];
     const name = event.target.name;
     setFormField ((data) =>({
      ...data,
      [name]: file,
     })
    );
 };


  const addList = async(event) => {
    event.preventDefault()
    const watchAdd = await fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/admin/ads_add_update",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const viewAdd = await watchAdd.json();
      setAdd(viewAdd?.json);
  };

  const queryListing = async () => {
    const mana = await fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_listing",
      {
        method: "GET",
        Header: {
          "Content-Type": "application/json",
        },
      }
    );
    const coin = await mana.json();
    setMana(coin?.data);
  };

  useEffect(() => {
    queryListing();
  }, []);

  return (
    <UserLayout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Basic name="David" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>{showfun}</p>
            </div>
          </div>
          <div className="row">
            {manas?.map((data) => (
              <div className="col-lg-6 gap-4">
                <img src={baseURL + data?.image} className="listQueryImg" />
                <p>{data?.name}</p>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={addList}>
                <input type="text" value={formField?.ad_title} name="ad_title" placeholder="type name" onChange={dataTitle} />
                <input type="file"  name="ad_image" onChange={dataImg} />
                <button type="save"> Submit </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
}
export default Home;
