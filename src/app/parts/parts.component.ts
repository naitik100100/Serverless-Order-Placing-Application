import { Component, OnInit } from '@angular/core';
import { PartsService } from './parts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '@app/jobs/Job';
import { PartsOrder } from './PartsOrder';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '@app/@shared/login.service';

@Component({
  selector: 'app-parts',
  templateUrl: 'parts.component.html',
  styleUrls: ['parts.component.scss'],
})
export class PartsComponent implements OnInit {
  parts: { partId: any; partName: any; qty: number; qoh: number }[] = [];
  jobName = '';
  message = '';
  partsOrder: PartsOrder[] = [];
  orderStatus = SUCCESS;

  constructor(
    private partsService: PartsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {}

  getParts() {
    if (this.jobName == undefined || this.jobName == '') {
      this.message = 'Job name not provided or invalid';
      return;
    }

    this.parts = [];
    this.partsService.getJobs().subscribe(
      (data) => {
        let jobs = data['Items'].filter((job: any) => {
          return this.jobName === job.jobName;
        });
        this.fetchParts(jobs);
        if (jobs.length == 0) {
          this.message = 'No Parts Found for this Job';
        }
      },
      (error) => {
        this.message = error;
      }
    );
  }

  fetchParts(jobs: Job[]) {
    jobs.forEach((job) => {
      this.partsService.getParts().subscribe((data) => {
        data['Items'].forEach((part: any) => {
          if (part.partId == job.partId) {
            this.parts.push({
              partId: part.partId,
              partName: part.partName,
              qoh: part.qoh,
              qty: job.qty,
            });
          }
        });
      });
    });
  }

  makeOrder() {
    if (this.loginService.userId == '') {
      this.router.navigate(['login']);
      return;
    }

    this.checkForUserOrder();
  }

  checkForUserOrder() {
    this.partsService.checkUser(localStorage.getItem('userId'), this.jobName).subscribe(
      (data) => {
        let flag = true;
        if (data['result'].length > 0) {
          data['result'].forEach((result: any) => {
            if (result.result == SUCCESS) {
              console.log('Order Exists');
              this.message = 'Ordre Already Placed';
              this.toastr.error('You have already ordered theses parts', 'Order Exists');
              flag = false;
              return;
            }
          });
        }
        if (flag) this.checkQuantity();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkQuantity() {
    this.parts.forEach((part) => {
      if (this.orderStatus === SUCCESS && part.qty > part.qoh) {
        this.orderStatus = FAILURE;
        this.toastr.error(`Not Enough Quantity for PartID: ${part.partId}`, 'Order Failed');
      }

      this.partsOrder.push({
        partId: part.partId,
        partName: part.partName,
        jobName: this.jobName,
        userId: localStorage.getItem('userId'),
        qty: part.qty,
        qoh: part.qoh,
        result: this.orderStatus,
      });

      if (this.partsOrder.length == this.parts.length) {
        this.placeOrder();
      }
    });
  }

  placeOrder() {
    this.updateOrderData();

    this.partsService.placeOrder(this.partsOrder, this.orderStatus).subscribe(
      (data) => {
        console.log(data);
        if (this.orderStatus == SUCCESS) {
          this.toastr.success('Your order has been placed successfully', 'Ordered Parts');
          this.getParts();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateOrderData() {
    this.partsOrder.forEach((order) => (order.result = this.orderStatus));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.jobName = params['jobName'];

      this.getParts();
    });
  }
}

const SUCCESS = 'success';
const FAILURE = 'failure';
