import { cva } from "class-variance-authority";

export const button = cva(["rounded", "outline-none", "p-2"], {
    variants: {
        intent: {
            default: [
                "bg-BrightBlue",
                "hover:bg-LightBlue",
                "transition-colors"
            ],

            error: [
                "bg-LightBlue"
            ]
        },

        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
        }
    },

    compoundVariants: [
        {
            intent: "default",
            size: "medium"
        }
    ],

    defaultVariants: {
        intent: "default",
        size: "medium",
    }
})