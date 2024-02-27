import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOrderDTO {
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
