import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { formContaStyles } from "./styles/formContaStyles";
import { validateEmail, validateSenha, validateConfirmarSenha } from "../helpers/validation";

export default function FormConta({ onChange }) {
  const [conta, setConta] = useState({
    email: "",
    senha: "",
    confirmarSenha: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    const updated = { ...conta, [field]: value };
    setConta(updated);

    let errorMsg = "";
    if (field === "email") errorMsg = validateEmail(value);
    if (field === "senha") errorMsg = validateSenha(value);
    if (field === "confirmarSenha") errorMsg = validateConfirmarSenha(conta.senha, value);

    setErrors((prev) => ({ ...prev, [field]: errorMsg }));

    onChange(updated);
  };

  return (
    <View style={formContaStyles.container}>
      <Text style={formContaStyles.sectionTitle}>Informações da Conta</Text>

      <Text style={globalStyles.label}>Email</Text>
      <TextInput
        style={globalStyles.input}
        value={conta.email}
        onChangeText={(t) => handleChange("email", t)}
      />
      {errors.email ? <Text style={globalStyles.errorText}>{errors.email}</Text> : null}

      <Text style={globalStyles.label}>Senha</Text>
      <TextInput
        style={globalStyles.input}
        secureTextEntry
        value={conta.senha}
        onChangeText={(t) => handleChange("senha", t)}
      />
      {errors.senha ? <Text style={globalStyles.errorText}>{errors.senha}</Text> : null}

      <Text style={globalStyles.label}>Confirmar Senha</Text>
      <TextInput
        style={globalStyles.input}
        secureTextEntry
        value={conta.confirmarSenha}
        onChangeText={(t) => handleChange("confirmarSenha", t)}
      />
      {errors.confirmarSenha ? <Text style={globalStyles.errorText}>{errors.confirmarSenha}</Text> : null}
    </View>
  );
}
