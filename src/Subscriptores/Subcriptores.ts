import {Observable, Observer} from '../Interfaces/Interfaces.js'
import {Feed} from '../Noticias/Noticias.js'

/**
 * @class Subscriptor Representael objeto que se va a subscribir al feed de noticias
 * @interface Observer implementa la interfaz de noticias que debe implemetar el objeto feed
 */
export class Subscriptor implements Observer {
    /**
     * @description Define el constructor del programa
     * @param id Identificador del subscriptor
     * @param name Nombre del subscriptor
     */
    constructor(private id: number, private name: string) {
        this.id = id;
        this.name = name;
    }
    /**
     * @description Getter Id
     * @returns Devuelven el identifcador del Subscriptor
     */
    getId(): number {
      return this.id;
    }
    getName(): string {
      return this.name;
    }
    /**
     * @description Recibe una instancia del objeto que está siendo observador y devuelve
     * @returns Devuelven el identifcador del Subscriptor
     */
    update(observable: Observable): void{
      if (observable instanceof Feed){
        console.table(observable.getFeed());
      }
    }
    
}