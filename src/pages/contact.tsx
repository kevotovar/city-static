import React, { PureComponent } from 'react'
import contact from 'src/services/contact'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface State {
  nombre: string
  contacto: string
  mensaje: string
}

class ContactPage extends PureComponent<{}, State> {
  state = {
    nombre: '',
    contacto: '',
    mensaje: '',
  }

  inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name: string = event.currentTarget.name
    const value: string = event.currentTarget.value
    this.setState({
      [name]: value,
    } as Pick<State, keyof State>)
  }

  submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const { nombre, contacto, mensaje } = this.state
    event.preventDefault()
    return contact(nombre, contacto, mensaje).then(console.log)
  }

  render() {
    const { nombre, contacto, mensaje } = this.state

    return (
      <Layout>
        <SEO
          title="Contacto"
          keywords={['Contactanos']}
        />
        <form className="mx-auto md:w-1/2" onSubmit={this.submitForm}>
          <p className="leading-loose mb-8">
            Si tienes una casa para vender no dudes en contactarnos.
          </p>

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="nombre"
          >
            Nombre Completo
          </label>

          <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={this.inputHandler}
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="contacto"
          >
            Celular o email
          </label>

          <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="contacto"
            name="contacto"
            type="text"
            value={contacto}
            onChange={this.inputHandler}
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="mensaje"
          >
            Mensaje
          </label>

          <textarea
            className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            placeholder="Escribe si tienes una casa a venta o tienes alguna duda con nuestro servicio"
            rows={8}
            name="mensaje"
            value={mensaje}
            onChange={this.inputHandler}
          />

          <button className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white">
            Enviar
          </button>
        </form>
      </Layout>
    )
  }
}

export default ContactPage
