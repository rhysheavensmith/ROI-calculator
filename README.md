## Getting Started

### Download the Project

Clone the repository to your local machine using the following command:

```sh
git clone <repository-url>
```

Navigate to the project directory:

```sh
cd roi-calc
```

### Install Dependencies

Install the required dependencies using npm or yarn:

```sh
npm install
# or
yarn install
```

### Run the Development Server

Start the development server with the following command:

```sh
npm run dev
# or
yarn dev
```

### Build the Project

To create a production build, run the following command:

```sh
npm run build
# or
yarn build
```

### Using the Dist Files

After running the build, move the `dist` folder into the root of the project you want to embed the application in. You will then need to embed the css in the head of your html file, and the script file at the bottom just before the closing body tag.

Put a div in the html file where you want to embed the application using the id of 'calculator-app'.

<img src="../roi-calc/src/assets/Screenshot 2025-01-15 at 6.48.29 AM.png" alt="Logo" width="250"  height="auto">

In the css file you will need to change the font family src to include the path to `dist` in your project

<img src="../roi-calc/src/assets/Screenshot 2025-01-15 at 6.48.29 AM.png" alt="Logo" width="350" height="auto">
