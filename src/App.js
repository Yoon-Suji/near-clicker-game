import "./App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout, accountBalance, get_num } from "./near/utils";

function App() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState();
  const [visible, setVisible] = useState("hidden");
  const navigate = useNavigate();

  useEffect(() => {
    if (account.accountId) {
      getBalance();
      setVisible("visible");
    }
  }, [account.accountId]);

  const getBalance = async () => {
    setBalance(await accountBalance());
  };

  const disconnect = () => {
    logout();
    setBalance();
    setVisible("hidden");
  };

  // 네트워크 별로 chainId에 따라서 DISCONNECT와 CONNECT 버튼이 나타나도록 구현
  const renderBtn = () => {
    if (account.accountId) {
      return (
        <button type="button" onClick={logout} className="disconnect-btn">
          DISCONNECT
        </button>
      );
    }
    return (
      <button type="button" onClick={login} className="connect-btn">
        CONNECT WALLET
      </button>
    );
  };

  // 지갑과 연결되어 있으면 address와 balance 정보 출력
  const showWalletInfo = () => {
    if (account.accountId) {
      return (
        <div className="wallet-info">
          <p>{`address: ${account.accountId}`}</p>
          <p>{`balance: ${balance} NEAR`}</p>
        </div>
      );
    }
  };

  // PLAY 버튼 클릭하면 /play 주소로 이동
  const playGame = () => {
    return (
      <div className="menu">
        <button
          className="play-btn"
          onClick={() => {
            navigate("/play", {
              state: {}
            });
          }}
          style={{ visibility: visible }}
        >
          <span>PLAY</span>
        </button>
        {!account.accountId && <p>Choose your network and Connect wallet</p>}
        {account.accountId && (
          <p>Click as many CosmWasm Icon as you can within 15 seconds!</p>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <div className="header-titles">
          <img
            alt="NEAR Logo"
            className="near-logo"
            src="./near_logo.svg"
            width="500"
          />
          <h1>Clicker Game</h1>
        </div>
      </header>
      <div className="App-container">
        <div className="App-menu-container">
          {playGame()}
          <div className="connect-wallet">{renderBtn()}</div>
        </div>
        {showWalletInfo()}
      </div>
    </div>
  );
}

export default App;
