import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
   type: "postgres",
   port: 5432,
   host: "postgres",
   username: "postgres",
   password: '9799310546',
   database: "postgres",
   autoLoadEntities: true,
   synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}

