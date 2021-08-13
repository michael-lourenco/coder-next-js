import React from "react";
import Pessoa from "../../components/Pessoa";

export default function Exemplo() {
  return (
    <div>
      <Pessoa nome="Michael" idade = { 30 } />
      <Pessoa nome="Maria" />
    </div>
  )
}