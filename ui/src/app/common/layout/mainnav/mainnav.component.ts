import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import gql from 'graphql-tag';
import {Menu, MenuQuery} from "../../../types";
import {ApolloServiceService} from "../../../service/apollo-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-main-nav',
    templateUrl: './mainnav.component.html',
    styleUrls: ['./mainnav.component.css'],
    providers: [
        ApolloServiceService
    ]
})
export class MainNavComponent implements OnInit {
    menu: Observable<Menu>;
    constructor(
        private http: HttpClient,
        private apollo: ApolloServiceService) {}

    ngOnInit() {
        this.apollo.query(gql`
        query {
            menuByName(name: "main") {
              name
              links {
                  label,
                    url {
                        path
                    }
                }
            }
        }`, (data) => console.dir(data));
        this.http.get("http://app.e8rum.local/cms/node/1?_format=json").subscribe(data => {
            console.dir(data);
        });
    }

}
