export const formatCpf = (cpf) => {
  const cpfNumbers = cpf.replace(/\D/g, "");
  return cpfNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};
