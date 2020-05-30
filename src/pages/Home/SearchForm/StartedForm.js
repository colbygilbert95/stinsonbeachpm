import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
function StartedForm(props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    body: "",
  });

  const [errors, setError] = useState({
    name: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleChange = event => {
    const { id, value } = event.target;
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
    setError({ ...errors, [id]: "" });
  };

  const handleSubmit = event => {
    const { name, email, phone, body } = values;

    if (!name) {
      setError({ ...errors, name: "Please Provide Name" });
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setError({ ...errors, email: "Please Provide Email Address" });
    } else {
      setButtonLoading(true);
      window.Email.send({
        Host: process.env.REACT_APP_EMAIL_HOST,
        Username: process.env.REACT_APP_EMAIL_USERNAME,
        Password: process.env.REACT_APP_EMAIL_PASSWORD,
        To: "colby@dipseapm.com",
        From: "colby@dipseapm.com",
        Subject: "[Dipseapm.com] New Client Inqury",
        Body: `
             <p> Name:  ${name}</p> </br>
             <p> Phone: ${phone} </p> </br>
             <p> Email: ${email}</p> </br>
             <p> Body:  ${body}</p> </br>
             <p> Type of Place:  ${props.place}</p> </br>
             <p> Number Of Guest:  ${props.guest} </p> </br>
           `,
      }).then(message => {
        setButtonLoading(false);
        if (message === "OK") {
          setValues({
            name: "",
            email: "",
            phone: "",
            body: "",
          });
          setSuccessMessage(true);
        } else {
          console.log(message);
        }
      });
    }

    event.preventDefault();
  };

  return (
    <div>
      {successMessage ? (
        <Alert
          dismissible={true}
          style={{ opacity: 1 }}
          variant="success"
          onClose={() => setSuccessMessage(false)}
        >
          Thanks! We have Recieved Your Message.Contact With You As soon As
          Possible.
        </Alert>
      ) : null}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name Required"
            value={values.name}
            id="name"
            onChange={handleChange}
          />

          {errors.name ? (
            <div className="text-danger">{errors.name}</div>
          ) : null}
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email Adress</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Required"
              value={values.email}
              id="email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {errors.email ? (
              <div className="text-danger">{errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              value={values.phone}
              id="phone"
              placeholder="Phone No."
              onChange={event => {
                setValues({
                  ...values,
                  phone: event.target.value.replace(/\D/, ""),
                });
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text-area"
            placeholder="Your message here... (Include your Airbnb/VRBO listing link)"
            value={values.body}
            id="body"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={buttonLoading}>
          {buttonLoading ? "Sending..." : "Send Message"}
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    place: state.sendMessage.selectedType,
    guest: state.sendMessage.selectedGuest,
  };
};

export default connect(mapStateToProps)(StartedForm);
