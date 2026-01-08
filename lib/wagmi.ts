'use client'

import { createConfig, http } from 'wagmi'
import { KeyManager, webAuthn } from 'tempo.ts/wagmi'
import { DEFAULT_PAYROLL_TOKEN } from './constants'
import { tempoModerato } from './tempoChain'

const extendedTempoChain = tempoModerato.extend({
  feeToken: DEFAULT_PAYROLL_TOKEN.address
})

export const wagmiConfig = createConfig({
  chains: [
    // Tempo TS README shows extending chain with feeToken
    extendedTempoChain,
  ],
  connectors: [
    webAuthn({
      keyManager: KeyManager.localStorage(),
    }),
  ],
  transports: {
    [extendedTempoChain.id]: http('https://rpc.moderato.tempo.xyz'),
  },
})
