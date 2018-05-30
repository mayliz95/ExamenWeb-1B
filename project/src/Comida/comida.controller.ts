import {Controller, Get, Post, Put} from "@nestjs/common";

@Controller('Comida')
export class ComidaController {

    @Get()
    listarTodos() {
        return 'Listar Todos';
    }

    @Post()
    crearComida() {
        return 'crear Comida';
    }

    @Get('/:id')
    obtenerUno() {
        return 'Obtener uno';
    }

    @Put('/:id')
    editarUno() {
        return 'Editar uno';
    }
}