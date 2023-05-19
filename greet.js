
// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

let helloMessage = { message: 'Hello,' };
let heyThereMessage = { message: 'Hey there,' };

say.call(helloMessage, "John");
say.call(heyThereMessage, "Michael");
