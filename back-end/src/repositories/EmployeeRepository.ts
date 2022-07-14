import { sequelize } from '../database';
import { Employee } from '../models/Employee';


class EmployeeRepository {
    private employee: Employee;
    
    constructor() {
        this.employee = new Employee(sequelize);
    }

    public async getAll() {
        return this.employee.init().findAll().then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async get(query: any) {
        return this.employee.init().findOne(
            { where: query }
        ).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(employee: any) {
        return this.employee.init().create(employee).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, employee: any) {
        return this.employee.init().update(employee, { where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async delete(id: number) {
        return this.employee.init().destroy({ where: { id: id } }).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }
}


export { EmployeeRepository };