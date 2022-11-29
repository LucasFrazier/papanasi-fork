// We don't want to limit the user to use only our types

export type Dynamic<T> = T | string;
// T is a typescript Generics declaration
// T is going to be a type decalred at run-time instead of compile time
