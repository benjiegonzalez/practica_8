import { PartialType } from '@nestjs/swagger';
import { CreateDepartamentoUsuarioInput } from './create-departamento_usuario.input';

export class UpdateDepartamentoUsuarioDto extends PartialType(CreateDepartamentoUsuarioInput) {}
