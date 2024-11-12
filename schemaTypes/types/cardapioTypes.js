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
      name: 'order',
      type: 'number',
      title: 'Ordem',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
          { title: '6', value: 6 },
          { title: '7', value: 7 },
        ],
      },
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
