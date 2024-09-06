import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from './schemaTypes';
import dotenv from 'dotenv';

dotenv.config();

const config = defineConfig({
    projectId: 'yp7c97qd',
    dataset: 'production',
    basePath: "/admin",
    title: 'farm',
    plugins: [deskTool()],
    schema: {
        types: schemaTypes
    },
    api: {
        token: process.env.SANITY_API_TOKEN,
    },
});

export default config;
