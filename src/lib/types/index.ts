export interface IKeyboard {
  row: number;
  keys: string[];
};

export interface IBoxes {
  id: number;
  nrows: number;
  ncols: number;
};

export interface IBox {
  id: number;
  row: number;
  col: number;
};
