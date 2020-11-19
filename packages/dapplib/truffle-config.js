require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember protect hockey knife force skate'; 
let testAccounts = [
"0x1ccdf17a911a796f6c60f7f8f3b2df938f177cc871727616d8b54429aff9eef1",
"0x4dbfacfa6a927de3b086633d431924c24834446fc3beb5736075d0b22f09b1b0",
"0xdb907b05fdbd473d360b31c754214dc7790d299eb47bb97a38719f87e0ef45aa",
"0x48b03dfd8fa988123ce9bba625932de3bbda954d4fe12422b596668b5bd23371",
"0x73282218468b4bf75327100b450b01495083720dddff5e1403951576aadfd168",
"0xd62de98c3f7501af8f964d676067f78e124da448747de4b4450472dac1b97121",
"0xd5801432acbff966ef151a7184d004f960650aebb3b86e5a11867b2132ac6511",
"0xecdbafaca913f56169a4d8b8ff88fe4372cfc292c4ecad988aaafe1843b4ed88",
"0x06ac7bac72bfac851af90a277ae8aab5f4d27d3aef216514c0bfb94494d55b65",
"0x1da4e15f742d82c927e44e1edfa1142acf9ee308be52d098107af6ca5717873c"
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
