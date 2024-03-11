/**
 * Interface for observable classes
 */
export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
  }
  
/**
 * Interface for observer classes
 */
export interface Observer {
  update(observable: Observable): void;
}

  