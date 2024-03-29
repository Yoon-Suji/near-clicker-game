const CONTRACT_NAME =
  process.env.CONTRACT_NAME || "mycontract.myaccount8.testnet";

function environment(env) {
  switch (env) {
    case "mainnet": // line 5
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.near.org",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org"
      };
    case "testnet": // line 14
      return {
        networkId: "testnet",
        nodeUrl: "https://near-testnet-rpc.allthatnode.com:3030",
        contractName: CONTRACT_NAME,
        walletUrl: "https://wallet.testnet.near.org/",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org"
      };
    default:
      throw Error(`Unknown environment '${env}'.`);
  }
}

export default environment;
