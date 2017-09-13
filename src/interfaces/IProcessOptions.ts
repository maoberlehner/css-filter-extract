import { ICustomFilter } from './ICustomFilter';

export interface IProcessOptions {
  css: string;
  filters: string|string[];
  customFilters: ICustomFilter[];
  postcssSyntax?: any;
}
