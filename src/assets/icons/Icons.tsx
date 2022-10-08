import React from "react";
import {Icon} from "@iconify/react";

export const UnicornIcon = ({size, color}: { size?: number, color?: string }) => (
    <Icon icon={"game-icons:unicorn"}
          color={color} width={size}
          height={size}/>
)

export const MagnifyingGlass = ({size, color}: { size?: number, color?: string }) => (
    <Icon icon={"emojione-monotone:magnifying-glass-tilted-left"} color={color} width={size} height={size}/>
)