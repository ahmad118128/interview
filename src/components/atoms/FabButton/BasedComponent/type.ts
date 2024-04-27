import { FabOwnProps } from "@mui/material";


export interface IBasedFabButton extends FabOwnProps {
onClick ?: (e:any) => void
className : string
}