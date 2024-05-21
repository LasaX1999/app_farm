import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";


const config = defineConfig({
    projectId:'yp7c97qd',
    dataset:'production',
    basePath:"/admin",
    title:'farm',
    plugins:[deskTool()],
    schemas:{},

})

export default config