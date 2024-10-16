import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-buildable-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buildable-lib.component.html',
  styleUrl: './buildable-lib.component.css',
})
export class BuildableLibComponent {}
