import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'albums', component:MyAlbumsComponent},
  {path:'profile', component: ProfileComponent},
  {path:'create', component:CreateAlbumComponent},
  {path:'album', component:AlbumDetailsComponent},
  {path:'upload', component:UploadPictureComponent},
  {path:'photo', component:PhotoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
