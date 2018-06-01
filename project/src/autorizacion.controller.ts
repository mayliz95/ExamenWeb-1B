import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";

@Controller('Autorizacion')
export class AutorizacionController {

    @Post('IniciarSesion')
    iniciarSesion(
        @Body() bodyParams,
        @Req() request,
        @Res() response
    ) {
        //response.cookie('token', 'adrianeguez');
        if (bodyParams.usuario === 'adrianeguez' && bodyParams.password === '12345678910') {

            return response.send({
                mensaje: 'OK'
            })
        }
    }

    @Get('anadirCookie')
    anadirCookie(
        @Res() response,
        @Req() request,
    ) {
        response.cookie('token', 'adrianeguez');
        return response.send();
    }

    @Post('cerrarSesion')
    cerrarSesion(
        @Body() bodyParams,
        @Req() request,
        @Res() response
    ) {
        //response.cookie('token', 'adrianeguez');
        return response.send({
            mensaje: 'Usted salio del sistema'
        })
    }

}