import React from "react";
import {Icon} from "@iconify/react";

interface Icon {
    size?: number
    color?: string
}

export const UnicornIcon = ({size, color}: Icon) => (
    <Icon icon={"game-icons:unicorn"}
          color={color} width={size}
          height={size}/>
)

export const MagnifyingGlass = ({size, color}: Icon) => (
    <Icon icon={"emojione-monotone:magnifying-glass-tilted-left"} color={color} width={size} height={size}/>
)

export const CheckIcon = ({size, color}: Icon) => (
    <Icon icon="akar-icons:circle-check-fill" color={color} width={size} height={size}/>
)

export const ErrorIcon = ({size, color}: Icon) => (
    <Icon icon="akar-icons:circle-x-fill" color={color} width={size} height={size}/>
)
