import {Observable, Observer} from '../Interfaces/Interfaces.js'

/**
 * @description Implementacion de la clase Feed de Noticias
 * @interface Observale Define los métodos que debe implementar todo objeto observable
 */
export class Feed implements Observable {
  private observers: Observer[] = [];

  private feed: string[] = [''];

  /**
   * @description Contructor de la clase Feed
   * @param id Identificador del Feed de noticias
   * @param name Nombre de Feed de noticias 
   */
  constructor(private id: number, private name: string) {
    this.id = id;
    this.name = name;
  }

  /**
   * @description Devuelve la coleccion de objetos que observan el Feed
   * @returns Observer[] coleccion de los objetos observables
   */
  getObserver(): Observer[] {
    return this.observers;
  }
  /**
   * @description Getter Id
   * @returns Devuelven el identifcador del Feed de noticias
   */
  getId(): number{
    return this.id;
  }
  /**
   * @description Getter Name
   * @returns Devuelven el nombre del Feed de noticias
   */
  getName(): string {
    return this.name;
  }
  /**
   * @description Getter Feed
   * @returns Devuelven el Feed de noticias
   */
  getFeed(): string[] {
    return this.feed;
  }

  /**
   * @description Define la logica de subscripcion al feed de noticias
   * @param observer Permite subscribir un objeto que está siendo observado
   */
  subscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }
  /**
   * @description Define la logica de desubscripcion al feed de noticias
   * @param observer Permite desubscribir un objeto que está siendo observado
   */
  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }
   /**
   * @description Define la logica de notificaciones del feed de noticias. Notifica a cada subcriptor
   */
  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  /** 
   * @description Actualizada el feed de noticias con la ultima noticias
   */
  feedUpdate(noticia: string): void {
    this.feed.push(noticia);
    this.notify();
  }
}
