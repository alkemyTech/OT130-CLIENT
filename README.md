# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Prettier Linting
Es necesario instalar [Prettier (VSCode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) para darle formato al codigo.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Spinner

Para el Loader spinner se utilizo la libreria "react-spinners" su implementacion es sencilla y esta bien documentada,
para utilizar el componente Spinner se importa como un funcional component regular.

[Documentacion de la libreria en npm](https://www.npmjs.com/package/react-spinners)

#### Ejemplo de implementacion:

~~~
import  DotLoader  from  "react-spinners/DotLoader" ;
import { css } from "@emotion/react";

const color = "red";
const  override  =  css ` 
    display : block; 
    margen : 0 automático; 
    color del borde : rojo; 
` ;

export const Spinner = () => {
  return (
    <>
      <div className='spinner-container'>
        <DotLoader
          color={color}
          size={150}
          css = { override }
        />
      </div>
    </>
  )
};
~~~

-IMPORTANTE : Este paquete utiliza "emotion". Recuerde agregar el complemento a .babelrc, por ejemplo:

~~~
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@emotion"]
}
~~~

-Ejemplo de uso:

~~~
import { Spinner } from "../Components/Spinner/Spinner";

<Spinner />
~~~