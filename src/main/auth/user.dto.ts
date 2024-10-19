import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class UserDto {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  username: string;

  @Expose()
  @IsString()
  global_name: string;

  @Expose()
  @IsString()
  avatar: string;

  @Expose()
  @IsString()
  locale: string;

  @Expose()
  @IsString()
  email: string;
}
