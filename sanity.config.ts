import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {emojiPlugin} from 'sanity-plugin-emoji'

export default defineConfig({
  name: 'default',
  title: 'SensoryMeCMS',

  projectId: import.meta.env.SANITY_STUDIO_PROJECTID ?? '',
  dataset: import.meta.env.SANITY_STUDIO_DATASET ?? '',

  plugins: [structureTool(), visionTool(), emojiPlugin()],

  schema: {
    types: schemaTypes,
  },
})
