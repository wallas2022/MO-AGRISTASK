

const CryptoJS = require('crypto-js');

export const CryptoAdapter = {

    hash: ( password: string) => {
        const hash = CryptoJS.SHA256(password);
        return hash.toString(CryptoJS.enc.Hex);
    },
    compare: (inputPassword: string, storedHash: string)=>{
        const hashToCompare = CryptoJS.SHA256(inputPassword).toString(CryptoJS.enc.Hex);
        return hashToCompare === storedHash;
    }
}