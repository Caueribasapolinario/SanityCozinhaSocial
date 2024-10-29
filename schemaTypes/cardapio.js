// Schema do cardápio
import { defineField, defineType } from 'sanity'

export const cardapio = defineType({
  name: 'cardapio',
  title: 'Cardápio',
  type: 'document',
  fields: [
    defineField({
      name: 'dia',
      type: 'string',
      title: 'Dia',
    }),
    defineField({
      name: 'principais',
      title: 'Pratos principais',
      type: 'array',
      of: [
        { 
          type: 'reference', 
          to: [{ type: 'itens' }],
          options: {
            filter: 'subtipo == $subtipo',
            filterParams: { subtipo: 'principal' },
          },
        }
      ],
    }),
    defineField({
      name: 'complementos',
      title: 'Complementos',
      type: 'array',
      of: [
        { 
          type: 'reference', 
          to: [{ type: 'itens' }],
          options: {
            filter: 'subtipo == $subtipo',
            filterParams: { subtipo: 'complemento' },
          },
        }
      ],
    }),
  ],
})
