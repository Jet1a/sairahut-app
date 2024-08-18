# Base image with Node.js and pnpm installed
FROM node:20-slim AS base
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Common build stage
FROM base AS build
WORKDIR /app

# Copy pnpm and monorepo configuration
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json nx.json ./
COPY apps ./apps

# Install dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build the API and Client applications
RUN pnpm build

# Production image for API
FROM base AS api

WORKDIR /app/api

COPY --from=build /app/apps/api/src ./
COPY apps/api/package.json ./package.json

RUN pnpm install --prod

CMD ["node", "server.js"]

# Production image for Client
FROM base AS client

WORKDIR /app/client

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/apps/client/public ./public
COPY --from=build /app/apps/client/.next/standalone ./
COPY --from=build /app/apps/client/.next/static ./.next/static

# COPY --from=build /app/apps/client/package.json ./package.json
# RUN pnpm install --prod

CMD ["node", "./apps/client/server.js"]
