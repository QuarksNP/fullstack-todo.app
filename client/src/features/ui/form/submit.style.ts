import { cva } from "class-variance-authority";

export const button = cva(["rounded-sm", "text-white", "p-2", "mt-5"], {
    variants: {
        intent: {
            active: [
                "bg-BrightBlue",
                "hover:bg-LightBlue",
                "transition-colors"
            ],

            disabled: [
                "bg-LightBlue",
                "pointer-events-none"
            ]
        },

        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
        }
    },

    compoundVariants: [
        {
            intent: "active",
            size: "medium"
        }
    ],

    defaultVariants: {
        intent: "active",
        size: "medium",
    }
})