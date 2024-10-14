# Instrucción de Uso
Este documento esta guiado a personas que quieran ejecutar este proyecto del Challenge

## Casos de Uso Realizados

#### Scenario Outline: Validar inicio de sesión correcto
Given Me encuentro en la página de login
When Ingreso las credenciales correctas "<usuario>", "<contrasena>"
Then Debo visualizar el nombre de usuario "<Nombre>"
Examples:
| usuario | contrasena | Nombre        |
|---------|------------|---------------|
| Admin   | admin123   | Souheil Gagui |

#### Scenario Outline: Crear nuevo empleado
Given Me encuentro en la página de login
And Ingreso las credenciales correctas "<usuario>", "<contrasena>"
Given Me encuentro en la página de empleados
When Registro nuevo empleado con "<firstName>", "<middleName>", "<lastName>", "<ID>"
Then Debo visualizar que se creó el nuevo empleado
Examples:
| usuario | contrasena | firstName | middleName | lastName | ID       |
|---------|------------|-----------|------------|----------|----------|
| Admin   | admin123   | Juan      | Vega       | Gagui    | 12252345 |


## Guia de Instalación
A partir de esta sección se vera temas tecnicos

### Playwright Instalación

### Playwrigth y Cucumber

### PlayWright Excepciones con Cucumber

Cuando se ejecuta con cucumber el archivo playwright.config.ts no es posible que tome las configuraciones.
