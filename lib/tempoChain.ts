import { defineChain } from 'viem'
import { tempoTestnet } from 'viem/chains'

export const tempoModerato = defineChain({
  ...tempoTestnet,
  id: 42431,
  name: 'Tempo Moderato Testnet',
  network: 'tempo-moderato',
  rpcUrls: {
    default: {
      http: ['https://rpc.moderato.tempo.xyz'],
    },
    public: {
      http: ['https://rpc.moderato.tempo.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Tempo Explorer',
      url: 'https://explore.tempo.xyz',
    },
  },
})
