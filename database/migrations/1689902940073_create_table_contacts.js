module.exports = {
    "up": `CREATE TABLE contacts 
            (
                id INT NOT NULL AUTO_INCREMENT, UNIQUE KEY id (id), 
                name VARCHAR (255) NOT NULL, 
                last_name VARCHAR (255) NOT NULL, 
                phone VARCHAR (255) NOT NULL,
                email VARCHAR (255) NOT NULL, 
                created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP, 
                updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`,
    "down": "TRUNCATE TABLE  contacts"
}