import {defineField, defineType} from 'sanity'

export const sense = defineType({
  name: 'sense',
  title: 'Sense',
  type: 'document',
  fields: [
    defineField({
      name: 'emoji',
      title: 'Emoji',
      type: 'emoji',
      description: 'Choose an emoji to represent this sense',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title', // i.e. "Sight", "Hearing", etc.
      type: 'string',
      description: 'The title of the sense, e.g. "Sight", "Hearing", etc.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description', // i.e. "The ability to see and perceive the world around us."
      type: 'text',
      description: 'A brief description of the sense.',
      validation: (rule) => rule.required(),
    }),
  ],
})
