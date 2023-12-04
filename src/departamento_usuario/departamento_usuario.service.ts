import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DepartamentoUsuario } from './entities/departamento_usuario.entity';
import { CreateDepartamentoUsuarioInput } from './dto/inputs/create-departamento_usuario.input';

@Injectable()
export class DepartamentoUsuarioService {
  constructor(
    @InjectModel(DepartamentoUsuario.name)
    private readonly departamentoUsuarioModel: Model<DepartamentoUsuario>,
  ) {}

  async create(createDepartamentoUsuarioInput: CreateDepartamentoUsuarioInput): Promise<DepartamentoUsuario> {
    const newDepartamentoUsuario = await this.departamentoUsuarioModel.create(createDepartamentoUsuarioInput);
    return newDepartamentoUsuario.save();
  }

  async findAll(): Promise<DepartamentoUsuario[]> {
    return this.departamentoUsuarioModel.find({ estado: true }).exec();
  }

  async softDelete(id: string): Promise<void> {
    await this.departamentoUsuarioModel.findByIdAndUpdate(id, { estado: false }).exec();
  }
}
