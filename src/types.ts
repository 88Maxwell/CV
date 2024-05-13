export type WithClassName<P = {}> = {
    className?: string;
} & P;

export type WithChildren<P = {}> = {
    children: React.ReactNode;
} & P