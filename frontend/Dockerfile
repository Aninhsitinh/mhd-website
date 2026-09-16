# Multi-stage Dockerfile for Nuxt 3 (SSR Production)

# 1. Base image
FROM node:20-alpine AS base
WORKDIR /app

# 2. Dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# 3. Builder
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

# 4. Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy minimal output from Nitro builder
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
