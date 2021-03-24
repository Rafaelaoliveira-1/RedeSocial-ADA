import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{

    public postagem_id: number
    public descricaoPostagem: string
    public dataHora: Date
    public link: string
    public usuario: Usuario
    public tema: Tema
}