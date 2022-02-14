export const transitionsConfig = {
    atLeave: { opacity: 0 },
    atActive: { opacity: 1 },
    atEnter: { opacity: 0 },
    mapStyles: (styles) => {
        return {
          position: handleOpacityUnder100(styles,'absolute'),
          width: handleOpacityUnder100(styles,'100%'),
          height: handleOpacityUnder100(styles,'100%'),
          opacity: styles.opacity,
          overflow: 'hidden'
        }}
}

const handleOpacityUnder100 = (styles, cssValue) =>{
  return (styles.opacity === 1) ? undefined : cssValue
}