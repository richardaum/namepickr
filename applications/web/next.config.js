/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: process.env.DATABASE_URL,
  },
}

if (!process.env.DATABASE_URL) {
  throw new Error('Missing DATABASE_URL env variable')
}
