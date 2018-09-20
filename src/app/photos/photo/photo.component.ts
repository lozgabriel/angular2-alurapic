import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  title = 'alura-pic';

  @Input() description = '';
  @Input() url = '';

  constructor() { }

  ngOnInit() {
  }

}
