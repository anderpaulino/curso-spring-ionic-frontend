import { CidadeDTO } from "./cidade.dto";

export interface EnderecoDTO{
  id: string;
  logradouro: string;
  numero: string;
  complemento: string;
  cep: string;
  bairro: string;
  cidade: CidadeDTO;
}
