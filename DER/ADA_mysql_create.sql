CREATE TABLE `Postagem` (
	`postagem_id` bigint NOT NULL AUTO_INCREMENT,
	`usuario` bigint NOT NULL,
	`tema` bigint NOT NULL,
	`descricaoPostagem` varchar(2000) NOT NULL,
	`dataHora` DATETIME(8) NOT NULL,
	PRIMARY KEY (`postagem_id`)
);

CREATE TABLE `Usuário` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nomeCompleto` varchar(5 - 900) NOT NULL,
	`cargo` varchar(50) NOT NULL,
	`usuario` varchar(255) NOT NULL,
	`senha` varchar(5 - 100) NOT NULL,
	`link` varchar(2000) NOT NULL,
	`foto` varchar NOT NULL,
	`tipo` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Tema` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`descricaoTema` varchar(50) NOT NULL,
	`tipoTema` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk0` FOREIGN KEY (`usuario`) REFERENCES `Usuário`(`id`);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk1` FOREIGN KEY (`tema`) REFERENCES `Tema`(`id`);

