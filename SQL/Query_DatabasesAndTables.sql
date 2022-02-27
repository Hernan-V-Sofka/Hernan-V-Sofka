CREATE DATABASE MarvelGames;

USE MarvelGames;

--Eliminar la tabla y ejecutar nuevamente el query
CREATE TABLE UsersGame(
    IdUser INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NameUser VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    PassUser VARCHAR(120) NOT NULL,
    TypeUser VARCHAR(4) NOT NULL
);

CREATE TABLE CardImg(
    IdImg INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ImgCard LONGBLOB NOT NULL
);

CREATE TABLE CharactersCart(
    IdCharacterCard INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    CharacerText TEXT NOT NULL,
    XP INT NOT NULL
);

CREATE TABLE Carts(
    IdCartd INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    IdImg INT NOT NULL,
    IdCharacterCard INT NOT NULL,
    FOREIGN KEY(IdImg) REFERENCES CardImg(IdImg),
    FOREIGN KEY(IdCharacterCard) REFERENCES CharactersCart(IdCharacterCard)
);

CREATE TABLE HisTab(
    IdPart INT NOT NULL primary key AUTO_INCREMENT,
    Punts FLOAT
    FOREIGN KEY (IdUser)
);





