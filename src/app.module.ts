import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersModule } from './modules/users/users.module';
import { ClientModule } from './modules/client/client.module';
import { AdminModule } from './modules/admin/admin.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AdminsModule } from './modules/admins/admins.module';
import { ProductsModule } from './modules/products/products.module';
import { ShoppingCartsModule } from './modules/shopping-carts/shopping-carts.module';
import { CatalogsModule } from './modules/catalogs/catalogs.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderitemsModule } from './modules/orderitems/orderitems.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { ManagesModule } from './modules/manages/manages.module';

@Module({
  imports: [UsersModule, ClientModule, AdminModule, ClientsModule, AdminsModule, ProductsModule, ShoppingCartsModule, CatalogsModule, OrdersModule, OrderitemsModule, OrderItemsModule, ManagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
