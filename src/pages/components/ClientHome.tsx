"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Connector,
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
} from "wagmi";

const ClientHome = () => {
  const { connectAsync, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address: address });

  const handleWalletClick = async (connector: Connector) => {
    connectAsync({ connector });
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <main>
      <ConnectButton />
      {!isConnected ? (
        <h4>Please connect your wallet</h4>
      ) : (
        <div>
          <div>{address}</div>
          <div>Your account balance is {data?.formatted}ETH</div>
        </div>
      )}
      {!isConnected &&
        Array.isArray(connectors) &&
        connectors.map((connector) => {
          const { id, name } = connector;
          return (
            <button key={id} onClick={() => handleWalletClick(connector)}>
              {name}
            </button>
          );
        })}
      {isConnected && <button onClick={handleDisconnect}>Disconnect</button>}
    </main>
  );
};

export default ClientHome;
