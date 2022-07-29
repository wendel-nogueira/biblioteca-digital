import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  modalTitle: string = '';
  modalMessage: string = '';
  btnConfirmText: string = 'ok';
  btnCancelText: string = 'cancelar';

  constructor(private modal: NgbActiveModal) { }

  ngOnInit() {
  }

  public decline() {
    this.modal.close(false);
  }

  public accept() {
    this.modal.close(true);
  }

  public dismiss() {
    this.modal.dismiss();
  }
}
