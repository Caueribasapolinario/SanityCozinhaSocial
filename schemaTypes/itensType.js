// Schema dos itens
import { defineField, defineType } from 'sanity'

export const itensType = defineType({
    name: 'itens',
    title: 'Itens',
    type: 'document',
    fields: [
        defineField({
            name: 'ingrediente',
            type: 'string',
            title: 'Ingrediente',
        }),
        defineField({
            name: 'subtipo',
            title: 'Tipo',
            type: 'string',
            options: {
                list: [
                    { title: 'Principal', value: 'principal' },
                    { title: 'Complemento', value: 'complemento' },
                ],
            },
        }),
    ],
})
