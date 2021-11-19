import {Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {RentalNewsService} from '../../../../services/rental-news.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ngx-rental-news-list',
  templateUrl: './rental-news-list.component.html',
  styleUrls: ['./rental-news-list.component.scss'],
})
export class RentalNewsListComponent implements OnInit {

  settings = {
    actions: {
      custom: [
        {
          name: 'delete',
          title: '<i class="nb-trash text-danger" title="Xoá"></i>'
        },
      ],
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    },
    columns: {
      name: {
        title: 'Tên nhà trọ',
        type: 'string',
      },
      price: {
        title: 'Giá',
        type: 'string',
      },
      quantity: {
        title: 'Số lượng',
        type: 'string',
      },
      type: {
        title: 'Loại hình',
        type: 'string',
      },
      address: {
        title: 'Địa chỉ',
        type: 'string',
      },
    },
  };

  source: LocalDataSource;

  constructor(private rentalNewsService: RentalNewsService,
              private _router: Router,
              private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.retrieveRentalNews();
  }
  retrieveRentalNews(): void {
    this.rentalNewsService.getAll()
      .subscribe(
        data => {
          this.source = new LocalDataSource(data);
        },
        error => {
          console.log(error);
        });
  }

  onCustomAction(event) {
    if(event.action == 'delete'){
      if (window.confirm('Bạn có chắn chắn sẽ xoá không?')) {
        this.rentalNewsService.delete(event.data['id'])
          .subscribe(
            response => {
              this.retrieveRentalNews();
              this.toastrService.success(response.message);
            },
            error => {
              this.toastrService.success(error);
            });
      }
    }
  }
}
