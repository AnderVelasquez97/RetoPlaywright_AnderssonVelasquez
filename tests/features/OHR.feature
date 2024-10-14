Feature: Challenge OrangeHRM

	Scenario Outline: Validar inicio de sesión correcto
		Given Me encuentro en la página de login
		When Ingreso las credenciales correctas "<usuario>", "<Contrasena>"
		Then Debo visualizar el nombre de usuario "<Nombre>"

		Examples:
			| usuario | Contrasena | Nombre        |
			| Admin   | admin123   | Souheil Gagui |


	Scenario Outline: Crear nuevo empleado
		Given Me encuentro en la página de login
		And Ingreso las credenciales correctas "<usuario>", "<contrasena>"
		Given Me encuentro en la página de empleados
		When Registro nuevo empleado con "<firstName>", "<middleName>", "<lastName>", "<ID>"
		Then Debo visualizar que se creó el nuevo empleado

		Examples:
			| usuario | contrasena | firstName | middleName | lastName | ID       |
			| Admin   | admin123   | Carlos    | Vega       | Gagui    | 12523453 |
