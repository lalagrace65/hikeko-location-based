const withPWA = require('next-pwa')({
    dest: 'public'
  });
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
   
    images:{
        unoptimized: true,
        domains:['lh3.googleusercontent.com','maps.googleapis.com']
    }
};

module.exports = withPWA(nextConfig);