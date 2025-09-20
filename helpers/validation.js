export const validateNome = (nome) => {
  if (!nome.trim()) return "O nome não pode ser vazio.";
  const partes = nome.trim().split(" ");
  if (partes.length < 2) return "Informe nome e sobrenome.";
  return "";
};

export const validateDataNascimento = (data) => {
  if (!data) return "Data de nascimento é obrigatória.";

  let partes;
  if (data.includes("/")) {
    partes = data.split("/");
    if (partes.length !== 3) return "Formato inválido. Use DD/MM/AAAA.";
    const [dia, mes, ano] = partes.map(Number);
    const nascimento = new Date(ano, mes - 1, dia);
    if (nascimento.getDate() !== dia || nascimento.getMonth() !== mes - 1) {
      return "Data inválida.";
    }
    if (ano < 1900 || ano > new Date().getFullYear()) return "Ano inválido.";
  } else if (data.includes("-")) {
    partes = data.split("-");
    if (partes.length !== 3) return "Formato inválido. Use AAAA-MM-DD.";
  } else {
    return "Formato inválido. Use DD/MM/AAAA ou AAAA-MM-DD.";
  }

  return "";
};

export const calcularIdade = (data) => {
  if (!data) return 0;
  let partes;
  if (data.includes("/")) {
    const [dia, mes, ano] = data.split("/").map(Number);
    partes = { dia, mes, ano };
  } else {
    const [ano, mes, dia] = data.split("-").map(Number);
    partes = { dia, mes, ano };
  }

  const nasc = new Date(partes.ano, partes.mes - 1, partes.dia);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
  return idade;
};

export const validateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, ""); 
  if (cpf.length !== 11) return "CPF deve ter 11 dígitos.";

  if (/^(\d)\1+$/.test(cpf)) return "CPF inválido.";

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return "CPF inválido.";

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return "CPF inválido.";

  return "";
};

export const validateTelefone = (telefone) => {
  const regex = /^\(\d{2}\)\s?\d{4}-\d{4}$/;
  if (!regex.test(telefone)) return "Telefone inválido. Use (11) 2345-6789.";
  return "";
};

export const validateCelular = (celular) => {
  const regex = /^\(\d{2}\)\s?9\d{4}-\d{4}$/;
  if (!regex.test(celular)) return "Celular inválido. Use (11) 91234-5678.";
  return "";
};

export const validateCEP = (cep) => {
  const regex = /^\d{5}-?\d{3}$/;
  if (!regex.test(cep)) return "CEP inválido. Use 00000-000.";
  return "";
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Email inválido.";
  return "";
};

export const validateSenha = (senha) => {
  if (senha.length < 8) return "A senha deve ter no mínimo 8 caracteres.";
  if (!/[A-Z]/.test(senha)) return "Inclua pelo menos uma letra maiúscula.";
  if (!/[a-z]/.test(senha)) return "Inclua pelo menos uma letra minúscula.";
  if (!/[0-9]/.test(senha)) return "Inclua pelo menos um número.";
  if (!/[\W_]/.test(senha)) return "Inclua pelo menos um caractere especial.";
  return "";
};

export const validateConfirmarSenha = (senha, confirmar) => {
  if (senha !== confirmar) return "As senhas não coincidem.";
  return "";
};
