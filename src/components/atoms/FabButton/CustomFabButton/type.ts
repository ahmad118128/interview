import { FabOwnProps } from "@mui/material";
import { ReactNode } from "react";


export interface ICustomFab extends FabOwnProps {
    onClick ?: (e:any) => void
    className ?: string 
    icon ?: ReactNode
}