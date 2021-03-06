# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Prettier Linting
Es necesario instalar [Prettier (VSCode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) para darle formato al codigo.

## Layout Básico
  + ### Setup Progress 🔧 :
     + Descripción: Componente que permite renderizar una barra de progresión, para mostrar un feedback al usuario mientras se esté cargando un recurso utilizando [React-bootstrap]( https://react-bootstrap.netlify.app/components/progress/#progress-bars )
     + 🛠️ Instalación: https://react-bootstrap.netlify.app/getting-started/introduction/ ( $ npm install react-bootstrap bootstrap@5.1.3 ) 
     + #### Implementación (ejemplo): 
 ```js
     import Progress  from '../../Components/Progress/Progress';
     <Progress progressDone={30} />
```

+ ### Setup Alertas :
     + Descripción: Servicio que permite mostrar alertas de confirmación, éxito, error e información, utilizando la librería Sweetalert2 ( https://sweetalert2.github.io/#download )
     + Instalación: https://www.npmjs.com/package/sweetalert2-react ( $ npm install sweetalert2-react ) 
     + #### Implementación (ejemplo): 
 ```js
     import { ErrorAlert } from '../Components/Alert'; // ES6 Modules or TypeScript
     ErrorAlert('Ejemplo de Mensaje de Error') // CommonJS
```
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

```js
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
```
-IMPORTANTE : Este paquete utiliza "emotion". Recuerde agregar el complemento a .babelrc, por ejemplo:

```js
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@emotion"]
}
```

-Ejemplo de uso:

```js
import { Spinner } from "../Components/Spinner/Spinner";

<Spinner />
```
## Skeleton

### Uso

El componente está diseñado para ser utilizado directamente en sus componentes. Por ejemplo:

```Jsx
<div className="card">
    <div className="card-image">
        {item
            ? <img src={item.image} style={{ width: 210, height: 118 }} />
            : <Skeleton width={210} height={118}>
        }
    </div>
    <div className="card-body">
        {item
            ? <p>{item.text}</p>
            : ( 
                <Skeleton variant="text">
                <Skeleton variant="text">
                <Skeleton variant="text">
            )
        }
    </div>
</div>
```

### Variantes

El componente admite 2 variantes de forma.
> **Por defecto será rectangular

```Jsx
<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
```
