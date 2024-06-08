## Overview

Farm Web is a farm-to-market food website that connects local farmers with consumers, offering fresh, locally-sourced produce. The platform includes features such as farmer profiles, product listings, and an easy-to-use ordering system.

## Features

-   **Farmer Profiles**: Detailed profiles for each farmer, including their products and farming practices.
-   **Product Listings**: Comprehensive listings of available products with descriptions and prices.
-   **Ordering System**: Easy-to-use interface for placing orders and managing purchases.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Languages**: TypeScript, JavaScript, CSS
-   **Database**: Sanity.io for content management
-   **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   Node.js
-   npm or yarn

### Installation

Clone the repository and install dependencies:

`git clone https://github.com/ItsLasa/app_farm.git
cd app_farm
npm install` 

### Running the Development Server

Start the development server:


`npm run dev` 

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the application for production:


`npm run build
npm start` 

## Project Structure

-   `app/`: Main application code.
-   `public/`: Static assets.
-   `sanity/`: Sanity.io configuration and schemas.
-   `schemaTypes/`: Sanity schema types.
-   `utils/`: Utility functions.
-   `.env`: Environment variables.
-   `next.config.mjs`: Next.js configuration.
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `tsconfig.json`: TypeScript configuration.

## Configuration

Create a `.env` file in the root of your project and add your environment variables:




- NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
- NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset`

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/). Check out the Next.js deployment documentation for more details.

## Learn More

To learn more about Next.js and related technologies, take a look at the following resources:

-   Next.js Documentation - Learn about Next.js features and API.
-   Sanity.io Documentation - Learn about Sanity.io.
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
