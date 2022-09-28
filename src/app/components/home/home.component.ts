import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/classes/training';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  training!: string;
  isConnected!: boolean;
  trainings: string[] = [];
  formations!: Training[] | null;

  constructor(
    private trService: TrainingService,
  ) { }

  ngOnInit(): void {
    this.isConnected = false;
    this.training = `Formation Angular 14`;
    this.formations = [];
    this.trainings = this.trService.getTrainings();
    this.getTrainings();
  }

  getTrainings(): void {
    this.trService.getTrainingsFromApi().subscribe({
      next: response => {
        console.log(response.body);
        this.formations = response.body;
      },
      error: error => {
        console.log(error);
        error.error.detail;
        error.error.message;
      },
      complete: () => {}
    });
  }

  changeTraining(): void {
    this.training = `Spring Boot Training`;
  }

  onLogin(): void {
    this.isConnected = !this.isConnected;
  }

}
