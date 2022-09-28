import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-training',
  templateUrl: './detail-training.component.html',
  styleUrls: ['./detail-training.component.scss']
})
export class DetailTrainingComponent implements OnInit {
  training!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.training = this.activatedRoute.snapshot.params['training'];
  }

}
