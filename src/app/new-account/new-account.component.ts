import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountsService], // AccountsService is inherited from parent
  // providers: [LoggingService], // Declare in app.module.ts
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  // It informs angular that we will need an instance of this loggingSevice
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.accounts.push({
      name: accountName,
      status: accountStatus,
    });
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
