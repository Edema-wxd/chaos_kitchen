import React from "react";
//import Backbtn from '../../components/shared/Backbtn/Backbtn'

function payment() {
  return (
    <div>
      <div className="Pmodule">
        <div className="PMoptions">
          <button>
            <p>Wallet</p>
            <p>5% Discount</p>
            <p>edit</p>
          </button>
          <button>
            <p>Cash</p>
            <p>0% Discount</p>
            <p>edit</p>
          </button>
        </div>
        <div className="PMwallet">
          <div className="PMWbalance">
            <img src="" alt="" />
            <p className="PMWtxt">My Balance </p>
            <p className="PMWcash">edit</p>
          </div>
          <div className="PMtopup">
            <button>
              <img src="" alt="" />
            </button>
          </div>
        </div>
        <button className="PMorder" type="submit">
          Order
        </button>
      </div>
    </div>
  );
}

export default payment;
