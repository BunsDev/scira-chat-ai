// https://env.t3.gg/docs/nextjs#create-your-schema
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    // AI Provider API Keys - all optional for demo
    XAI_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    ANTHROPIC_API_KEY: z.string().optional(),
    GROQ_API_KEY: z.string().optional(),
    GOOGLE_GENERATIVE_AI_API_KEY: z.string().optional(),
    DAYTONA_API_KEY: z.string().optional(),

    // Database - optional for UI demo
    DATABASE_URL: z.string().optional(),

    // Auth - optional for demo
    BETTER_AUTH_SECRET: z.string().optional().default('demo-secret-change-in-production'),
    GITHUB_CLIENT_ID: z.string().optional(),
    GITHUB_CLIENT_SECRET: z.string().optional(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    TWITTER_CLIENT_ID: z.string().optional(),
    TWITTER_CLIENT_SECRET: z.string().optional(),

    // Redis/Cache - optional for demo
    REDIS_URL: z.string().optional(),
    UPSTASH_REDIS_REST_URL: z.string().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

    // External Service API Keys - all optional for demo
    ELEVENLABS_API_KEY: z.string().optional(),
    TAVILY_API_KEY: z.string().optional(),
    EXA_API_KEY: z.string().optional(),
    VALYU_API_KEY: z.string().optional(),
    TMDB_API_KEY: z.string().optional(),
    YT_ENDPOINT: z.string().optional(),
    FIRECRAWL_API_KEY: z.string().optional(),
    PARALLEL_API_KEY: z.string().optional(),
    OPENWEATHER_API_KEY: z.string().optional(),
    GOOGLE_MAPS_API_KEY: z.string().optional(),
    AMADEUS_API_KEY: z.string().optional(),
    AMADEUS_API_SECRET: z.string().optional(),
    CRON_SECRET: z.string().optional(),
    BLOB_READ_WRITE_TOKEN: z.string().optional(),
    SMITHERY_API_KEY: z.string().optional(),
    COINGECKO_API_KEY: z.string().optional(),
    QSTASH_TOKEN: z.string().optional(),
    RESEND_API_KEY: z.string().optional(),
    SUPERMEMORY_API_KEY: z.string().optional(),

    // CORS - has default
    ALLOWED_ORIGINS: z.string().optional().default('http://localhost:3000'),
  },
  experimental__runtimeEnv: process.env,
});
