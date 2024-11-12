import { defineField, defineType } from 'sanity'

export const paginas = defineType({
  name: 'paginas',
  title: 'Páginas',
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
      name: 'subtitulo',
      type: 'string',
      title: 'Subtítulo',
      description: 'Adicione um subtítulo curto',
      validation: Rule => Rule.max(150)
    }),
    defineField({
      name: 'imagemPrincipal',
      type: 'image',
      title: 'Imagem Principal',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'descricao',
      type: 'text',
      title: 'Descrição',
      description: 'Adicione uma descrição',
      validation: Rule => Rule.max(10000)
    }),
    defineField({
      name: 'imagemSecundaria',
      type: 'image',
      title: 'Imagem Secundária',
      options: {
        hotspot: true,
      },
    }),
  ],
})
