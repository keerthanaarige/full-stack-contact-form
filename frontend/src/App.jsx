import { useState } from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/submit",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      alert("Error submitting form");

    }

  };

  return (

    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0"
    }}>

      <div style={{
        width: "400px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px gray"
      }}>

        <h2 style={{
          textAlign: "center",
          marginBottom: "20px"
        }}>
          full stack contact form
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px"
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px"
            }}
          />

          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Submit
          </button>

        </form>

      </div>

    </div>

  );

}

export default App;