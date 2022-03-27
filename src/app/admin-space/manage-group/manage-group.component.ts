import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/classes/group';
import { GroupService } from 'src/app/services/group.service';
import { Level,Student } from 'src/app/classes/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.scss']
})
export class ManageGroupComponent implements OnInit {

groups!:Group[];
levell=Level;

  constructor(private router: Router,
   private groupeService:GroupService,
   private route:ActivatedRoute) 
   { this.getGroups();}

  ngOnInit(): void {
  }

  //show the list of groups
  getGroups(){
  return this.groupeService.getGroupList().subscribe(data =>{
    this.groups=data;
  });
  }

  //show one group 
  groupDetails(idG:number){
    this.router.navigate(["details-group",idG]);
  }

  //a btn when clicked takes to the space where is the form
  updateGroup(id: number){
    this.router.navigate(["update-group",id]);
   }

  //delete group
  deleteGroup(id: number){
    this.groupeService.deleteGroup(id).subscribe(data =>{
     console.log(data);
     this.getGroups();
    });
  }


}


