import { Component, computed, signal, Input, input } from '@angular/core';
import { DUMMY_USERS } from "./../dummy-users"


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({ required: true }) avatar!: string
  // @Input({required:true}) name!: string

  //below is syntax take input variable as Signals
  avatar = input.required<string>();
  name = input.required<string>();

  //always use computed with using signals, as it gets evaluated only when signal changes,make it efficient 
  imagePath = computed(() => "./../assets/users/" + this.avatar())

  onUserClicked() {

  }



}
