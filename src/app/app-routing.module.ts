import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RecentAlbumComponent } from './recent-album/recent-album.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';


import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'albums/recent', component:RecentAlbumComponent},
  {path:'login', component:LoginComponent},
  {path:'albums/me', component:MyAlbumsComponent},
  {path:'profile/:profileId', component: ProfileComponent},
  {path:'create', component:CreateAlbumComponent},
  {path:'album/:albumId', component:AlbumDetailsComponent},
  {path:'upload/:albumId', component:UploadPictureComponent},
  {path:'photo/:photoId', component:PhotoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    ],

  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
