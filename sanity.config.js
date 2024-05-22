import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'


const config = defineConfig({
    projectId:'yp7c97qd',
    dataset:'production',
    basePath:"/admin",
    title:'farm',
    plugins:[deskTool()],
    schemas:{types:schemas},

})

export default config