export interface IEvento {
  id: number;
  titolo: string;
  descrizione: string;
  data_inizio: string;
  data_fine: string;
  importo: number;
  max_iscritti: number;
  immagine: string;
  attivo: number;
  gratuito: number;
  min_iscritti: number;
}
