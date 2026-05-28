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
      description: 'The title of the slide, e.g. "Welcome to SensoryMe!"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      description:
        'The body text of the slide, e.g. "Discover strategies to manage sensory overload and create a more comfortable environment for yourself."',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'The text for the button on the slide, e.g. "Get Started".',
      validation: (rule) => rule.required(),
    }),
  ],
})
