This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tempo Testnet

This demo targets Tempo's Moderato testnet.

- RPC: `https://rpc.moderato.tempo.xyz`
- Chain ID: `42431`
- Explorer: `https://explore.tempo.xyz`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Railway

This repo is ready for Railway via Nixpacks.

### Prerequisites
- GitHub account with this repo pushed
- Railway account (sign up at https://railway.app)

### Deployment Steps

1. **Push to GitHub**: Ensure your latest changes are committed and pushed to GitHub
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

2. **Create Railway Project**:
   - Go to https://railway.app/dashboard
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Select this repository

3. **Configure Build Settings**:
   - Railway will automatically detect `railway.toml`
   - Build command: `pnpm build`
   - Start command: `pnpm start`
   - Port: 3000 (Next.js default)

4. **Deploy**:
   - Click "Deploy"
   - Railway will automatically build and deploy your app
   - Monitor the deployment logs for any issues

5. **Access Your App**:
   - Once deployed, Railway will provide a public URL
   - Click the generated URL to access your Tempo Payroll Demo

### Configuration

The deployment is configured via `railway.toml`:
- **Builder**: Nixpacks (automatically detects pnpm)
- **Build**: `pnpm build`
- **Start**: `pnpm start`
- **Healthcheck**: `/` endpoint with 100s timeout
- **Restart Policy**: On failure, max 10 retries

### Environment Variables

No environment variables are required for this demo. All Tempo testnet configuration is hardcoded:
- RPC: `https://rpc.moderato.tempo.xyz`
- Chain ID: `42431`
- Token: AlphaUSD (`0x20c0000000000000000000000000000000000001`)

If you need to customize these values, you can add environment variables in Railway's dashboard and update the configuration files accordingly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
