// import { defineEventHandler } from '#build/types/nitro-imports';
import { defineEventHandler } from 'h3';
import pkg from '@/package.json';

const startTime = new Date();

export default defineEventHandler(() => {
  return {
    status: 'success', // update to fail if fail
    uptime: process.uptime(),
    upSince: startTime,
    localTime: new Date(),
    service: {
      name: pkg.name,
      description: pkg.description,
      version: pkg.version
    },
    env: {
      nodeEnv: process.env.NODE_ENV,
      nodeVersion: process.version,
      processName: process.title,
      pid: process.pid,
      cwd: process.cwd()
    }
  };
});
