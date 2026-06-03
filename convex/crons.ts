import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

// Run every 5 days
crons.interval(
  "sync-github-readmes",
  { hours: 120 }, // 120 hours = 5 days
  api.projects.syncAllReadmes
);

export default crons;
