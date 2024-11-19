// logica das senhas

const passwordService = {
    generatePassword: (length: number, includeNumbers: boolean, includeEspecialChars: boolean) => {
        const especialChars =
            "!@#$%^&*()-_=+[]{};:'\",.<>?/|`~\\";

        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789"

        let password = "";

        if (includeEspecialChars && includeNumbers) {
            let fullChars = `${especialChars}${uppercase}${lowercase}${numbers}`
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * fullChars.length);
                password += fullChars[randomIndex];
            }
            return password.trim();
        } else if (includeEspecialChars) {
            let fullChars = `${especialChars}${uppercase}${lowercase}`
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * fullChars.length);
                password += fullChars[randomIndex];
            }
            return password.trim();
        } else if (includeNumbers) {
            let fullChars = `${numbers}${uppercase}${lowercase}`
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * fullChars.length);
                password += fullChars[randomIndex];
            }
            return password.trim();
        } else {
            let fullChars = `${uppercase}${lowercase}`
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * fullChars.length);
                password += fullChars[randomIndex];
            }
            return password.trim();
        }

    },

    savePassword: () => { }
}


export default passwordService;