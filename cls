[33mcommit a53b8e8cac94d5823e420ad64181bce9361a28dd[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m)[m
Merge: 1e820e6 7d82c80
Author: Kevin Diaz <kevindi0695@gmail.com>
Date:   Tue Feb 15 21:24:59 2022 -0300

    Merge branch 'main' of https://github.com/alkemyTech/OT130-CLIENT

[33mcommit 7d82c80ecafc2021355d2d01ae7e9f0be1059a52[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: Gonzalo Henriquez <gonzalomhenriquez86@gmail.com>
Date:   Tue Feb 15 20:37:51 2022 -0300

    OT130-71 Metodo PUT reutilizable (#44)
    
    * Created put method
    
    * Added export
    
    * Renamed prop
    
    * Added Authorization token
    
    * agregando token de Authorization
    
    * utilizando metodo getHeaders
    
    * cambiando parametro metodo put
    
    * resolviendo conflictos
    
    * resolviendo conflictos

[33mcommit 163f5fea9fb14e622e3045986d070ada2fdf3d34[m
Author: Facundo Colavini <54385792+facundocolavini@users.noreply.github.com>
Date:   Tue Feb 15 20:29:55 2022 -0300

    Ot130 94 setup progress (#68)
    
    * creation of progress bar component
    
    * removing spacing in the component
    
    * Setup progress Readme.md
    
    Making readme for the use and installation of the progress bar component
    
    * fixing indentation problems in Progress.css
    
    * changing the name of the prop of the progress component
    
    * updating the readme with the latest changes
    
    * Fixing problem with indentation and conflicts
    
    * Fixed the name of the ProgressBar props and changed the one from Progress to progressValue

[33mcommit d70ca1629aed82bcb6edb4c3c4a30c91dcaf59d0[m
Author: Franco De Lorenzi <69398103+franco646@users.noreply.github.com>
Date:   Tue Feb 15 20:26:56 2022 -0300

    Ot130 93 setup skeleton (#72)
    
    * Create Skeleton.css
    
    * Crea el componente Skeleton
    
    * Documenta la implementación del componente Skeleton
    
    * Update README.md

[33mcommit c236e8b49bc098b1ee569a7f98430853c6a40559[m
Author: mateolewinzon <60374548+mateolewinzon@users.noreply.github.com>
Date:   Tue Feb 15 20:23:00 2022 -0300

    Added categories endpoint env variable (#58)

[33mcommit 07163e089e3ce3770200bf6f4c8d9ac46a5850da[m
Author: Rodrigo Mendoza <85702199+RodrigoM10@users.noreply.github.com>
Date:   Tue Feb 15 20:06:50 2022 -0300

    Ot130 84 crear variables de entorno (#64)
    
    * sol. de import
    
    * variable de entorno para endpoint de actividades
    
    * creado archivo .env.example
    
    * limpieza de codigo
    
    * resolucion de conflicto en .en.example
    
    * agregado endpoint / contacts al archivo .env.example
    
    * agregado REACT_APP_URL a example

[33mcommit 37a80d89432b7b83de65ab2f4f02739d08283335[m
Author: Facundo Colavini <54385792+facundocolavini@users.noreply.github.com>
Date:   Tue Feb 15 18:04:03 2022 -0300

    moved the env.example to the root folder (#92)

[33mcommit 201ab9a9af9c9e34c1f3d1d1cad5b09a3b167bbb[m
Author: Facundo Colavini <54385792+facundocolavini@users.noreply.github.com>
Date:   Tue Feb 15 17:37:55 2022 -0300

    Ot130 88 crear variables de entorno (#79)
    
    * adding environment variable to contact service
    
    * Creating contact service
    
    * Creating .env.example file
    
    * fixing the space of more in const

[33mcommit 269b972b6b0a9d52d9f1b0871d255af6de6de080[m
Author: Franco De Lorenzi <69398103+franco646@users.noreply.github.com>
Date:   Tue Feb 15 17:35:49 2022 -0300

    Ot130 85 crea variables de entorno para endpoint de novedades (#86)
    
    * Create .env.example
    
    * Update homeService.js
    
    * Update newsService.js

[33mcommit 50f293c7b0a9aa1c47d7724a806aa26f7075f71b[m
Author: Franco De Lorenzi <69398103+franco646@users.noreply.github.com>
Date:   Tue Feb 15 17:32:11 2022 -0300

    OT130-77-Extender-el-servicio-HTTP-base-para-las-peticiones-de-Actividades (#41)
    
    * Create activity service
    
    * Update privateApiService.js
    
    * Update activitiesService.js
    
    * Update activitiesService.js

[33mcommit a34caef7b818e7179ca6b1682ac961baf41b461d[m
Author: Kevin Marko Diaz <69539517+KevinMarkoDiaz@users.noreply.github.com>
Date:   Tue Feb 15 08:35:05 2022 -0300

    Ot130 73 crear método reutilizable que realice petición delete a endpoints privados (#40)
    
    * Peticiones Delete axios
    
    * Formateo de codigo
    
    * Try/catch peticion delete PrivateServices
    
    * formateo de codigo
    
    * conflictos resueltos
    
    * implementacion de getHeaders
    
    * Correccion de headers
    
    * Conflictos resueltos

[33mcommit f893401c166f0b9612e6c0296b839b17ed653574[m
Author: IgnacioVivas <81937779+IgnacioVivas@users.noreply.github.com>
Date:   Tue Feb 15 08:33:09 2022 -0300

    OT130-72 peticion patch reutilizable (#39)
    
    * peticion patch reutilizable
    
    * manejo de errores en peticion patch
    
    * resolviendo conflictos
    
    Co-authored-by: IgnacioVivas <ignacab@live.com>

[33mcommit 430c4fec7e391152bd51f5a9cfcfe0566bbd73fb[m
Author: Franco De Lorenzi <69398103+franco646@users.noreply.github.com>
Date:   Sat Feb 12 17:46:39 2022 -0300

    OT130-70-Crear-método-reutilizable-que-realice-una-petición-POST-a-los-endpoints-privados (#31)
    
    * Add token header
    
    * Update privateApiService.js
    
    * Update privateApiService.js
    
    * Update privateApiService.js
    
    Co-authored-by: franco646 <franco@>

[33mcommit 817badfbe2f1d8f2a800b584e9fb4d76b4846240[m
Author: Facundo Colavini <54385792+facundocolavini@users.noreply.github.com>
Date:   Fri Feb 11 12:53:53 2022 -0300

    Ot130 78 extender el servicio http base para las peticiones de usuarios (#48)
    
    * adding method on privateService to get token on localStorage
    
    * adding method on privateService to get token on localStorage
    
    * adding method on privateService to get token on localStorage
    
    * adding method on privateService to get token on localStorage
    
    * adding method on privateService to get token on localStorage
    
    * implement methods on private service for get token and authorization
    
    * adding the other requests to the usersService
    
    * fixing pr for problems with constant in organization

[33mcommit 1e820e6808dc3c8a38b5c22233eab5efb24c56ad[m[33m ([m[1;31morigin/OT130-117-Integrar-Mercado-Pago-en-screen-Donación[m[33m)[m
Author: Kevin Diaz <kevindi0695@gmail.com>
Date:   Fri Feb 11 11:07:05 2022 -0300

    agregue boton de pago mercadopago

[33mcommit fb6cbdd2af5de2ce1e10ab930246ef4f64d4d5c6[m
Author: mateolewinzon <60374548+mateolewinzon@users.noreply.github.com>
Date:   Thu Feb 10 18:24:54 2022 -0300

    OT130-83 Extender servicio HTTP para peticiones Home  (#38)
    
    * Centralized home services on single file. Changed imports in all home components
    
    * reverting index.html change
    
    * Added get methods for home: news,testimonials,slides. Removed old slides function.

[33mcommit eef99487c140c44c766aa9d8b55c48f5f2585099[m
Author: mateolewinzon <60374548+mateolewinzon@users.noreply.github.com>
Date:   Thu Feb 10 18:18:03 2022 -0300

    OT130-74 Método GET reutilizable rutas públicas API (#30)
    
    * added Get method for publicApiService
    
    * formatted code
    
    * PR fix
    
    * fix
    
    * Using existing instance on Get

[33mcommit 1f4017c381e52d5dc0d3410b66f44563ff933e7f[m
Author: Carlos Jonatan Bordón <68975079+YonaBordon@users.noreply.github.com>
Date:   Thu Feb 10 17:54:27 2022 -0300

    Ot130 68 crear metodo petición get a los endpoints privados de la api (#75)
    
    * get and token
    
    * method params
    
    * getAutorization
    
    * add header in getAuthorization
    
    * change getAuthorization + add getHeaders
    
    * change methods

[33mcommit cd6cbe7c9391bc634ca829556900276e26aa68df[m[33m ([m[1;31morigin/OT130-118-Integrar-widgets-de-redes-sociales[m[33m)[m
Author: Rodrigo Mendoza <85702199+RodrigoM10@users.noreply.github.com>
Date:   Wed Feb 9 18:54:55 2022 -0300

    Ot130 75 método reutilizable peticíon POST endpoints públicos de a