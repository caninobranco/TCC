// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const Contra2Module = buildModule("Contra2Module", (m) => {

  const contract = m.contract("Contra2");

  return { contract };
});

export default Contra2Module;
