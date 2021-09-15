import { CELL_TYPE, ICellType } from "./CommonList";
import "./list.style.css";

interface ICellLabelValueProps {
    label: string;
    value: string;
}

export interface ICellLabelValue
    extends ICellType<CELL_TYPE.CELL_LABEL_VALUE>,
        ICellLabelValueProps {}

export function CellLabelValue(props: ICellLabelValueProps) {
    return (
        <div className="CellLabelValue-container">
            <h3>{props.label}</h3>
            <p>{props.value}</p>
        </div>
    );
}
