CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);

INSERT INTO
    productos (nombre, precio, stock) value ('Teclado', 20, 25),
    ('Ratón', 15, 35),
    ('Monitor 144hz', 250, 40);