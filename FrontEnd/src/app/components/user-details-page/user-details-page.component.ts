import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';

export interface UserData {
  id: string;
  email: string;
  username: string;
  firstName: string;
  city: string;
}


@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent implements  OnInit {



  displayedColumns: string[] = ['id', 'email', 'username', 'firstName', 'city'];
  dataSource!: MatTableDataSource<UserData>;
  users: any[] = [];




  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private usersService: UsersService) {

  }


  ngOnInit() {
    this.usersService.GetUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);

      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }

    );
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



