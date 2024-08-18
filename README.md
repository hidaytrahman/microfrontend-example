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

## Support

Thanks to `create-mf-app` and article [A Deep Dive into Micro Frontend Architecture with React.js](https://medium.com/@isuruariyarathna2k00/a-deep-dive-into-micro-frontend-architecture-with-react-js-264ca6edca6b) by [isuruariyarathna2k00](https://medium.com/@isuruariyarathna2k00)

Used the below commands to create mfe apps
```
pnpx create-mf-app
```
