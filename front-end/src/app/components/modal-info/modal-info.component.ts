import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {

  modalTitle: string = '';
  modalMessage: string = '';
  btnConfirmText: string = 'ok';

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
