import {Controller, Get, Post, Put} from "@nestjs/common";

@Controller('Ingredientes')
export class IngredientesController {

    @Get()
    listarTodos() {
        return 'Listar Todos';
    }

    @Post()
    crearIngredientes() {
        return 'crear ingrediente';
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