import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Modalpopup.css";

const Modalpopup = () => {
  const contentStyle = {
    maxWidth: "600px",
    width: "90%",
  };
  return (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      contentStyle={contentStyle}
    >
      {(close) => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> Modal Title </div>
          <div className="content">
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Menu Demo </button>}
              position="top center"
              closeOnDocumentClick
              contentStyle={{ padding: "0px", border: "none" }}
            >
              <div className="menu">
                <div className="menu-item"> Menu item 1</div>
                <div className="menu-item"> Menu item 2</div>
                <div className="menu-item"> Menu item 3</div>
                <Popup
                  trigger={<div className="menu-item"> sup Menu </div>}
                  position="right top"
                  on="hover"
                  closeOnDocumentClick
                  mouseLeaveDelay={300}
                  mouseEnterDelay={0}
                  contentStyle={{ padding: "0px", border: "none" }}
                  arrow={false}
                >
                  <div className="menu">
                    <div className="menu-item"> item 1</div>
                    <div className="menu-item"> item 2</div>
                    <div className="menu-item"> item 3</div>
                  </div>
                </Popup>
                <div className="menu-item"> Menu item 4</div>
              </div>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Modalpopup;
