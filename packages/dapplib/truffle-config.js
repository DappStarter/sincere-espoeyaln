require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note noise host hunt cloth flame subway'; 
let testAccounts = [
"0xec3bd2ca9bd680d1f849d68d21d10cf4a75def32e57048002a5724a0e80ea786",
"0xc0c92a908041b4c0a7656bf4425e67a009b67159d3be50a43126163ad22a732e",
"0x3944bc9d23b4cc81480d2e05b5b8685c50857bc234dfae5fa4d6d7d5c71e08a5",
"0xa6fcd6488aa4dc365381c6a6d7d59b1f3030837ca8c60e0108ff97043e8b67be",
"0xa031e5d7cdd32fd0cb0f57a0076f7d8fe236d7d9aa74ac981a3b3afdb6294312",
"0x26ec5b1bde6c592e89a6b0ca3e33647cfdd25dd22f3b9717ba21aa17f72fb5b7",
"0x34b7140dffd6d4b09dcfc041f3a8a0af13f5c4899f26a4ee722096d57fd2e47c",
"0x4b6f71393c8df170666623183312ae5cad3ec247ef34506e4c61b4cd1f8611db",
"0x42f9a224cb9d40c07f77b099aca3819ddcbcbeea5ac0ff7023636741a0e5f2b6",
"0xf6a8e2d6d05e2cf9ee3d05d944e6ab3c892776bbde1ecaa782ac0eba57aa8706"
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
