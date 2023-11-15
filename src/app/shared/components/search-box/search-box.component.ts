import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() public placeholder: string | undefined;
  @Input() public searchTerm: string = '';
  @Output() onValue: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('txtInput') txtInput!: ElementRef<HTMLInputElement>;

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  ngOnInit(): void {
    if (!this.placeholder) {
      this.placeholder = 'Search...';
    }
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300),
      )
      .subscribe((value) => {
        this.onValue.emit(value);
      });
  }

  ngAfterViewInit(): void {
    this.txtInput.nativeElement.value = this.searchTerm;
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  onSearchByControl(term: string): void {
    this.onValue.emit(term);
  }

  onKeyPress(searchTerm: string, event: KeyboardEvent): void {
    // if (event.key === 'Enter') {
      // this.onValue.emit(searchTerm);
    // } else {
      this.debouncer.next(searchTerm);
    // }
  }
}
