import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';
import { Job } from './Job';

@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.component.html',
  styleUrls: ['jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  constructor(private jobsService: JobsService) {}

  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  jobName = '';
  message = '';

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.jobsService.getJobs().subscribe(
      (data) => {
        this.jobs = this.getUniqueJobs(data['Items']);
        this.filteredJobs = this.jobs;
      },
      (error) => {
        this.message = error;
        console.log(error);
      }
    );
  }

  searchJob() {
    this.filteredJobs = [];
    this.jobs.forEach((job) => {
      if (this.jobName == job.jobName) {
        this.filteredJobs.push(job);
      }
    });
  }

  clearSearch() {
    this.jobName = '';
    this.getJobs();
  }

  getUniqueJobs(jobs: Job[]): Job[] {
    let j: Job[] = [];

    jobs.forEach((job) => {
      if (j.find((newJob) => newJob.jobName === job.jobName) == undefined) {
        j.push(job);
      }
    });

    return j;
  }
}
