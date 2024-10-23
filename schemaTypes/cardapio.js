import {defineField, defineType} from 'sanity'

export const cardapio = defineType({
  name: 'cardapio',
  title: 'cardapio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})