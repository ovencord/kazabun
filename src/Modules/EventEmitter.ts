type Listener = (...args: any[]) => void;

export class EventEmitter {
  private events: Map<string | symbol, Listener[]>;

  constructor() {
    this.events = new Map();
  }

  public on(event: string | symbol, listener: Listener): this {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(listener);
    return this;
  }

  public once(event: string | symbol, listener: Listener): this {
    const onceWrapper = (...args: any[]) => {
      this.off(event, onceWrapper);
      listener.apply(this, args);
    };
    return this.on(event, onceWrapper);
  }

  public off(event: string | symbol, listener: Listener): this {
    const listeners = this.events.get(event);
    if (!listeners) return this;
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    return this;
  }

  public emit(event: string | symbol, ...args: any[]): boolean {
    const listeners = this.events.get(event);
    if (!listeners || listeners.length === 0) return false;
    
    // Copy to avoid issues if listeners are removed during execution
    [...listeners].forEach(listener => listener.apply(this, args));
    return true;
  }

  public removeAllListeners(event?: string | symbol): this {
    if (event) {
      this.events.delete(event);
    } else {
      this.events.clear();
    }
    return this;
  }
}
