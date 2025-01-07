 {import ("drizzle-kit").Config};
export default({
    schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials:{
    url: "postgresql://neondb_owner:oX0vwPTD6bnM@ep-rapid-field-a5ugtrx8.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require",
  }
});