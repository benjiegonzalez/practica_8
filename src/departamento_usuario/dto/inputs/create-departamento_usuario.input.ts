// import { IsMongoId, IsNotEmpty } from 'class-validator';
// export class CreateDepartamentoUsuarioDto {
//   @IsNotEmpty({ message: 'El campo "usuario_id" es requerido' })
//   @IsMongoId({ message: 'El campo "usuario_id" no es una mongo Id' })
//   usuario_id: string;
//   @IsNotEmpty({ message: 'El campo "departamento_id" es requerido' })
//   @IsMongoId({ message: 'El campo "departamento_id" no es una mongo Id' })
//   departamento_id: string;
// }

import { IsNotEmpty, IsMongoId, IsBoolean } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDepartamentoUsuarioInput {

  @IsNotEmpty({ message: 'El campo "usuario_id" es requerido' })
  @IsMongoId({ message: 'El campo "usuario_id" no es una mongo Id' })
  @Field(() => String, { description: 'ID del usuario' })
  usuario_id: string;

  @IsNotEmpty({ message: 'El campo "departamento_id" es requerido' })
  @IsMongoId({ message: 'El campo "departamento_id" no es una mongo Id' })
  @Field(() => String, { description: 'ID del departamento' })
  departamento_id: string;

  @IsNotEmpty({ message: 'El campo "estado" es requerido' })
  @IsBoolean({ message: 'El campo "estado" debe ser un valor booleano válido' })
  @Field(() => Boolean, { description: 'Estado del proceso determinado' })
  estado: boolean;
}
