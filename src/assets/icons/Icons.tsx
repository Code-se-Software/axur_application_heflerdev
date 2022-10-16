import React from "react";
import {Icon} from "@iconify/react";

interface Icon {
    width?: number | string
    height?: number | string
    color?: string
}

export const UnicornIcon = ({width, height, color}: Icon) => (
    <Icon icon={"game-icons:unicorn"}
          color={color} width={width}
          height={height}/>
)

export const MagnifyingGlass = ({width, height, color}: Icon) => (
    <Icon icon={"emojione-monotone:magnifying-glass-tilted-left"} color={color} width={width} height={height}/>
)

export const CheckIcon = ({width, height, color}: Icon) => (
    <Icon icon="akar-icons:circle-check-fill" color={color} width={width} height={height}/>
)

export const ErrorIcon = ({width, height, color}: Icon) => (
    <Icon icon="akar-icons:circle-x-fill" color={color} width={width} height={height}/>
)

export const TrashIcon = ({width, height, color}: Icon) => (
    <Icon icon="fa6-regular:trash-can" color={color} width={width} height={height}/>
)

export const SavedIcon = ({width, height, color}: Icon) => (
    <Icon icon="ic:baseline-save-alt" width={width} height={height} color={color}/>
)

export const NullIcon = ({width, height, color}: Icon) => (
    <Icon icon="fluent:border-none-20-regular" width={width} height={height} color={color}/>
)

export const RefreshIcon = ({width, height, color}: Icon) => (
    <Icon icon={"bx:refresh"} width={width} height={height}/>
)