import React from "react"
import Layout from "../components/layout"
import contactForm from "../components/contact-form"
import FancyTitle from "../components/title"

export default class extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}`)
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
            Last name:
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
          <button type="submit" style={{ width: "25%", marginLeft: "37.5%" }}>
            Submit
          </button>
        </form>
      </Layout>
    )
  }
}
