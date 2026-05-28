import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title', // i.e. "Reduce"
      type: 'string',
      description:
        'The title of the category is used in the strategy cards and should be a short, action-oriented word that describes the strategy. For example, "Reduce", "Modify", "Create", "Embrace".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statement',
      title: 'Statement', // i.e. "Bright lights, busy environments or too much visual stimulation can be overwhelming for me."
      type: 'text',
      description:
        'The statement describes the category and is used in the strategy cards. It should be a short sentence that describes the category in a way that is easy to understand for users.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sense',
      title: 'Sense', // i.e. "Sight"
      type: 'reference',
      to: [{type: 'sense'}],
      description: 'The sense this category belongs to',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
