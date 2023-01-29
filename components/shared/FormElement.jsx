import { ValidationError } from "@formspree/react";
import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 1.5rem;
  color: var(--color-gray);
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray);
  border-radius: 1rem;
  outline: none;
  font-size: 1.5rem;
  color: var(--color-gray);
`;

export default function FormElement({
  title,
  htmlFor,
  id,
  type,
  name,
  prefix,
  field,
  errors,
}) {
  return (
    <>
      <Label htmlFor={htmlFor}>{title}</Label>
      <Input id={id} type={type} name={name} />
      <ValidationError prefix={prefix} field={field} errors={errors} />
    </>
  );
}
