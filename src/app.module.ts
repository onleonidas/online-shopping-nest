import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AdminsModule } from './modules/admins/admins.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ShoppingCartsModule } from './modules/shopping-carts/shopping-carts.module';
import { AdressesModule } from './modules/adresses/adresses.module';
import { CatalogsModule } from './modules/catalogs/catalogs.module';
import { ManagersModule } from './modules/managers/manages.module';
import { ProductsModule } from './modules/products/products.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';

@Module({
  imports: [UsersModule, ClientsModule, AdminsModule, OrdersModule, ShoppingCartsModule, AdressesModule, CatalogsModule, ManagersModule, ProductsModule, OrderItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
