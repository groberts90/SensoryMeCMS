import {defineField, defineType} from 'sanity'

export const strategy = defineType({
  name: 'strategy',
  title: 'Strategy',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the strategy, e.g. "Use noise-cancelling headphones".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sense',
      title: 'Sense',
      type: 'reference',
      to: [{type: 'sense'}],
      description: 'The sense this strategy belongs to.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'The category this strategy belongs to.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trigger',
      title: 'Trigger',
      type: 'reference',
      to: [{type: 'trigger'}],
      description: 'The trigger this strategy belongs to.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'recommendation',
      title: 'Recommendation',
      type: 'text',
      rows: 3,
      description:
        'A brief recommendation for the strategy. This should be a short sentence that describes how to use the strategy in a way that is easy to understand for users.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statement',
      title: 'Statement',
      type: 'text',
      rows: 3,
      description: 'A brief statement describing the strategy.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
