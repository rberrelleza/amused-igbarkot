require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift regret outside equip include fork tackle genius'; 
let testAccounts = [
"0xc2373e2f168dbf894168846daf8e2bd1c5172a8e9da4f6bd6a0e45d9ee02ff00",
"0xa0a8b368f92c88bbd293cb9b5c152d62ff114185ca1f858892889a655dc5f3a6",
"0x3acef3addd3153eff78ad83f43c6f497b9451ab92f6c7de6366ab3d06009e9f9",
"0xcdcefc3676de747d6372a5aad165ce8e238d6c7a9398043a756ff5fda78462cd",
"0xb45054421413559a651851eaec611b187e9dc7a7cf23aafaed43d3aa66f9003d",
"0x8e9baa91e6d59f54019aa01f81d30133d61abaa24c3e4421a868380d0e585258",
"0xa16c00250f1bebcd3d0f8fa942241f8268626eef7f4a6c638835b0dbfb03ffb4",
"0x479285af6c757ad4883999585032852bf039a26789a15068dc41a52ea98e222e",
"0xd29f58c49a8c509141a1e18476aee5786e8ac485bdf5e10a3ec79addce01ed31",
"0x6919c92aebc3c5cde1cb67c7cb4bb3c9ab5c66fcf346297d09a0af462c56a6d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
