import { ListAllAssociateService } from './services/ListAllAssociateService';
import { AssociateStatus } from './interfaces/enums/AssociateStatus';


const listAllAssociateService = new ListAllAssociateService();

listAllAssociateService.execute().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
