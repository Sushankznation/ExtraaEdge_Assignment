import { useState } from "react";
import Card from "react-bootstrap/Card";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
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

  const { username, name, phone, email, website } = userData;
  // console.log(phone);
  const [liked, setLiked] = useState(false);
  const [display, setDisplay] = useState(true);
  const [ename, setEName] = useState(name);
  const [newemail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newWebsite, setNewWebsite] = useState(website);
  // For form Validation
  const [nameErr, setNameErr] = useState("");
  const [emailError, setEmailError] = useState("");
  const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  const validateEmail = (e) => {
    var email = e.target.value;
    setNewEmail(email);
    if (/\S+@\S+\.\S+/.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  const validateName = (e) => {
    var name = e.target.value;
    setEName(name);
    if (name.length < 1) {
      setNameErr("Invalid Name");
    } else {
      setNameErr("");
    }
  };
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
              <h3>{ename}</h3>
              <p>
                <BsEnvelope className="contact-icons" /> {email}
              </p>
              <p className="icons">
                {" "}
                <BsTelephone className="contact-icons" />
                {phone}
              </p>
              <p className="icons">
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
                trigger={<AiOutlineEdit className="edit"/>}
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
                          value={ename}
                          name="name"
                          required
                          onChange={(e) => validateName(e)}
                        />
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                        >
                          {nameErr}
                        </span>
                      </div>
                      <div className="form-control">
                        <label htmlFor="email">* Email:</label>
                        <input
                          type="email"
                          value={newemail}
                          name="email"
                          required
                          onChange={(e) => validateEmail(e)}
                        />
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "red"
                          }}
                        >
                          {emailError}
                        </span>
                      </div>
                      <div className="form-control">
                        <label htmlFor="phone">* Phone:</label>
                        <input
                          name="phone"
                          required
                          onChange={(e) => {
                            setNewPhone(e.target.value);
                          }}
                          value={newPhone}
                         
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="website">* Website:</label>
                        <input
                          type="text"
                          onChange={(e) => {
                            setNewWebsite(e.target.value);
                          }}
                          value={newWebsite}
                          name="website"
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
                            props.changeInfo(
                              props.index,
                              ename,
                              newemail,
                              newPhone,
                              newWebsite
                            );
                            console.log("Close Form");
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
              <BsTrash className="trash" onClick={() => setDisplay(false)} />
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