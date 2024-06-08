import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title:'Food Name',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title:'Post data',
      type: 'datetime',
    }),
    defineField({
      name: 'price',
      title:'Food Price',
      type: 'number',
    }),
    
    defineField({
      name: 'image',
      title:'FoodImage',
      type: 'image',
    }),
   
    

  ],
})