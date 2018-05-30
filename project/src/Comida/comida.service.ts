import { Injectable} from "@nestjs/common";
import {ComidaClass} from "./comida.class";

@Injectable()
export class ComidaService {

    arregloComidas: ComidaClass[] = [new ComidaClass('Salchi', 'Papas y salchica', 'Ecuador', 2,true)];

    agregarComida(comida: ComidaClass): ComidaClass[] {
        this.arregloComidas.push(comida);
        return this.arregloComidas;
    }

    mostrarTodos(): ComidaClass[] {
        return this.arregloComidas;
    }

    mostrarUnoPorNombre(nombrPlatoABuscar: string): ComidaClass {
        var comidaId: ComidaClass = this.arregloComidas.find(comida => comida.nombrePlato === nombrPlatoABuscar);
        return comidaId;
    }

}