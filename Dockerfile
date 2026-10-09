ARG NODE_IMAGE
# Both stages require a digest-pinned, fully reviewed runtime image.
FROM ${NODE_IMAGE} AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . .
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_COINTRADE_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_COINTRADE_URL=$NEXT_PUBLIC_COINTRADE_URL
RUN npm run build
FROM ${NODE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOST=0.0.0.0
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/scripts/serve.cjs ./scripts/serve.cjs
COPY --from=builder /app/security-headers.mjs ./security-headers.mjs
USER node
EXPOSE 3000
CMD ["node", "scripts/serve.cjs"]
