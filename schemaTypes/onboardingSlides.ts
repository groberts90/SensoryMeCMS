import {defineField, defineType} from 'sanity'

export const onboardingSlide = defineType({
  name: 'onboardingSlide',
  title: 'Onboarding Slide',
  type: 'document',
  fields: [
    defineField({
      name: 'emoji',
      title: 'Emoji',
      type: 'emoji',
       description: 'Choose an emoji to represent this slide',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
