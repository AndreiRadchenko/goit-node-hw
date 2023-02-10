const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      try {
        const contacts = await listContacts();
        console.table(contacts);
      } catch (error) {
        console.error('\x1B[31m Error occurs while contacts list was obtained!');
      }
      break;

    case 'get':
      try {
        const contact = await getContactById(id);
        console.log(contact);
      } catch (error) {
        console.error('\x1B[31m Error while getting contact!');
      }
      break;

    case 'add':
      try {
        const newContacts = await addContact(name, email, phone);
        console.log(`Contact "${name}" has been added to list`);
      } catch (error) {
        console.error('\x1B[31m Error while adding contact!');
      }
      break;

    case 'remove':
      try {
        const contacts = await removeContact(id);
        console.log(`Contact with id: ${id} has been removed`);
      } catch (error) {
        console.error('\x1B[31m Error while deleting contact!');
      }
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
