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
  action:any[];
}


@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent implements  OnInit {



  displayedColumns: string[] = ['id', 'email', 'username', 'firstName', 'city','action'];
  dataSource!: MatTableDataSource<UserData>;
  users: any[] = [];




  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
test: any;

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


  popup(user:  any){
    console.log(user.phone);
    this.test =JSON.stringify(user) ;
    console.log(this.test);
    for (var key of Object.keys(this.test)) {
      console.log(key + " -> " + this.test[key])
 }

    console.log("test popup ")
  }
}



