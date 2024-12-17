import { useState } from "react";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [res, setRes] = useState([]);

  function notify() {
    toast.success("Ma'lumotlar Muvaffaqiyatli Qo'shildi", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  function validate() {
    if (name.length < 3) {
      alert("Ism Kamida 3ta Harfdan Iborat Bo'lishi Kerak!");
      return false;
    }
    if (/\d/.test(name)) {
      alert("Ismda Raqam Bolmasligi Kerak");
      return false;
    }
    if (email.length < 13) {
      alert("Email Kamida 13ta Begidan Iborat Bo'lishi Kerak");
      return false;
    }
    if (!email.includes("@")) {
      alert("Emailda @ Belgisi Bo'lishi Kerak");
      return false;
    }
    if (phone.length != 17) {
      alert("Telefon Raqami Eng Kamida 17ta Sondan Iborat Bo'lishi Kerak");
      return false;
    }
    if (!phone.startsWith("+998 ")) {
      alert("Telefon Raqami +998 Bilan Boshlanishi Kerak");
      return false;
    }

    return true;
  }

  function handleClick(e) {
    e.preventDefault();
    let isValid = validate();
    if (!isValid) {
      return;
    }
    const data = {
      name,
      email,
      phone,
    };
    let copied = [...res];
    copied.push(data);
    setRes(copied);
    setEmail("");
    setName("");
    setPhone("");
    notify();
  }

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="top-content">
          <h2>2.masala</h2>
          <h1>Foydalanuvchi Ma'lumotlarini Saqlovchi Forma</h1>
        </div>
        <div className="form">
          <form>
            <div className="name">
              <h2>
                Ismingiz <span>*</span>
              </h2>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                placeholder="Ismingiz"
              />
            </div>
            <div className="name">
              <h2>
                Email <span>*</span>
              </h2>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="name"
                placeholder="Email"
              />
            </div>
            <div className="name">
              <h2>
                Telefon raqami <span>*</span>
              </h2>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                id="name"
                placeholder="UZ +998 98 765 43 21"
              />
            </div>
            <button onClick={handleClick} className="save-btn">
              SAQLASH
            </button>
          </form>
        </div>
      </div>
      <div className="block">
        {res.length > 0 &&
          res.map(function (value, index) {
            return (
              <div key={index} className="card">
                <div className="user-name">
                  <p>Name: {value.name}</p>
                </div>
                <div className="user-email">
                  <p>Email: {value.email}</p>
                </div>
                <div className="user-phone">
                  <p>Phone: {value.phone}</p>
                </div>
              </div>
            );
          })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Form2;
