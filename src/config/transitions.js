export const transitionsConfig = {
    atLeave: { opacity: 0 },
    atActive: { opacity: 1 },
    atEnter: { opacity: 0 },
    mapStyles: (styles) => {
        return {
          position: (styles.opacity === 1) ? undefined: 'absolute',
          width: (styles.opacity === 1) ? undefined : '100%',
          height: (styles.opacity === 1) ? undefined : '100%',
          opacity: styles.opacity,
          overflow: 'hidden'
        }}
}