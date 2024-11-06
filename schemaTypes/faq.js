import {defineField, defineType} from 'sanity'

export const faq = defineType({
    name: 'faq',
    title: 'faq',
    type: 'document',
    fields: [
        defineField({
            name: 'Titulo',
            type: 'string',
        }),
        defineField({
            name: 'comentario',
            type: 'string',
        }),
        defineField({
            name: 'Titulo2',
            type: 'string',
        }),
        defineField({
            name: 'comentario2',
            type: 'string',
        }),
        defineField({
            name: 'Titulo3',
            type: 'string',
        }),
        defineField({
            name: 'comentario3',
            type: 'string',
        }),
        defineField({
            name: 'Titulo4',
            type: 'string',
        }),
        defineField({
            name: 'comentario4',
            type: 'string',
        }),
        defineField({
            name: 'Titulo5',
            type: 'string',
        }),
        defineField({
            name: 'comentario5',
            type: 'string',
        }),
    ],
  })