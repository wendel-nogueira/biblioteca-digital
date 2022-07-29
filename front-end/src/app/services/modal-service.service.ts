import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalInfoComponent } from '../components/modal-info/modal-info.component';
import { ModalConfirmComponent } from '../components/modal-confirm/modal-confirm.component';


@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private modalService: NgbModal) { }

  public modalConfirm(title: string, message: string): Promise<boolean> {
    const modalRef = this.modalService.open(ModalConfirmComponent);

    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.modalMessage = message;

    return modalRef.result;
  }

  public modalInfo(title: string, message: string): Promise<void> {
    const modalRef = this.modalService.open(ModalInfoComponent);

    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.modalMessage = message;

    return modalRef.result;
  }
}
