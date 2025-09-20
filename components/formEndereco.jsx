import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { formEnderecoStyles } from "./styles/formEnderecoStyles";
import { validateCEP } from "../helpers/validation";

export default function FormEndereco({ onChange }) {
  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    const updated = { ...endereco, [field]: value };
    setEndereco(updated);

    // Validação em tempo real
    let errorMsg = "";
    if (field === "cep") errorMsg = validateCEP(value);

    setErrors((prev) => ({ ...prev, [field]: errorMsg }));

    onChange(updated);
  };

  return (
    <View style={formEnderecoStyles.container}>
      <Text style={formEnderecoStyles.sectionTitle}>Endereço</Text>

      <Text style={globalStyles.label}>CEP</Text>
      <TextInput
        style={globalStyles.input}
        value={endereco.cep}
        onChangeText={(t) => handleChange("cep", t)}
      />
      {errors.cep ? <Text style={globalStyles.errorText}>{errors.cep}</Text> : null}

      <Text style={globalStyles.label}>Endereço</Text>
      <TextInput
        style={globalStyles.input}
        value={endereco.logradouro}
        onChangeText={(t) => handleChange("logradouro", t)}
      />

      <Text style={globalStyles.label}>Número</Text>
      <TextInput
        style={globalStyles.input}
        value={endereco.numero}
        onChangeText={(t) => handleChange("numero", t)}
      />

      <Text style={globalStyles.label}>Complemento</Text>
      <TextInput
        style={globalStyles.input}
        value={endereco.complemento}
        onChangeText={(t) => handleChange("complemento", t)}
      />

      <Text style={globalStyles.label}>Cidade</Text>
      <TextInput
        style={globalStyles.input}
        value={endereco.cidade}
        onChangeText={(t) => handleChange("cidade", t)}
      />

      <Text style={globalStyles.label}>Estado</Text>
      <TextInput
        style={globalStyles.input}
        value={endereco.estado}
        onChangeText={(t) => handleChange("estado", t)}
      />
    </View>
  );
}
