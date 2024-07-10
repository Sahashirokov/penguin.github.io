import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IPenguin} from "../models/IPenguin";


export const userAPI = createApi(
    {
        reducerPath:'userAPI',
        baseQuery:fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints:(build)=>
        ({
           fetchAllUsers:build.query<IPenguin[],number>(
               {
                   query:(limit=10)=>
                   ({
                        url:`/users`,
                       params:
                           {
                               _limit:limit,

                           }
                   })
               }
           ),

        })
    }
)
