import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit {
  @Input() public placeholder: string | undefined;
  @Output() onValue: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.placeholder) {
      this.placeholder = 'Search...';
    }
  }

  onSearchByControl(term: string): void {
    this.onValue.emit(term);
  }
}
