import React from "react"
import Layout from "../components/layout"
import FancyTitle from "../components/title"

export default class extends React.Component {
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
      <Layout>
        <FancyTitle titleText="Contact me" />
        <form
          onSubmit={this.handleSubmit}
          style={{ margin: "0 auto", width: "30rem" }}
        >
          <label>
            First name:{" "}
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              style={{ width: "30%", padding: ".1rem .5rem" }}
            />
          </label>
          <label style={{ paddingLeft: "1.5rem" }}>
            Last name:{" "}
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              style={{
                width: "30%",
                padding: ".1rem .5rem",
              }}
            />
          </label>
          <br />
          <label>
            E-mail:{" "}
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              style={{
                width: "88%",
                padding: ".1rem .5rem",
                marginTop: "1rem",
              }}
            />
          </label>

          <br />
          <textarea
            type="text"
            name="comment"
            placeholder="comments..."
            value={this.state.comment}
            onChange={this.handleInputChange}
            style={{
              height: "200px",
              width: "100%",
              resize: "none",
              marginTop: "1rem",
            }}
          ></textarea>
          <button type="submit" style={{ width: "25%", marginLeft: "37.5%" }}>
            Submit
          </button>
        </form>
      </Layout>
    )
  }
}
