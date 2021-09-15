import { CellLabelValue, ICellLabelValue } from "./CellLabelValue";
import { CellValue, ICellValue } from "./CellValue";

interface ICommonListProps {
    cells: ICommonListCell[];
}

export type ICommonListCell = ICellLabelValue | ICellValue;

export interface ICellType<T extends CELL_TYPE> {
    type: T;
}

export enum CELL_TYPE {
    CELL_LABEL_VALUE = "CELL_LABEL_VALUE",
    CELL_VALUE = "CELL_VALUE",
}

export function CommonList(props: ICommonListProps) {
    function renderCellType(cell: ICommonListCell) {
        switch (cell.type) {
            case CELL_TYPE.CELL_LABEL_VALUE:
                return <CellLabelValue {...cell} />;
            case CELL_TYPE.CELL_VALUE:
                return <CellValue {...cell} />;
            default:
                return null;
        }
    }
    return <>{props.cells.map((cell) => renderCellType(cell))}</>;
}
