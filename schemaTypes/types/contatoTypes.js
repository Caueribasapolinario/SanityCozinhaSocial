import {defineField, defineType} from 'sanity'

export const contato = defineType({
    name: 'contato',
    title: 'contato',
    type: 'document',
    fields: [
      defineField({
        name: 'email',
        type: 'string',
      }),
      defineField({
        name: 'telefone',
        type: 'string',
      }),
    ],
})