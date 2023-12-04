import { Module } from '@nestjs/common';
import { DepartamentoUsuarioService } from './departamento_usuario.service';
import { DepartamentoUsuarioResolver } from './departamento_usuario.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartamentoUsuario } from './entities/departamento_usuario.entity';
import { DepartamentoUsuarioSchema } from './schema/departamento_usuario.schema';

@Module({
  providers: [DepartamentoUsuarioResolver, DepartamentoUsuarioService],
  imports: [
    MongooseModule.forFeature([
      {
        name: DepartamentoUsuario.name,
        schema: DepartamentoUsuarioSchema,
      }
    ])
  ],
})
export class DepartamentoUsuarioModule {}
