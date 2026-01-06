import { Component, inject, ViewChild } from '@angular/core';
import { RuleInfoComponent } from '../rule-info/rule-info.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Rule } from './interface/rule.interface';
import { MatCardModule } from '@angular/material/card';
import { DateTimePipe } from '../../pipes/date-time.pipe';
import { ActionsComponent } from '../actions/actions.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { AddNewRuleComponent } from '../add-new-rule/add-new-rule.component';

@Component({
  selector: 'app-rule-group',
  standalone: true,
  imports: [
    RuleInfoComponent,
    CommonModule,
    ActionsComponent,
    DateTimePipe,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    PaginationComponent,
  ],
  templateUrl: './rule-group.component.html',
  styleUrl: './rule-group.component.scss',
})
export class RuleGroupComponent {
  totalItems = 0;
  rule: Rule[] = [
    {
      serial: 1,
      name: 'Validation Rules',
      status: 'Active',
      version: '1.2',
      lastUpdated: '2025-10-22T05:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 2,
      name: 'Security Rules',
      status: 'Inactive',
      version: '1.0',
      lastUpdated: '2025-09-10T08:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 3,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Student',
    },
    {
      serial: 4,
      name: 'Validation Rules',
      status: 'Active',
      version: '1.2',
      lastUpdated: '2025-10-22T05:00:00',
      updatedBy: 'Student',
    },
    {
      serial: 5,
      name: 'Security Rules',
      status: 'Inactive',
      version: '1.0',
      lastUpdated: '2025-09-10T08:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 6,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Student',
    },
    {
      serial: 7,
      name: 'Validation Rules',
      status: 'Active',
      version: '1.2',
      lastUpdated: '2025-10-22T05:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 8,
      name: 'Security Rules',
      status: 'Inactive',
      version: '1.0',
      lastUpdated: '2025-09-10T08:00:00',
      updatedBy: 'Student',
    },
    {
      serial: 9,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 10,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 11,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 12,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 13,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 14,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 15,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 16,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 17,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 18,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 19,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 20,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 21,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 22,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 23,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 24,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
    {
      serial: 25,
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
      updatedBy: 'Admin',
    },
  ];

  displayedColumns: string[] = [
    'serial',
    'name',
    'status',
    'version',
    'lastUpdated',
    'updatedBy',
    'actions',
  ];
  dataSource = new MatTableDataSource<Rule>(this.rule);
  private _liveAnnouncer = inject(LiveAnnouncer);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  visibleItems: any[] = [];
  pageSize = 10;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.totalItems = this.rule.length;
    console.log(this.totalItems);
    this.updateVisibleItems(1);
    // make an API call for getting the rule space result
    // pass to html and loop
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openAddRuleDialog() {
    const dialogRef = this.dialog.open(AddNewRuleComponent, {
      width: '480px',
      data: {}, // You can pass initial data to the dialog here
    });

    // Subscribe to the event when the dialog is closed
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      // Handle the result (e.g., if the user clicked 'Add')
      if (result && result.action === 'add') {
        this.createRule();
        console.log('The dialog was closed', result);
      }
    });
  }

  createRule(group?: any) {
    this.router.navigate(['/new-rule', group]);
    console.log('navigating to specific rule group');
  }

  onPageChanged(page: number) {
    this.updateVisibleItems(page);
  }

  updateVisibleItems(page: number) {
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.visibleItems = this.rule.slice(start, end);
  }
}
