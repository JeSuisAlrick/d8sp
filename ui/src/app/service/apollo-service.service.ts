import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {} from "apollo-client";
import ApolloClient from "apollo-client/ApolloClient";
import {InMemoryCache} from 'apollo-cache-inmemory';
import {Apollo} from "apollo-angular";
import {HttpLink} from "apollo-angular-link-http";

@Injectable()
export class ApolloServiceService {
    private client: ApolloClient<InMemoryCache>;

    constructor(
        private apollo: Apollo,
        private httpLink: HttpLink) {
        this.apollo.create({
            link: this.httpLink.create({ uri: 'http://app.e8rum.local/cms/graphql' }),
            cache: new InMemoryCache()
        });
    }
    
    public query(query: any, successHandler: any, errorHandler?: any): void {
        this.apollo.query({query: query}).subscribe(successHandler, errorHandler);
    }

}
