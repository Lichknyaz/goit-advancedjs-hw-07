class Key {
  private signature = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: true | false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  public comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
      console.log(`${tenant.getKey().getSignature()}, welcome`);
    } else {
      console.log("Can not enter, door is closed");
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("The door is open");
    } else {
      console.log("The wrong key");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
