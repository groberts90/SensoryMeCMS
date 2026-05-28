import {defineField, defineType} from 'sanity'

export const trigger = defineType({
  name: 'trigger',
  title: 'Trigger',
  type: 'document',
  fields: [
    defineField({
      name: 'emoji',
      title: 'Emoji',
      type: 'emoji',
      description: 'Choose an emoji to represent this trigger',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title', // i.e. "Me", "Environment", "Digital"
      type: 'string',
      description: 'The title of the trigger, e.g. "Me", "Environment", "Digital".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statement',
      title: 'Statement', // i.e. "Bright lights, busy environments or too much visual stimulation can be overwhelming for me."
      type: 'text',
      description:
        'The statement describes the trigger and is used in the strategy cards. It should be a short sentence that describes the trigger in a way that is easy to understand for users.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sense',
      title: 'Sense', // i.e. "Sight"
      type: 'reference',
      to: [{type: 'sense'}],
      description: 'The sense this trigger belongs to.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
