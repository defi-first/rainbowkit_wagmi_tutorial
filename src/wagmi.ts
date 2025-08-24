import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";

const SEPOLIA_URL = process.env.SEPOLIA_URL;

export const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(SEPOLIA_URL),
  },
});
