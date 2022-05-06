const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');
function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    admins.push(key);
  }
}

console.log(getAdmins(usuarios));
