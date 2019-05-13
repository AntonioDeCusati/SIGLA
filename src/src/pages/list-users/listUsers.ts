import { Component, OnInit  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../app/api.service';


@Component({
  selector: 'page-listUsers',
  templateUrl: 'listUsers.html'
})
export class ListUsersPage implements OnInit {
  selectedItem: any;
  icons: string[];
  users: Array<{id: number, name: string,surname: string,icon: string,note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private apiService: ApiService) {
    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('user');

  }
  
   ngOnInit() {
	   this.apiService.getAllUsers().subscribe((users: User[])=>{ 
		  this.users = users;
		  this.list_users = [];
		  this.avatar_drive_id=""; 
		  	if (this.users && this.users.length > 0){
				  	for (let i = 0; i < this.users.length ; i++){
						  this.apiService.getAvatarIdDrive(this.users[i].avatar).subscribe((avatar : String)=>{
						      if (avatar.id_drive != null){
						      	this.avatar_drive_id = avatar.id_drive;	
						      	//trovare un modo tale che creo questo array alla ricezione del url
								   this.list_users.push({
									  	id: this.users[i].id_user,
									   	name:  this.users[i].name,
									   	email: this.users[i].email,
									    surname: this.users[i].surname,
										icon: "https://docs.google.com/uc?id=" + this.avatar_drive_id ,
										note: this.users[i].note
									  }); 					      	
						  	  }else {
						  	   console.log("Avatas is not present");
						  	   this.avatar_drive_id = "1WqB1dev7v1v4XPGRLJyr08kKY0UEIeci";
						  	  };
						  	  
						  })
						  
						  
					}; 
			};
		});
	};
  

  itemTapped(event, user) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListUsersPage, {
      user: user
    },null);
  }


	addFilter(){
		console.log("ciao");
		}
		
	modifyUser(userId){
		console.log("Modify user : " + userId);
	}
	
	deleteUser(userId){
		console.log("Delete user : " + userId);
	}
	
	optionUser(userId){
		console.log("Option user : " + userId);
	}
	
	


}
