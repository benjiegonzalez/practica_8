import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { DepartamentoUsuarioService } from './departamento_usuario.service';
import { DepartamentoUsuario } from './entities/departamento_usuario.entity';
import { CreateDepartamentoUsuarioInput } from './dto/inputs/create-departamento_usuario.input';

@Resolver(() => DepartamentoUsuario)
export class DepartamentoUsuarioResolver {
  constructor(private readonly departamentoUsuarioService: DepartamentoUsuarioService) {}

  @Mutation(() => DepartamentoUsuario)
  async createDepartamentoUsuario(
    @Args('createDepartamentoUsuarioInput') createDepartamentoUsuarioInput: CreateDepartamentoUsuarioInput,
  ): Promise<DepartamentoUsuario> {
    return this.departamentoUsuarioService.create(createDepartamentoUsuarioInput);
  }

  @Query(() => [DepartamentoUsuario], { name: 'departamentosUsuarios' })
  async findAllDepartamentosUsuarios(): Promise<DepartamentoUsuario[]> {
    return this.departamentoUsuarioService.findAll();
  }

  @Mutation(() => Boolean)
  async softDeleteDepartamentoUsuario(@Args('id') id: string): Promise<boolean> {
    await this.departamentoUsuarioService.softDelete(id);
    return true;
  }
}
