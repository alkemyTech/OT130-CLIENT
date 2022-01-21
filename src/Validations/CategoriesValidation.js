import * as Yup from 'yup'

export const categorySchema = Yup.object().shape({

    name: Yup.string().min(4).required("You need to provide a name/ min 4 caracter"),
    description: Yup.string().required("You need to provide a description"),
    file: Yup.object().shape({
        name: Yup.string().required("You need to provide a file")
      }).label('File')
  

})

/* min(4). */