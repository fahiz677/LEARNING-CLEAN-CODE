//? Function arguments (2 or fewer ideally)

//! Bad :

function createMenu(title: string, body: string, buttonText: string, cancellable: boolean) {
    // ...
  }
  
  createMenu('Foo', 'Bar', 'Baz', true);

//* Good :

type MenuOptions = { title: string, body: string, buttonText: string, cancellable: boolean};

function createMenu(options: MenuOptions) {
    //...
}

createMenu({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  });

//?  Functions should do one thing

//! Bad :

function emailActiveClients(clients: Client[]) {
    clients.forEach((client) => {
      const clientRecord = database.lookup(client);
      if (clientRecord.isActive()) {
        email(client);
      }
    });
  }

  
//* Good :

function emailActiveClients(clients: Client[]) {
    clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client: Client){
    const clientRecord = database.loopup(client);
    return clientRecord.isActive();
}