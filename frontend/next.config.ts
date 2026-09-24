import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let devices on the LAN (e.g. a phone) connect to the dev server / HMR websocket
  allowedDevOrigins: ["192.168.0.*"],
};

export default nextConfig;
