import { CELL_TYPE, ICellType } from "./CommonList";
import "./list.style.css";

interface ICellValueProps {
    value: string;
}
export interface ICellValue
    extends ICellType<CELL_TYPE.CELL_VALUE>,
        ICellValueProps {}
export function CellValue(props: ICellValueProps) {
    return (
        <div>
            <p>{props.value}</p>
        </div>
    );
}
