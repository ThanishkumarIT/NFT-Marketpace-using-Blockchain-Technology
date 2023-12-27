require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/sFQrspj9xWpbHXkCstu3Ola3sUoMbmRc";
const NEXT_PUBLIC_PRIVATE_KEY = "a221f55173d55e7a954a852a8efaf54ff4e52fc94ad724f61d93d2a383ffc5bd";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};


// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     hardhat: {},
//     polygon_mumbai: {
//       url: "https://polygon-mumbai.g.alchemy.com/v2/sFQrspj9xWpbHXkCstu3Ola3sUoMbmRc",
//       accounts: [`0x${"a221f55173d55e7a954a852a8efaf54ff4e52fc94ad724f61d93d2a383ffc5bd"}`],
//     },
//   },
// };