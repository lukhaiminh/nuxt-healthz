import { defineEventHandler } from 'h3';
import pkg from '@/package.json';
// import { writeFileSync } from 'node:fs';

const startTime = new Date();
// const timeZone = 'Australia/Sydney';
// const timeZone = 'Asia/Saigon';
const timeZone = 'Asia/Seoul';

// const list = writeFileSync('list.txt', Intl.supportedValuesOf('timeZone').join('\n'), { encoding: 'utf-8' });

export default defineEventHandler(() => {
  // Specify date and time format using "style" options (i.e. full, long, medium, short)
  const upSince = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone,
  }).format(startTime);

  return {
    status: 'success', // update to fail if fail
    upSinceServerTime: startTime,
    upSince: `${startTime} | ${upSince} (${timeZone})`,
    uptime: process.uptime(),
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
