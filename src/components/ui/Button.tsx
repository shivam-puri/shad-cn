import { cva } from "class-variance-authority";
import { cn } from "../utility/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
}

export default function Button({ className, variant, ...props }: ButtonProps) {
    return <button {...props} className={cn(buttonVariants({ variant }), className)} />
}

const buttonVariants = cva("px-4 py-2 rounded-lg capitalize transition ease-in duration-100", {
    variants: {
        variant: {
            primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
            secondary: 'border-2 border-slate-400 text-slate-500 hover:bg-slate-400 hover:text-white'
        },
    },
    defaultVariants: {
        variant: 'primary'
    }
})

