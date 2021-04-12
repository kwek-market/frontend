=====

Instructions for components folder

Last Edited: 12th April 2021
Edited By: Kadet

=====

### Details

This folder contains components that are specific to single pages. They should be imported in designated pages alone. There should be a folder for each page and all componenents for that page should be put in there. 

In order to simplify exports, all components should be imported into the index.ts file and exported as part of a single object

### Structure

📂 components
    --home
      --component
        --Component.tsx
        --Component.module.scss
    --about
      --component
        --Component.tsx
        --Component.module.scss
    --index.ts
