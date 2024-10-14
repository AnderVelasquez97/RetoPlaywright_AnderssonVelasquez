import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/InicioSesion.page';
import { EmployeePage } from '../pages/NuevoEmpleado.page';
import { chromium, Browser, Page } from 'playwright';

setDefaultTimeout(60 * 1000);

let page: Page;
let loginPage: LoginPage;
let employeePage: EmployeePage;

Given('Me encuentro en la página de login', async function () {
    const browser: Browser = await chromium.launch({ headless: false });
    page = await browser.newPage(); 
    loginPage = new LoginPage(page);
    await loginPage.navigate();
});

When('Ingreso las credenciales correctas {string}, {string}', async function (usuario: string, contrasena: string) {
    await loginPage.enterUsername(usuario);
    await loginPage.enterPassword(contrasena);
    await loginPage.submitLogin();
});

Then('Debo visualizar el nombre de usuario {string}', async function (name: string) {
    const isLoggedIn = await loginPage.isLoggedIn(name);
    expect(isLoggedIn).toBeTruthy();
});

Given('Me encuentro en la página de empleados', async function () {
    employeePage = new EmployeePage(page);
    await employeePage.open();
});

When('Registro nuevo empleado con {string}, {string}, {string}, {string}', 
    async function (firstName: string, middleName: string, lastName: string, ID: string) {
    await employeePage.registerEmployee(firstName, middleName, lastName, ID);
});

Then('Debo visualizar que se creó el nuevo empleado', async function () {
    const isRegistered = await employeePage.verifyEmployeeRegistered();
    expect(isRegistered).toBeTruthy();
});
