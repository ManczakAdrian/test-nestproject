import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;
  orderData: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  clientId: string;
}