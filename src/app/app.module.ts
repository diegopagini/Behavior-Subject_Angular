import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LazyLoadedModule } from './lazy-loaded/lazy-loaded.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, LazyLoadedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
