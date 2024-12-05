// logica das senhas

const passwordService = {
  generatePassword: (
    length: number,
    includeNumbers: boolean,
    includeEspecialChars: boolean
  ): string => {
    const especialChars = "!@#$%^&*()-_=+[]{};:'\",.<>?/|`~\\";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";

    // Construir a pool de caracteres com base nas opções fornecidas
    let charPool = uppercase + lowercase;
    if (includeEspecialChars) charPool += especialChars;
    if (includeNumbers) charPool += numbers;

    // Gerar a senha com base na pool de caracteres
    return Array.from({ length }, () =>
      charPool.charAt(Math.floor(Math.random() * charPool.length))
    ).join("");
  },

  savePassword: async (passToSave: string) => {
    const url = `http://192.168.18.4:3000/passwords`;
    const body = { password: passToSave };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    // Processa a resposta como JSON
    const data = await response.json();
    // Verifica se a resposta contém um `id`
    if (data && data.id) {
      return "Senha salva com sucesso!";
    } else {
      throw new Error("Erro ao salvar a senha!");
    }
  },

  getPasswords: async () => {
    const url = `http://192.168.18.4:3000/passwords`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    // Processa a resposta como JSON
    const data = await response.json();
    // Verifica se a resposta contém um `id`
    if (data) {
      return data;
    } else {
      throw new Error("Erro ao retornar lista de senhas!");
    }
  }

}


export default passwordService;