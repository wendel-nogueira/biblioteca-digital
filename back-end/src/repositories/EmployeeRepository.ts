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

    public async getById(id: number) {
        return this.employee.init().findByPk(id).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async create(associate: any) {
        return this.employee.init().create(associate).then(data => {
            return data;
        }).catch(error => {
            return error;
        });
    }

    public async update(id: number, associate: any) {
        return this.employee.init().update(associate, { where: { id: id } }).then(data => {
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