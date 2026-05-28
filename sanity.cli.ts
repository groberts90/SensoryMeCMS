import {defineCliConfig} from 'sanity/cli'
import { config } from "dotenv";

config();

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECTID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  deployment: {
    appId: process.env.SANITY_STUDIO_APPID,
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
