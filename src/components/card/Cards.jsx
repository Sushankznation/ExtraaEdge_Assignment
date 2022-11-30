import { React, useState,useRef } from "react";
import Card from "react-bootstrap/Card";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
// import { useForm } from 'react-hook-form';
import { SiWebauthn } from "react-icons/si";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./cards.css";

const Cards = (props) => {
  const [userData, setUserData] = useState(props.data);
  const { name, username, phone, email, website } = userData;
  const [liked, setLiked] = useState(false);
  const [display, setDisplay] = useState(true);
// For Checking
const nameRef = useRef();
const emailRef = useRef();
const mobRef = useRef();
const websiteRef = useRef();
const [err,setErr] = useState("");
  const contentStyle = {
    maxWidth: "600px",
    width: "90%",
  };

  const handleChange = (event) => {
    setUserData({
      input: event.target.value,
    });
  };
  const handleSubmit =(e)=>{
    e.preventDefault()
  console.log("Submitted")
  }

  return (
    <div>
      {display ? (
        <Card style={{ width: "14rem" }} className="container">
          <Card.Img
            variant="top"
            width="100%"
            src={`https://avatars.dicebear.com/v2/avataaars/{${username}}.svg?options[mood][]=happy`}
          />
          <Card.Body>
            <div className="card-details">
              <h3>{name}</h3>
              <p>
                <BsEnvelope className="contact-icons" /> {email}
              </p>
              <p>
                {" "}
                <BsTelephone className="contact-icons" />
                {phone}
              </p>
              <p>
                <SiWebauthn className="contact-icons" />
                {website}
              </p>
            </div>
            <div className="action-buttons">
              {liked ? (
                <BsHeartFill
                  className="heart"
                  onClick={() => setLiked(!liked)}
                />
              ) : (
                <BsHeart className="heart" onClick={() => setLiked(!liked)} />
              )}

              <Popup
                trigger={<AiOutlineEdit />}
                modal
                contentStyle={contentStyle}
              >
                {(close) => (
                  <div className="modal">
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                    <div className="header"> Basic Modal </div>
                    <form className="content" onSubmit={handleSubmit}>
                      <div className="form-control">
                        <label htmlFor="name">* Name:</label>
                        <input
                          type="text"
                          value={name}
                          name="name"
                          ref={nameRef}
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="email">* Email:</label>
                        <input
                          type="email"
                          value={email}
                          name="email"
                          required
                          ref={emailRef}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="phone">* Phone:</label>
                        <input
                          type="number"
                          value={phone}
                          name="phone"
                          required
                          ref={mobRef}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="website">* Website:</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={website}
                          name="website"
                          ref={websiteRef}
                          required
                        />
                      </div>
                   

                    <div className="actions">
                      <button
                        className="button cancel"
                        onClick={() => {
                          close();
                        }}
                      >
                        Cancel
                      </button>
                      <button
                      type="submit"
                        className="button"
                        onClick={() => {
                          console.log("modal closed ");
                          close();
                        }}
                      >
                        OK
                      </button>
                    </div>
                    </form>
                  </div>
                )}
              </Popup>
              <BsTrash onClick={() => setDisplay(false)} />
            </div>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cards;
