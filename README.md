# Micro Frontend Example

## Dependency
- Node.js
- npm
- Webpack
- Babel
- React

## Setup
- Clone the repository
- Go to the each project folder and follow the steps below to run the app
	1. Run `yarn install` to install dependencies
	2. Run `yarn start` to start the development server
	3. Open `http://localhost:3000` in your browser to view the application
	4. Open `http://localhost:3001` in your browser to view the second application
	5. Open `http://localhost:3002` in your browser to view the third application


## Example App specific Features
- **Home: First App**
+ Displays a basic info about the app
+ Has a header and footer from the same app
+ Exposes `Header` and `Footer` components for other apps

- **Products: Second App**
+ Displays a basic info about the app
+ Utilise the `Heade`r and `Footer` component from the `home` app

- **Portfolio: Third App**
+ Displays a basic info about the app
+ Utilise the Header and Footer component from the `home` app