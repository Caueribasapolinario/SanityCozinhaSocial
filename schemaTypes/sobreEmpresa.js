import {defineField, defineType} from 'sanity'

export const sobreEmpresa = defineType({
  name: 'sobreEmpresa',
  title: 'sobreEmpresa',
  type: 'document',
  fields: [
    defineField({
      name: 'Descricao',
      type: 'string',
    }),
    defineField({
        name: 'FraseFinal',
        type: 'string',
      }),
  ],
})