import {defineField, defineType} from 'sanity'

export const cardapioSegunda = defineType({
  name: 'cardapioSegunda',
  title: 'cardapio',
  type: 'document',
  fields: [
    defineField({
      name: 'ingrediente1',
      type: 'string',
    }),
    defineField({
      name: 'ingrediente2',
      type: 'string',
    }),
    defineField({
      name: 'ingrediente3',
      type: 'string',
    }),
    defineField({
      name: 'ingrediente4',
      type: 'string',
    }),
    defineField({
      name: 'ingrediente5',
      type: 'string',
    }),
    defineField({
      name: 'ingrediente6',
      type: 'string',
    }),
    defineField({
      name: 'complemento1',
      type: 'string',
    }),
    defineField({
      name: 'complemento2',
      type: 'string',
    }),
  ],
})