"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var user_service_1 = require("./pages/User/user/user.service");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var i18n_1 = require("ng-zorro-antd/i18n");
var i18n_2 = require("ng-zorro-antd/i18n");
var common_1 = require("@angular/common");
var hu_1 = require("@angular/common/locales/hu");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var icons_provider_module_1 = require("./icons-provider.module");
var layout_1 = require("ng-zorro-antd/layout");
var menu_1 = require("ng-zorro-antd/menu");
var user_component_1 = require("./pages/User/user/user.component");
var movie_component_1 = require("./pages/Movie/movie/movie.component");
var seat_component_1 = require("./pages/Seats/seat/seat.component");
var showtimes_component_1 = require("./pages/ShowTimes/showtimes/showtimes.component");
var cinema_component_1 = require("./pages/Cinemas/cinema/cinema.component");
var booking_component_1 = require("./pages/Booking/booking/booking.component");
var icon_1 = require("ng-zorro-antd/icon");
var table_1 = require("ng-zorro-antd/table");
var divider_1 = require("ng-zorro-antd/divider");
common_1.registerLocaleData(hu_1["default"]);
var icons_1 = require("@ant-design/icons-angular/icons");
var registration_component_1 = require("./pages/Registration/registration/registration.component");
var icons = [icons_1.LogoutOutline];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                movie_component_1.MovieComponent,
                seat_component_1.SeatComponent,
                showtimes_component_1.ShowtimesComponent,
                cinema_component_1.CinemaComponent,
                booking_component_1.BookingComponent,
                registration_component_1.RegistrationComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                icons_provider_module_1.IconsProviderModule,
                layout_1.NzLayoutModule,
                menu_1.NzMenuModule,
                table_1.NzTableModule,
                divider_1.NzDividerModule,
                icon_1.NzIconModule.forRoot(icons),
            ],
            providers: [{ provide: i18n_1.NZ_I18N, useValue: i18n_2.hu_HU }, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
