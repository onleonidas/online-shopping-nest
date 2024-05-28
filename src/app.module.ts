import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AdminsModule } from './modules/admins/admins.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ShoppingCartsModule } from './modules/shopping-carts/shopping-carts.module';
import { AdressesModule } from './modules/adresses/adresses.module';
import { ProductsModule } from './modules/products/products.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { CartItemsModule } from './modules/cart-items/cart-items.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { AuthGuard } from './auth/auth.guard';
import { PrismaModule } from './database/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, ClientsModule, ShoppingCartsModule, AdminsModule, JwtModule, PrismaModule, AuthModule, OrdersModule, ShoppingCartsModule, AdressesModule, ProductsModule, OrderItemsModule, CartItemsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }, AuthGuard,
  ],
})
export class AppModule {}
