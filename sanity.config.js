import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {schemaTypes} from './schemaTypes'


const config = defineConfig({
    projectId:'yp7c97qd',
    dataset:'production',
    basePath:"/admin",
    title:'farm',
    plugins:[deskTool()],
    schema:{
        types:schemaTypes},

})

export default config