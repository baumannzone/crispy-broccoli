// Define la versión de compilación
pragma solidity ^0.4.15;

// Definición del contrato
contract Users {

  // Creación de la estructura con sus atributos
  struct Participant {
    uint id;
    bytes32 name;
    uint point;
  }

  // Definición de las variables de estado
  Participant[] public users;
  uint userCount;

  // Nuevo usuario
  function addUser(bytes32 userName, uint userPoint) public returns (uint userID, bool success) {
    userID = userCount++;

    Participant memory newUser;
    newUser.id = userID;
    newUser.name = userName;
    newUser.point = userPoint;

    users.push(newUser);
    return (userID, true);
  }

  // Obtener una lista de usuarios
  function getUsers() public view returns (uint[], bytes32[], uint[]) {
    uint length = users.length;

    uint[] memory usersID = new uint[](length);
    bytes32[] memory userNames = new bytes32[](length);
    uint[] memory userPoints = new uint[](length);

    for (uint i = 0; i < users.length; i++) {
      Participant memory showUser;
      showUser = users[i];

      usersID[i] = showUser.id;
      userNames[i] = showUser.name;
      userPoints[i] = showUser.point;
    }
    return (usersID, userNames, userPoints);
  }

  // Cambiamos el total de puntos por usuario
  function plusFive(uint id) public returns (bool success) {
    users[id].point = users[id].point + 5;
    return true;
  }

  // Borrar usuario
  function deleteUser(uint id) public {
    uint length = users.length;
    for (uint i = 0; i < length; i++) {
      if (id == users[i].id) {
        delete users[i];
        break;
      }
    }
  }

  // Borrar puntos
  function resetPoints() public returns (bool success) {
    uint length = users.length;
    for (uint i = 0; i < length; i++) {
      users[i].point = 0;
    }
    return true;
  }

  // Resetear
  function resetGame() public returns (bool success){
    uint length = users.length;
    for (uint i = 0; i < length; i++) {
      delete users[i];
    }
    return true;
  }

}
