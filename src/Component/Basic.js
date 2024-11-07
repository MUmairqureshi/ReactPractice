import React from "react";

 function Basic (props) {
    return (

      <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className={`default-class ${props?.className}`}>
                        the loremipsum text {props?.name}
                    </p>
                </div>
            </div>
        </div>
      </section>
    );

}
export default Basic