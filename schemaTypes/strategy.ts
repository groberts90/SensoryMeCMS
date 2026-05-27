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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sense',
      title: 'Sense',
      type: 'reference',
      to: [{type: 'sense'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Me', value: 'Me'},
          {title: 'Environment', value: 'Environment'},
          {title: 'Digital', value: 'Digital'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statement',
      title: 'Statement',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sense: 'sense.title',
      category: 'category.title',
    },
    prepare({title, sense, category}) {
      return {
        title,
        subtitle: [sense, category].filter(Boolean).join(' · '),
      }
    },
  },
})
