import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountsService], // AccountsService is inherited from parent
  providers: [LoggingService],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}
  onSetTo(status: string) {
    this.accountsService.accounts[this.id].status = status;
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
