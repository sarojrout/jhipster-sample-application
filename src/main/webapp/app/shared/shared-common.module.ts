import { NgModule } from '@angular/core';

import { TestmicroserviceSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestmicroserviceSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestmicroserviceSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestmicroserviceSharedCommonModule {}
