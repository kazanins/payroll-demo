'use client'

import { createConfig, http } from 'wagmi'
import { KeyManager, webAuthn } from 'tempo.ts/wagmi'
import { DEFAULT_PAYROLL_TOKEN } from './constants'
import { tempoModerato } from './tempoChain'

export const wagmiConfig = createConfig({
  chains: [
    // Tempo TS README shows extending chain with feeToken :contentReference[oaicite:7]{index=7}
    tempoModerato.extend({ feeToken: DEFAULT_PAYROLL_TOKEN.address }),
  ],
  connectors: [
    webAuthn({
      keyManager: KeyManager.localStorage(),
    }),
  ],
  transports: {
    [tempoModerato.id]: http('https://rpc.moderato.tempo.xyz'),
  },
})
