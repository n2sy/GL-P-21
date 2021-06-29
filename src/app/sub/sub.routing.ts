import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "../detail/detail.component";
import { DetailServerComponent } from "./detail-server/detail-server.component";
import { EditServerComponent } from "./edit-server/edit-server.component";
import { ListServersComponent } from "./list-servers/list-servers.component";


const myroutes : Routes = [
    {path : 'serveur', component : ListServersComponent, children : [
        {path : ':id', component : DetailServerComponent},
        {path : ':id/edit', component : EditServerComponent},
    ] }
]

export const SUB_ROUTING = RouterModule.forChild(myroutes)