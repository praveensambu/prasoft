import { Component } from '@angular/core';
import { FormHelperService } from 'src/app/components/contact/form-helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends FormHelperService {

}
