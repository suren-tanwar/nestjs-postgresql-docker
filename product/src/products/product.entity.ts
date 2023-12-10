import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  productID: string;

  @Column('text', {nullable: true})
  productName: string;

  @Column({ default: 0 })
  quantity: number;
}
