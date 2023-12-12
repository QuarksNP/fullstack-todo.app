import { cva } from "class-variance-authority";

export const button = cva(["rounded-sm", "text-white", "p-2", "mt-5", "bg-BrightBlue"], {
    variants: {
        intent: {
            active: [
                "opacity-100",
                "hover:bg-LightBlue",
                "transition-colors"
            ],

            disabled: [
                "opacity-50",
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