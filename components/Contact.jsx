import React from "react";
import styled from "styled-components";
import Section from "./shared/Section";
import Box from "./shared/Box";
import ButtonGradient from "./shared/ButtonGradient";
import FormElement from "./shared/FormElement";

//formspree endpoint: https://formspree.io/forms/xrgveqov/submissions
//contact info
import { useForm, ValidationError } from "@formspree/react"


const FormGroup = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0 5rem;
  @media screen and (min-width: 1550px) {
    max-width: 1550px;
    margin: 0 auto;
  }
`;

const Button = styled(ButtonGradient)`
  align-self: center;
  margin-bottom: 5rem;
  width: 15rem;
  `;

export default function Contact() {
  const [state, handleSubmit] = useForm("xrgveqov");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }
  return (
    <Section id="contact" title="CONTACT US">
      <FormGroup onSubmit={handleSubmit}>
        <FormElement 
        title="First Name"
        htmlFor="name"
        id="fName"
        type="text"
        name="name"
        prefix="Name"
        field="name"
        errors={state.errors}  
        />
        <FormElement 
        title="Last Name"
        htmlFor="name"
        id="fName"
        type="text"
        name="name"
        prefix="Name"
        field="name"
        errors={state.errors}  
        />
        <FormElement 
        title="Email Address"
        htmlFor="email"
        id="email"
        type="email"
        name="email"
        prefix="Email"
        field="email"
        errors={state.errors}  
        />
        <FormElement 
        title="Message"
        htmlFor="message"
        id="message"
        name="message"
        prefix="Message"
        field="message"
        errors={state.errors}  
        />
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
        </FormGroup>
      {/* <form onSubmit={handleSubmit}>

     <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <ValidationError errors={state.errors} />
    </form> */}
    </Section>
  )
}