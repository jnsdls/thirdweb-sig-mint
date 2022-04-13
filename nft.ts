import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";

export const nft = {
  name: "Test",
  description: "Test",
  image:
    "https://ipfs.thirdweb.com/ipfs/QmPocpnbo2QQDHz3QAHFqCNSjwfdLmFtTTzoLMzKX88Ghs/0.jpg",
  id: "0",
  tokens: [
    {
      name: "MATIC",
      address: NATIVE_TOKEN_ADDRESS,
      price: 5,
    },
    {
      name: "USDC",
      address: "0xe6b8a5cf854791412c1f6efc7caf629f5df1c747",
      price: 5,
    },
  ],
};
