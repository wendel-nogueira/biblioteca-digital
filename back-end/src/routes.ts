import { Router } from 'express';


import { AuthenticateEmployeeController } from './controllers/AuthenticateEmployeeController';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ensureManager } from './middlewares/ensureManager';

import { ListAllAssociateController } from './controllers/listAll/ListAllAssociateController';
import { ListAllEmployeeController } from './controllers/listAll/ListAllEmployeeController';
import { ListAllExemplaryController } from './controllers/listAll/ListAllExemplaryController';
import { ListAllLoanController } from './controllers/listAll/ListAllLoanController';
import { ListAllPublicationController } from './controllers/listAll/ListAllPublicationController';
import { ListAllReserveController } from './controllers/listAll/ListAllReserveController';

import { ListAssociateController } from './controllers/list/ListAssociateController';
import { ListEmployeeController } from './controllers/list/ListEmployeeController';
import { ListExemplaryController } from './controllers/list/ListExemplaryController';
import { ListLoanController } from './controllers/list/ListLoanController';
import { ListPublicationController } from './controllers/list/ListPublicationController';
import { ListReserveController } from './controllers/list/ListReserveController';

import { CreateAssociateController } from './controllers/create/CreateAssociateController';
import { CreateEmployeeController } from './controllers/create/CreateEmployeeController';
import { CreateExemplaryController } from './controllers/create/CreateExemplaryController';
import { CreateLoanController } from './controllers/create/CreateLoanController';
import { CreatePublicationController } from './controllers/create/CreatePublicationController';
import { CreateReserveController } from './controllers/create/CreateReserveController';

import { UpdateAssociateController } from './controllers/update/UpdateAssociateController';
import { UpdateEmployeeController } from './controllers/update/UpdateEmployeeController';
import { UpdateExemplaryController } from './controllers/update/UpdateExemplaryController';
import { UpdateLoanController } from './controllers/update/UpdateLoanController';
import { UpdatePublicationController } from './controllers/update/UpdatePublicationController';
import { UpdateReserveController } from './controllers/update/UpdateReserveController';

import { DeleteAssociateController } from './controllers/delete/DeleteAssociateController';
import { DeleteEmployeeController } from './controllers/delete/DeleteEmployeeController';
import { DeleteExemplaryController } from './controllers/delete/DeleteExemplaryController';
import { DeleteLoanController } from './controllers/delete/DeleteLoanController';
import { DeletePublicationController } from './controllers/delete/DeletePublicationController';
import { DeleteReserveController } from './controllers/delete/DeleteReserveController';


const router = Router();


const authenticateEmployeeController = new AuthenticateEmployeeController();

const listAllAssociateController = new ListAllAssociateController();
const listAllEmployeeController = new ListAllEmployeeController();
const listAllExemplaryController = new ListAllExemplaryController();
const listAllLoanController = new ListAllLoanController();
const listAllPublicationController = new ListAllPublicationController();
const listAllReserveController = new ListAllReserveController();

const listAssociateController = new ListAssociateController();
const listEmployeeController = new ListEmployeeController();
const listExemplaryController = new ListExemplaryController();
const listLoanController = new ListLoanController();
const listPublicationController = new ListPublicationController();
const listReserveController = new ListReserveController();

const createAssociateController = new CreateAssociateController();
const createEmployeeController = new CreateEmployeeController();
const createExemplaryController = new CreateExemplaryController();
const createLoanController = new CreateLoanController();
const createPublicationController = new CreatePublicationController();
const createReserveController = new CreateReserveController();

const updateAssociateController = new UpdateAssociateController();
const updateEmployeeController = new UpdateEmployeeController();
const updateExemplaryController = new UpdateExemplaryController();
const updateLoanController = new UpdateLoanController();
const updatePublicationController = new UpdatePublicationController();
const updateReserveController = new UpdateReserveController();

const deleteAssociateController = new DeleteAssociateController();
const deleteEmployeeController = new DeleteEmployeeController();
const deleteExemplaryController = new DeleteExemplaryController();
const deleteLoanController = new DeleteLoanController();
const deletePublicationController = new DeletePublicationController();
const deleteReserveController = new DeleteReserveController();


//  Authenticate
router.post('/autenticar', authenticateEmployeeController.handle);


//  GET
router.get('/associado/:codigo', ensureAuthenticated, listAssociateController.handle);
router.get('/funcionario/:codigo', ensureAuthenticated, listEmployeeController.handle);
router.get('/exemplar/:codigo', ensureAuthenticated, listExemplaryController.handle);
router.get('/emprestimo/:codigo', ensureAuthenticated, listLoanController.handle);
router.get('/publicacao/:codigo', ensureAuthenticated, listPublicationController.handle);
router.get('/reserva/:codigo', ensureAuthenticated, listReserveController.handle);

//  GET All
router.get('/associado', ensureAuthenticated, listAllAssociateController.handle);
router.get('/funcionario', ensureAuthenticated, listAllEmployeeController.handle);
router.get('/exemplar', ensureAuthenticated, listAllExemplaryController.handle);
router.get('/emprestimo', ensureAuthenticated, listAllLoanController.handle);
router.get('/publicacao', ensureAuthenticated, listAllPublicationController.handle);
router.get('/reserva', ensureAuthenticated, listAllReserveController.handle);

//  POST
router.post('/associado', ensureAuthenticated, createAssociateController.handle);
router.post('/funcionario', ensureAuthenticated, ensureManager, createEmployeeController.handle);
router.post('/exemplar', ensureAuthenticated, createExemplaryController.handle);
router.post('/emprestimo', ensureAuthenticated, createLoanController.handle);
router.post('/publicacao', ensureAuthenticated, createPublicationController.handle);
router.post('/reserva', ensureAuthenticated, createReserveController.handle);

//  PATCH
router.patch('/associado/:codigo', ensureAuthenticated, updateAssociateController.handle);
router.patch('/funcionario/:codigo', ensureAuthenticated, updateEmployeeController.handle);
router.patch('/exemplar/:codigo', ensureAuthenticated, updateExemplaryController.handle);
router.patch('/emprestimo/:codigo', ensureAuthenticated, updateLoanController.handle);
router.patch('/publicacao/:codigo', ensureAuthenticated, updatePublicationController.handle);
router.patch('/reserva/:codigo', ensureAuthenticated, updateReserveController.handle);

//  DELETE
router.delete('/associado/:codigo', ensureAuthenticated, deleteAssociateController.handle);
router.delete('/funcionario/:codigo', ensureAuthenticated, deleteEmployeeController.handle);
router.delete('/exemplar/:codigo', ensureAuthenticated, deleteExemplaryController.handle);
router.delete('/emprestimo/:codigo', ensureAuthenticated, deleteLoanController.handle);
router.delete('/publicacao/:codigo', ensureAuthenticated, deletePublicationController.handle);
router.delete('/reserva/:codigo', ensureAuthenticated, deleteReserveController.handle);


export { router };