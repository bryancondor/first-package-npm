# first-package-npm
Es pequeño modulo de prueba que continue funciones para operaciones matemáticas básicas

### 1.0.8
- fix funcion sumar y se agregar repositorio github

### 1.0.7
- Se traspila directo con typescript, sin pasar por webpack
- se agrega la propiedad `types` en el package.json : `types": "dist/index.d.ts"`

### 1.0.5
- Pasamos todos a un archivo, para que se genere la referencias en index.d.ts

### 1.0.4
- Se habilita en la configuracion de typescript `compilerOptions.declaration = true`

**Instalación**
```
npm install first-package-npm --save
```