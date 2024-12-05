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

    savePassword: (passToSave:string) => { 
        return "Senha salva com sucesso!"
    }
}


export default passwordService;