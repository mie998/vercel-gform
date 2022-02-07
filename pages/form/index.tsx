import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { appendRow } from "../../lib/spreadsheets";


export default function Form() {
  // const { register, handleSubmit, formState:{ errors } } = useForm({})
  useEffect(() => {
    appendRow().then();
  })  

  return (
    <div>unchi!!</div>
  );
}

