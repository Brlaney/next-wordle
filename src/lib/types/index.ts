export interface IKeys {
  pk: number;
  rowNumber: number;
  key: string;
}

export interface IKeyboard {
  rowNumber: number;
  keys: IKeys[];
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
