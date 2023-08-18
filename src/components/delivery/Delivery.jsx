import React from "react";

function Delivery() {
  return (
    <div>
      <div className="Dtime">
        <p>{`Estimated delivery time is`}</p>
        <p>{`Order Progress`}</p>
      </div>
      <div className="Dprogress">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="Ddriver">
        <div className="DDprofile">
          <img src="" alt="" />
          <div className="DDPtxt">
          <p>Driver name</p>
          <p>Occupation</p>
          </div>
          
        </div>
        <div className="DDcontact">
          <button>call</button>
          <button>message</button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
