import {Body, Controller, Post} from "@nestjs/common";

@Controller('Autorizacion')
export class AutorizacionController {

    @Post('IniciarSesion')
    iniciarSesion(
        @Body() bodyParams
    ) {
        const usuario = bodyParams.usuario;
        const password = bodyParams.password;
    }
}