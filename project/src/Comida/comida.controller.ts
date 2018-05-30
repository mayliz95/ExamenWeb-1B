import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {ComidaService} from "./comida.service";
import {ComidaClass} from "./comida.class";

@Controller('Comida')
export class ComidaController {

    constructor(private _comidaService: ComidaService) {}

    @Get()
    listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const comidas = this._comidaService.mostrarTodos();
        return response.send(comidas);
    }

    @Post()
    crearComida(
        @Body() bodyParams
    ) {
        const comida = new ComidaClass(bodyParams.nombrePlato, bodyParams.descripcionPlato, bodyParams.nacionalidad, bodyParams.numeroPersonas, bodyParams.picante);

        return this._comidaService.agregarComida(comida);
    }

    /*@Get('/:id') //uso nombrePlato en lugar de id
    obtenerUnoo(
        @Param() paramParams
    ) {
        return this._comidaService.mostrarUnoPorNombre(paramParams.nombrePlatoABuscar);
    }*/

    @Get('/:nombrePlatoABuscar') //uso nombrePlato en lugar de id
    obtenerUno(
        @Param() paramParams
    ) {
        return this._comidaService.mostrarUnoPorNombre(paramParams.nombrePlatoABuscar);
    }

    @Put('/:id')
    editarUno() {
        return 'Editar uno';
    }
}