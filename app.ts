interface Dictionary<T> {
  [key: string]: T;
}

export class Stack<T = unknown> {
  private _collection: Dictionary<T> = {};

  constructor(...items: T[]) {
    if (items) {
      items.forEach((value) => this.push(value));
    }

    return;
  }

  public get items() {
    return Object.values(this._collection);
  }

  public push(collectionItem: T) {
    const index = `${Object.keys(this._collection).length}`;
    this._collection[index] = collectionItem;
  }

  public splice(start: number, deleteCount: number, ...newItems: T[]): T[] {
    const startIndex = Math.min(start, this.items.length);
    const removedItems = new Stack<T>();
    const newCollection: Dictionary<T> = {};
    let newIndex = 0;

    for (let i = startIndex; i < startIndex + deleteCount; i++) {
      const item = this._collection[i];

      if (item !== undefined) {
        removedItems.push(item);
        delete this._collection[i];
      }
    }

    if (newItems.length) {
      this.items.forEach((item, index) => {
        if (index < startIndex) {
          newCollection[index] = item;
        } else {
          if (index === startIndex) {
            newIndex = startIndex;

            newItems.forEach((newItem) => {
              newCollection[newIndex] = newItem;
              newIndex++;
            });

            newCollection[newIndex] = item;
            newIndex++;
          } else {
            newCollection[newIndex++] = item;
          }
        }
      });

      this._collection = newCollection;
    }

    return removedItems.items;
  }

  public pop() {
    const index = Object.values(this.items).length - 1;

    if (index > 0) {
      const removedItem = this._collection[index];
      delete this._collection[index];

      return removedItem;
    }

    return null;
  }
}
