import { IsNotEmpty,IsMongoId, IsString, IsBoolean} from "class-validator"

export class CreateDocumentoDto {

    @IsNotEmpty({ message: 'El campo "principal" es requerido' })
    @IsString({ message: 'El campo "persona_id" no es string' })
    principal: string
    @IsNotEmpty({ message: 'El campo "recibido" es requerido' })
    @IsBoolean({ message: 'El campo "recibido" no es un campo booleano' })
    recibido: boolean
    @IsNotEmpty({ message: 'El campo "persona_id" es requerido' })
    @IsMongoId({ message: 'El campo "persona_id" no es una mongo Id' })
    persona_id: string
    @IsNotEmpty({ message: 'El campo "proceso_determinado_id" es requerido' })
    @IsMongoId({ message: 'El campo "proceso_determinado_id" no es una mongo Id' })
    proceso_determinado_id: string
}
