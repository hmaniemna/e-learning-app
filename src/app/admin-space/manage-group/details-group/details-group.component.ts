import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/classes/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-details-group',
  templateUrl: './details-group.component.html',
  styleUrls: ['./details-group.component.scss']
})
export class DetailsGroupComponent implements OnInit {

  id!:number;
  group!:Group;

  constructor(private route:ActivatedRoute,
    private groupService:GroupService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.group=new Group();
    this.groupService.getGroupById(this.id).subscribe(data =>{
      this.group=data;
    })
  }

}
