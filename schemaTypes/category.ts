import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sense',
      title: 'Sense',
      type: 'reference',
      to: [{type: 'sense'}],
      description:
        'The sense this category belongs to. Leave empty if shared across multiple senses.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sense.title',
    },
  },
})