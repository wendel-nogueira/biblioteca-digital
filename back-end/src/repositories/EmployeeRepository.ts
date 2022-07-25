import { sequelize } from '../database';
import { Employee } from '../models/Employee';


class EmployeeRepository {
    private employee: Employee;
    
    constructor() {
        this.employee = new Employee(sequelize);
    }

    public async getAll(): Promise<Array<any>> {
        return this.employee.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getById(id: number): Promise<any> {
        return this.employee.init().findByPk(id, {
            raw: true
        }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async getByEmail(email: string): Promise<any> {
        return this.employee.init().findOne({
            where: {
                Email: email
            },
            raw: true
        }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(employee: any): Promise<any> {
        return this.employee.init().create(employee).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, employee: any): Promise<any> {
        return this.employee.init().findByPk(id).then(data => {
            return data.update(employee);
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number): Promise<any> {
        return this.employee.init().findByPk(id).then(data => {
            return data.destroy();
        }).catch(error => {
            return error;
        });
    }
}


export { EmployeeRepository };