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
  action: any[];
}

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss'],
})
export class UserDetailsPageComponent implements OnInit {
  //init table columns
  displayedColumns: string[] = [
    'id',
    'email',
    'username',
    'firstName',
    'city',
    'action',
  ];

  //init table data source
  dataSource!: MatTableDataSource<UserData>;

  //init variables
  users: any[] = [];
  userDetails: any;
  address: any;
  phoneNumber: any;
  name: any;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    //retrieve users from the api
    this.usersService.GetUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  //filter table section

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //popup section
  popup(user: any) {
    console.log(user.phone);
    this.userDetails = JSON.stringify(user.address);
    this.address = JSON.stringify(user.address);
    this.phoneNumber = JSON.stringify(user.phone);
    this.name = JSON.stringify(user.name);

    //use for testings

    //     console.log(this.userDetails);
    //     for (var key of Object.keys(this.userDetails)) {
    //       console.log(key + " -> " + this.userDetails[key])
    //  }

    //     console.log("test popup ")
  }
}
