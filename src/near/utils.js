import environment from "./config";
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { formatNearAmount } from "near-api-js/lib/utils/format";

const nearEnv = environment("testnet");

export async function initContract() {
  // connect to NEAR
  const near = await connect(
    Object.assign(
      {
        deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() }
      },
      nearEnv
    )
  );
  // create wallet connection
  window.walletConnection = new WalletConnection(near);

  window.accountId = window.walletConnection.getAccountId();

  // window.account = await near.account(window.accountId);

  window.contract = await new Contract(
    window.walletConnection.account(),
    nearEnv.contractName,
    {
      viewMethods: ["get_num"],
      changeMethods: ["increment", "reset"]
    }
  );
}

export async function get_num() {
  let count = await window.contract.get_num({ args: {} });
  return count;
}

export async function increment(count) {
  return await window.contract.increment({ args: { count: count } });
}

export async function reset() {
  return await window.contract.reset({ args: {} });
}

export function logout() {
  window.walletConnection.signOut();
  // reload page
  window.location.reload();
}

export function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(nearEnv.contractName);
}

export async function accountBalance() {
  return formatNearAmount(
    (await window.walletConnection.account().getAccountBalance()).total,
    2
  );
}
