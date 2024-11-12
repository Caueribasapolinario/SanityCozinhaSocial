import { defineField, defineType } from 'sanity'

export const restaurantes = defineType({
  name: 'restaurantes',
  title: 'Restaurantes',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
      title: 'Título',
      description: 'Adicione um título',
      validation: Rule => Rule.max(150)
    }),
    defineField({
      name: 'endereco',
      type: 'string',
      title: 'Endereço',
      description: 'Adicione um endereço',
      validation: Rule => Rule.max(250)
    }),
    defineField({
      name: 'imagemPrincipal',
      type: 'image',
      title: 'Imagem',
      options: {
        hotspot: true,
      },
    }),
  ],
})
