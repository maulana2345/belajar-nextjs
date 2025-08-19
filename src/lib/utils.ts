export const cn = (...args: Array<string | undefined | false>) =>
    args.filter(Boolean).join(' ');

export const uid = () => Math.random().toString(36).slice(2, 10);