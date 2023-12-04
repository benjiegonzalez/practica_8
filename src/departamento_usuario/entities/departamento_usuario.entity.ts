import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class DepartamentoUsuario {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  usuario_id: string;

  @Column()
  @Field(() => String)
  departamento_id: string;

  @Column({ default: true }) // Por defecto, el estado es verdadero
  @Field(() => Boolean)
  estado: boolean;
}
