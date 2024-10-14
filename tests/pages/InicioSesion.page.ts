import { Page } from '@playwright/test';
import { usernameInput, passwordInput, loginButton } from '../selectors/InicioSesion.selector';

export class LoginPage {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async navigate() {
		await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	}

	async enterUsername(username: string) {
		await this.page.fill(usernameInput, username);
	}

	async enterPassword(password: string) {
		await this.page.fill(passwordInput, password);
	}

	async submitLogin() {
		await this.page.click(loginButton);
	}

	isLoggedIn(value: string) {
		return this.page.getByText(value);
	}
}
