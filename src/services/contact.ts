import axios from 'axios'

export default function(nombre: string, contacto: string, mensaje: string) {
  return axios.get('https://hooks.zapier.com/hooks/catch/2973738/xtsgh4/', {
    params: {
      nombre,
      contacto,
      mensaje
    }
  })
}
