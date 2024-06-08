import { defineField, defineType } from "sanity";

export const userType = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title:'Title of food',

    }),
    defineField({
      name: "titleImage",
      type: "image",
      title:'Food Image',
    }),
    defineField({
      name: "price",
      type: "string",
      title:'Price Of Food',
    }),
    defineField({
      name: "description",
      type: "text",
      title:'Food Description',
    }),
  ],
});
