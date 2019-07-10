import React from "react"
import FancyTitle from "../components/title"
import { Row, Col } from "antd"
import contactFormStyle from "./contact-form.module.css"

class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    const email = target.email
    const comment = target.comment

    this.setState({
      [name]: value,
      [email]: value,
      [comment]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}, the following message was submitted from the email ${this.state.email}:
        ${this.state.comment}`)
  }
  render() {
    return (
      <div>
        <FancyTitle titleText="Contact Me" />
        <form
          onSubmit={this.handleSubmit}
          //style={{ margin: "0 auto", width: "30rem" }}
        >
          <Row className={contactFormStyle.row}>
            <Col span={12}>
              <label>
                First name:{" "}
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  className={contactFormStyle.names}
                />
              </label>
            </Col>
            <Col span={12}>
              <label>
                Last name:{" "}
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  className={contactFormStyle.names}
                />
              </label>
            </Col>
          </Row>

          <br />
          <Row className={contactFormStyle.row}>
            <Col span={12} offset={6}>
              <label>
                E-mail:{" "}
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  className={contactFormStyle.names}
                />
              </label>
            </Col>
          </Row>

          <br />
          <Row className={contactFormStyle.row}>
            <Col span={24}>
              <textarea
                type="comment"
                name="comment"
                placeholder="comments..."
                value={this.state.comment}
                onChange={this.handleInputChange}
                className={contactFormStyle.comments}
              ></textarea>
            </Col>
          </Row>

          <Row className={contactFormStyle.row}>
            <Col span={2} offset={12}>
              <button type="submit">Submit</button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

export default ContactForm
