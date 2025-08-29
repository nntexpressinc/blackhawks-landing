import React, { useRef, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "./Contact.css";
import Map from "./map";
import { pdf } from "../../img";

const Contact = () => {
  const form = useRef();
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    user_phone: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const formElements = form.current.elements;
    const newErrors = {
      user_name: !formElements.user_name.value,
      user_email: !formElements.user_email.value,
      user_phone: !formElements.user_phone.value,
      message: !formElements.message.value,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!agree) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Verifying captcha...");

    try {
      // получаем токен от reCAPTCHA v3
      const token = await window.grecaptcha.enterprise.execute(
        "6Lf1uLQrAAAAAKICZIcgPCmnZ18MMfX5SzqxxIh4", // твой sitekey
        { action: "submit" }
      );

      // прикрепляем токен в форму (чтобы backend мог проверить)
      const recaptchaInput = document.createElement("input");
      recaptchaInput.type = "hidden";
      recaptchaInput.name = "g-recaptcha-response";
      recaptchaInput.value = token;
      form.current.appendChild(recaptchaInput);

      // отправляем данные
      emailjs
        .sendForm(
          "service_txv60si",
          "template_q3nngre",
          form.current,
          "tf5n0t1s6yGnVnizL"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Your information has been sent successfully!", {
              id: toastId,
            });
            form.current.reset();
            setAgree(false);
          },
          (error) => {
            console.log(error.text);
            toast.error("Error sending data!", { id: toastId });
          }
        );
    } catch (err) {
      console.error("Captcha error:", err);
      toast.error("Captcha verification failed.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="about-section screen">
      <Container>
        <Row md={12}>
          <h1 className="purple clamp1" style={{ paddingBottom: "20px" }}>
            Contact Us
          </h1>
        </Row>
        <Row>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="d-flex justify-content-start align-items-start"
          >
            <Form
              ref={form}
              onSubmit={sendEmail}
              className="form-control1 w-100 mb-5"
              id="demo-form"
            >
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="text-start custom-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className={`custom-input ${errors.user_name ? "is-invalid" : ""}`}
                />
                {errors.user_name && (
                  <div className="text-start invalid-feedback">
                    Name is required.
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-start custom-label">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="name@example.com"
                  className={`custom-input ${errors.user_email ? "is-invalid" : ""}`}
                />
                {errors.user_email && (
                  <div className="text-start invalid-feedback">
                    Email is required.
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="text-start custom-label">Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="user_phone"
                  placeholder="Enter your phone number"
                  className={`font-family-san-serif custom-input ${
                    errors.user_phone ? "is-invalid" : ""
                  }`}
                />
                {errors.user_phone && (
                  <div className="text-start invalid-feedback">
                    Phone is required.
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTextarea">
                <Form.Label className="text-start custom-label">Message</Form.Label>
                <Form.Control
                  style={{ height: "135px" }}
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Write your message"
                  className={`custom-input ${errors.message ? "is-invalid" : ""}`}
                />
                {errors.message && (
                  <div className="text-start invalid-feedback">
                    Message is required.
                  </div>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3 d-flex align-items-center"
                controlId="formCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      <span style={{ marginLeft: "8px" }}>
                        I agree to receive SMS Text messages from BLACKHAWKS EXPRESS
                        INC
                      </span>
                    </>
                  }
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  style={{ display: "inline-flex", alignItems: "center" }}
                />
              </Form.Group>
              <p
                style={{
                  textAlign: "left",
                  color: "#C0C0C0",
                  marginBottom: "8px",
                }}
              >
                By clicking "Submit," I agree to receive emails and phone calls from
                BLACKHAWKS EXPRESS INC. I also agree to the{" "}
                <a
                  href="/terms-of-service"
                  target="_blank"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Privacy Policy
                </a>
                .
                <br />
                By checking the box, I agree to receive text messages from
                BLACKHAWKS EXPRESS INC. Text messages may include updates or
                notifications. Msg & data rates may apply. Msg frequency varies. I
                also agree to the{" "}
                <a
                  href="/terms-of-service"
                  target="_blank"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Privacy Policy
                </a>
                . Reply to text messages with HELP for assistance. Unsubscribe from
                text messages at any time by replying STOP.
              </p>

              <Button
                type="submit"
                disabled={!agree || loading}
                className="w-100 button-from mt-4 g-recaptcha"
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </Form>
          </Col>
          <Col
            md={6}
            xs={{ order: 1 }}
            className="d-flex justify-content-start align-items-start"
          >
            <Map />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
