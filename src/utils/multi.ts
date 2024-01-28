export type Multi = {
    multi?: boolean
}

export const m = (isMulti = false, text = '') => `${text ?? ''}${isMulti ? 's' : ''}`;