import { Page } from 'playwright';
import { 
    employeeFirstNameInput,
    employeeMiddleNameInput,
    employeeLastNameInput,
    employeeIDInput,
    registerButton
} from '../selectors/NuevoEmpleado.selector';

export class EmployeePage {
    private page: Page;
    private url = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee';

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(this.url);
    }

    async fillEmployeeDetails(firstName: string, middleName: string, lastName: string, ID: string) {
        await this.page.fill(employeeFirstNameInput, firstName);
        await this.page.fill(employeeMiddleNameInput, middleName);
        await this.page.fill(employeeLastNameInput, lastName);
        await this.page.fill(employeeIDInput, ID);
    }

    async registerEmployee(firstName: string, middleName: string, lastName: string, ID: string) {
        await this.fillEmployeeDetails(firstName, middleName, lastName, ID);
        await this.page.click(registerButton);
    }

    async verifyEmployeeRegistered() {
        return await this.page.isVisible('text=Empleado registrado con éxito');
    }
}
