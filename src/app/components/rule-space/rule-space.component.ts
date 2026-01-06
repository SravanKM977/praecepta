import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleGroup } from './interfaces/rule-space.interface';
import { ActionsComponent } from '../actions/actions.component';
import { DateTimePipe } from '../../pipes/date-time.pipe';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-rule-space',
  standalone: true,
  imports: [
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
  templateUrl: './rule-space.component.html',
  styleUrl: './rule-space.component.scss',
})
export class RuleSpaceComponent {
  totalItems = 0;
  ruleGroup: RuleGroup[] = [
    {
      name: 'Validation Rules',
      status: 'Active',
      version: '1.2',
      lastUpdated: '2025-10-22T05:00:00',
    },
    {
      name: 'Security Rules',
      status: 'Inactive',
      version: '1.0',
      lastUpdated: '2025-09-10T08:00:00',
    },
    {
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
    },
    {
      name: 'Validation Rules',
      status: 'Active',
      version: '1.2',
      lastUpdated: '2025-10-22T05:00:00',
    },
    {
      name: 'Security Rules',
      status: 'Inactive',
      version: '1.0',
      lastUpdated: '2025-09-10T08:00:00',
    },
    {
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
    },
    {
      name: 'Validation Rules',
      status: 'Active',
      version: '1.2',
      lastUpdated: '2025-10-22T05:00:00',
    },
    {
      name: 'Security Rules',
      status: 'Inactive',
      version: '1.0',
      lastUpdated: '2025-09-10T08:00:00',
    },
    {
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
    },
    {
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
    },
    {
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
    },
    {
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
    },
    {
      name: 'Compliance Rules',
      status: 'Active',
      version: '2.3',
      lastUpdated: '2025-10-24T13:00:00',
    },
  ];

  displayedColumns: string[] = [
    'name',
    'status',
    'version',
    'lastUpdated',
    'actions',
  ];

  dataSource = new MatTableDataSource<RuleGroup>(this.ruleGroup);
  private _liveAnnouncer = inject(LiveAnnouncer);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {}

  ngOnInit() {
    this.totalItems = this.ruleGroup.length;
    console.log(this.totalItems);
    // make an API call for getting the rule space result
    // pass to html and loop
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  goToRule(group: any) {
    this.router.navigate(['/rule-group', group]);
    console.log('navigating to specific rule group');
  }
}
