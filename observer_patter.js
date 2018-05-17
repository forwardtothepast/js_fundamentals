// observer design pattern , in which there is a subject and observer
// subject ----------subscribe, notify, broadcast, unsubscribe---------------> observer
let Observer = function (idStr) {
  return {
    id: idStr,
    notify: function (message) {
      console.log(`message for ${message} with id ${this.id}`);
    }
  };
};

let Subject = function () {

  return {
    observers: [],
    message: [],
    unsubscribe: function (foo) {
      let index = this.observers && this.observers.indexOf(foo);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    },

    subscribe: function (foo) {
      let index = this.observers && this.observers.indexOf(foo);
      if (index < 0) {
        this.observers.push(foo);
      }
      return foo;
    },
    notifyAll: function (message) {
      if (this.observers && this.observers.length > 0) {
        this.observers.forEach(element => {
          element.notify(message);
        });
      }
    },

    notify: function (message, id) {
      this.observers && this.observers.find(element => {
        if (element.id === id) {
          element.notify(message);
        }
      });
    },

    addMessage: function (message, id) {
      this.message && this.message.push({ message: message, id: id });
      id ? this.notify(message, id) : this.notifyAll(message, id);
    }
  };
};
let provider = new Subject();
let observer1 = new Observer('1');
let observer2 = new Observer('2');
provider.subscribe(observer1);
provider.subscribe(observer2);
provider.addMessage('for 1', '1');
provider.addMessage('for 2', '2');
let observer3 = new Observer('3');
let observer4 = new Observer('4');
provider.addMessage('for all', '');
provider.subscribe(observer4);
provider.subscribe(observer3);
provider.unsubscribe(observer1);
provider.addMessage('for all again', '');
provider.unsubscribe(observer4);
provider.addMessage('for all again and again', '');
provider.unsubscribe(observer3);
provider.unsubscribe(observer4);

/**output
message for for 1 with id 1
message for for 2 with id 2
message for for all with id 1
message for for all with id 2
message for for all again with id 2
message for for all again with id 4
message for for all again with id 3
message for for all again and again with id 2
message for for all again and again with id 3
**/