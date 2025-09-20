import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { formPessoalStyles } from "./styles/formPessoalStyles";
import { 
  validateNome, 
  validateDataNascimento, 
  validateCPF, 
  validateTelefone, 
  validateCelular, 
  calcularIdade 
} from "../helpers/validation";

export default function FormPessoal({ onChange }) {
  const [dados, setDados] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    telefone: "",
    celular: "",
    nomePai: "",
    nomeMae: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    const updated = { ...dados, [field]: value };
    setDados(updated);

    let errorMsg = "";

    if (field === "nome") errorMsg = validateNome(value);
    if (field === "dataNascimento") errorMsg = validateDataNascimento(value);
    if (field === "cpf") errorMsg = validateCPF(value);
    if (field === "telefone") errorMsg = validateTelefone(value);
    if (field === "celular") errorMsg = validateCelular(value);

    const idade = calcularIdade(updated.dataNascimento);
    if ((field === "nomePai" || field === "nomeMae") && idade < 18) {
      if (!value.trim()) errorMsg = `${field === "nomePai" ? "Nome do Pai" : "Nome da Mãe"} é obrigatório para menores de 18 anos.`;
    }

    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    onChange(updated);
  };

  const idade = calcularIdade(dados.dataNascimento);

  return (
    <View style={formPessoalStyles.container}>
      <Text style={formPessoalStyles.sectionTitle}>Informações Pessoais</Text>

      <Text style={globalStyles.label}>Nome Completo</Text>
      <TextInput
        style={globalStyles.input}
        value={dados.nome}
        onChangeText={(t) => handleChange("nome", t)}
      />
      {errors.nome && <Text style={globalStyles.errorText}>{errors.nome}</Text>}

      <Text style={globalStyles.label}>Data de Nascimento</Text>
      <TextInput
        style={globalStyles.input}
        value={dados.dataNascimento}
        onChangeText={(t) => handleChange("dataNascimento", t)}
        placeholder="DD/MM/AAAA"
      />
      {errors.dataNascimento && <Text style={globalStyles.errorText}>{errors.dataNascimento}</Text>}

      <Text style={globalStyles.label}>CPF</Text>
      <TextInput
        style={globalStyles.input}
        value={dados.cpf}
        onChangeText={(t) => handleChange("cpf", t)}
        placeholder="XXX.XXX.XXX-XX"
      />
      {errors.cpf && <Text style={globalStyles.errorText}>{errors.cpf}</Text>}

      <Text style={globalStyles.label}>Telefone Fixo</Text>
      <TextInput
        style={globalStyles.input}
        value={dados.telefone}
        onChangeText={(t) => handleChange("telefone", t)}
        placeholder="(11) 2345-6789"
      />
      {errors.telefone && <Text style={globalStyles.errorText}>{errors.telefone}</Text>}

      <Text style={globalStyles.label}>Celular</Text>
      <TextInput
        style={globalStyles.input}
        value={dados.celular}
        onChangeText={(t) => handleChange("celular", t)}
        placeholder="(11) 91234-5678"
      />
      {errors.celular && <Text style={globalStyles.errorText}>{errors.celular}</Text>}

      {idade < 18 && (
        <>
          <Text style={globalStyles.label}>Nome do Pai</Text>
          <TextInput
            style={globalStyles.input}
            value={dados.nomePai}
            onChangeText={(t) => handleChange("nomePai", t)}
          />
          {errors.nomePai && <Text style={globalStyles.errorText}>{errors.nomePai}</Text>}

          <Text style={globalStyles.label}>Nome da Mãe</Text>
          <TextInput
            style={globalStyles.input}
            value={dados.nomeMae}
            onChangeText={(t) => handleChange("nomeMae", t)}
          />
          {errors.nomeMae && <Text style={globalStyles.errorText}>{errors.nomeMae}</Text>}
        </>
      )}
    </View>
  );
}
