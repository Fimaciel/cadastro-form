import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, Alert, View } from "react-native";
import FormPessoal from "./components/formPessoal";
import FormEndereco from "./components/formEndereco";
import FormConta from "./components/formConta";
import { globalStyles } from "./styles/globalStyles";
import {
  validateNome,
  validateDataNascimento,
  validateCEP,
  validateEmail,
  validateSenha,
  validateConfirmarSenha
} from "./helpers/validation";

export default function Cadastro() {
  const [pessoal, setPessoal] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    telefone: "",
    celular: "",
    nomePai: "",
    nomeMae: ""
  });
  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: ""
  });
  const [conta, setConta] = useState({
    email: "",
    senha: "",
    confirmarSenha: ""
  });

 const [submitMessage, setSubmitMessage] = useState("");

const handleSubmit = () => {
  let errors = [];

  const nomeError = validateNome(pessoal.nome);
  if (nomeError) errors.push(nomeError);

  const dataError = validateDataNascimento(pessoal.dataNascimento);
  if (dataError) errors.push(dataError);

  const cepError = validateCEP(endereco.cep);
  if (cepError) errors.push(cepError);

  const emailError = validateEmail(conta.email);
  if (emailError) errors.push(emailError);

  const senhaError = validateSenha(conta.senha);
  if (senhaError) errors.push(senhaError);

  const confirmarError = validateConfirmarSenha(conta.senha, conta.confirmarSenha);
  if (confirmarError) errors.push(confirmarError);

  if (typeof window !== "undefined") {
    // fallback para web
    window.alert(errors.length > 0 ? errors.join("\n") : "Cadastro realizado com sucesso!");
  } else {
    Alert.alert(
      errors.length > 0 ? "Erros encontrados" : "Sucesso",
      errors.length > 0 ? errors.join("\n") : "Cadastro realizado com sucesso!",
      [{ text: "OK" }],
      { cancelable: true }
    );
  }

  setSubmitMessage(errors.length > 0 ? errors.join("\n") : "Cadastro realizado com sucesso!");
};


  return (
    <ScrollView style={globalStyles.container}>
      <FormPessoal onChange={setPessoal} />
      <FormEndereco onChange={setEndereco} />
      <FormConta onChange={setConta} />

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
          <Text style={globalStyles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
