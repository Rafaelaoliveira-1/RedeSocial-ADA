import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricaoTema: string
    public tipoTema: string
    public postagem: Postagem[]
}